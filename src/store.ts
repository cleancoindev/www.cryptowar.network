import { createStore } from "vuex";
import { abi as tokenDistributionAbi } from "./contracts/TokenDistribution.json";

// const tokenDistributionJson = () => import("./contracts/TokenDistribution.json");
// const tokenDistributionAbi = tokenDistributionJson['abi'];
import Web3 from "web3";
import transformResponseToRound from "./utils/transformResponseToRound";
import transformResponseToOrder from "./utils/transformResponseToOrder";
import { getWeb3Client } from "./libs/web3";
import { IState, Round } from "./types";
import { getUnixTime } from "date-fns";

const defaultCallOptions = (state: IState) => ({ from: state.defaultAccount });
const web3 = new Web3(Web3.givenProvider);
export const store = createStore<IState>({
  state: {
    tokenDistributionContract: null!,
    currentRound: null!,
    defaultAccount: null,
    selectedRound: 12,
    rounds: [],
    page: 1,
    walletClient: {},
    activeRounds: [],
    finishedRounds: [],
  },
  getters: {
    currentRound(state: IState) {
      return state.currentRound;
    },
  },

  mutations: {
    updateCurrentRound(state: IState, payload) {
      // state.currentRound = payload.currentRound;
      const rounds: Round[] = payload.rounds;
      const activeRounds = rounds.filter((round) => {
        const maxVolume = Number(round.maxVolume);
        const totalDeposit = Number(round.totalDeposit);
        const { endAt } = round;
        const now = getUnixTime(new Date());
        return totalDeposit < maxVolume && now > endAt;
      });

      if (activeRounds.length > 0) {
        state.currentRound = activeRounds[0];
        state.activeRounds = activeRounds;
      }

      const finishedRounds = rounds.filter((round) => {
        const maxVolume = Number(round.maxVolume);
        const totalDeposit = Number(round.totalDeposit);
        const { endAt } = round;
        const now = getUnixTime(new Date());
        return totalDeposit >= maxVolume && now > endAt;
      });
      state.finishedRounds = finishedRounds;
    },
    updateContract(state: IState, payload) {
      state.tokenDistributionContract = payload.contract;
    },
    updateAccount(state: IState, payload) {
      state.defaultAccount = payload.account;
    },
    updateRounds(state: IState, payload) {
      state.rounds = payload.rounds;
    },
    updatePage(state: IState, payload) {
      state.page = payload.page;
    },
    updateWalletClient(state: IState, payload) {
      state.walletClient = payload.walletClient;
    },
  },
  actions: {
    async fetchCurrentRound({ state, commit }) {
      const currentRound = await state.tokenDistributionContract.methods
        .currentRound()
        .call(defaultCallOptions(state));
      commit("updateCurrentRound", {
        currentRound,
      });
    },
    async initialize({ commit, dispatch }) {
      const walletClient = await getWeb3Client();
      commit("updateWalletClient", { walletClient });
      const contract = new web3.eth.Contract(
        tokenDistributionAbi as any[],
        process.env.VUE_APP_CONTRACT_ADDRESS
      );
      commit("updateContract", { contract });
      dispatch("pollAccountsAndNetwork");
      dispatch("fetchRounds");
    },
    async depositBnbToRound(
      { state, dispatch },
      payload: { type: string; round: number; amount: number }
    ) {
      if (!state.defaultAccount || !payload.round) {
        return;
      }

      const contractAddress = state.tokenDistributionContract.options.address;
      const randHex = web3.utils.randomHex(
        Number(process.env.VUE_APP_RANDOM_LENGTH)
      );
      // @ts-ignore
      const msg = `${randHex}${process.env.VUE_APP_SECRET}`;
      const hash = await state.tokenDistributionContract.methods
        .getMessageHash(contractAddress, msg)
        .call(defaultCallOptions(state));

      // @ts-ignore
      const signature = await web3.eth.personal.sign(
        hash,
        state.defaultAccount
      );
      const { round, amount } = payload;
      await state.tokenDistributionContract.methods
        .deposit(round, signature, randHex, msg)
        .send({
          from: state.defaultAccount,
          value: web3.utils.toWei(
            web3.utils.toBN((amount * 10 ** 9).toFixed(0)),
            "nano"
          ),
        })
        .on("transactionHash", (hash) => {
          // @ts-ignore
          this.$app.config.globalProperties.$swal.fire({
            icon: "success",
            title: `You've deposited ${amount} BNB`,
            html: `<a href="${process.env.VUE_APP_EXPLORER_URL}tx/${hash}" target="_blank" style="color: #6f42c1">Transaction</a>`,
          });
        });
      dispatch("fetchRounds");
    },
    async withdrawRound(
      { state, dispatch },
      payload: { type: string; round: number }
    ) {
      if (!state.defaultAccount || !payload.round) {
        return;
      }

      const { round } = payload;
      await state.tokenDistributionContract.methods
        .withdraw(round)
        .send(defaultCallOptions(state))
        .on("transactionHash", (hash) => {
          // @ts-ignore
          this.$app.config.globalProperties.$swal.fire({
            icon: "success",
            title: `You've claimed xBlade successfully`,
            html: `<a href="${process.env.VUE_APP_EXPLORER_URL}tx/${hash}" target="_blank" style="color: #6f42c1">Transaction</a>`,
          });
        });
      dispatch("fetchRounds");
    },
    async pollAccountsAndNetwork({ state, dispatch, commit }) {
      const accounts = await state.walletClient.web3Client.eth.getAccounts();
      if (accounts.length > 0) {
        commit("updateAccount", { account: accounts[0] });
      }
    },
    async fetchRounds(
      { state, commit },
      payload: { type: string; page?: number }
    ) {
      const contract = state.tokenDistributionContract;
      const roundPerPage = 20;
      const page = payload?.page ? payload.page : state.page;
      const cursor = page - 1 === 0 ? 1 : (page + 1) * roundPerPage;
      const rounds: any[] = await contract.methods
        .getRounds(roundPerPage, cursor)
        .call(defaultCallOptions(state));
      const transformedRound = await Promise.all(
        rounds.map(
          (r) =>
            new Promise(async (resolve) => {
              const id = r.round;
              const maxVol = await contract.methods
                .maxVolumeInRound(id)
                .call(defaultCallOptions(state));

              let canClaim = false;
              if (state.defaultAccount) {
                canClaim = await contract.methods
                  .canWithdraw(id, state.defaultAccount)
                  .call(defaultCallOptions(state));
              }
              const orders: any[] = await contract.methods
                .getOrderByRound(id, 1, 50)
                .call(defaultCallOptions(state));

              const maxDeposit: string = await contract.methods
                .getMaxDepositByRound(id)
                .call(defaultCallOptions(state));

              const claimAt: number = await contract.methods
                .withdrawTimeLeft(id)
                .call(defaultCallOptions(state));
              let orderDetail: any = {};
              if (state.defaultAccount) {
                orderDetail = await contract.methods
                  .getOrderDetail(id, state.defaultAccount)
                  .call(defaultCallOptions(state));
              }
              const amountTokenSale: string = await contract.methods
                .AMOUNT_TOKEN_SALE_PER_ROUND()
                .call(defaultCallOptions(state));

              const price: string = await contract.methods
                .initialPriceInRound(id)
                .call(defaultCallOptions(state));

              const minDeposit: string = await contract.methods
                .MIN_BUY()
                .call(defaultCallOptions(state));

              const endAt: string = await contract.methods
                .endRoundTime(id)
                .call(defaultCallOptions(state));

              resolve({
                ...transformResponseToRound(r),
                maxVolume: web3.utils.fromWei(maxVol),
                canClaim,
                orders: orders.map(transformResponseToOrder),
                maxDeposit: web3.utils.fromWei(maxDeposit),
                claimAt: Number(claimAt) * 1000,
                yourDeposit: web3.utils.fromWei(orderDetail[2]),
                amountTokenSale: web3.utils.fromWei(amountTokenSale),
                price: Number(web3.utils.fromWei(price)).toFixed(6),
                minDeposit: web3.utils.fromWei(minDeposit),
                endAt: Number(endAt),
                claimed: orderDetail[3],
              });
            })
        )
      );
      console.log(transformedRound);
      commit("updateRounds", { rounds: transformedRound });
      commit("updateCurrentRound", { rounds: transformedRound });
    },
    async updatePageAndFetch(
      { commit },
      payload: { type: string; page: number }
    ) {
      commit("updatePage", { page: payload.page });
      this.dispatch("fetchRounds", { page: payload.page });
    },
    async connect() {
      // await Web3.currentProvider.enable();
      // const accounts = await web3.eth.getAccounts();
      // if (state.defaultAccount !== accounts[0]) {
      //   commit("updateAccount", { account: accounts[0] });
      // }
    },
    async disconnect() {
      // await Web3.currentProvider.disconnect();
    },
  },
});

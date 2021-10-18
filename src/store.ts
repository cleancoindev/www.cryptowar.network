import { createStore } from "vuex";
import { abi as tokenDistributionAbi } from "./contracts/TokenDistribution.json";

// const tokenDistributionJson = () => import("./contracts/TokenDistribution.json");
// const tokenDistributionAbi = tokenDistributionJson['abi'];
import Web3 from "web3";
import { getWeb3Client } from "./libs/web3";
import { IState, Round } from "./types";
import { fromUnixTime, getUnixTime, isBefore } from "date-fns";
import fetchRoundDetail from "./utils/fetchRoundDetail";
import closestIndexTo from "date-fns/closestIndexTo/index";

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
    web3: null!,
    saleStartTime: 0,
  },
  getters: {
    currentRound(state: IState) {
      return state.currentRound;
    },
  },

  mutations: {
    updateCurrentRound(state: IState, payload) {
      state.currentRound = payload.round;
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
    updateActiveRounds(state: IState, payload) {
      state.activeRounds = payload.rounds;
    },
    updateFinishedRounds(state: IState, payload) {
      state.finishedRounds = payload.rounds;
    },
    updatePage(state: IState, payload) {
      state.page = payload.page;
    },
    updateWalletClient(state: IState, payload) {
      state.walletClient = payload.walletClient;
    },
    updateWeb3(state: IState) {
      state.web3 = web3;
    },
    updateSaleStartTime(state: IState, payload) {
      console.log(payload.saleStartTime);
      state.saleStartTime = payload.saleStartTime;
    },
  },
  actions: {
    async initialize({ commit, dispatch }) {
      const walletClient = await getWeb3Client();
      commit("updateWalletClient", { walletClient });
      const contract = new web3.eth.Contract(
        tokenDistributionAbi as any[],
        process.env.VUE_APP_CONTRACT_ADDRESS
      );
      commit("updateContract", { contract });
      commit("updateWeb3");
      dispatch("pollAccountsAndNetwork");
      dispatch("fetchSaleStartTime");
      dispatch("fetchCurrentRound");
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
      const currentRound = state.currentRound;
      const contract = state.tokenDistributionContract;
      const roundPerPage = 20;
      const page = payload?.page ? payload.page : state.page;

      const activeCursor =
        (page === 1 ? 1 : (page - 1) * roundPerPage) + currentRound.round;
      const activeRounds: any[] = await contract.methods
        .getRounds(roundPerPage, activeCursor)
        .call(defaultCallOptions(state));
      const transformedActiveRound = await Promise.all(
        activeRounds.map((r) =>
          fetchRoundDetail({ r, defaultCallOptions, contract, state, web3 })
        )
      );

      commit("updateActiveRounds", {
        rounds: transformedActiveRound.filter((r) => r.round <= 96),
      });

      const rounds: any[] = await contract.methods
        .getRounds(currentRound.round > 1 ? currentRound.round - 1 : 0, 1)
        .call(defaultCallOptions(state));
      const transformedRound = await Promise.all(
        rounds.map((r) =>
          fetchRoundDetail({ r, defaultCallOptions, contract, state, web3 })
        )
      );
      // console.log(transformedRound);
      commit("updateFinishedRounds", { rounds: transformedRound });
    },
    async fetchCurrentRound(
      { state, commit, dispatch },
      payload: { type: string; cursor?: number }
    ) {
      const contract = state.tokenDistributionContract;
      const saleStartTime = fromUnixTime(
        await contract.methods.saleStartTime().call(defaultCallOptions(state))
      );
      if (isBefore(new Date(), saleStartTime)) {
        return;
      }

      const roundPerPage = 5;
      const cursor = payload?.cursor || 1;
      const rounds: any[] = await contract.methods
        .getRounds(roundPerPage, cursor)
        .call(defaultCallOptions(state));
      const transformedRound = await Promise.all(
        rounds.map((r) =>
          fetchRoundDetail({ r, defaultCallOptions, contract, state, web3 })
        )
      );

      const activeRounds = transformedRound.filter((round) => {
        const maxVolume = Number(round.maxVolume);
        const totalDeposit = Number(round.totalDeposit);
        const { endAt } = round;
        const now = getUnixTime(new Date());
        return totalDeposit < maxVolume;
      });
      console.log(activeRounds)
      if (activeRounds?.length === 0 && cursor < 96) {
        dispatch("fetchCurrentRound", { cursor: cursor + 5 });
        return;
      }
      if (activeRounds?.length > 0) {
        commit("updateCurrentRound", { round: activeRounds[0] });
      }
      dispatch("fetchRounds");
    },
    async fetchSaleStartTime({ state, commit }) {
      const contract = state.tokenDistributionContract;
      const saleStartTime = await contract.methods
        .saleStartTime()
        .call(defaultCallOptions(state));
      commit("updateSaleStartTime", {
        saleStartTime,
      });
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

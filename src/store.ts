import { createStore } from "vuex";
import { Contract as Web3EthContract } from "web3-eth-contract";
import { TokenDistribution } from "./abi-interfaces";
import {isEqual} from "lodash";
import { abi as tokenDistributionAbi } from "./contracts/TokenDistribution.json";
// import Web3 from "web3";
// @ts-ignore
import Web3 from "web3/dist/web3.min.js";
import transformResponseToRound from "./utils/transformResponseToRound";
import transformResponseToOrder from "./utils/transformResponseToOrder";

interface TypeSafeContract<Abi> {
  methods: Abi;
}

export type Contract<Abi> = Omit<Web3EthContract, "methods"> &
  TypeSafeContract<Abi>;

export type Round = {
  round: number;
  totalDeposit: string;
  totalWithdraw: string;
  maxVolume?: string;
  canClaim?: boolean;
  orders: Order[];
  maxDeposit?: number;
};

export type Order = {
  account: string;
  claimed: boolean;
  depositValue: string;
  id: number;
};

type IState = {
  tokenDistributionContract: Contract<TokenDistribution>;
  currentRound: number;
  defaultAccount: string | null;
  selectedRound: number;
  rounds: Round[];

};

const defaultCallOptions = (state: IState) => ({ from: state.defaultAccount });
const web3 = new Web3(Web3.givenProvider);
export const store = createStore<IState>({
  state: {
    tokenDistributionContract: null!,
    currentRound: 0,
    defaultAccount: null,
    selectedRound: 12,
    rounds: [],
  },
  getters: {
    currentRound(state: IState) {
      return state.currentRound;
    },
  },
  mutations: {
    updateCurrentRound(state: IState, payload) {
      state.currentRound = payload.currentRound;
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
      const contract = new web3.eth.Contract(
        tokenDistributionAbi as any[],
        "0x92d3c1c34DDf1589796827962eE769dC58FEFC68"
      );
      commit("updateContract", { contract });
      dispatch("fetchCurrentRound");
      dispatch("pollAccountsAndNetwork");
      dispatch("fetchRounds");
    },
    async depositBnbToRound(
      { state },
      payload: { type: string; round: number; amount: number }
    ) {
      if (!state.defaultAccount || !payload.round) {
        return;
      }

      const contractAddress = state.tokenDistributionContract.options.address;
      const hash = await state.tokenDistributionContract.methods
        .getMessageHash(contractAddress, "TO_THE_MOON")
        .call(defaultCallOptions(state));

      // @ts-ignore
      const signature = await web3.eth.personal.sign(
        hash,
        state.defaultAccount
      );
      const { round, amount } = payload;
      state.tokenDistributionContract.methods.deposit(round, signature).send({
        from: state.defaultAccount,
        value: web3.utils.toWei(
          web3.utils.toBN((amount * 10 ** 9).toFixed(0)),
          "nano"
        ),
      });
    },
    async withdrawRound({ state }, payload: { type: string; round: number }) {
      if (!state.defaultAccount || !payload.round) {
        return;
      }

      const { round } = payload;
      await state.tokenDistributionContract.methods
        .withdraw(round)
        .send(defaultCallOptions(state));
    },
    async pollAccountsAndNetwork({ state, dispatch, commit }) {
      const accounts = await web3.eth.requestAccounts();
      if (!isEqual(state.defaultAccount, accounts)) {
        commit("updateAccount", { account: accounts[0] });
      }
    },
    async fetchRounds({ state, commit }) {
      const contract = state.tokenDistributionContract;
      const rounds: any[] = await contract.methods
        .getRounds(20, 1)
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
                .getOrderByRound(id, 1, 10)
                .call(defaultCallOptions(state));

              const maxDeposit: number = await contract.methods.getMaxDepositByRound(id).call(defaultCallOptions(state))

              resolve({
                ...transformResponseToRound(r),
                maxVolume: web3.utils.fromWei(maxVol),
                canClaim,
                orders: orders.map(transformResponseToOrder),
                maxDeposit: web3.utils.fromWei(maxDeposit)
              });
            })
        )
      );
      console.log(transformedRound);
      commit("updateRounds", { rounds: transformedRound });
    },
  },
});

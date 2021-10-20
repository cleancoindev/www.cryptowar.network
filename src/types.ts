import { TokenDistribution } from "./abi-interfaces";
import { Contract as Web3EthContract } from "web3-eth-contract";
import Web3 from "web3";
export interface TypeSafeContract<Abi> {
  methods: Abi;
}

export type Contract<Abi> = Omit<Web3EthContract, "methods"> &
  TypeSafeContract<Abi>;

export interface Round {
  round: number;
  totalDeposit: string;
  totalWithdraw: string;
  maxVolume?: string;
  canClaim?: boolean;
  orders?: Order[];
  maxDeposit?: number;
  claimAt?: number;
  yourDeposit?: string;
  amountTokenSale?: string;
  price?: string;
  minDeposit?: string;
  endAt?: number;
  claimed?: boolean;
}

export interface Order {
  account: string;
  claimed: boolean;
  depositValue: string;
  id: number;
}

export interface IState {
  tokenDistributionContract: Contract<TokenDistribution>;
  currentRound: Round;
  defaultAccount: string | null;
  selectedRound: number;
  rounds: Round[];
  page: number;
  walletClient: any;
  activeRounds: Round[];
  finishedRounds: Round[];
  web3: Web3;
  saleStartTime: number;
  bnbPrice: number;
}
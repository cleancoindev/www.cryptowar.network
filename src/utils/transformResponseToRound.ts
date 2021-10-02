import { Round } from "@/store";
// import Web3 from "web3";
// @ts-ignore
import Web3 from "web3/dist/web3.min.js";

function transformResponseToRound(response: any): Round {
  const web3 = new Web3(Web3.givenProvider)
  return {
    round: Number(response[0]),
    totalDeposit:  web3.utils.fromWei(response[1]),
    totalWithdraw: web3.utils.fromWei(response[2]),
  };
}

export default transformResponseToRound;

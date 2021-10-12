import { Round } from "@/types";
import Web3 from "web3";

function transformResponseToRound(response: any): Round {
  const web3 = new Web3(Web3.givenProvider);
  return {
    round: Number(response[0]),
    totalDeposit:  web3.utils.fromWei(response[1]),
    totalWithdraw: web3.utils.fromWei(response[2]),
  };
}

export default transformResponseToRound;

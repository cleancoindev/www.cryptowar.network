import { Order } from "@/types";
import Web3 from "web3";

function transformResponseToOrder(response: any): Order {
  const web3 = new Web3(Web3.givenProvider);
  return {
    id: Number(response[0]),
    account: response[1],
    depositValue: web3.utils.fromWei(response[2]),
    claimed: response[3]
  };
}

export default transformResponseToOrder;

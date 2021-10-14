import { TokenDistribution } from "@/abi-interfaces";
import { Contract, IState, Round } from "@/types";
import Web3 from "web3";
import transformResponseToOrder from "./transformResponseToOrder";
import transformResponseToRound from "./transformResponseToRound";

type Params = {
  r: Round;
  contract: Contract<TokenDistribution>;
  defaultCallOptions;
  state: IState;
  web3: Web3;
};

function fetchRoundDetail(params: Params): Promise<Round> {
  const { r, contract, defaultCallOptions, state, web3 } = params;
  return new Promise(async (resolve) => {
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
      maxDeposit: Number(web3.utils.fromWei(maxDeposit)),
      claimAt: Number(claimAt) * 1000,
      yourDeposit: web3.utils.fromWei(orderDetail[2]),
      amountTokenSale: web3.utils.fromWei(amountTokenSale),
      price: Number(web3.utils.fromWei(price)).toFixed(6),
      minDeposit: web3.utils.fromWei(minDeposit),
      endAt: Number(endAt),
      claimed: orderDetail[3],
    });
  });
}

export default fetchRoundDetail;

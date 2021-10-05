import { Web3JsAbiCall } from '../abi-common';

export interface AddressUpgradeable {

}

export interface ContextUpgradeable {

}

export interface IERC20 {
  totalSupply(): Web3JsAbiCall<string>;
  balanceOf(account: string): Web3JsAbiCall<string>;
  transfer(recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
  allowance(owner: string, spender: string): Web3JsAbiCall<string>;
  approve(spender: string, amount: string | number): Web3JsAbiCall<boolean>;
  transferFrom(sender: string, recipient: string, amount: string | number): Web3JsAbiCall<boolean>;
}

export interface Initializable {

}

export interface IPancakeFactory {
  feeTo(): Web3JsAbiCall<string>;
  feeToSetter(): Web3JsAbiCall<string>;
  getPair(tokenA: string, tokenB: string): Web3JsAbiCall<string>;
  allPairs(arg0: string | number): Web3JsAbiCall<string>;
  allPairsLength(): Web3JsAbiCall<string>;
  createPair(tokenA: string, tokenB: string): Web3JsAbiCall<string>;
  setFeeTo(arg0: string): Web3JsAbiCall<void>;
  setFeeToSetter(arg0: string): Web3JsAbiCall<void>;
}

export interface IPancakePair {
  name(): Web3JsAbiCall<string>;
  symbol(): Web3JsAbiCall<string>;
  decimals(): Web3JsAbiCall<string>;
  totalSupply(): Web3JsAbiCall<string>;
  balanceOf(owner: string): Web3JsAbiCall<string>;
  allowance(owner: string, spender: string): Web3JsAbiCall<string>;
  approve(spender: string, value: string | number): Web3JsAbiCall<boolean>;
  transfer(to: string, value: string | number): Web3JsAbiCall<boolean>;
  transferFrom(from: string, to: string, value: string | number): Web3JsAbiCall<boolean>;
  DOMAIN_SEPARATOR(): Web3JsAbiCall<string>;
  PERMIT_TYPEHASH(): Web3JsAbiCall<string>;
  nonces(owner: string): Web3JsAbiCall<string>;
  permit(owner: string, spender: string, value: string | number, deadline: string | number, v: string | number, r: string, s: string): Web3JsAbiCall<void>;
  MINIMUM_LIQUIDITY(): Web3JsAbiCall<string>;
  factory(): Web3JsAbiCall<string>;
  token0(): Web3JsAbiCall<string>;
  token1(): Web3JsAbiCall<string>;
  getReserves(): Web3JsAbiCall<[string, string, string]>;
  price0CumulativeLast(): Web3JsAbiCall<string>;
  price1CumulativeLast(): Web3JsAbiCall<string>;
  kLast(): Web3JsAbiCall<string>;
  mint(to: string): Web3JsAbiCall<string>;
  burn(to: string): Web3JsAbiCall<[string, string]>;
  swap(amount0Out: string | number, amount1Out: string | number, to: string, data: string): Web3JsAbiCall<void>;
  skim(to: string): Web3JsAbiCall<void>;
  sync(): Web3JsAbiCall<void>;
  initialize(arg0: string, arg1: string): Web3JsAbiCall<void>;
}

export interface IPancakeRouter01 {
  factory(): Web3JsAbiCall<string>;
  WETH(): Web3JsAbiCall<string>;
  addLiquidity(tokenA: string, tokenB: string, amountADesired: string | number, amountBDesired: string | number, amountAMin: string | number, amountBMin: string | number, to: string, deadline: string | number): Web3JsAbiCall<[string, string, string]>;
  addLiquidityETH(token: string, amountTokenDesired: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number): Web3JsAbiCall<[string, string, string]>;
  removeLiquidity(tokenA: string, tokenB: string, liquidity: string | number, amountAMin: string | number, amountBMin: string | number, to: string, deadline: string | number): Web3JsAbiCall<[string, string]>;
  removeLiquidityETH(token: string, liquidity: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number): Web3JsAbiCall<[string, string]>;
  removeLiquidityWithPermit(tokenA: string, tokenB: string, liquidity: string | number, amountAMin: string | number, amountBMin: string | number, to: string, deadline: string | number, approveMax: boolean, v: string | number, r: string, s: string): Web3JsAbiCall<[string, string]>;
  removeLiquidityETHWithPermit(token: string, liquidity: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number, approveMax: boolean, v: string | number, r: string, s: string): Web3JsAbiCall<[string, string]>;
  swapExactTokensForTokens(amountIn: string | number, amountOutMin: string | number, path: string[], to: string, deadline: string | number): Web3JsAbiCall<string[]>;
  swapTokensForExactTokens(amountOut: string | number, amountInMax: string | number, path: string[], to: string, deadline: string | number): Web3JsAbiCall<string[]>;
  swapExactETHForTokens(amountOutMin: string | number, path: string[], to: string, deadline: string | number): Web3JsAbiCall<string[]>;
  swapTokensForExactETH(amountOut: string | number, amountInMax: string | number, path: string[], to: string, deadline: string | number): Web3JsAbiCall<string[]>;
  swapExactTokensForETH(amountIn: string | number, amountOutMin: string | number, path: string[], to: string, deadline: string | number): Web3JsAbiCall<string[]>;
  swapETHForExactTokens(amountOut: string | number, path: string[], to: string, deadline: string | number): Web3JsAbiCall<string[]>;
  quote(amountA: string | number, reserveA: string | number, reserveB: string | number): Web3JsAbiCall<string>;
  getAmountOut(amountIn: string | number, reserveIn: string | number, reserveOut: string | number): Web3JsAbiCall<string>;
  getAmountIn(amountOut: string | number, reserveIn: string | number, reserveOut: string | number): Web3JsAbiCall<string>;
  getAmountsOut(amountIn: string | number, path: string[]): Web3JsAbiCall<string[]>;
  getAmountsIn(amountOut: string | number, path: string[]): Web3JsAbiCall<string[]>;
}

export interface IPancakeRouter02 {
  WETH(): Web3JsAbiCall<string>;
  addLiquidity(tokenA: string, tokenB: string, amountADesired: string | number, amountBDesired: string | number, amountAMin: string | number, amountBMin: string | number, to: string, deadline: string | number): Web3JsAbiCall<[string, string, string]>;
  addLiquidityETH(token: string, amountTokenDesired: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number): Web3JsAbiCall<[string, string, string]>;
  factory(): Web3JsAbiCall<string>;
  getAmountIn(amountOut: string | number, reserveIn: string | number, reserveOut: string | number): Web3JsAbiCall<string>;
  getAmountOut(amountIn: string | number, reserveIn: string | number, reserveOut: string | number): Web3JsAbiCall<string>;
  getAmountsIn(amountOut: string | number, path: string[]): Web3JsAbiCall<string[]>;
  getAmountsOut(amountIn: string | number, path: string[]): Web3JsAbiCall<string[]>;
  quote(amountA: string | number, reserveA: string | number, reserveB: string | number): Web3JsAbiCall<string>;
  removeLiquidity(tokenA: string, tokenB: string, liquidity: string | number, amountAMin: string | number, amountBMin: string | number, to: string, deadline: string | number): Web3JsAbiCall<[string, string]>;
  removeLiquidityETH(token: string, liquidity: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number): Web3JsAbiCall<[string, string]>;
  removeLiquidityETHWithPermit(token: string, liquidity: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number, approveMax: boolean, v: string | number, r: string, s: string): Web3JsAbiCall<[string, string]>;
  removeLiquidityWithPermit(tokenA: string, tokenB: string, liquidity: string | number, amountAMin: string | number, amountBMin: string | number, to: string, deadline: string | number, approveMax: boolean, v: string | number, r: string, s: string): Web3JsAbiCall<[string, string]>;
  swapETHForExactTokens(amountOut: string | number, path: string[], to: string, deadline: string | number): Web3JsAbiCall<string[]>;
  swapExactETHForTokens(amountOutMin: string | number, path: string[], to: string, deadline: string | number): Web3JsAbiCall<string[]>;
  swapExactTokensForETH(amountIn: string | number, amountOutMin: string | number, path: string[], to: string, deadline: string | number): Web3JsAbiCall<string[]>;
  swapExactTokensForTokens(amountIn: string | number, amountOutMin: string | number, path: string[], to: string, deadline: string | number): Web3JsAbiCall<string[]>;
  swapTokensForExactETH(amountOut: string | number, amountInMax: string | number, path: string[], to: string, deadline: string | number): Web3JsAbiCall<string[]>;
  swapTokensForExactTokens(amountOut: string | number, amountInMax: string | number, path: string[], to: string, deadline: string | number): Web3JsAbiCall<string[]>;
  removeLiquidityETHSupportingFeeOnTransferTokens(token: string, liquidity: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number): Web3JsAbiCall<string>;
  removeLiquidityETHWithPermitSupportingFeeOnTransferTokens(token: string, liquidity: string | number, amountTokenMin: string | number, amountETHMin: string | number, to: string, deadline: string | number, approveMax: boolean, v: string | number, r: string, s: string): Web3JsAbiCall<string>;
  swapExactTokensForTokensSupportingFeeOnTransferTokens(amountIn: string | number, amountOutMin: string | number, path: string[], to: string, deadline: string | number): Web3JsAbiCall<void>;
  swapExactETHForTokensSupportingFeeOnTransferTokens(amountOutMin: string | number, path: string[], to: string, deadline: string | number): Web3JsAbiCall<void>;
  swapExactTokensForETHSupportingFeeOnTransferTokens(amountIn: string | number, amountOutMin: string | number, path: string[], to: string, deadline: string | number): Web3JsAbiCall<void>;
}

export interface OwnableUpgradeable {
  owner(): Web3JsAbiCall<string>;
  renounceOwnership(): Web3JsAbiCall<void>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
}

export interface PausableUpgradeable {
  paused(): Web3JsAbiCall<boolean>;
}

export interface ReentrancyGuardUpgradeable {

}

export interface SafeMath {

}

export interface TokenDistribution {
  AMOUNT_TOKEN_SALE_PER_ROUND(): Web3JsAbiCall<string>;
  BASE_MAX_BUY_PER_WALLET(): Web3JsAbiCall<string>;
  MAX_ROUND(): Web3JsAbiCall<string>;
  MIN_BUY(): Web3JsAbiCall<string>;
  MIN_ROUND(): Web3JsAbiCall<string>;
  ROUND_TIME(): Web3JsAbiCall<string>;
  owner(): Web3JsAbiCall<string>;
  pancakeRouter(): Web3JsAbiCall<string>;
  paused(): Web3JsAbiCall<boolean>;
  renounceOwnership(): Web3JsAbiCall<void>;
  roundTime(): Web3JsAbiCall<string>;
  saleStartTime(): Web3JsAbiCall<string>;
  token(): Web3JsAbiCall<string>;
  transferOwnership(newOwner: string): Web3JsAbiCall<void>;
  initialize(_pancakeRouter: string, _token: string): Web3JsAbiCall<void>;
  currentRound(): Web3JsAbiCall<string>;
  endRoundTime(round: string | number): Web3JsAbiCall<string>;
  withdrawTimeLeft(round: string | number): Web3JsAbiCall<string>;
  canWithdraw(round: string | number, account: string): Web3JsAbiCall<boolean>;
  getTokenAmountLeftInRound(round: string | number): Web3JsAbiCall<string>;
  canDeposit(round: string | number): Web3JsAbiCall<boolean>;
  getOrderByRound(round: string | number, cursor: string | number, size: string | number): Web3JsAbiCall<undefined>;
  getLastedOrderIdByRound(round: string | number): Web3JsAbiCall<string>;
  getAddressIndexes(round: string | number, index: string | number): Web3JsAbiCall<string>;
  getOrderDetail(round: string | number, account: string): Web3JsAbiCall<undefined>;
  getRound(round: string | number): Web3JsAbiCall<undefined>;
  getMaxDepositByRound(round: string | number): Web3JsAbiCall<string>;
  getRounds(size: string | number, cursor: string | number): Web3JsAbiCall<undefined>;
  getClaimAt(round: string | number): Web3JsAbiCall<string>;
  getBuyableBnb(round: string | number): Web3JsAbiCall<string>;
  deposit(round: string | number, _signature: string, _message: string): Web3JsAbiCall<void>;
  withdraw(round: string | number): Web3JsAbiCall<void>;
  setSaleStartTime(startTime: string | number): Web3JsAbiCall<void>;
  setFirstRoundPrice(price: string | number): Web3JsAbiCall<void>;
  setLastRoundPrice(price: string | number): Web3JsAbiCall<void>;
  setBonusRate(_bonusRate: string | number): Web3JsAbiCall<void>;
  setRoundTime(_time: string | number): Web3JsAbiCall<void>;
  setMessage(_message: string): Web3JsAbiCall<void>;
  distributeTokens(_token: string, ref: string): Web3JsAbiCall<void>;
  emergencyWithdraw(): Web3JsAbiCall<void>;
  initialPriceInRound(round: string | number): Web3JsAbiCall<string>;
  maxVolumeInRound(round: string | number): Web3JsAbiCall<string>;
  calculateExactTokenAmount(round: string | number, amountBnb: string | number): Web3JsAbiCall<string>;
  getMessageHash(_to: string, _message: string): Web3JsAbiCall<string>;
}

export interface Utils {
  getReturnAmount(_routerAddress: string, _amount: string | number, _token: string): Web3JsAbiCall<string>;
}

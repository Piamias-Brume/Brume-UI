import { Wallet } from "components/test/interface/wallet";

export function getWalletBalance(wallet: Wallet) {
  return wallet.assets
    .map((asset) => asset.dollarVallue * asset.amount)
    .reduce((sum, a) => sum + a, 0);
}

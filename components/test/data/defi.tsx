import { Token } from "../interface/wallet"

export interface TxDefi {
  origin: string,
  type: string,
  asset: Token,
  function: string,
  hex: string
}

export const BNBasset = {
  name: "BNB",
  address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
  amount: 3.7,
  dollarVallue: 291.58,
  icon: "/token/bnb.svg"
}

export const USDTasset = {
  name: "USDT",
  address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
  amount: 100,
  dollarVallue: 1.02,
  icon: "/token/tether.svg"
}

export const TxDefi1: TxDefi = {
  origin: "https://app.uniswap.org",
  type: "Swap BNB",
  asset: BNBasset,
  function: "Swap(Uint256, Bytes[])",
  hex: `8e30040896179f7e21351227cd428bf9
  c2f832bcd8bbf1acd2715b4bdeed8a7f
  3d5fdf8757316a6250d6a15daa3c5356
  51114f15c76296e2c04d7dca26db0e74
  fdfa9672cbf660449b82df33d46ed1e
  8e30040896179f7e21351227cd428bf9
  c2f832bcd8bbf1acd2715b4bdeed8a7f
  3d5fdf8757316a6250d6a15daa3c5356
  51114f15c76296e2c04d7dca26db0e74
  fdfa9672cbf660449b82df33d46ed1e`
}

export const TxDefi2: TxDefi = {
  origin: "https://app.uniswap.org",
  type: "Approve",
  asset: USDTasset,
  function: "Approve(Uint256, Bytes[])",
  hex: `8e30040896179f7e21351227cd428bf9
  c2f832bcd8bbf1acd2715b4bdeed8a7f
  3d5fdf8757316a6250d6a15daa3c5356
  51114f15c76296e2c04d7dca26db0e74
  fdfa9672cbf660449b82df33d46ed1e
  8e30040896179f7e21351227cd428bf9
  c2f832bcd8bbf1acd2715b4bdeed8a7f
  3d5fdf8757316a6250d6a15daa3c5356
  51114f15c76296e2c04d7dca26db0e74
  fdfa9672cbf660449b82df33d46ed1e`
}
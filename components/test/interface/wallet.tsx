

export interface Wallet {
  id: number
  address: string,
  name: string,
  ledger: boolean,
  assets: Token[],
  history: History[],
  recently?: Recent[],
  connected?: Site[],
  approved?: Approval[]
}

export interface Approval {
  id: number,
  asset: Token,
  tx: string,
  date: string,
  spenderName: string,
  spenderAddress: string,
  allowance: number | undefined
}

export interface Recent {
  name?: string,
  date: string,
  address: string
}
export interface Token {
  name: string,
  address: string,
  amount: number,
  dollarVallue: number,
  icon: string
}

export interface History {
  address: string,
  status: Status,
  type: TxType,
  from: string,
  to: string,
  date: string,
  gasLimit: number,
  gasPrice: number,
  token?: Token,
  site?: string
}

export interface Site {
  id: number,
  site: string,
  icon: string
}

export type TxType = "sent" | "received" | "approved" | "contractInteraction"


export type Status = "confirmed" | "rejected" | "pending" 


import { useObjectMemo } from "libs/react/memo";
import { ChildrenProps } from "libs/react/props";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { walletTest } from "../data/wallet";
import { Wallet } from "../interface/wallet";

export interface GlobalWallet {
  wallets: Wallet[],
  select: Wallet,
  privateKey: string,
  password: string,
  set(id?: number): void
}

export const WalletContext = createContext<GlobalWallet | undefined>(undefined)

export function useWallet() {
  return useContext(WalletContext)!
}

export function WalletProvider(props: ChildrenProps) {

  const [wallet, setWallet] = useState<Wallet>(walletTest[0])

  const wallets = useMemo(() => {
    return walletTest
  }, [])

  const select = useMemo(() => {
    return wallet
  }, [wallet])

  const privateKey = "eaf4ad8485adc670ece0736b9de729c9e7d4c39d4c01fb0d17a1624e58501d2a"

  const password = "motdepasse"

  const set = useCallback((id: number) => {
    setWallet(walletTest[id])
  }, [])

  const handle = useObjectMemo({ wallets, select, privateKey, password, set })

  return <WalletContext.Provider value={handle}>
    {props.children}
  </WalletContext.Provider>
}

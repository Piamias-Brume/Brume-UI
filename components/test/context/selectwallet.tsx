import { useObjectMemo } from "libs/react/memo";
import { ChildrenProps } from "libs/react/props";
import { createContext, useContext, useMemo } from "react";
import { Wallet } from "../interface/wallet";
import { useWallet } from "./wallet";


export const SelectWalletContext = createContext<Wallet | undefined>(undefined)

export function useSelectWallet() {
  return useContext(SelectWalletContext)!
}

export function SelectWalletProvider(props: ChildrenProps) {

  const walletGlobal = useWallet()

  const wallet = useMemo(() => {
    return walletGlobal.select
  }, [walletGlobal])

  const handle = useObjectMemo(wallet)

  return <SelectWalletContext.Provider value={handle}>
    {props.children}
  </SelectWalletContext.Provider>
}

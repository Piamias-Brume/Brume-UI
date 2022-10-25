import { useObjectMemo } from "libs/react/memo";
import { ChildrenProps } from "libs/react/props";
import { createContext, useCallback, useContext, useMemo, useState } from "react";


export type Network = "binanceSmartChain" | "ethereumMainnet" | "ethereumTesnet" | "avalanche" | "polygon" | "optimism"

export interface NetworkHandle {
  current?: Network,
  icon: string,
  set(newNetwork: Network, newLogo: string): void,
}

export const NetworkContext = createContext<NetworkHandle | undefined>(undefined)

export function useNetwork() {
  return useContext(NetworkContext)!
}

export function NetworkProvider(props: ChildrenProps) {

  const [network, setNetwork] = useState<Network>("binanceSmartChain")
  const [logo, setIcon] = useState("/network/bnb.svg")

  const set = useCallback((newNetwork: Network, newLogo: string) => {
    if (newNetwork && newLogo) {
      setNetwork(newNetwork)
      setIcon(newLogo)
    }
  }, [])

  const current = useMemo(() => {
    return network
  }, [network])

  const icon = useMemo(() => {
    return logo
  }, [logo])

  const handle = useObjectMemo({ current, icon, set })

  return <NetworkContext.Provider value={handle}>
    {props.children}
  </NetworkContext.Provider>
}

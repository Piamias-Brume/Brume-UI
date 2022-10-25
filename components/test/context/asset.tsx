import { useObjectMemo } from "libs/react/memo";
import { ChildrenProps } from "libs/react/props";
import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { Token } from "../interface/wallet";

export interface Asset {
  asset: Token | undefined,
  set(token: Token): void
}

export const SelectAssetContext = createContext<Asset | undefined>(undefined)

export function useSelectAsset() {
  return useContext(SelectAssetContext)!
}

export function SelectAssetProvider(props: ChildrenProps) {

  const [token, setAsset] = useState<Token | undefined>()

  const asset = useMemo(() => {
    return token
  }, [token])

  const set = useCallback((token: Token) => {
    setAsset(token)
  }, [])

  const handle = useObjectMemo({ asset, set })

  return <SelectAssetContext.Provider value={handle}>
    {props.children}
  </SelectAssetContext.Provider>
}

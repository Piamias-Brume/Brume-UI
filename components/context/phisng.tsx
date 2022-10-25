import { useObjectMemo } from "libs/react/memo";
import { ChildrenProps } from "libs/react/props";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

export interface PhishingHandle {
  current: string;
  next(): void;
  prev(): void;
}

export const PhisingContext = createContext<PhishingHandle | undefined>(undefined)

export function usePhising() {
  return useContext(PhisingContext)!
}

export function PhisingProvider(props: ChildrenProps) {

  const [Phising, setPhising] = useState<string>("/phising/1.jpeg")

  const next = useCallback(() => {
    if (Phising === "/phising/1.jpeg") setPhising("/phising/2.jpeg")
    if (Phising === "/phising/2.jpeg") setPhising("/phising/3.jpeg")
    if (Phising === "/phising/3.jpeg") setPhising("/phising/4.jpeg")
    if (Phising === "/phising/4.jpeg") setPhising("/phising/5.jpeg")
    if (Phising === "/phising/5.jpeg") setPhising("/phising/1.jpeg")
  }, [Phising])

  const prev = useCallback(() => {
    if (Phising === "/phising/1.jpeg") setPhising("/phising/5.jpeg")
    if (Phising === "/phising/2.jpeg") setPhising("/phising/1.jpeg")
    if (Phising === "/phising/3.jpeg") setPhising("/phising/2.jpeg")
    if (Phising === "/phising/4.jpeg") setPhising("/phising/3.jpeg")
    if (Phising === "/phising/5.jpeg") setPhising("/phising/4.jpeg")
  }, [Phising])

  const unset = useCallback(() => {
    setPhising("")
  }, [])

  const current = useMemo(() => {
    return Phising
  }, [Phising])

  const handle = useObjectMemo({ current, next, prev })

  return <PhisingContext.Provider value={handle}>
    {props.children}
  </PhisingContext.Provider>
}

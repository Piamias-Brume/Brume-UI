import { useObjectMemo } from "libs/react/memo";
import { ChildrenProps } from "libs/react/props";
import { createContext, useCallback, useContext, useMemo, useState } from "react";

export interface TutorialHandle {
  current?: boolean,
  set(select: boolean): void,
}

export const TutorialContext = createContext<TutorialHandle | undefined>(undefined)

export function useTutorial() {
  return useContext(TutorialContext)!
}

export function TutorialProvider(props: ChildrenProps) {

  const [tutorial, setTutorial] = useState<boolean>(true)

  const set = useCallback((select: boolean) => {
    setTutorial(select)
  }, [])

  const current = useMemo(() => {
    return tutorial
  }, [tutorial])

  const handle = useObjectMemo({ current, set })

  return <TutorialContext.Provider value={handle}>
    {props.children}
  </TutorialContext.Provider>
}

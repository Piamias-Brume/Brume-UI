import { DependencyList, useEffect, useMemo, useState } from "react"
import { useAsyncTry } from "./async"

export function useObjectMemo<T extends {}>(object: T) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => object, Object.values(object))
}

export function useArrayMemo<T extends any[]>(array: T) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useMemo(() => array, array)
}

export function useLazyMemo<T>(factory: () => T, deps: DependencyList) {
  const [state, setState] = useState<T>()

  useEffect(() => {
    setState(factory())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}

export function useLazyTimedMemo<T>(factory: () => T, deps: DependencyList, timeout: number) {
  const [state, setState] = useState<T>()

  useEffect(() => {
    const t = setTimeout(() => {
      setState(factory())
    }, timeout)

    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}

export function useAsyncMemo<T>(factory: () => Promise<T>, deps: DependencyList, onerror: (e: any) => void) {
  const [state, setState] = useState<T>()

  const tryFactory = useAsyncTry(factory, deps, onerror)

  useEffect(() => {
    tryFactory.run().then(setState)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return state
}

import { DependencyList, Dispatch, useCallback } from "react"
import { useObjectMemo } from "./memo"
import { StateHandle, useSetter, useStateHandleFrom } from "./state"

export type PartialState<T> = [T, PartialSetter<T>]
export type PartialSetter<T> = Dispatch<PartialSetStateAction<T>>
export type PartialSetStateAction<T> = Partial<T> | ((prev: T) => Partial<T>)

export function usePartialSetter<T>(
  setter: PartialSetter<T>,
  deps: DependencyList
) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(setter, deps)
}

export interface PartialStateHandle<T> {
  current: T,
  set: PartialSetter<T>
}

export function usePartialStateHandleFrom<T>($state: PartialState<T>) {
  const [current, set] = $state
  return useObjectMemo({ current, set })
}

export function usePartialStateHandleKey<P, K extends keyof P>(parent: PartialStateHandle<P>, key: K): StateHandle<P[K]> {
  const setter = useSetter<P[K]>(action => parent.set(prev => {
    const value = action instanceof Function
      ? action(prev[key])
      : action
    const result: Partial<P> = {}
    result[key] = value
    return result
  }), [])

  return useStateHandleFrom([parent.current[key], setter])
}
import { useCallback, useState } from "react"
import { useObjectMemo } from "./memo"
import { Setter, State } from "./state"

export type OptionalState<T> = State<T | undefined>
export type OptionalSetter<T> = Setter<T | undefined>

export interface OptionalStateHandle<T> {
  current?: T,
  set: OptionalSetter<T>
  unset(): void
}

export function useOptionalStateHandle<T>(init?: T): OptionalStateHandle<T> {
  return useOptionalStateHandleFrom(useState(init))
}

export function useOptionalStateHandleFrom<T>($state: OptionalState<T>): OptionalStateHandle<T> {
  const [current, set] = $state
  const unset = useCallback(() => set(undefined), [set])
  return useObjectMemo({ current, set, unset })
}
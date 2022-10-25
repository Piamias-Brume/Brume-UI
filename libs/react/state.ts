import {
  DependencyList,
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useObjectMemo } from "./memo";

export type State<T> = [T, Setter<T>];
export type Setter<T> = Dispatch<SetStateAction<T>>;

export function useSetter<T>(setter: Setter<T>, deps: DependencyList) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  return useCallback(setter, deps);
}

export function useLazyState<T>(
  factory: () => T,
  deps: DependencyList
): State<T | undefined> {
  const [state, setState] = useState<T>();

  useEffect(() => {
    setState(factory());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return [state, setState];
}

export interface StateHandle<T> {
  current: T;
  set: Setter<T>;
}

export function useStateHandle<T>(init: T): StateHandle<T> {
  return useStateHandleFrom(useState(init));
}

export function useStateHandleFrom<T>($state: State<T>): StateHandle<T> {
  const [current, set] = $state;

  return useObjectMemo({ current, set });
}

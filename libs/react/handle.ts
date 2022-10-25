import { useCallback, useState } from "react";
import { useObjectMemo } from "./memo";

export interface Handle<T> {
  current: T;
  set(x: T): void;
}

export interface OptionalHandle<T> {
  current?: T;
  set(x?: T): void;
  unset(): void;
}

export function useOptionalHandle<T>(init?: T) {
  const [current, set] = useState(init);
  const unset = useCallback(() => set(undefined), []);
  return useObjectMemo({ current, set, unset });
}

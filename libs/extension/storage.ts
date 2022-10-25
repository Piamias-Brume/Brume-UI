import { getBrowser } from "libs/extension/browser"
import { PartialStateHandle, usePartialSetter, usePartialStateHandleFrom } from "libs/react/partial"
import { useCallback, useEffect, useState } from "react"

export function useSessionStorage<S extends Record<string, any>>(defs: S): PartialStateHandle<S> {
  return useStorage("session", defs)
}

export function useLocalStorage<S extends Record<string, any>>(defs: S): PartialStateHandle<S> {
  return useStorage("local", defs)
}

export function useStorage<S extends Record<string, any>>(type: "session" | "local", defs: S): PartialStateHandle<S> {
  const getter = useCallback(async () => {
    if (getBrowser() === "chrome")
      return await chrome.storage[type].get(Object.keys(defs)) as S
    else
      return await browser.storage.local.get(Object.keys(defs)) as S
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [storage, setStorage] = useState(defs)

  useEffect(() => {
    getter().then(setStorage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const setter = usePartialSetter<S>(action => setStorage(prev => {
    const value = action instanceof Function
      ? action(prev)
      : action

    if (getBrowser() === "chrome") {
      const rem = Object.keys(value).filter(k => value[k] === undefined)
      chrome.storage[type].remove(rem)
      chrome.storage[type].set(value)
    } else {
      const rem = Object.keys(value).filter(k => value[k] === undefined)
      browser.storage.local.remove(rem)
      browser.storage.local.set(value)
    }

    getter().then(setStorage)
    return prev
  }), [])

  return usePartialStateHandleFrom([{ ...defs, ...storage }, setter])
}

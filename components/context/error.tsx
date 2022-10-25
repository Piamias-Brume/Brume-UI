import { DialogFull } from "components/modals/dialog"
import { OptionalHandle, useOptionalHandle } from "libs/react/handle"
import { ChildrenProps } from "libs/react/props"
import { createContext, useContext, useEffect } from "react"

export const ErrorContext =
  createContext<OptionalHandle<Error> | undefined>(undefined)

export function useError() {
  return useContext(ErrorContext)!
}

// Todo: front error

export function ErrorProvider(props: ChildrenProps) {
  const error = useOptionalHandle<Error>()

  useEffect(() => {
    if (error) console.error(error.current)
  }, [error])

  return <ErrorContext.Provider value={error}>
    {error.current &&
      <DialogFull close={error.unset}>
        <div className="flex flex-center">
          <h1 className="text-2xl">
            An error occured :
          </h1>
        </div>
        <div className="text-contrast text-center whitespace-pre-wrap">
          {error.current.message}
        </div>
      </DialogFull>}
    {props.children}
  </ErrorContext.Provider>
}
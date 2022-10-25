import { OppositeTextButton } from "components/buttons/button"
import { PasswordInput } from "components/input/password"
import { TitleStep } from "components/layout/utils"
import { ErrorMessage } from "components/notifications/error"

import { RouteProps } from "libs/react/props"
import { useString } from "libs/react/string"
import { useMemo } from "react"

export function NewPasswordPage(props: RouteProps) {

  const { route } = props

  const newPassword = useString()
  const confirmPassword = useString()

  const wrongPassword = useMemo(() => {
    if (newPassword.current === "") return false
    if (newPassword.current.length >= 20 || newPassword.current.length < 8) return true
    return false
  }, [newPassword])

  const passwordNotMatch = useMemo(() => {
    if (confirmPassword.current === "") return false
    if (newPassword.current != confirmPassword.current) return true
    return false
  }, [confirmPassword, newPassword])

  const disabled = useMemo(() => {
    if (confirmPassword.current === "" || newPassword.current === "") return true
    if (passwordNotMatch || wrongPassword) return true
    return false
  }, [confirmPassword, passwordNotMatch, wrongPassword, newPassword])

  const back = (() => {
    route.set("new")
  })

  return <>
    <TitleStep back={back}>
      <span className="text-xl">Create a password</span>
      <span>1/3</span>
    </TitleStep>
    <div className="my-2" />
    <div className="flex flex-col p-md text-sm text-contrast">
      {"It will be used to unlock your wallet and access your personal information, do not share it for any reason!"}
      <div className="my-6" />
      <div className="flex flex-col flex-center gap-10">
        <div className="w-full flex flex-col flex-center gap-2">
          <PasswordInput stringHandle={newPassword} label={"New password"} />
          {wrongPassword && <ErrorMessage>
            {"Password length should be 8 ~ 20 characters"}
          </ErrorMessage>}
        </div>
        <div className="w-full flex flex-col flex-center gap-2">
          <PasswordInput stringHandle={confirmPassword} label={"Confirm password"} />
          {passwordNotMatch && <ErrorMessage>
            {"Passwords don't match"}
          </ErrorMessage>}
        </div>
      </div>
    </div>
    <div className="grow" />
    <div className="my-1" />
    <div className="p-md">
      <OppositeTextButton className="w-full text-xl" disabled={disabled} onClick={() => route.set("new/phrase")}>
        Confirm password
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </>
}
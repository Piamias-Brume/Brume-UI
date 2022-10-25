import { OppositeTextButton } from "components/buttons/button"
import { useRoute } from "components/context/router"
import { OutlineEyeIcon, OutlineEyeSlashIcon } from "components/icons/heroicons"
import { InputBorderLabel } from "components/input/input"
import { ErrorMessage } from "components/notifications/error"
import { useWallet } from "components/test/context/wallet"
import { useBoolean } from "libs/react/boolean"
import { useString } from "libs/react/string"
import { useMemo } from "react"
import { UnlockTitle } from "./components/title"

export function LockPage() {

  const route = useRoute()
  const globalWallet = useWallet()

  const password = useString()
  const wrongPassword = useBoolean()
  const show = useBoolean()

  const onUnlockClick = (() => {
    // if (password.current !== globalWallet.password) return wrongPassword.enable()
    route.set("home")
  })

  const onEnter = ((e: any) => {
    if (e.key === "Enter") onUnlockClick()
  })

  const type = useMemo(() => {
    if (show.current) return "text"
    return "password"
  }, [show])

  const icon = useMemo(() => {
    if (show.current) return OutlineEyeSlashIcon
    return OutlineEyeIcon
  }, [show])

  return <div className="flex flex-col h-full">
    <UnlockTitle />
    <div className="grow" />
    <div className="my-1" />
    <div className="p-md">
      {wrongPassword.current &&
        <ErrorMessage>
          {"Wrong password"}
        </ErrorMessage>}
    </div>
    <div className="my-2" />
    <div className="flex flex-col items-center gap-4 p-md">
      <InputBorderLabel stringHandle={password} onKeyDown={onEnter} type={type} oicon={icon} onIconClick={show.toggle}>
        {"Password"}
      </InputBorderLabel>
      <OppositeTextButton className="text-xl" onClick={onUnlockClick}>
        {"Unlock"}
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </div>
}
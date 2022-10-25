import { OppositeTextButton } from "components/buttons/button"
import { useRoute } from "components/context/router"
import { OutlineEyeIcon, OutlineEyeSlashIcon } from "components/icons/heroicons"
import { InputBorderLabel } from "components/input/input"
import { TitleStep } from "components/layout/utils"
import { ErrorMessage } from "components/notifications/error"
import { useBoolean } from "libs/react/boolean"
import { useString } from "libs/react/string"
import { useMemo } from "react"


export function PrivateKeyImportPage() {

  const route = useRoute()

  const key = useString()
  const error = useBoolean()
  const show = useBoolean()

  const onUnlockClick = (() => {
    // if (key.current !== "test") return error.enable()
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

  const back = (() => {
    route.set("new/import")
  })

  return <>
    <TitleStep back={back}>
      <span className="text-xl">Import with your private key</span>
      <span>2/2</span>
    </TitleStep>
    <div className="my-2" />
    <div className="flex flex-col p-md">
      <span className="text-sm text-contrast">
        {"Import your account with 12-word secret recovery phrase."}
      </span>
      <div className="my-4" />
      <div className="flex flex-col gap-4">
        <InputBorderLabel stringHandle={key} onKeyDown={onEnter} type={type} oicon={icon} onIconClick={show.toggle}>
          Your private key
        </InputBorderLabel>
        {error.current && <ErrorMessage>
          {"Invalid private key"}
        </ErrorMessage>}
      </div>
    </div>
    <div className="grow" />
    <div className="my-1" />
    <div className="p-md w-full">
      <OppositeTextButton disabled={key.current === ""} onClick={onUnlockClick} className="w-full  text-xl">
        Import account
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </>
}
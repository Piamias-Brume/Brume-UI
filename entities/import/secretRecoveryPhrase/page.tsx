import { OppositeTextButton } from "components/buttons/button"
import { useRoute } from "components/context/router"
import { TitleStep } from "components/layout/utils"
import { useBoolean } from "libs/react/boolean"
import { useMemo } from "react"
import { SecretRecoveryPhraseButton } from "./components/button"
import { SecretRecoveryPhrase } from "./components/phrase"

export function SecretRecoveryPhraseImportPage() {

  const route = useRoute()
  const show = useBoolean()
  const clear = useBoolean()

  const type = useMemo(() => {
    if (show.current) return "text"
    return "password"
  }, [show])

  const back = (() => {
    route.set("new/import")
  })

  return <>
    <TitleStep back={back}>
      <span className="text-xl">Import with your phrase</span>
      <span>2/2</span>
    </TitleStep>
    <div className="my-2" />
    <div className="flex flex-col p-md">
      <span className="text-sm text-contrast">
        {"Import your account with 12-word secret recovery phrase."}
      </span>
      <div className="my-4" />
      <SecretRecoveryPhraseButton show={show} clear={clear} />
      <SecretRecoveryPhrase type={type} clear={clear} />
    </div>
    <div className="grow" />
    <div className="my-1" />
    <div className="p-md w-full">
      <OppositeTextButton className="w-full  text-xl" onClick={() => route.set("home")}>
        Import account
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </>
}

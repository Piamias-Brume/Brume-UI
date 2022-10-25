import { TitleStep } from "components/layout/utils"
import { useBoolean } from "libs/react/boolean"
import { RouteProps } from "libs/react/props"
import { useMemo, useState } from "react"
import { BottomButton, SecretRecoveryPhraseButtons } from "./components/button"
import { SecretRecoveryPhrase } from "./components/phrase"
import { VerifyIsSaved } from "./components/verify"


export function NewSecretRecoveryPage(props: RouteProps) {

  const { route } = props

  const [seed, setSeed] = useState("")

  const saved = useBoolean()

  const seedArray = useMemo(() => {
    if (seed.split(" ").length === 1) return
    return seed.split(" ")
  }, [seed])

  const back = (() => {
    route.set("new/password")
  })

  return <>
    <TitleStep back={back}>
      <span className="text-xl">Backup secret phrase</span>
      <span>2/3</span>
    </TitleStep>
    <div className="my-2" />
    <span className="text-sm p-md text-contrast">
      {"This phrase is the only way to recover your wallet do not share it for any reason!"}
    </span>
    <div className="my-4" />
    {seedArray && <div className="p-md w-full flex flex-col">
      <SecretRecoveryPhraseButtons seed={seed} setSeed={setSeed} />
      <div className="my-1" />
      <SecretRecoveryPhrase seedArray={seedArray} />
      <div className="my-2" />
      <VerifyIsSaved saved={saved} />
    </div>}
    <div className="grow" />
    <div className="my-1" />
    <BottomButton route={route} seed={seed} saved={saved} />
    <div className="my-1" />
  </>
}

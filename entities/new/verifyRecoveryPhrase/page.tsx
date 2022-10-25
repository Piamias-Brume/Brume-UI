
import { OppositeTextButton } from "components/buttons/button";
import { InputBorderLabel } from "components/input/input";
import { TitleStep } from "components/layout/utils";
import { ErrorMessage } from "components/notifications/error";

import { useBoolean } from "libs/react/boolean";
import { RouteProps } from "libs/react/props";
import { useString } from "libs/react/string";

export function VerifyRecoveryPhrasePage(props: RouteProps) {

  const { route } = props

  const word = useString()
  const error = useBoolean()

  const onCreateClick = (() => {
    if (word.current != "test") return error.enable()
    route.set("home")
  })

  const onEnter = ((e: any) => {
    if (e.key === "Enter") onCreateClick()
  })

  const back = (() => {
    route.set("new/phrase")
  })

  return <>
    <TitleStep back={back}>
      <span className="text-xl">Verify phrase</span>
      <span>3/3</span>
    </TitleStep>
    <div className="my-2" />
    <span className="p-md text-sm text-contrast">
      {"Enter the following word from your recovery phrase to complete the setup process"}
    </span>
    <div className="my-6" />
    <div className="p-md">
      <InputBorderLabel stringHandle={word} onKeyDown={onEnter}>
        Word #11
      </InputBorderLabel>
      <div className="my-4" />
      <div className="p-md">
        {error.current && <ErrorMessage>
          {"Wrong word, please check your passphrase"}
        </ErrorMessage>}
      </div>
    </div>
    <div className="grow" />
    <div className="my-1" />
    <div className="p-md">
      <OppositeTextButton className="w-full text-xl" disabled={word.current === ""} onClick={onCreateClick}>
        Create account
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </>
}

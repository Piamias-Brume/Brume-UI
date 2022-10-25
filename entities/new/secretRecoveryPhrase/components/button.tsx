
import { OppositeTextButton } from "components/buttons/button";
import { CopyTemplateButton } from "components/buttons/copy";
import { RefreshButton } from "components/buttons/refresh";
import { OutlineDocumentArrowDownIcon } from "components/icons/heroicons";
import { HoverPopperTuto } from "components/modals/popper";
import { Wallet } from "ethers";
import { useAsyncTry } from "libs/react/async";
import { BooleanHandle, useBoolean } from "libs/react/boolean";
import { useElement } from "libs/react/element";
import { useMouse } from "libs/react/events";
import { RouteProps } from "libs/react/props";
import { Dispatch, SetStateAction, useCallback, useEffect } from "react";

export function SecretRecoveryPhraseButtons(props: { seed: string, setSeed: Dispatch<SetStateAction<string>> }) {

  const { seed, setSeed } = props

  const dl = useBoolean()
  const dlPopper = useElement()
  const dlAnimation = dl.current ? "animate-bounce" : ""

  const tryCreateRandom = useAsyncTry(async () => {
    await new Promise(ok => setTimeout(ok, 0)) // force async
    return Wallet.createRandom().mnemonic.phrase
  }, [], console.error)

  useEffect(() => {
    tryCreateRandom.run().then(setSeed)
  }, [])

  const onRefreshClick = useMouse(() => {
    tryCreateRandom.run().then(setSeed)
  }, [])

  const onDlClick = useCallback(() => {
    dl.enable()
    setTimeout(() => dl.disable(), 1500)
    const element = document.createElement("a");
    const file = new Blob([seed], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myRecoveryPhrase.txt";
    document.body.appendChild(element);
    element.click();
  }, [seed, dl])

  return <div className="flex flex-row-reverse gap-2 px-2 text-colored">
    <RefreshButton className="icon-sm" content="Generate a new phrase" onClick={onRefreshClick} />
    <HoverPopperTuto target={dlPopper}>
      {"Download your phrase"}
    </HoverPopperTuto>
    <button onClick={onDlClick} className={`${dlAnimation} p-1 ahover:bg-ahover rounded-xl`}
      onMouseEnter={dlPopper.use}
      onMouseLeave={dlPopper.unset}>
      <OutlineDocumentArrowDownIcon className="icon-sm " />
    </button>
  </div>
}


export function BottomButton(props: RouteProps & { seed: string, saved: BooleanHandle }) {

  const { route, seed, saved } = props

  const copied = useBoolean()
  const content = !copied.current ? "Copy" : "Copied"

  return <div className="p-md w-full flex items-center gap-4">
    <CopyTemplateButton copied={copied} toCopy={seed}>
      <OppositeTextButton className="w-full  text-xl">
        {content}
      </OppositeTextButton>
    </CopyTemplateButton>
    <OppositeTextButton disabled={!saved.current} onClick={() => route.set("new/check")} className="w-full text-xl">
      Continue
    </OppositeTextButton>
  </div>
}

import { ContrastTextButton, OppositeTextButton } from "components/buttons/button";
import { CopyTemplateButton } from "components/buttons/copy";
import { PasswordInput } from "components/input/password";
import { TitleDialog } from "components/layout/utils";
import { Dialog } from "components/modals/dialog";
import { HoverPopperTuto } from "components/modals/popper";
import { ErrorMessage } from "components/notifications/error";
import { useWallet } from "components/test/context/wallet";
import { useBoolean } from "libs/react/boolean";
import { useElement } from "libs/react/element";
import { CloseProps } from "libs/react/props";
import { StringHandle, useString } from "libs/react/string";

export function ExportKeyDialog(props: CloseProps) {

  const { close } = props

  const globalWallet = useWallet()

  const show = useBoolean()
  const password = useString()
  const wrongPassword = useBoolean()
  const copied = useBoolean()
  const copyPopper = useElement()

  const content = !show.current ? "Show private key" : "Hide private key"
  const copyContent = !copied.current ? "Copy to clipboard" : "Copied succesfuly"

  const showPrivateKey = (() => {
    if (show.current === true) password.unset()
    // if (password.current === globalWallet.password) {
    //   wrongPassword.disable()
    //   show.toggle()
    //   return
    // }
    wrongPassword.enable()
  })

  const onEnter = ((e: any) => {
    if (e.key === "Enter") showPrivateKey()
  })

  console.log(show.current)

  return <Dialog close={close}>
    <TitleDialog close={close}>
      <span className="w-full grow text-center text-xl">
        Export private key
      </span>
    </TitleDialog>
    <div className="my-4" />
    {!show.current
      ? <PrivateKeyInput password={password} onEnter={onEnter} />
      : <CopyTemplateButton toCopy={globalWallet.privateKey} copied={copied}>
        <HoverPopperTuto target={copyPopper}>
          {copyContent}
        </HoverPopperTuto>
        <ContrastTextButton className="break-all text-xs animate-opacity-scale"
          onMouseEnter={copyPopper.use}
          onMouseLeave={copyPopper.unset}>
          {globalWallet.privateKey}
        </ContrastTextButton>
      </CopyTemplateButton>}
    <div className="my-2" />
    <div className="p-md">
      {wrongPassword.current
        ? <ErrorMessage>{"Wrong password"}</ErrorMessage>
        : <ErrorMessage>{"Never disclose this key"}</ErrorMessage>}
    </div>
    <div className="my-1" />
    <div className="p-md">
      <OppositeTextButton className="w-full  text-xl" disabled={!(password.current !== "")} onClick={showPrivateKey}>
        {content}
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </Dialog>
}

function PrivateKeyInput(props: { password: StringHandle, onEnter: (e: any) => void }) {

  const { password, onEnter } = props

  const copied = useBoolean()
  const copyPopper = useElement()
  const content = !copied.current ? "Copy to clipboard" : "Copy successfully"

  return <div className="flex flex-center p-md h-[40px]">
    <HoverPopperTuto target={copyPopper}>
      {content}
    </HoverPopperTuto>
    <PasswordInput stringHandle={password} onKeyDown={onEnter} label="Password" />
  </div>
}
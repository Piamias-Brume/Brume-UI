import { ContrastTextButton, OppositeTextButton } from "components/buttons/button"
import { CopyTemplateButton } from "components/buttons/copy"
import { PasswordInput } from "components/input/password"
import { TitleDialog } from "components/layout/utils"
import { DialogFull } from "components/modals/dialog"
import { HoverPopperTuto } from "components/modals/popper"
import { ErrorMessage } from "components/notifications/error"
import { useWallet } from "components/test/context/wallet"
import { ExportKeyDialog } from "entities/home/dialog/exportKey"
import { useBoolean } from "libs/react/boolean"
import { useElement } from "libs/react/element"
import { CloseProps } from "libs/react/props"
import { StringHandle, useString } from "libs/react/string"
import Image from "next/image"

export function WalletInformationsDialog(props: CloseProps) {

  const { close } = props

  const exportKey = useBoolean()
  const copied = useBoolean()

  return <>
    {exportKey.current && <ExportKeyDialog close={exportKey.disable} />}
    <DialogFull close={close}>
      <TitleDialog close={close}>
        <span className="w-full grow text-center text-xl">
          Wallet information
        </span>
      </TitleDialog>
      <div className="my-2" />
      <Image src="/qr.svg" alt="QR Code"
        width={200} height={200} />
      <div className="my-4" />
      <ExportKey />
    </DialogFull>
  </>
}

function ExportKey() {

  const globalWallet = useWallet()

  const show = useBoolean()
  const password = useString()
  const wrongPassword = useBoolean()
  const copied = useBoolean()
  const copyPopper = useElement()

  const content = !show.current ? "Show private key" : "Hide private key"
  const copyContent = !copied.current ? "Copy to clipboard" : "Copy succesfuly"

  const showPrivateKey = (() => {
    if (show.current === true) password.unset()
    // if (password.current === globalWallet.password) {
    //   wrongPassword.disable()
    //   show.toggle()
    //   return
    // }
    wrongPassword.disable()
    show.toggle()
    return
    // wrongPassword.enable()
  })

  const onEnter = ((e: any) => {
    if (e.key === "Enter") showPrivateKey()
  })

  return <>
    {!show.current
      ? <PrivateKeyInput password={password} onEnter={onEnter} />
      : <div className="w-full px-4">
        <CopyTemplateButton toCopy={globalWallet.privateKey} copied={copied}>
          <HoverPopperTuto target={copyPopper}>
            {copyContent}
          </HoverPopperTuto>
          <ContrastTextButton className="break-all text-xs animate-opacity-scale"
            onMouseEnter={copyPopper.use}
            onMouseLeave={copyPopper.unset}>
            {globalWallet.privateKey}
          </ContrastTextButton>
        </CopyTemplateButton>
      </div>}
    <div className="my-2" />
    <div className="p-md">
      {wrongPassword.current
        ? <ErrorMessage>{"Wrong password"}</ErrorMessage>
        : <ErrorMessage>{"Never disclose this key"}</ErrorMessage>}
    </div>
    <div className="grow" />
    <div className="my-1" />
    <div className="p-md">
      <OppositeTextButton className="w-full  text-xl" disabled={!(password.current !== "")} onClick={showPrivateKey}>
        {content}
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </>
}


function PrivateKeyInput(props: { password: StringHandle, onEnter: (e: any) => void }) {

  const { password, onEnter } = props

  const copied = useBoolean()
  const copyPopper = useElement()
  const content = !copied.current ? "Copy to clipboard" : "Copy successfully"

  return <div className="flex flex-center p-md h-[48px]">
    <HoverPopperTuto target={copyPopper}>
      {content}
    </HoverPopperTuto>
    <PasswordInput stringHandle={password} onKeyDown={onEnter} label="Password" />
  </div>
}
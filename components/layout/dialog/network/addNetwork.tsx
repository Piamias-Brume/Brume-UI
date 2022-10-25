import { OppositeTextButton, TextButtonStatic } from "components/buttons/button"
import { InputBorderLabel } from "components/input/input"
import { TitleDialog } from "components/layout/utils"
import { DialogFull } from "components/modals/dialog"
import { ErrorMessage } from "components/notifications/error"
import { CloseProps } from "libs/react/props"
import { useString } from "libs/react/string"
import Image from "next/image"
import { useMemo } from "react"

export function AddNetworkDialog(props: CloseProps) {

  const { close } = props

  const networkName = useString()
  const networkRpc = useString()

  const disabled = useMemo(() => {
    if (networkName.current === "") return true
    if (networkRpc.current === "") return true
    return false
  }, [networkRpc, networkName])

  return <DialogFull close={close}>
    <TitleDialog close={close}>
      <span className="w-full grow text-center text-xl">
        Add a network
      </span>
    </TitleDialog>
    <div className="my-4" />
    <div className="p-md flex flex-col gap-8">
      <InputBorderLabel stringHandle={networkName}>
        Network name
      </InputBorderLabel>
      <InputBorderLabel stringHandle={networkRpc}>
        New RPC URL
      </InputBorderLabel>
      <ErrorMessage>
        {"A malicious network provider can be dangerous. Only add custom networks you trust."}
      </ErrorMessage>
      {!disabled && <TextButtonStatic >
        <div className="w-full flex items-center gap-4">
          <Image src={"/network/ethereummainnet.svg"}
            alt={"test"} width={34} height={34} />
          <span className="text-colored text-xl">
            {"Ethereum Mainnet"}
          </span>
        </div>
      </TextButtonStatic>}
    </div>
    <div className="grow" />
    <div className="my-1" />
    <div className="p-md">
      <OppositeTextButton disabled={disabled} className="w-full  text-xl" onClick={close}>
        Add Network
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </DialogFull>
}
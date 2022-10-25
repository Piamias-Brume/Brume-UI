import { OppositeTextButton } from "components/buttons/button"
import { CopyTemplateButton } from "components/buttons/copy"
import { TitleDialog } from "components/layout/utils"
import { DialogFull } from "components/modals/dialog"
import { HoverPopper } from "components/modals/popper"
import { useBoolean } from "libs/react/boolean"
import { useElement } from "libs/react/element"
import { CloseProps } from "libs/react/props"
import { ApprovalInfo } from "../components/approve"
import { DefiInfo } from "../components/defi"


export function HexInformationsDialog(props: CloseProps & { txDefi: any }) {

  const { close, txDefi } = props

  const copyPopper = useElement()
  const copied = useBoolean()
  const content = !copied.current ? "Copy to clipboard" : "Copy successfully"

  return <DialogFull close={close}>
    <TitleDialog close={close}>
      <span className="w-full grow text-center text-xl">
        Hex informations
      </span>
    </TitleDialog>
    <div className="my-2" />
    {txDefi.type === "Approve"
      ? <ApprovalInfo txDefi={txDefi} />
      : <DefiInfo txDefi={txDefi} />}
    <div className="flex flex-col gap-2 grow h-full p-md overflow-scroll">
      <div className="text-colored w-full flex flex-col gap-1 px-1">
        <span>
          {`Function :`}
        </span>
        <span className="text-contrast text-sm">{txDefi.function}</span>
      </div>
      <div className="p-md rounded-xl bg-contrast overflow-scroll">
        <div className="p-md break-all text-sm">
          {txDefi.hex}
        </div>
      </div>
    </div>
    <HoverPopper target={copyPopper}>
      {content}
    </HoverPopper>
    <div className="my-1" />
    <div className="p-md">
      <CopyTemplateButton toCopy={txDefi.hex} copied={copied}>
        <OppositeTextButton className="w-full text-xl"
          onMouseEnter={copyPopper.use}
          onMouseLeave={copyPopper.unset}>
          Copy Hex
        </OppositeTextButton>
      </CopyTemplateButton>
    </div>
    <div className="my-1" />
  </DialogFull>
}
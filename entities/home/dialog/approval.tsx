import { OppositeTextButton, OppositeTextButtonRounded, TextButtonStatic } from "components/buttons/button"
import { OutlineNoSymbolIcon } from "components/icons/heroicons"
import { TitleDialog } from "components/layout/utils"
import { DialogFull } from "components/modals/dialog"
import { HoverPopper, HoverPopperTuto } from "components/modals/popper"
import { useSelectWallet } from "components/test/context/selectwallet"
import { useBoolean } from "libs/react/boolean"
import { useElement } from "libs/react/element"
import { ApprovalProps, CloseProps } from "libs/react/props"
import { ntos } from "libs/types/number"
import Image from "next/image"
import { ApprovalDetailDialog } from "./approvalDetails"

export function ApprovalDialog(props: CloseProps) {

  const { close } = props

  const wallet = useSelectWallet()

  const comingPopper = useElement()

  return <DialogFull close={close}>
    <TitleDialog close={close}>
      <span className="w-full grow text-center text-xl">
        Token approval
      </span>
    </TitleDialog>
    <div className="my-2" />
    <div className="grow p-md w-full flex flex-col gap-4 overflow-scroll">
      {!wallet.approved
        ? <div className="flex flex-col text-center flex-center">
          <div className="my-4" />
          <span className="text-xl text-colored">No approval available yet</span>
          <span className="text-contrast">Interact with contracts, then you can see the approval here</span>
        </div>
        : wallet.approved.map(approval =>
          <Approval key={1} approval={approval} />)}
    </div>
    <div className="my-1" />
    <HoverPopper target={comingPopper}>
      {"Coming soon"}
    </HoverPopper>
    <div className="p-md">
      <OppositeTextButton className="w-full text-xl"
        onMouseEnter={comingPopper.use} onMouseLeave={comingPopper.unset}>
        Revoke all
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </DialogFull>
}

function Approval(props: ApprovalProps) {

  const { approval } = props

  const revokePopper = useElement()
  const dialog = useBoolean()
  const wallet = useSelectWallet()

  const onRevokeClick = ((e: any) => {
    wallet.approved?.splice(approval.id)
    e.stopPropagation()
  })

  return <>
    {dialog.current && <ApprovalDetailDialog close={dialog.disable} approval={approval} />}
    <TextButtonStatic onClick={dialog.enable}>
      <div className="w-full flex items-center gap-4">
        <Image src={approval.asset.icon}
          alt={approval.asset.name} width={34} height={34} />
        <div className="flex flex-col text-left text-xs">
          <span className=" text-colored">{approval.spenderName}</span>
          {approval.allowance
            ? <span className=" text-contrast">{`${ntos(approval.allowance)} ${approval.asset.name}`}</span>
            : <span className=" text-contrast">{`unlimited ${approval.asset.name}`}</span>}
        </div>
        <div className="grow" />
        <HoverPopperTuto target={revokePopper}>
          {"Revoke approval"}
        </HoverPopperTuto>
        <OppositeTextButtonRounded onClick={onRevokeClick}
          onMouseEnter={revokePopper.use}
          onMouseLeave={revokePopper.unset}>
          <OutlineNoSymbolIcon className="icon-sm" />
        </OppositeTextButtonRounded>
      </div>
    </TextButtonStatic>
  </>
}


import { CopyButton, EtherscanButton, LinkButton } from "components/buttons/actionButton"
import { OppositeTextButton } from "components/buttons/button"
import { FromTo } from "components/buttons/fromTo"
import { TitleDialog } from "components/layout/utils"
import { DialogFull } from "components/modals/dialog"
import { HoverPopper } from "components/modals/popper"
import { useSelectWallet } from "components/test/context/selectwallet"
import { useElement } from "libs/react/element"
import { ApprovalProps, CloseProps } from "libs/react/props"
import { ntos } from "libs/types/number"
import Image from "next/image"

export function ApprovalDetailDialog(props: CloseProps & ApprovalProps) {

  const { close, approval } = props

  const wallet = useSelectWallet()

  const comingPopper = useElement()

  return <DialogFull close={close}>
    <TitleDialog close={close}>
      <span className="w-full grow text-center text-xl">
        Approval information
      </span>
    </TitleDialog>
    <div className="my-1" />
    <div className="flex flex-col flex-center gap-2">
      <ApprovalInfo approval={approval} />
      <ApprovalButton approval={approval} />
    </div>
    <div className="my-1" />
    <div className="grow flex flex-col items-start gap-2">
      <FromTo from={wallet.address} to={approval.spenderAddress} />
      <ApprovalTxInfo approval={approval} />
    </div>
    <div className="my-1" />
    <HoverPopper target={comingPopper}>
      {"Coming soon"}
    </HoverPopper>
    <div className="p-md">
      <OppositeTextButton className="w-full  text-xl"
        onMouseEnter={comingPopper.use}
        onMouseLeave={comingPopper.unset}>
        {"Revoke approval"}
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </DialogFull>
}

function ApprovalInfo(props: ApprovalProps) {

  const { approval } = props

  return <div className={`group rounded-xl p-md`}>
    <div className="flex flex-col flex-center text-center">
      <Image src={approval.asset.icon}
        alt={approval.asset.name} width={34} height={34} />
      <div className="my-1" />
      {approval.allowance
        ? <span className="w-full text-2xl text-colored">{`${approval.allowance} ${approval.asset.name}`}</span>
        : <span className="w-full text-2xl text-colored">{`unlimited ${approval.asset.name}`}</span>}
      <span className="text-contrast text-xl text-contrast">{`${approval.tx.slice(0, 5)}...${approval.tx.slice(-5)}`}</span>
    </div>
  </div>
}


function ApprovalTxInfo(props: ApprovalProps) {

  const { approval } = props

  return <div className="w-full px-6">
    <Info label="Last update" content={approval.date} />
    <Info label="Spender" content={approval.spenderName} />
    <div className="p-md w-full flex justify-between items-center">
      <span>{"Allowance"}</span>
      {approval.allowance
        ? <span className="text-contrast">{`${ntos(approval.allowance)} ${approval.asset.name}`}</span>
        : <span className="text-contrast">{`unlimited ${approval.asset.name}`}</span>}
    </div>
    <Info label="Gas price" content={`${0.32}$`} />
  </div>
}

function Info(props: { label: string, content: string | number }) {

  const { label, content } = props

  return <div className="p-md w-full flex justify-between items-center">
    <span>{label}</span>
    <span className="text-contrast">{content}</span>
  </div>
}

function ApprovalButton(props: ApprovalProps) {

  const { approval } = props

  return <div className="flex items-center gap-8">
    <CopyButton toCopy={approval.tx} />
    <EtherscanButton link={`tx/${approval.tx}`} />
    <LinkButton link={`https://${approval.spenderName}`} content="Go to approved spender" />
  </div>
}
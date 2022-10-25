
import { OutlineArrowTopRightOnSquareIcon, OutlineArrowUpRightIcon, OutlineCircleStackIcon, OutlineClipboardDocumentCheckIcon, OutlineClipboardDocumentIcon, OutlineCodeBracketIcon, OutlineGlobeAltIcon, OutlineKeyIcon, OutlineQrCodeIcon, OutlineTrashIcon } from "components/icons/heroicons"
import { WalletInformationsDialog } from "components/layout/dialog/wallet/informations"
import { HoverPopperTuto } from "components/modals/popper"
import { useSelectWallet } from "components/test/context/selectwallet"
import { ApprovalDialog } from "entities/home/dialog/approval"
import { useBoolean } from "libs/react/boolean"
import { useElement } from "libs/react/element"
import { OppositeTextButtonRounded } from "./button"
import { CopyTemplateButton } from "./copy"


export function WalletButton() {

  const wallet = useSelectWallet()

  return <div className="flex flex-center gap-8">
    <CopyButton toCopy={wallet.address} />
    <QrCodeButton />
    <ApprovalButton />
    <EtherscanButton link={`address/${wallet.address}`} />
  </div>
}

function QrCodeButton() {

  const qrPopper = useElement()
  const select = useBoolean()

  return <>
    {select.current && <WalletInformationsDialog close={select.disable} />}
    <HoverPopperTuto target={qrPopper}>
      {"Show wallet info"}
    </HoverPopperTuto>
    <OppositeTextButtonRounded onClick={select.enable}
      onMouseEnter={qrPopper.use}
      onMouseLeave={qrPopper.unset}>
      <OutlineQrCodeIcon className="icon-md" />
    </OppositeTextButtonRounded>
  </>
}

function ApprovalButton() {

  const approvalPopper = useElement()
  const select = useBoolean()

  return <>
    {select.current && <ApprovalDialog close={select.disable} />}
    <HoverPopperTuto target={approvalPopper}>
      {"Show token approval"}
    </HoverPopperTuto>
    <OppositeTextButtonRounded onClick={select.enable}
      onMouseEnter={approvalPopper.use}
      onMouseLeave={approvalPopper.unset}>
      <OutlineKeyIcon className="icon-md" />
    </OppositeTextButtonRounded>
  </>
}

export function EtherscanButton(props: { link: string }) {

  const { link } = props

  const extenalPopper = useElement()

  return <>
    <HoverPopperTuto target={extenalPopper}>
      View on etherscan
    </HoverPopperTuto>
    <OppositeTextButtonRounded
      onMouseEnter={extenalPopper.use}
      onMouseLeave={extenalPopper.unset}>
      <div className="flex justify-center items-center gap-2 group-enabled:group-active:scale-90 transition-transform">
        <OutlineArrowTopRightOnSquareIcon className="icon-md" />
      </div>
    </OppositeTextButtonRounded>
  </>
}

export function LinkButton(props: { link: string, content: string }) {

  const { link, content } = props

  const extenalPopper = useElement()

  return <>
    <HoverPopperTuto target={extenalPopper}>
      {content}
    </HoverPopperTuto>
    <OppositeTextButtonRounded
      onMouseEnter={extenalPopper.use}
      onMouseLeave={extenalPopper.unset}>
      <div className="flex justify-center items-center gap-2 group-enabled:group-active:scale-90 transition-transform">
        <OutlineGlobeAltIcon className="icon-md" />
      </div>
    </OppositeTextButtonRounded>
  </>
}

export function CopyButton(props: { toCopy: string }) {

  const { toCopy } = props

  const copyPopper = useElement()
  const copied = useBoolean()
  const content = !copied.current ? "Copy to clipboard" : "Copy successfully"

  return <>
    <HoverPopperTuto target={copyPopper}>
      {content}
    </HoverPopperTuto>
    <CopyTemplateButton toCopy={toCopy} copied={copied}>
      <OppositeTextButtonRounded className="transition-all"
        onMouseEnter={copyPopper.use}
        onMouseLeave={copyPopper.unset}>
        {!copied.current
          ? < OutlineClipboardDocumentIcon className="icon-md" />
          : < OutlineClipboardDocumentCheckIcon className="icon-md" />}
      </OppositeTextButtonRounded>
    </CopyTemplateButton>

  </>
}

export function RemoveButton(props: { toRemove: string }) {

  const { toRemove } = props

  const removePopper = useElement()

  return <>
    <HoverPopperTuto target={removePopper}>
      {`Coming soon`}
    </HoverPopperTuto>
    <OppositeTextButtonRounded
      onMouseEnter={removePopper.use}
      onMouseLeave={removePopper.unset}>
      < OutlineTrashIcon className="icon-md" />
    </OppositeTextButtonRounded>
  </>
}

export function SendButton(props: & { toSend: string, onClick?: any }) {

  const { toSend, onClick } = props

  const sendPopper = useElement()

  return <>
    <HoverPopperTuto target={sendPopper}>
      {`Send ${toSend}`}
    </HoverPopperTuto>
    <OppositeTextButtonRounded className="dark:border border-violet11" onClick={onClick}
      onMouseEnter={sendPopper.use}
      onMouseLeave={sendPopper.unset}>
      <OutlineArrowUpRightIcon className="icon-sm" />
    </OppositeTextButtonRounded>
  </>
}

export function SendButtonMd(props: & { toSend: string, onClick?: any }) {

  const { toSend, onClick } = props

  const sendPopper = useElement()

  return <>
    <HoverPopperTuto target={sendPopper}>
      {`Send ${toSend}`}
    </HoverPopperTuto>
    <OppositeTextButtonRounded onClick={onClick}
      onMouseEnter={sendPopper.use}
      onMouseLeave={sendPopper.unset}>
      <OutlineArrowUpRightIcon className="icon-md" />
    </OppositeTextButtonRounded>
  </>
}


export function HexButton(props: { onClick?: any }) {

  const { onClick } = props

  const hexPopper = useElement()

  return <>
    <HoverPopperTuto target={hexPopper}>
      {`View Hex`}
    </HoverPopperTuto>
    <OppositeTextButtonRounded onClick={onClick}
      onMouseEnter={hexPopper.use}
      onMouseLeave={hexPopper.unset}>
      <OutlineCodeBracketIcon className="icon-md" />
    </OppositeTextButtonRounded>
  </>
}

export function DataButton(props: { onClick?: any }) {

  const { onClick } = props

  const dataPopper = useElement()

  return <>
    <HoverPopperTuto target={dataPopper}>
      {`View Data`}
    </HoverPopperTuto>
    <OppositeTextButtonRounded onClick={onClick}
      onMouseEnter={dataPopper.use}
      onMouseLeave={dataPopper.unset}>
      <OutlineCircleStackIcon className="icon-md" />
    </OppositeTextButtonRounded>
  </>
}
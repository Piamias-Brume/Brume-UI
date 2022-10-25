import { HoverPopperTuto } from "components/modals/popper"
import { useBoolean } from "libs/react/boolean"
import { useElement } from "libs/react/element"
import { ContrastTextButton } from "./button"
import { CopyTemplateButton } from "./copy"

export function FromTo(props: { from: string, to: string }) {

  const { from, to } = props

  return <div className="p-md w-full flex gap-4 flex-center">
    <CopyAddressButton label="From" address={from} />
    <CopyAddressButton label="To" address={to} />
  </div>
}

function CopyAddressButton(props: { label: string, address: string }) {

  const { label, address } = props

  const copyPopper = useElement()
  const copied = useBoolean()
  const content = !copied.current ? "Copy to clipboard" : "Copy successfully"

  return <>
    <HoverPopperTuto target={copyPopper}>
      {content}
    </HoverPopperTuto>
    <CopyTemplateButton toCopy={address} copied={copied}>
      <ContrastTextButton className="w-full"
        onMouseEnter={copyPopper.use}
        onMouseLeave={copyPopper.unset}>
        <div className="flex flex-col">
          <span className="text-colored">{label}</span>
          <span className="text-xs text-contrast">{`${address.slice(0, 5)}...${address.slice(-5)}`}</span>
        </div>
      </ContrastTextButton>
    </CopyTemplateButton>
  </>
}
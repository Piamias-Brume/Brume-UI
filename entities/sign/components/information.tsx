import { ContrastTextButton } from "components/buttons/button"
import { CopyTemplateButton } from "components/buttons/copy"
import { HoverPopperTuto } from "components/modals/popper"
import { useSelectWallet } from "components/test/context/selectwallet"
import { TxDefi } from "components/test/data/defi"

import { getWalletBalance } from "libs/crypto/balance"
import { useBoolean } from "libs/react/boolean"
import { useElement } from "libs/react/element"
import { ntos } from "libs/types/number"


export function SignInfo(props: { txDefi: TxDefi }) {

  const { txDefi } = props

  const copied = useBoolean()
  const copyPopper = useElement()
  const linkPopper = useElement()
  const content = !copied.current ? "Copy to clipboard" : "Copy successfully"

  return <div className="p-md flex flex-col flex-center gap-1">
    <span className="text-center text-xl">{"You have a "}<span className="text-colored">signature request</span>{" from"}</span>
    <div className="flex flex-col items-center">
      <HoverPopperTuto target={linkPopper}>
        {"Go to origin"}
      </HoverPopperTuto>
      <ContrastTextButton className="text-contrast"
        onMouseEnter={linkPopper.use}
        onMouseLeave={linkPopper.unset}>
        {txDefi.origin}
      </ContrastTextButton>
      <HoverPopperTuto target={copyPopper}>
        {content}
      </HoverPopperTuto>
      <CopyTemplateButton toCopy={txDefi.asset.address} copied={copied}>
        <ContrastTextButton className="text-contrast"
          onMouseEnter={copyPopper.use}
          onMouseLeave={copyPopper.unset}>
          {`${txDefi.asset.address.slice(0, 7)}...${txDefi.asset.address.slice(-7)}`}
        </ContrastTextButton>
      </CopyTemplateButton>

    </div>
  </div>
}

export function WalletInfoCopy() {

  const wallet = useSelectWallet()

  const copyPopper = useElement()
  const copied = useBoolean()
  const content = !copied.current ? "Copy address to clipboard" : "Address copy successfully"

  return <div className="flex flex-col flex-center gap-2">
    <HoverPopperTuto target={copyPopper}>
      {content}
    </HoverPopperTuto>
    <CopyTemplateButton toCopy={wallet.address} copied={copied}>
      <ContrastTextButton
        onMouseEnter={copyPopper.use}
        onMouseLeave={copyPopper.unset}>
        <div className="flex flex-col items-center">
          <span className="text-xl">
            {wallet.name}
          </span>
          <span className="text-contrast">
            {`${wallet.address.slice(0, 5)}...${wallet.address.slice(-5)}`}
          </span>
          <span className="text-">{`${ntos(getWalletBalance(wallet), 1)}$`}</span>
        </div>
      </ContrastTextButton>
    </CopyTemplateButton>
  </div>
}
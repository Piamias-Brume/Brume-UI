
import { WalletButton } from "components/buttons/actionButton"
import { ContrastTextButton, NakedTextButtonStatic } from "components/buttons/button"
import { useRoute } from "components/context/router"
import { BrumeWalletIcon } from "components/icons/brumeWallet"
import { OutlineArrowLeftIcon, OutlineCog6ToothIcon } from "components/icons/heroicons"
import { HoverPopperTuto } from "components/modals/popper"
import { useSelectWallet } from "components/test/context/selectwallet"
import { getWalletBalance } from "libs/crypto/balance"
import { useBoolean } from "libs/react/boolean"
import { useElement } from "libs/react/element"
import { ntos } from "libs/types/number"
import { OptionDialog } from "./dialog/header/option"
import { SelectWalletDialog } from "./dialog/wallet/selectWallet"

export function WalletInfo(props: { button?: boolean, path?: string }) {

  const { button, path } = props

  const wallet = useSelectWallet()
  const selectWallet = useBoolean()
  const route = useRoute()

  const walletPopper = useElement()
  const optionPopper = useElement()
  const option = useBoolean()

  return <div className="flex flex-col flex-center gap-2">
    {selectWallet.current && <SelectWalletDialog close={selectWallet.disable} />}
    {option.current && <OptionDialog close={option.disable} />}
    <div className="w-full flex px-4 justify-between items-start">
      {!path
        ? <div className="w-[50px]">
          <BrumeWalletIcon className="w-[40px] h-[34px]" address={wallet.address} />
        </div>
        : <div className="w-[50px]">
          <button className="p-1 bg-ahover rounded-xl" onClick={() => route.set(path)}>
            <OutlineArrowLeftIcon className="icon-xs" />
          </button>
        </div>}
      <HoverPopperTuto target={walletPopper}>
        Switch, create or import wallet
      </HoverPopperTuto>
      <ContrastTextButton onClick={selectWallet.enable}
        onMouseEnter={walletPopper.use}
        onMouseLeave={walletPopper.unset}>
        <div className="flex flex-col items-center">
          <span className="text-xl">
            {wallet.name}
          </span>
          <span className="text-contrast">
            {`${wallet.address.slice(0, 5)}...${wallet.address.slice(-5)}`}
          </span>
          <span className="text-contrast">{`${ntos(getWalletBalance(wallet), 1)}$`}</span>
        </div>
      </ContrastTextButton>
      <div className=" w-[50px] flex flex-row-reverse">
        <button className="p-1 rounded-xl bg-ahover" onClick={option.enable}
          onMouseEnter={optionPopper.use}
          onMouseLeave={optionPopper.unset}>
          <OutlineCog6ToothIcon className="icon-xs" />
        </button>
      </div>
    </div>
    {button && <WalletButton />}
  </div>
}

export function WalletInfoNaked() {

  const wallet = useSelectWallet()
  const selectWallet = useBoolean()
  const option = useBoolean()
  const optionPopper = useElement()

  return <div className="flex flex-col flex-center gap-2">
    {selectWallet.current && <SelectWalletDialog close={selectWallet.disable} />}
    {option.current && <OptionDialog close={option.disable} />}
    <div className="w-full flex px-4 justify-between items-start">
      <div className="w-[50px]">
        <BrumeWalletIcon className="w-[40px] h-[34px]" address={wallet.address} />
      </div>
      <NakedTextButtonStatic>
        <div className="flex flex-col items-center">
          <span className="text-xl">
            {wallet.name}
          </span>
          <span className="text-contrast">
            {`${wallet.address.slice(0, 5)}...${wallet.address.slice(-5)}`}
          </span>
          <span className="text-contrast">{`${ntos(getWalletBalance(wallet), 1)}$`}</span>
        </div>
      </NakedTextButtonStatic>
      <div className=" w-[50px] flex flex-row-reverse">
        <button className="p-1 rounded-xl bg-ahover" onClick={option.enable}
          onMouseEnter={optionPopper.use}
          onMouseLeave={optionPopper.unset}>
          <OutlineCog6ToothIcon className="icon-xs" />
        </button>
      </div>
    </div>
  </div>
}
import { OppositeTextButton, OppositeTextButtonRounded, TextButtonStatic } from "components/buttons/button"
import { BrumeWalletIcon } from "components/icons/brumeWallet"
import { OutlineCheckIcon, OutlinePencilIcon } from "components/icons/heroicons"
import { InputBorder } from "components/input/input"
import { TitleDialog } from "components/layout/utils"
import { DialogFull } from "components/modals/dialog"
import { HoverPopperTuto } from "components/modals/popper"
import { useWallet } from "components/test/context/wallet"
import { getWalletBalance } from "libs/crypto/balance"
import { useBoolean } from "libs/react/boolean"
import { useElement } from "libs/react/element"
import { CloseProps, WalletProps } from "libs/react/props"
import { useString } from "libs/react/string"
import { ntos } from "libs/types/number"
import { useCallback } from "react"
import { CreateWalletDialog } from "./createWallet"
import { ImportWalletDialog } from "./importWallet"

export function SelectWalletDialog(props: CloseProps) {

  const { close } = props

  const walletGlobal = useWallet()
  const createWallet = useBoolean()
  const importWallet = useBoolean()

  return <>
    {createWallet.current && <CreateWalletDialog close={createWallet.disable} />}
    {importWallet.current && <ImportWalletDialog close={importWallet.disable} />}
    <DialogFull close={close}>
      <TitleDialog close={close}>
        <span className="w-full grow text-center text-xl">
          Select your wallet
        </span>
      </TitleDialog>
      <div className="my-2" />
      <div className="grow p-md w-full flex flex-col gap-4 overflow-scroll">
        {walletGlobal.wallets.map(wallet =>
          <Wallet key={wallet.id} close={close} wallet={wallet} set={walletGlobal.set} />)
        }
      </div>
      <div className="my-1" />
      <div className="p-md">
        <OppositeTextButton className="w-full  text-xl"
          onClick={createWallet.enable}>
          Create account
        </OppositeTextButton>
        <div className="my-4" />
        <OppositeTextButton className="w-full  text-xl"
          onClick={importWallet.enable}>
          Import account
        </OppositeTextButton>
      </div>
      <div className="my-1" />
    </DialogFull>
  </>
}

function Wallet(props: CloseProps & WalletProps & { set: (id: number) => void }) {

  const { close, wallet, set } = props

  const changeName = useBoolean()
  const newName = useString(wallet.name)
  const namePopper = useElement()

  const onSlectWallet = useCallback(() => {
    set(wallet.id)
    close()
  }, [close, wallet, set])

  const onChangeName = (() => {
    wallet.name = newName.current
    namePopper.unset()
    changeName.disable()
  })

  const onEnter = ((e: any) => {
    if (e.key === "Enter") onChangeName()
  })

  const onBrushClick = ((e: any) => {
    changeName.enable()
    e.stopPropagation()
  })

  return <>
    {changeName.current
      ? <TextButtonStatic>
        <div className="w-full flex items-center gap-4">
          <BrumeWalletIcon address={wallet.address} className="w-[40px] h-[34px] shrink-0" />
          <InputBorder className="text-xs dark:border border-violet11" stringHandle={newName} onKeyDown={onEnter} oicon={OutlineCheckIcon} onIconClick={onChangeName}>
            New name
          </InputBorder>
        </div>
      </TextButtonStatic>
      : <TextButtonStatic onClick={onSlectWallet}>
        <div className="w-full h-[38px] grow flex items-center gap-4">
          <BrumeWalletIcon address={wallet.address} className="w-[40px] h-[34px] shrink-0" />
          <div className="flex flex-col text-left text-xs">
            <span className="text-colored">{`${wallet.name.slice(0, 15)}`}</span>
            <span className="text-contrast">{`${ntos(getWalletBalance(wallet))}$`}</span>
          </div>
          {wallet.ledger
            ? <div className="grow flex flex-col text-contrast text-xs text-right">
              <span>{`${wallet.address.slice(0, 3)}...${wallet.address.slice(-3)}`}</span>
              <span className="text-xs">Ledger</span>
            </div>
            : <div className="grow text-contrast text-xs text-right">
              <span>{`${wallet.address.slice(0, 3)}...${wallet.address.slice(-3)}`}</span>
            </div>}
        </div>
        <HoverPopperTuto target={namePopper}>
          {"Change name"}
        </HoverPopperTuto>
        <OppositeTextButtonRounded onClick={onBrushClick}
          onMouseEnter={namePopper.use}
          onMouseLeave={namePopper.unset}>
          <OutlinePencilIcon className="icon-sm" />
        </OppositeTextButtonRounded>
      </TextButtonStatic>}
  </>
}
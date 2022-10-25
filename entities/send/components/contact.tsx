import { OppositeTextButtonRounded, TextButtonStatic } from "components/buttons/button"
import { BrumeWalletIcon } from "components/icons/brumeWallet"
import { OutlineCheckIcon, OutlinePencilIcon } from "components/icons/heroicons"
import { InputBorder } from "components/input/input"
import { HoverPopperTuto } from "components/modals/popper"
import { useSelectWallet } from "components/test/context/selectwallet"
import { useWallet } from "components/test/context/wallet"
import { getWalletBalance } from "libs/crypto/balance"
import { useBoolean } from "libs/react/boolean"
import { useElement } from "libs/react/element"
import { CloseProps, RecentProps, StringHandleProps, WalletProps } from "libs/react/props"
import { useString } from "libs/react/string"
import { ntos } from "libs/types/number"
import { useCallback } from "react"

export function MyWalletSection(props: StringHandleProps & CloseProps) {

  const { stringHandle, close } = props

  const walletGlobal = useWallet()

  return <div className="grow px-3 w-full flex flex-col gap-4 overflow-scroll">
    {walletGlobal.wallets.length === 1
      ? <div className="flex flex-col text-center flex-center">
        <div className="my-2" />
        <span className="text-xl text-colored">You do not have another address yet</span>
        <span className="text-contrast">Create a new one, import it or add a hardware wallet to find it in this section</span>
      </div>
      : walletGlobal.wallets.map(wallet =>
        <MyWallet key={wallet.id} wallet={wallet} stringHandle={stringHandle} close={close} />)
    }
  </div>
}

function MyWallet(props: StringHandleProps & WalletProps & CloseProps) {

  const { stringHandle, wallet, close } = props

  const walletSelect = useSelectWallet()

  const onSectionClick = useCallback(() => {
    stringHandle?.set(wallet.address)
    close()
  }, [stringHandle, wallet, close])

  if (walletSelect === wallet) return null

  return <TextButtonStatic onClick={onSectionClick}>
    <div className="w-full flex items-center gap-4 h-[40px]">
      <BrumeWalletIcon address={wallet.address} className="w-[40px] h-[34px] shrink-0" />
      <div className="flex flex-col text-xs text-left">
        <span className="text-colored">{wallet.name}</span>
        <span className="text-contrast">{`${wallet.address.slice(0, 4)}...${wallet.address.slice(-4)}`}</span>
      </div>
      {!wallet.ledger
        ? <div className="grow text-right text-xs text-contrast">
          <span>{`${ntos(getWalletBalance(wallet))}$`}</span>
        </div>
        : <div className="grow flex flex-col text-right text-xs text-contrast">
          <span>{`${ntos(getWalletBalance(wallet))}$`}</span>
          <span>Ledger</span>
        </div>}
    </div>
  </TextButtonStatic>
}

export function RecentlySection(props: StringHandleProps & CloseProps) {

  const { stringHandle, close } = props

  const wallet = useSelectWallet()

  return <div className="w-full px-3 flex flex-col gap-4 overflow-scroll" >
    {!wallet.recently
      ? <div className="flex flex-col text-center flex-center">
        <div className="my-2" />
        <span className="text-xl text-colored">You have not interacted with any address recently</span>
        <span className="text-contrast">Get in connection with an address and you will be able to rename and re-interact with it in one click</span>
      </div>
      : wallet.recently?.map(wallet =>
        <RecentWallet key={wallet.address} wallet={wallet} stringHandle={stringHandle} close={close} />)
    }
  </div >
}

function RecentWallet(props: StringHandleProps & RecentProps & CloseProps) {

  const { stringHandle, wallet, close } = props

  const changeName = useBoolean()
  const newName = useString(wallet.name)
  const namePopper = useElement()

  const onSectionClick = useCallback(() => {
    stringHandle?.set(wallet.address)
    close()
  }, [stringHandle, wallet, close])

  const onChangeName = (() => {
    wallet.name = newName.current
    changeName.disable()
  })

  const onEnter = ((e: any) => {
    if (e.key === "Enter") onChangeName()
  })

  const onBrushClick = ((e: any) => {
    changeName.enable()
    namePopper.unset()
    e.stopPropagation()
  })

  return <div className="flex w-full items-center gap-2">
    {changeName.current
      ? <TextButtonStatic className="w-full">
        <div className="w-full flex items-center gap-4">
          <BrumeWalletIcon address={wallet.address} className="w-[40px] h-[34px] shrink-0" />
          <InputBorder className="text-xs dark:border border-violet11" stringHandle={newName} onKeyDown={onEnter} oicon={OutlineCheckIcon} onIconClick={onChangeName}>
            New name
          </InputBorder>
        </div>
      </TextButtonStatic>
      : <TextButtonStatic className="w-full" onClick={onSectionClick}>
        <div className="w-full h-[38px] flex items-center gap-4">
          <BrumeWalletIcon address={wallet.address} className="w-[40px] h-[34px] shrink-0" />
          {wallet.name === "" || !wallet.name
            ? <span className="text-left text-xs text-colored">{`${wallet.address.slice(0, 4)}...${wallet.address.slice(-4)}`}</span>
            : <div className="flex flex-col text-xs text-left text-colored">
              <span>{`${wallet.name.slice(0, 15)}`}</span>
              <span className="text-contrast">{`${wallet.address.slice(0, 4)}...${wallet.address.slice(-4)}`}</span>
            </div>}
          <div className="flex flex-col text-xs text-right text-contrast grow">
            <span>{`${wallet.date}`}</span>
            <span className="text-contrast">{"10 BNB"}</span>
          </div>
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
  </div>
}
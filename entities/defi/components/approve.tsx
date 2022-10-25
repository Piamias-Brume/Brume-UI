
import { NakedTextButtonStatic, OppositeTextButtonRounded } from "components/buttons/button"
import { BrumeWalletIcon } from "components/icons/brumeWallet"
import { OutlineCheckIcon, OutlineCog6ToothIcon, OutlinePencilIcon } from "components/icons/heroicons"
import { InputBorder } from "components/input/input"
import { OptionDialog } from "components/layout/dialog/header/option"
import { HoverPopper } from "components/modals/popper"
import { useSelectWallet } from "components/test/context/selectwallet"
import { TxDefi } from "components/test/data/defi"
import { useBoolean } from "libs/react/boolean"
import { useElement } from "libs/react/element"
import { useString } from "libs/react/string"
import Image from "next/image"

export function ApprovalInfo(props: { txDefi: TxDefi }) {

  const { txDefi } = props

  const wallet = useSelectWallet()
  const optionPopper = useElement()
  const option = useBoolean()

  return <div className="flex flex-col flex-center gap-2">
    {option.current && <OptionDialog close={option.disable} />}
    <div className="w-full flex px-4 justify-between items-start">
      <BrumeWalletIcon className="w-[40px] h-[34px]" address={wallet.address} />
      <ApprovalDetails txDefi={txDefi} />
      <button className="p-1 rounded-xl bg-ahover" onClick={option.enable}
        onMouseEnter={optionPopper.use}
        onMouseLeave={optionPopper.unset}>
        <OutlineCog6ToothIcon className="icon-xs" />
      </button>
    </div>
  </div>
}

export function ApprovalDetails(props: { txDefi: TxDefi }) {

  const { txDefi } = props

  const changeAmount = useBoolean()
  const amountApprove = useString((txDefi.asset.amount).toString())
  const warningPopper = useElement()

  const onChangeAmountClick = (() => {
    if (amountApprove.current === "") return
    changeAmount.disable()
  })

  const onEnter = ((e: any) => {
    if (e.key === "Enter") onChangeAmountClick()
  })

  return <>
    <HoverPopper target={warningPopper}>
      {`Warning, you are going to approve ${amountApprove.current} to `} <span className="break-all">{txDefi.origin}</span>
    </HoverPopper>
    <NakedTextButtonStatic onMouseEnter={warningPopper.use}
      onMouseLeave={warningPopper.unset}>
      <div className="flex flex-col items-center">
        <Image src={txDefi.asset.icon}
          alt="token" width={34} height={34} />
        <span className="text-colored text-xl">
          {`${txDefi.type}`}
        </span>
        {!changeAmount.current
          ? <>
            <div className="flex items-center gap-2">
              <span className="text-contrast text-lg">{`${amountApprove.current} ${txDefi.asset.name}`}</span>
              <OppositeTextButtonRounded className="" onClick={changeAmount.toggle}>
                <OutlinePencilIcon className="icon-xs" />
              </OppositeTextButtonRounded>
            </div>
            <div className="h-[6px]" />
          </>
          : <InputBorder className="w-[150px]" stringHandle={amountApprove}
            onKeyDown={onEnter} oicon={OutlineCheckIcon} onIconClick={onChangeAmountClick}>
            New amount
          </InputBorder>}
      </div>
    </NakedTextButtonStatic>
  </>
}

import { NakedTextButtonStatic } from "components/buttons/button"
import { BrumeWalletIcon } from "components/icons/brumeWallet"
import { OutlineCog6ToothIcon } from "components/icons/heroicons"
import { OptionDialog } from "components/layout/dialog/header/option"
import { useSelectWallet } from "components/test/context/selectwallet"
import { TxDefi } from "components/test/data/defi"
import { useBoolean } from "libs/react/boolean"
import { useElement } from "libs/react/element"
import { ntos } from "libs/types/number"
import Image from "next/image"


export function DefiInfo(props: { txDefi: TxDefi }) {

  const { txDefi } = props

  const wallet = useSelectWallet()
  const optionPopper = useElement()
  const option = useBoolean()


  return <div className="flex flex-col flex-center gap-2">
    {option.current && <OptionDialog close={option.disable} />}
    <div className="w-full flex px-4 justify-between items-start">
      <BrumeWalletIcon className="w-[40px] h-[34px]" address={wallet.address} />
      <NakedTextButtonStatic>
        <div className="flex flex-col items-center">
          <Image src={txDefi.asset.icon}
            alt="token" width={34} height={34} />
          <span className="text-colored text-xl">
            {`${txDefi.asset.amount} ${txDefi.asset.name}`}
          </span>
          <span className="text-contrast text-lg">{`${ntos(txDefi.asset.dollarVallue * txDefi.asset.amount)}$`}</span>
        </div>
      </NakedTextButtonStatic>
      <button className="p-1 rounded-xl bg-ahover" onClick={option.enable}
        onMouseEnter={optionPopper.use}
        onMouseLeave={optionPopper.unset}>
        <OutlineCog6ToothIcon className="icon-xs" />
      </button>
    </div>
  </div>
}
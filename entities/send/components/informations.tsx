
import { OutlineInformationCircleIcon } from "components/icons/heroicons"
import { HoverPopper } from "components/modals/popper"
import { useElement } from "libs/react/element"
import { ntos } from "libs/types/number"


export function FeeInfo() {

  const infoPopper = useElement()

  return <div className="px-2 flex justify-between items-start">
    <div className="flex items-center gap-2 text-colored">
      <span>Estimated gas fee</span>
      <HoverPopper target={infoPopper}>
        Fees are an estimate and can change
      </HoverPopper>
      <OutlineInformationCircleIcon className="icon-xs"
        onMouseEnter={infoPopper.use}
        onMouseLeave={infoPopper.unset} />
    </div>
    <div className="flex flex-col text-right text-contrast">
      <span>0.32 $</span>
      <span className="text-xs">Max fee : 0.51$</span>
    </div>
  </div>
}

export function TotalInfo(props: { amount: number, dollarValue: number }) {

  const { amount, dollarValue } = props

  return <div className="px-2 flex justify-between items-start">
    <div className="flex items-center gap-2 text-colored">
      <span>Total cost</span>
    </div>
    <div className="flex flex-col text-right text-contrast">
      <span>{`${ntos(amount * dollarValue + 0.32)}$`}</span>
      <span className="text-xs">{`Max cost : ${ntos(amount * dollarValue + 0.51)}$`}</span>
    </div>
  </div>
}


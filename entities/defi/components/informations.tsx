
import { InputBorder } from "components/input/input"
import { ErrorMessage } from "components/notifications/error"
import { Token } from "components/test/interface/wallet"
import { FeeInfo, TotalInfo } from "entities/send/components/informations"
import { StringHandle } from "libs/react/string"
import { useMemo } from "react"


export function InformationConfirm(props: { txDefi: any, disabled: boolean, nonce: StringHandle, asset: Token[] }) {

  const { txDefi, nonce, asset } = props

  const content = useMemo(() => {
    if (nonce.current === "") return "Enter a valid nonce"
    if (asset[0].amount < txDefi.asset.amount) return "Insufficient funds"
    return null
  }, [nonce, asset, txDefi])

  return <>
    <div className="px-2 flex justify-between items-start">
      <span className="text-colored">Origin</span>
      <span className="text-right text-contrast">{txDefi.origin}</span>
    </div>
    <div className="my-1" />
    <div className="px-2 flex justify-between items-center">
      <span className="text-colored">Nonce</span>
      <InputBorder stringHandle={nonce} className="text-sm max-w-[65px] text-contrast text-center">
        Nonce
      </InputBorder>
    </div>
    <div className="my-1" />
    <FeeInfo />
    <div className="my-1" />
    <TotalInfo amount={0} dollarValue={txDefi.asset.dollarVallue} />
    <div className="my-1" />
    {content && <ErrorMessage>
      {content}
    </ErrorMessage>}
  </>
}
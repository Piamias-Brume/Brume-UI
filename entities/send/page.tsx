import { Header } from "components/layout/header"
import { WalletInfo } from "components/layout/informations"
import { ErrorMessage } from "components/notifications/error"
import { useSelectAsset } from "components/test/context/asset"
import { useSelectWallet } from "components/test/context/selectwallet"
import { useString } from "libs/react/string"
import { useMemo } from "react"
import { SendButton } from "./components/button"
import { FeeInfo, TotalInfo } from "./components/informations"
import { SelectAmount, SendInput } from "./components/input"
import { SelectAssets } from "./components/token"


export function SendPage() {

  const wallet = useSelectWallet()
  const assetSelect = useSelectAsset()

  const adress = useString()
  const sendValue = useString()

  const validAddress = useMemo(() => {
    if (adress.current.length === 42) return true
    return false
  }, [adress])

  const content = useMemo(() => {
    if (!validAddress) return "Enter a valid address"
    if (sendValue?.current === "") return "Enter a valid ammount"
    if (parseFloat(sendValue!.current) > assetSelect.asset!.amount) return "Insufficient funds"
    return ""
  }, [sendValue, assetSelect, validAddress])


  return <div className="flex flex-col h-full">
    <Header />
    <div className="my-3" />
    <WalletInfo path={"home"} />
    <div className="my-3" />
    <SendInput stringHandle={adress} validAddress={validAddress} />
    <div className="p-md flex flex-col gap-4 grow">
      <SelectAssets assets={wallet.assets} token={assetSelect} />
      <SelectAmount token={assetSelect} stringHandle={sendValue} />
      {content === ""
        ? <div className="animate-scale flex flex-col gap-2">
          <FeeInfo />
          <TotalInfo amount={parseFloat(sendValue.current)} dollarValue={assetSelect.asset!.dollarVallue} />
        </div>
        : <ErrorMessage>
          {content}
        </ErrorMessage>}
    </div>
    <div className="my-1" />
    <div className="p-md">
      <SendButton stringHandle={sendValue} validAddress={validAddress} />
    </div>
    <div className="my-1" />
  </div >
}
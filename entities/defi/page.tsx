
import { DataButton, HexButton, LinkButton } from "components/buttons/actionButton"
import { FromTo } from "components/buttons/fromTo"
import { Header } from "components/layout/header"
import { useSelectWallet } from "components/test/context/selectwallet"
import { TxDefi } from "components/test/data/defi"
import { useBoolean } from "libs/react/boolean"
import { useString } from "libs/react/string"
import { useMemo } from "react"
import { ApprovalInfo } from "./components/approve"
import { ConfirmButton } from "./components/button"
import { DefiInfo } from "./components/defi"
import { InformationConfirm } from "./components/informations"
import { HexInformationsDialog } from "./dialog/hexInformation"



export function DefiConfirmPage(props: { txDefi: TxDefi }) {

  const { txDefi } = props

  const wallet = useSelectWallet()
  const dialog = useBoolean()

  const asset = wallet.assets.filter(asset => asset.name === txDefi.asset.name)
  const nonce = useString("7")

  const disabled = useMemo(() => {
    if (nonce.current === "") return true
    if (asset.length === 0) return true
    if (asset[0].amount < txDefi.asset.amount) return true
    return false
  }, [asset, txDefi, nonce])

  return <>
    {dialog.current && <HexInformationsDialog close={dialog.disable} txDefi={txDefi} />}
    <div className="flex flex-col h-full">
      <Header />
      <div className="my-1" />
      {txDefi.type === "Approve"
        ? <ApprovalInfo txDefi={txDefi} />
        : <DefiInfo txDefi={txDefi} />}
      <div className="my-1" />
      <div className="flex flex-center gap-8">
        <HexButton onClick={dialog.enable} />
        <DataButton />
        <LinkButton link={txDefi.origin} content={"Go to origin"} />
      </div>
      <div className="my-1" />
      <FromTo from={wallet.address} to={"0x0000000000000000000000000000000000000000"} />
      <div className="flex flex-col grow p-md">
        <InformationConfirm txDefi={txDefi} disabled={disabled} nonce={nonce} asset={asset} />
      </div>
      <ConfirmButton disabled={disabled} />
      <div className="my-1" />
    </div >
  </>
}


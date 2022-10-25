
import { EtherscanButton, RemoveButton, SendButtonMd } from "components/buttons/actionButton"
import { OppositeTextButton } from "components/buttons/button"
import { RefreshButton } from "components/buttons/refresh"
import { useRoute } from "components/context/router"
import { TitleDialog } from "components/layout/utils"
import { DialogFull } from "components/modals/dialog"
import { HoverPopper } from "components/modals/popper"
import { useSelectWallet } from "components/test/context/selectwallet"
import { Transaction } from "entities/home/history/components/transaction"
import { useElement } from "libs/react/element"
import { AssetProps, CloseProps } from "libs/react/props"
import { ntos } from "libs/types/number"
import Image from "next/image"
import { useCallback } from "react"

export function AssetsDialog(props: CloseProps & AssetProps) {

  const { close, asset } = props

  const onRefreshClick = (() => {

  })

  const comingPopper = useElement()

  return <DialogFull close={close}>
    <TitleDialog close={close}>
      <span className="w-full grow text-center text-xl">
        {`${asset.name} informations`}
      </span>
    </TitleDialog>
    <div className="my-2" />
    <div className="flex flex-col flex-center gap-2">
      <AssetsInfo asset={asset} />
      <AssetsButton asset={asset} />
    </div>
    <div className="my-1" />
    <div className="flex flex-row-reverse px-4">
      <RefreshButton content="Refresh list" onClick={onRefreshClick} />
    </div>
    <TxListToken tokenName={asset.name} />
    <div className="my-1" />
    <HoverPopper target={comingPopper}>
      {"Coming soon"}
    </HoverPopper>
    <div className="p-md">
      <OppositeTextButton className="w-full  text-xl"
        onMouseEnter={comingPopper.use}
        onMouseLeave={comingPopper.unset}>
        {`Clear ${asset.name} history`}
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </DialogFull>
}

export function AssetsInfo(props: AssetProps) {

  const { asset } = props

  return <div className={`group rounded-xl p-md`}>
    <div className="flex flex-col flex-center text-center">
      <Image src={asset.icon}
        alt="token" width={34} height={34} />
      <div className="my-1" />
      <span className="w-full text-2xl text-colored">
        {`${asset.amount} ${asset.name}`}
      </span>
      <span className="text-contrast text-xl">{`${ntos(asset.dollarVallue * asset.amount)}$`}</span>
    </div>
  </div>
}

function AssetsButton(props: AssetProps) {

  const { asset } = props

  const route = useRoute()

  const onSendClick = useCallback(() => {
    route.set("home/send")
  }, [route])

  return <div className="flex items-center gap-8">
    <EtherscanButton link={`token/${asset.address}`} />
    <SendButtonMd toSend={asset.name} onClick={onSendClick} />
    <RemoveButton toRemove={asset.name} />
  </div>
}

function TxListToken(props: { tokenName: string }) {

  const { tokenName } = props

  const wallet = useSelectWallet()
  const assetHistory = wallet.history.filter(history => history.token?.name === tokenName)

  return <div className="grow w-full p-md flex flex-col gap-4 overflow-scroll">
    {assetHistory.length === 0
      ? <div className="flex flex-col text-center flex-center">
        <div className="my-2" />
        <span className="text-xl text-colored">{`No ${tokenName} tx available yet`}</span>
        <span className="text-contrast">{`Buy ${tokenName}, Try refreshing the list or interact with a contract`}</span>
      </div>
      : assetHistory.map(history =>
        <Transaction key={1} history={history} />)
    }
  </div>
}


import { SendButton } from "components/buttons/actionButton"
import { TextButtonStatic } from "components/buttons/button"
import { useRoute } from "components/context/router"
import { Asset, useSelectAsset } from "components/test/context/asset"
import { useSelectWallet } from "components/test/context/selectwallet"
import { useBoolean } from "libs/react/boolean"
import { AssetProps } from "libs/react/props"
import { ntos } from "libs/types/number"
import Image from "next/image"
import { useCallback } from "react"
import { AssetsDialog } from "../dialog/asset"

export function TokenList() {

  const wallet = useSelectWallet()
  const assetSelect = useSelectAsset()

  return <div className="grow w-full p-md flex flex-col overflow-scroll gap-4">
    {wallet.assets.length === 0
      ? <div className="flex flex-col text-center flex-center">
        <div className="my-2" />
        <span className="text-xl text-colored">No assets available yet</span>
        <span className="text-contrast">Buy asset, Try refreshing the list or import a token</span>
      </div>
      : wallet.assets.map(asset =>
        <Token key={1} asset={asset} select={assetSelect} />)
    }
  </div>
}

function Token(props: AssetProps & { select: Asset }) {

  const { asset, select } = props

  const dialog = useBoolean()
  const route = useRoute()

  const onSectionClick = useCallback(() => {
    select.set(asset)
    dialog.enable()
  }, [select, dialog, asset])

  const onSendClick = ((e: any) => {
    select.set(asset)
    route.set("home/send")
    e.stopPropagation()
  })

  return <>
    {dialog.current && <AssetsDialog close={dialog.disable} asset={asset} />}
    <TextButtonStatic onClick={onSectionClick}>
      <div className="w-full flex items-center gap-4 px-4">
        <Image src={asset.icon}
          alt={asset.name} width={34} height={34} />
        <div className="flex flex-col text-left text-colored">
          <span>{`${asset.amount} ${asset.name}`}</span>
          <span className="text-xs text-contrast">{`${ntos(asset.dollarVallue * asset.amount)}$`}</span>
        </div>
        <div className="grow" />
        <SendButton onClick={onSendClick} toSend={asset.name} />
      </div>
    </TextButtonStatic>
  </>
}
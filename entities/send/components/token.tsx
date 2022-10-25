import { TextButtonStatic } from "components/buttons/button"
import { OutlineChevronDownIcon } from "components/icons/heroicons"
import { Popper } from "components/modals/popper"
import { Asset } from "components/test/context/asset"
import { Token } from "components/test/interface/wallet"
import { useElement } from "libs/react/element"
import { AssetProps, TargetProps } from "libs/react/props"
import { ntos } from "libs/types/number"
import Image from "next/image"
import { useCallback } from "react"



export function SelectAssets(props: { assets: Token[], token: Asset }) {

  const { assets, token } = props

  const assetsPopper = useElement()

  return <>
    {assetsPopper.current &&
      <Popper target={assetsPopper}>
        <TokenList target={assetsPopper} assets={assets} token={token} />
      </Popper>
    }
    <TextButtonStatic className="h-[58px] px-4" oicon={OutlineChevronDownIcon} boolean={!(!assetsPopper.current)}
      onClick={assetsPopper.use}>
      <div className="w-full flex items-center gap-4">
        <Image src={token.asset!.icon}
          alt="token" width={34} height={34} />
        <div className="flex flex-col text-left">
          <span className="text-colored">{`${token.asset!.amount} ${token.asset!.name}`}</span>
          <span className="text-xs text-contrast">{`${ntos(token.asset!.amount * token.asset!.dollarVallue)}$`}</span>
        </div>
      </div>
    </TextButtonStatic>
  </>
}

function TokenList(props: TargetProps & { assets: Token[], token: Asset }) {

  const { target, assets, token } = props

  return <div className="flex flex-col gap-2 max-h-[200px] overflow-scroll">
    {assets.length === 0
      ? <div className="flex flex-col text-center flex-center">
        <div className="my-2" />
        <span className="text-xl text-colored">No assets available yet</span>
        <span className="text-contrast">Buy asset, Try refreshing the list or import a token</span>
        <div className="my-2" />
      </div>
      : assets.map(asset =>
        <TokenElem key={1} target={target} asset={asset} token={token} />
      )
    }
  </div>
}

function TokenElem(props: TargetProps & AssetProps & { token: Asset }) {

  const { target, asset, token } = props

  const onButtonClick = useCallback(() => {
    token.set(asset)
    target.unset()
  }, [target, token, asset])

  return <button className={`w-[290px] rounded-xl p-md bg-component dark:ahover:bg-violet11 transition-colors`}
    onClick={onButtonClick}>
    <div className="flex items-center gap-4 text-base">
      <Image src={asset.icon}
        alt={asset.name} width={34} height={34} />
      <span className="text-colored">{`${asset.amount} ${asset.name}`}</span>
      <div className="grow" />
      <span className="text-contrast">{`${ntos(asset.amount * asset.dollarVallue)}$`}</span>
    </div>
  </button>
}
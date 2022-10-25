
import { OppositeTextButton, TextButton } from "components/buttons/button"
import { Network } from "components/context/network"
import { OutlineCheckIcon } from "components/icons/heroicons"
import { DialogFull } from "components/modals/dialog"
import { HoverPopper } from "components/modals/popper"
import { useBoolean } from "libs/react/boolean"
import { useElement } from "libs/react/element"
import { CloseProps, NetworkProps } from "libs/react/props"
import Image from "next/image"
import { TitleDialog } from "../../utils"
import { AddNetworkDialog } from "./addNetwork"



export function NetworkSelectionDialog(props: CloseProps & NetworkProps) {

  const { close, network } = props

  const addNetwork = useBoolean()

  const comingPopper = useElement()

  return <DialogFull close={close}>
    {addNetwork.current && <AddNetworkDialog close={addNetwork.disable} />}
    <TitleDialog close={close}>
      <span className="w-full grow text-center text-xl">
        Select your network
      </span>
    </TitleDialog>
    <div className="my-2" />
    <div className="grow p-md w-full flex flex-col gap-4 overflow-scroll">
      <NetworkButton close={close} icon="/network/bnb.svg" networkName="Binance Smart Chain" network={network} newNetwork={"binanceSmartChain"} />
      <NetworkButton close={close} icon="/network/ethereummainnet.svg" networkName="Ethereum Mainnet" network={network} newNetwork={"ethereumMainnet"} />
      <NetworkButton close={close} icon="/network/ethereumtesnet.svg" networkName="Ethereum Tesnet" network={network} newNetwork={"ethereumTesnet"} />
      <NetworkButton close={close} icon="/network/avalanche.svg" networkName="Avalanche" network={network} newNetwork={"avalanche"} />
      <NetworkButton close={close} icon="/network/polygon.svg" networkName="Polygon" network={network} newNetwork={"polygon"} />
      <NetworkButton close={close} icon="/network/optimism.svg" networkName="Optimism" network={network} newNetwork={"optimism"} />
    </div>
    <div className="my-1" />
    <HoverPopper target={comingPopper}>
      {"Coming soon"}
    </HoverPopper>
    <div className="p-md">
      <OppositeTextButton className="w-full  text-xl"
        onMouseEnter={comingPopper.use}
        onMouseLeave={comingPopper.unset}>
        Add Network
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </DialogFull>
}

function NetworkButton(props: CloseProps & NetworkProps & { icon: string, networkName: string, newNetwork: Network }) {

  const { close, network, icon, networkName, newNetwork } = props

  const onNetworkClick = (() => {
    network.set(newNetwork, icon)
    close()
  })

  return <TextButton onClick={onNetworkClick}>
    <div className="w-full flex items-center">
      <div className="flex items-center gap-4 grow">
        <Image src={icon}
          alt={network.current} width={34} height={34} />
        <span>{networkName}</span>
      </div>
      {network.current === newNetwork && <OutlineCheckIcon className="icon-md" />}
    </div>
  </TextButton>
}

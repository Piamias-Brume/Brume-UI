
import { ContrastTextButton } from "components/buttons/button";
import { useNetwork } from "components/context/network";
import { useRoute } from "components/context/router";
import { OutlineShieldCheckIcon, OutlineShieldExclamationIcon } from "components/icons/heroicons";
import { HoverPopperTuto } from "components/modals/popper";
import { useBoolean } from "libs/react/boolean";
import { useElement } from "libs/react/element";
import Image from "next/image";
import { useMemo } from "react";
import { ConnectHandleDialog } from "./dialog/header/connect";
import { NetworkSelectionDialog } from "./dialog/network/selectNetwork";
import { Title } from "./utils";

export function Header() {

  return <>
    <Title>
      <TorButton />
      <NetworkButton />
      <LogButton />
    </Title>
  </>
}

function NetworkButton() {

  const route = useRoute()

  const networkPopper = useElement()
  const network = useNetwork()
  const selectNetwork = useBoolean()

  const content = useMemo(() => {
    if (route.current === "home" || route.current == "send") return "Select your network"
    networkPopper.unset()
  }, [route, networkPopper])

  const networkName = useMemo(() => {
    if (network.current === "ethereumMainnet")
      return "Ethereum Mainnet"
    if (network.current === "ethereumTesnet")
      return "Ethereum Tesnet"
    if (network.current === "avalanche")
      return "Avalanche"
    if (network.current === "polygon")
      return "Polygon"
    if (network.current === "optimism")
      return "Optimism"
    return "Bnb Smart Chain"
  }, [network])

  const onButtonClick = (() => {
    if (route.current === "home" || route.current == "send") return selectNetwork.enable()
  })

  return <>
    {selectNetwork.current && <NetworkSelectionDialog close={selectNetwork.disable} network={network} />}
    <HoverPopperTuto target={networkPopper}>
      {content}
    </HoverPopperTuto>
    <ContrastTextButton className="w-full"
      onClick={onButtonClick}
      onMouseEnter={networkPopper.use}
      onMouseLeave={networkPopper.unset}>
      <span className="text-xs">
        {networkName}
      </span>
      <Image src={network.icon} alt={network.current} width={16} height={16} />
    </ContrastTextButton>
  </>
}

function TorButton() {

  const tor = useBoolean(true)
  const torPopper = useElement()

  return <>
    <HoverPopperTuto target={torPopper}>
      Switch tor protection
    </HoverPopperTuto>
    <ContrastTextButton className="w-[100px]"
      onMouseEnter={torPopper.use}
      onMouseLeave={torPopper.unset}
      onClick={tor.toggle}>
      <span className="text-xs">
        Tor
      </span>
      {tor.current
        ? <OutlineShieldCheckIcon className="icon-xs text-grass8" />
        : <OutlineShieldExclamationIcon className="icon-xs text-tomato8" />}
    </ContrastTextButton>
  </>
}

function LogButton() {

  const logPopper = useElement()
  const handleConnect = useBoolean()

  return <>
    {handleConnect.current && <ConnectHandleDialog close={handleConnect.disable} />}
    <HoverPopperTuto target={logPopper}>
      Show connected site
    </HoverPopperTuto>
    <ContrastTextButton className="w-[100px]"
      onClick={handleConnect.enable}
      onMouseEnter={logPopper.use}
      onMouseLeave={logPopper.unset}>
      <div className="w-2 h-2 bg-grass8 rounded-full" />
      <span className="text-xs">
        Log
      </span>
    </ContrastTextButton>
  </>
}
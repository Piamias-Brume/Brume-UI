
import { OppositeTextButton, OppositeTextButtonRounded, TextButtonStatic } from "components/buttons/button"
import { OutlineArrowRightOnRectangleIcon } from "components/icons/heroicons"
import { TitleDialog } from "components/layout/utils"
import { DialogFull } from "components/modals/dialog"
import { HoverPopper, HoverPopperTuto } from "components/modals/popper"
import { useSelectWallet } from "components/test/context/selectwallet"
import { useElement } from "libs/react/element"
import { CloseProps, SiteProps } from "libs/react/props"
import Image from "next/image"


export function ConnectHandleDialog(props: CloseProps) {

  const { close } = props

  const wallet = useSelectWallet()

  const comingPopper = useElement()

  return <DialogFull close={close}>
    <TitleDialog close={close}>
      <span className="w-full grow text-center text-xl">
        Connected sites
      </span>
    </TitleDialog>
    <div className="my-2" />
    <div className="grow p-md w-full flex flex-col gap-4 overflow-scroll">
      {!wallet.connected
        ? <div className="flex flex-col text-center flex-center">
          <div className="my-4" />
          <span className="text-xl text-colored">No connected site available</span>
          <span className="text-contrast">Go to a site and connect your wallet, you can see it here</span>
        </div>
        : wallet.connected.map(site =>
          <ConnectedSite key={site.id} site={site} />)
      }
    </div>
    <div className="my-1" />
    <HoverPopper target={comingPopper}>
      {"Coming soon"}
    </HoverPopper>
    <div className="p-md">
      <OppositeTextButton className="w-full text-xl"
        onMouseEnter={comingPopper.use}
        onMouseLeave={comingPopper.unset}>
        Disconnect All
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </DialogFull>
}

function ConnectedSite(props: SiteProps) {

  const { site } = props

  const logPopper = useElement()

  return <TextButtonStatic>
    <div className="w-full flex items-center gap-4">
      <Image src={site.icon}
        alt={site.site} width={34} height={34} />
      <span className="text-xs">{site.site}</span>
      <div className="grow" />
      <HoverPopperTuto target={logPopper}>
        {`log out from ${site.site}`}
      </HoverPopperTuto>
      <OppositeTextButtonRounded
        onMouseEnter={logPopper.use}
        onMouseLeave={logPopper.unset}>
        <OutlineArrowRightOnRectangleIcon className="icon-sm" />
      </OppositeTextButtonRounded>
    </div>
  </TextButtonStatic>
}
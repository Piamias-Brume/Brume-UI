
import { OppositeTextButton, OppositeTextButtonRounded, TextButton } from "components/buttons/button"
import { useRoute } from "components/context/router"
import { useTheme } from "components/context/theme"
import { useTutorial } from "components/context/tutorial"
import { DiscordIcon, GithubIcon, TwitterIcon } from "components/icons/brand"
import { OutlineInformationCircleIcon, OutlineLockClosedIcon, OutlinePencilIcon, OutlineShieldCheckIcon } from "components/icons/heroicons"
import { TitleDialog } from "components/layout/utils"
import { DialogFull } from "components/modals/dialog"
import { HoverPopper } from "components/modals/popper"
import { useBoolean } from "libs/react/boolean"
import { useElement } from "libs/react/element"
import { CloseProps } from "libs/react/props"

export function OptionDialog(props: CloseProps) {

  const { close } = props

  const route = useRoute()

  const customization = useBoolean()
  const about = useBoolean()

  const comingPopper = useElement()
  const comingPopper2 = useElement()

  return <DialogFull close={close}>
    <TitleDialog close={close}>
      <span className="w-full grow text-center text-xl">
        Wallet options
      </span>
    </TitleDialog>
    <div className="my-2" />
    <div className="p-md flex flex-col w-full gap-4 overflow-scroll">
      <OppositeTextButton className="w-full " oicon={OutlineLockClosedIcon} onClick={() => route.set("unlock")}>
        Lock
      </OppositeTextButton>
      <div className="flex flex-col gap-4 w-full">
        <OppositeTextButton onClick={customization.toggle} className="w-full " oicon={OutlinePencilIcon}>
          Customization
        </OppositeTextButton>
        {customization.current && <Customization />}
      </div>
      <HoverPopper target={comingPopper}>
        {"Coming soon"}
      </HoverPopper>
      <div className="flex flex-col gap-4 w-full">
        <OppositeTextButton className="w-full" oicon={OutlineShieldCheckIcon}
          onMouseEnter={comingPopper.use}
          onMouseLeave={comingPopper.unset}>
          Security
        </OppositeTextButton>
      </div>
      <HoverPopper target={comingPopper2}>
        {"Coming soon"}
      </HoverPopper>
      <div className="flex flex-col gap-4 w-full"
        onMouseEnter={comingPopper2.use}
        onMouseLeave={comingPopper2.unset}>
        <OppositeTextButton className="w-full" oicon={OutlineInformationCircleIcon}>
          About
        </OppositeTextButton>
        {about.current && <About />}
      </div>
    </div>
    <div className="grow" />
    <div className="my-1" />
    <div className="p-md">
      <OppositeTextButton className="w-full text-xl" onClick={close}>
        Save Change
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </DialogFull>
}

function Customization() {
  return <>
    <Theme />
    <Tutorial />
  </>
}

function About() {
  return <>
    <div className="flex flex-col flex-center gap-2">
      <span className="text-center text-colored">Our networks</span>
      <div className="flex items-center gap-4 ">
        <OppositeTextButtonRounded>
          <TwitterIcon className="icon-md" />
        </OppositeTextButtonRounded>
        <OppositeTextButtonRounded>
          <GithubIcon className="icon-md" />
        </OppositeTextButtonRounded>
        <OppositeTextButtonRounded>
          <DiscordIcon className="icon-md" />
        </OppositeTextButtonRounded>
      </div>
    </div>
  </>
}

export function Theme() {

  const comingPopper = useElement()
  const comingPopper2 = useElement()

  const theme = useTheme()

  return <div className="flex flex-col flex-center gap-2">
    <span className="text-center text-colored">Theme</span>
    <div className="flex items-center gap-2 text-sm">
      {theme.stored === "light"
        ? <OppositeTextButton>Light</OppositeTextButton>
        : <TextButton onClick={() => theme.set("light")}>Light</TextButton>}
      <HoverPopper target={comingPopper}>
        {"Coming soon"}
      </HoverPopper>
      {theme.stored === undefined
        ? <OppositeTextButton>System</OppositeTextButton>
        : <TextButton onMouseEnter={comingPopper.use} onMouseLeave={comingPopper.unset}>System</TextButton>}
      <HoverPopper target={comingPopper2}>
        {"Coming soon"}
      </HoverPopper>
      {theme.stored === "dark"
        ? <OppositeTextButton>Dark</OppositeTextButton>
        : <TextButton onMouseEnter={comingPopper2.use} onMouseLeave={comingPopper2.unset}>Dark</TextButton>}
    </div>
  </div>
}

export function Tutorial() {

  const tutorial = useTutorial()

  return <div className="flex flex-col flex-center gap-2">
    <span className="text-colored text-center">Tutorial</span>
    <div className="flex items-center gap-2 text-sm">
      {tutorial.current
        ? <OppositeTextButton>Enable</OppositeTextButton>
        : <TextButton onClick={() => tutorial.set(true)}>Enable</TextButton>}
      {tutorial.current
        ? <TextButton onClick={() => tutorial.set(false)}>Disable</TextButton>
        : <OppositeTextButton>Disable</OppositeTextButton>}
    </div>
  </div>
}

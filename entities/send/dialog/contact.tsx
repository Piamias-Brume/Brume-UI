
import { OppositeTextButtonDeploy } from "components/buttons/button"
import { TitleDialog } from "components/layout/utils"
import { DialogFull } from "components/modals/dialog"
import { useBoolean } from "libs/react/boolean"
import { CloseProps, StringHandleProps } from "libs/react/props"
import { useMemo } from "react"
import { MyWalletSection, RecentlySection } from "../components/contact"


export function ContactDialog(props: CloseProps & StringHandleProps) {

  const { close, stringHandle } = props

  const recent = useBoolean()
  const myWallet = useBoolean(true)

  const height = useMemo(() => {
    if (recent.current && myWallet.current) return "max-h-[225px]"
    return "max-h-[410px]"
  }, [recent, myWallet])

  return <DialogFull close={close}>
    <TitleDialog close={close}>
      <span className="w-full grow text-center text-xl">
        Address book
      </span>
    </TitleDialog>
    <div className="my-2" />
    <div className="p-md flex flex-col gap-4">
      <div className={`flex flex-col gap-4 overflow-scroll ${height}`}>
        <OppositeTextButtonDeploy className=" text-xl" onClick={myWallet.toggle} deploy={myWallet}>
          My wallets
        </OppositeTextButtonDeploy>
        {myWallet.current && <MyWalletSection stringHandle={stringHandle} close={close} />}
      </div>
      <div className={`flex flex-col gap-4 overflow-scroll ${height}`}>
        <OppositeTextButtonDeploy className=" text-xl" onClick={recent.toggle} deploy={recent}>
          Recently
        </OppositeTextButtonDeploy>
        {recent.current && <RecentlySection stringHandle={stringHandle} close={close} />}
      </div>
    </div>
  </DialogFull>
}


import { OppositeTextButton } from "components/buttons/button";
import { OutlineCheckIcon } from "components/icons/heroicons";
import { InputBorderLabel } from "components/input/input";
import { TitleDialog } from "components/layout/utils";
import { Dialog } from "components/modals/dialog";
import { ErrorMessage } from "components/notifications/error";
import { useWallet } from "components/test/context/wallet";
import { CloseProps } from "libs/react/props";
import { useString } from "libs/react/string";
import { useMemo } from "react";


export function CreateWalletDialog(props: CloseProps) {

  const { close } = props

  const walletName = useString()
  const globalWallet = useWallet()

  const error = useMemo(() => {
    if (walletName.current === "") return true
    return false
  }, [walletName])

  const onEnter = ((e: any) => {
    if (e.key === "Enter") createWallet()
  })

  const createWallet = (() => {
    if (walletName.current === "") return
    globalWallet.wallets.push({
      id: globalWallet.wallets[globalWallet.wallets.length - 1].id + 1,
      address: "0x0000000000000000000000000000000000000000",
      name: walletName.current,
      ledger: false,
      assets: [],
      history: [],
    })
    globalWallet.set(globalWallet.wallets[globalWallet.wallets.length - 1].id)
    close()
  })

  return <Dialog close={close}>
    <TitleDialog close={close}>
      <span className="w-full grow text-center text-xl">
        Create a wallet
      </span>
    </TitleDialog>
    <div className="my-3" />
    <div className="p-md flex flex-center">
      <InputBorderLabel stringHandle={walletName} onKeyDown={onEnter} oicon={OutlineCheckIcon} onIconClick={createWallet}>
        {"Account name"}
      </InputBorderLabel>
    </div>
    <div className="p-md">
      {error &&
        <ErrorMessage>
          {"Enter a valid name"}
        </ErrorMessage>
      }
    </div>
    <div className="p-md">
      <OppositeTextButton className="w-full text-xl" disabled={error}
        onClick={createWallet}>
        {"Create wallet"}
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </Dialog>
}
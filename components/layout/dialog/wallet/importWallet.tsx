
import { OppositeTextButton, OppositeTextButtonDeploy } from "components/buttons/button";
import { OutlineEyeIcon, OutlineEyeSlashIcon, OutlineTrashIcon } from "components/icons/heroicons";
import { PasswordInput } from "components/input/password";
import { TitleDialog } from "components/layout/utils";
import { DialogFull } from "components/modals/dialog";
import { ErrorMessage } from "components/notifications/error";
import { useWallet } from "components/test/context/wallet";
import { BooleanHandle, useBoolean } from "libs/react/boolean";
import { useInputChange } from "libs/react/events";
import { CloseProps } from "libs/react/props";
import { useString } from "libs/react/string";
import { useEffect, useMemo } from "react";


export function ImportWalletDialog(props: CloseProps) {

  const { close } = props

  const globalWallet = useWallet()

  const privateKey = useString()
  const privateKeySelect = useBoolean(true)
  const phraseSelect = useBoolean()

  const error = useMemo(() => {
    if (phraseSelect.current) return true
    if (privateKey.current === "") return true
    return false
  }, [privateKey, phraseSelect])

  const onEnter = ((e: any) => {
    if (e.key === "Enter") createWallet()
  })

  const createWallet = (() => {
    globalWallet.wallets.push({
      id: globalWallet.wallets[globalWallet.wallets.length - 1].id + 1,
      address: "0x0000000000000000000000000000000000000000",
      name: privateKey.current,
      ledger: false,
      assets: [],
      history: [],
    })
    globalWallet.set(globalWallet.wallets[globalWallet.wallets.length - 1].id)
    close()
  })

  const onKeySectionClick = (() => {
    privateKeySelect.toggle()
    phraseSelect.disable()
  })

  const onPhraseSectionClick = (() => {
    phraseSelect.toggle()
    privateKeySelect.disable()
  })

  return <DialogFull close={close}>
    <TitleDialog close={close}>
      <span className="w-full grow text-center text-xl">
        Import a wallet
      </span>
    </TitleDialog>
    <div className="my-2" />
    <div className="p-md flex flex-col gap-4">
      <OppositeTextButtonDeploy className=" text-xl" onClick={onKeySectionClick} deploy={privateKeySelect}>
        By private key
      </OppositeTextButtonDeploy>
      {privateKeySelect.current && <div className="flex flex-col">
        <div className="my-1" />
        <div className="flex flex-center">
          <PasswordInput label="Your private key" stringHandle={privateKey} onKeyDown={onEnter} />
        </div>
        <div className="my-2" />
        {error && <ErrorMessage>
          {"Enter a valid key"}
        </ErrorMessage>
        }
        <div className="my-1" />
      </div>}
    </div>
    <div className="p-md flex flex-col gap-4">
      <OppositeTextButtonDeploy className="text-xl" onClick={onPhraseSectionClick} deploy={phraseSelect}>
        By secret phrase
      </OppositeTextButtonDeploy>
      {phraseSelect.current && <SecretRecoveryPhrase />}
    </div>
    <div className="grow" />
    <div className="my-1" />
    <div className="p-md">
      <OppositeTextButton className="w-full  text-xl" disabled={error}
        onClick={createWallet}>
        {"Import a wallet"}
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </DialogFull>
}

function SecretRecoveryPhrase() {

  const show = useBoolean()
  const clear = useBoolean()

  const type = useMemo(() => {
    if (show.current) return "text"
    return "password"
  }, [show])

  return <div className="flex flex-col px-2 pb-4">
    <div className="flex items-center gap-2">
      <span>{"Your secret phrase :"}</span>
      <button className="p-2 rounded-xl ahover:bg-ahover text-colored" onClick={show.toggle}>
        {show.current
          ? <OutlineEyeIcon className="icon-sm" />
          : <OutlineEyeSlashIcon className="icon-sm" />}
      </button>
      <button className="p-2 rounded-xl ahover:bg-ahover text-colored" onClick={clear.enable}>
        <OutlineTrashIcon className="icon-sm" />
      </button>
    </div>
    <div className="p-md w-full flex flex-col flex-center gap-2">
      <RowWord index={[1, 2, 3]} type={type} clear={clear} />
      <RowWord index={[4, 5, 6]} type={type} clear={clear} />
      <RowWord index={[7, 8, 9]} type={type} clear={clear} />
      <RowWord index={[10, 11, 12]} type={type} clear={clear} />
    </div>
    <div className={`rounded-xl w-full p-md bg-violet3 border border-violet6 dark:border-0 animate-opacity-scale`} >
      <div className="flex p-0.5 justify-center items-center gap-2">
        <span className="text-violet11 dark:text-white">{"Coming soon"}</span>
      </div>
    </div>
  </div>
}

function RowWord(props: { index: number[], type: string, clear: BooleanHandle }) {

  const { index, type, clear } = props

  return <div className="w-full flex flex-center gap-2">
    <Word index={index[0]} type={type} clear={clear} />
    <Word index={index[1]} type={type} clear={clear} />
    <Word index={index[2]} type={type} clear={clear} />
  </div>
}

function Word(props: { index: number, type: string, clear: BooleanHandle }) {

  const { index, type, clear } = props

  const word = useString()

  const onInputChange = useInputChange(e => {
    const value = e.currentTarget.value
    word.set(value)
  }, [])

  useEffect(() => {
    console.log("ici")
    if (clear.current) word.set("")
    return clear.disable()
  }, [clear, word])

  // TODO: label bug renvoie tj sur le first input
  return <label htmlFor="word" className="w-[80px] flex items-center gap-1 text-xs p-2 bg-violet2 dark:bg-violet11 border border-default rounded-xl">
    <span className="w-[20px] text-contrast">{`#${index}`}</span>
    <input id="word" type={type} value={word.current} onChange={onInputChange} className="w-[40px] outline-none bg-violet2 dark:bg-violet11 text-colored"></input>
  </label>
}
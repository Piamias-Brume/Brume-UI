import { OutlineEyeIcon, OutlineEyeSlashIcon, OutlineTrashIcon } from "components/icons/heroicons";
import { BooleanHandle } from "libs/react/boolean";

export function SecretRecoveryPhraseButton(props: { show: BooleanHandle, clear: BooleanHandle }) {

  const { show, clear } = props

  return <div className="flex items-center gap-2">
    <span className="">{"Your secret recovery phrase :"}</span>
    <button className="p-2 rounded-xl ahover:bg-ahover" onClick={show.toggle}>
      {show.current
        ? <OutlineEyeIcon className="icon-sm" />
        : <OutlineEyeSlashIcon className="icon-sm" />}
    </button>
    <button className="p-2 rounded-xl ahover:bg-ahover" onClick={clear.enable}>
      <OutlineTrashIcon className="icon-sm" />
    </button>
  </div>
}
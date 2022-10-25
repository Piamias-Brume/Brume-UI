import { OutlineCheckIcon } from "components/icons/heroicons";
import { BooleanHandle } from "libs/react/boolean";

export function VerifyIsSaved(props: { saved: BooleanHandle }) {

  const { saved } = props

  return <div className="px-2 flex items-center gap-2">
    {!saved.current
      ? <button className="p-2 rounded-md border border-default dark:border dark:border-violet10 transition-colors" onClick={saved.toggle} />
      : <button className="rounded-md border border-default bg-component dark:bg-violet10 dark:border dark:border-violet10 transition-colors" onClick={saved.toggle}>
        <OutlineCheckIcon className="icon-xs text-colored" />
      </button>}
    <span className="text-sm">
      {"I saved my "}<span className="text-colored">Secret Recovery Phrase</span>
    </span>
  </div>
}
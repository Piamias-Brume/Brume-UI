import { OppositeTextButton } from "components/buttons/button"
import { useRoute } from "components/context/router"

export function ConfirmButton(props: { disabled: boolean }) {

  const { disabled } = props

  const route = useRoute()

  return <div className="p-md flex items-center gap-4">
    <OppositeTextButton className="w-full  text-xl" onClick={() => route.set("home")}>
      Reject
    </OppositeTextButton>
    <OppositeTextButton disabled={disabled} onClick={() => route.set("home")} className="w-full  text-xl">
      Confirm
    </OppositeTextButton>
  </div>
}
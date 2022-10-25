import { OppositeTextButton } from "components/buttons/button"
import { useRoute } from "components/context/router"


export function SignButton(props: { disabled?: boolean }) {

  const { disabled } = props

  const route = useRoute()

  return <div className="flex items-center gap-4">
    <OppositeTextButton className="w-full  text-xl" onClick={(() => route.set("home"))}>
      Reject
    </OppositeTextButton>
    <OppositeTextButton disabled={disabled} onClick={(() => route.set("home"))} className="w-full  text-xl">
      Sign
    </OppositeTextButton>
  </div>
}
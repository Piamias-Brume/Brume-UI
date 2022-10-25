import { OppositeTextButton } from "components/buttons/button"
import { useRoute } from "components/context/router"


export function NewButton() {

  const route = useRoute()

  return <div className="p-md flex flex-col gap-4">
    <OppositeTextButton className=" text-xl" onClick={() => route.set("new/password")}>
      Create Wallet
    </OppositeTextButton>
    <OppositeTextButton className=" text-xl" onClick={() => route.set("new/import")}>
      Import Wallet
    </OppositeTextButton>
  </div>
}
import { RouteHandle } from "components/context/router"
import { TxDefi1, TxDefi2 } from "components/test/data/defi"
import { DefiConfirmPage } from "entities/defi/page"
import { SignaturePage } from "entities/sign/page"

export function DefiRoute(props: { route: RouteHandle }) {

  const { route } = props

  if (route.current === "defi/sign") return <SignaturePage txDefi={TxDefi1} />

  if (route.current === "defi/approval") return <DefiConfirmPage txDefi={TxDefi2} />

  return <DefiConfirmPage txDefi={TxDefi1} />
}
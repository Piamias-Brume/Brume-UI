import { RouteHandle } from "components/context/router"
import { NewPage } from "entities/new/page"
import { NewPasswordPage } from "entities/new/password/page"
import { NewSecretRecoveryPage } from "entities/new/secretRecoveryPhrase/page"
import { VerifyRecoveryPhrasePage } from "entities/new/verifyRecoveryPhrase/page"
import { ImportRoute } from "./import"

export function NewRoute(props: { route: RouteHandle }) {

  const { route } = props

  if (route.current?.startsWith("new/import")) return <ImportRoute />

  if (route.current === "new/password") return <NewPasswordPage route={route} />

  if (route.current === "new/phrase") return <NewSecretRecoveryPage route={route} />

  if (route.current === "new/check") return <VerifyRecoveryPhrasePage route={route} />

  return <NewPage />
}
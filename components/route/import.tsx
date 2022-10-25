import { useRoute } from "components/context/router"
import { ImportPage } from "entities/import/page"
import { PrivateKeyImportPage } from "entities/import/privateKey/page"
import { SecretRecoveryPhraseImportPage } from "entities/import/secretRecoveryPhrase/page"
import { useString } from "libs/react/string"

export function ImportRoute() {

  const route = useRoute()
  const importMethod = useString()

  if (route.current === "new/import/phrase") return <SecretRecoveryPhraseImportPage />

  if (route.current === "new/import/key") return <PrivateKeyImportPage />

  return <ImportPage stringHandle={importMethod} />
}
import { Header } from "components/layout/header"
import { WalletInfo } from "components/layout/informations"

import { useString } from "libs/react/string"
import { Navbar } from "./components/navbar"
import { HistorySection } from "./history/section"
import { TokenSection } from "./token/section"

export function HomePage() {

  const section = useString("tokens")

  return <div className="flex flex-col h-full">
    <Header />
    <div className="my-3" />
    <WalletInfo button />
    <div className="my-3" />
    <Navbar section={section} />
    {section.current === "tokens"
      ? <TokenSection />
      : <HistorySection />}
  </div >
}
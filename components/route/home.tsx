import { RouteHandle } from "components/context/router"
import { HomePage } from "entities/home/page"
import { SendPage } from "entities/send/page"


export function HomeRoute(props: { route: RouteHandle }) {

  const { route } = props

  if (route.current === "home/send") return <SendPage />

  return <HomePage />
}
import { useRoute } from "components/context/router";
import { DefiRoute } from "components/route/defi";
import { HomeRoute } from "components/route/home";
import { NewRoute } from "components/route/new";
import { LockPage } from "entities/lock/page";


export default function Popup() {

  console.log("ici")

  return <div className="w-[337.50px] h-[600px] bg-default">
    <main className="h-full flex flex-col">
      <RouteHandle />
    </main>
  </div>
}

export function RouteHandle() {

  const route = useRoute()

  if (route.current === "lock") return <LockPage />

  if (route.current?.startsWith("home")) return <HomeRoute route={route} />

  if (route.current?.startsWith("new")) return <NewRoute route={route} />

  if (route.current?.startsWith("defi")) return <DefiRoute route={route} />

  return <LockPage />
}
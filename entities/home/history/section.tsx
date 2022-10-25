import { OppositeTextButton } from "components/buttons/button"
import { RefreshButton } from "components/buttons/refresh"
import { HoverPopper } from "components/modals/popper"
import { useElement } from "libs/react/element"
import { TransactionList } from "./components/transaction"

export function HistorySection() {

  const onRefreshClick = (() => {

  })

  const comingPopper = useElement()

  return <>
    <div className="flex flex-row-reverse px-4">
      <RefreshButton className="icon-xs" content="Refresh list" onClick={onRefreshClick} />
    </div>
    <TransactionList />
    <div className="my-1" />
    <HoverPopper target={comingPopper}>
      {"Coming soon"}
    </HoverPopper>
    <div className="p-md">
      <OppositeTextButton className="w-full text-xl" onMouseEnter={comingPopper.use} onMouseLeave={comingPopper.unset}>
        {"Clear History"}
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </>
}
import { OppositeTextButton } from "components/buttons/button"
import { RefreshButton } from "components/buttons/refresh"
import { HoverPopper } from "components/modals/popper"

import { useBoolean } from "libs/react/boolean"
import { useElement } from "libs/react/element"
import { ImportTokenDialog } from "../dialog/importToken"
import { TokenList } from "./components/token"

export function TokenSection() {

  const importTokenDialog = useBoolean()

  const onRefreshClick = (() => {

  })

  const comingPopper = useElement()

  return <>
    {importTokenDialog.current && <ImportTokenDialog close={importTokenDialog.disable} />}
    <div className="flex flex-row-reverse px-4">
      <RefreshButton className="icon-xs" content="Refresh list" onClick={onRefreshClick} />
    </div>
    <TokenList />
    <div className="my-1" />
    <HoverPopper target={comingPopper}>
      {"Coming soon"}
    </HoverPopper>
    <div className="p-md">
      <OppositeTextButton className="w-full text-xl" onMouseEnter={comingPopper.use} onMouseLeave={comingPopper.unset}>
        Import Token
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </>
}
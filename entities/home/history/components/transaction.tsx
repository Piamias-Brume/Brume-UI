import { OppositeTextButtonRounded, TextButtonStatic } from "components/buttons/button"
import { OutlineArrowDownLeftIcon, OutlineArrowPathRoundedSquareIcon, OutlineArrowUpRightIcon, OutlineCheckIcon } from "components/icons/heroicons"
import { useSelectWallet } from "components/test/context/selectwallet"
import { useBoolean } from "libs/react/boolean"
import { HistoryProps } from "libs/react/props"
import { ntos } from "libs/types/number"
import { useMemo } from "react"
import { HistoryDialog } from "../dialog/history"


export function TransactionList() {

  const wallet = useSelectWallet()

  return <div className="grow w-full p-md flex flex-col gap-4 overflow-scroll">
    {wallet.history.length === 0
      ? <div className="flex flex-col text-center flex-center">
        <div className="my-2" />
        <span className="text-xl text-colored">No tx available yet</span>
        <span className="text-contrast">Buy asset, Try refreshing the list or interact with a contract</span>
      </div>
      : wallet.history.map(history =>
        <Transaction key={1} history={history} />)
    }
  </div>
}

export function Transaction(props: HistoryProps) {

  const { history } = props

  const dialog = useBoolean()

  const TxIcon = useMemo(() => {
    if (history.type === "sent") return OutlineArrowUpRightIcon
    if (history.type === "received") return OutlineArrowDownLeftIcon
    if (history.type === "approved") return OutlineCheckIcon
    return OutlineArrowPathRoundedSquareIcon
  }, [history])

  const txName = useMemo(() => {
    if (history.status === "rejected") return "Rejected"
    if (history.type === "sent") return "Sent"
    if (history.type === "received") return "Received"
    if (history.type === "approved") return "Approved"
    return "Contract interaction"
  }, [history])

  return <>
    {dialog.current && <HistoryDialog close={dialog.disable} history={history} />}
    <TextButtonStatic onClick={dialog.enable}>
      <div className="w-full flex items-center gap-4 px-4">
        <OppositeTextButtonRounded>
          <TxIcon className="icon-sm" />
        </OppositeTextButtonRounded>
        <div className="flex flex-col text-left">
          <span className="text-colored">{txName}</span>
          {!history.token
            ? <span className="text-xs text-contrast">{`Sep 19 - ${history.site}`}</span>
            : <span className="text-xs text-contrast">{`Sep 19 - ${history.to.slice(0, 3)}...${history.to.slice(-3)}`}</span>}
        </div>
        {history.token &&
          <div className="flex flex-col text-right text-contrast grow">
            <span>{`${history.token.amount} ${history.token.name}`}</span>
            <span className="text-xs">{`${ntos(history.token.amount * history.token.dollarVallue)}$`}</span>
          </div>}
      </div>
    </TextButtonStatic>
  </>
}
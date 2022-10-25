import { CopyButton, EtherscanButton, RemoveButton } from "components/buttons/actionButton"
import { OppositeTextButtonRounded } from "components/buttons/button"
import { FromTo } from "components/buttons/fromTo"
import { OutlineArrowDownLeftIcon, OutlineArrowPathRoundedSquareIcon, OutlineArrowUpRightIcon, OutlineCheckIcon } from "components/icons/heroicons"
import { TitleDialog } from "components/layout/utils"
import { DialogFull } from "components/modals/dialog"
import { CloseProps, HistoryProps } from "libs/react/props"
import { ntos } from "libs/types/number"
import { useMemo } from "react"


export function HistoryDialog(props: CloseProps & HistoryProps) {

  const { close, history } = props

  return <DialogFull close={close}>
    <TitleDialog close={close}>
      <span className="w-full grow text-center text-xl">
        {`Tx informations`}
      </span>
    </TitleDialog>
    <div className="my-2" />
    <div className="flex flex-col flex-center gap-2">
      <HistoryInfo history={history} />
      <HistoryButton history={history} />
    </div>
    <div className="my-1" />
    <div className="flex flex-col flex-center gap-2">
      <FromTo from={history.from} to={history.to} />
      <TxInfo history={history} />
    </div>
  </DialogFull>
}

function TxInfo(props: HistoryProps) {

  const { history } = props

  const amount = useMemo(() => {
    if (!history.token) return "0"
    return history.token.amount + " " + history.token.name
  }, [history])

  return <>
    <div className="flex flex-col gap-2 w-full px-6">
      <Info label="Status" content={history.status} />
      <Info label="Nonce" content="7" />
      <Info label="Amount" content={amount} />
      <Info label="Gas limit (Units)" content={history.gasLimit} />
      <Info label="Gas price" content={`${history.gasPrice}$`} />
    </div>
    <div className="w-full h-[1px] bg-violet11" />
    <div className="px-6 w-full flex justify-between items-start">
      <span className="text-2xl text-colored">Total</span>
      <div className="flex flex-col text-right text-contrast">
        {history.token
          ? <>
            <span>{`${ntos(history.token?.amount + (history.gasPrice / history.token.dollarVallue))} ${history.token.name}`}</span>
            <span className="">{`${ntos(history.token?.amount * history.token.dollarVallue) + history.gasPrice}$`}</span>
          </>
          : <>
            <span>{`${history.gasPrice}$`}</span>
          </>}
      </div>
    </div>
  </>
}

function Info(props: { label: string, content: string | number }) {

  const { label, content } = props

  const color = content === "confirmed"
    ? "text-grass9"
    : content === "rejected"
      ? "text-tomato9"
      : "text-contrast"

  return <div className="w-full flex justify-between items-center">
    <span>{label}</span>
    <span className={` ${color}`}>{content}</span>
  </div>
}

function HistoryInfo(props: HistoryProps) {

  const { history } = props

  const txName = useMemo(() => {
    if (history.type === "sent") return "Sent"
    if (history.type === "received") return "Received"
    if (history.type === "approved") return "Approved"
    return "Contract interaction"
  }, [history])

  const TxIcon = useMemo(() => {
    if (txName === "Sent") return OutlineArrowUpRightIcon
    if (txName === "Received") return OutlineArrowDownLeftIcon
    if (txName === "Approved") return OutlineCheckIcon
    return OutlineArrowPathRoundedSquareIcon
  }, [txName])

  return <div className={`group rounded-xl p-md`}>
    <div className="flex flex-col items-center">
      <OppositeTextButtonRounded>
        <TxIcon className="icon-md" />
      </OppositeTextButtonRounded>
      <div className="my-1" />
      <span className="w-full text-center text-2xl text-colored">
        {`${txName}`}
      </span>
      <span className="text-xl text-contrast">{`Sep 19 - ${history.to.slice(0, 3)}...${history.to.slice(-3)}`}</span>
    </div>
  </div>
}

function HistoryButton(props: HistoryProps) {

  const { history } = props

  return <div className="flex items-center gap-8">
    <EtherscanButton link={`tx/${history.address}`} />
    <CopyButton toCopy={history.address} />
    <RemoveButton toRemove={"transaction"} />
  </div>
}

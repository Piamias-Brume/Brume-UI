
import { OppositeTextButton } from "components/buttons/button"
import { OutlineBookmarkSquareIcon, OutlineXMarkIcon } from "components/icons/heroicons"
import { InputAmount, InputBorderLabel } from "components/input/input"
import { Asset } from "components/test/context/asset"
import { useBoolean } from "libs/react/boolean"
import { StringHandleProps } from "libs/react/props"
import { ntos } from "libs/types/number"
import { useCallback, useMemo } from "react"
import { ContactDialog } from "../dialog/contact"

export function SendInput(props: StringHandleProps & { validAddress: boolean }) {

  const { stringHandle, validAddress } = props

  const contactBookDialog = useBoolean()

  const onXClick = useCallback(() => {
    stringHandle?.set("")
  }, [stringHandle])

  const onBookmarkClick = useCallback(() => {
    contactBookDialog.enable()
  }, [contactBookDialog])

  return <>
    {contactBookDialog.current && <ContactDialog close={contactBookDialog.disable} stringHandle={stringHandle} />}
    <div className="p-md">
      {!validAddress
        ? <InputBorderLabel className="px-4 text-colored" stringHandle={stringHandle} oicon={OutlineBookmarkSquareIcon} onIconClick={onBookmarkClick}>
          Address
        </InputBorderLabel>
        :
        <InputBorderLabel className="px-4 text-colored" stringHandle={stringHandle} fix oicon={OutlineXMarkIcon} onIconClick={onXClick}>
          Address
        </InputBorderLabel>}
    </div>
  </>
}

export function SelectAmount(props: StringHandleProps & { token: Asset }) {

  const { token, stringHandle } = props

  const value = useMemo(() => {
    if (stringHandle?.current === "") return 0
    return parseFloat(stringHandle!.current) * token.asset!.dollarVallue
  }, [stringHandle, token])

  const onMaxClick = useCallback(() => {
    return stringHandle?.set((token.asset!.amount).toString())
  }, [stringHandle, token])


  return <label htmlFor="inputId" className={`h-[58px] rounded-xl bg-violet2 dark:bg-violet12 p-md border border-default transition-colors`}>
    <div className="flex justify-center items-center gap-4">
      <div className="flex flex-col text-left w-full">
        <div className="flex items-center gap-1">
          <InputAmount id="inputId" stringHandle={stringHandle}>
            Amount
          </InputAmount>
          <span className="text-contrast">{token.asset!.name}</span>
        </div>
        <span className="text-xs text-contrast pl-[8px]">{`${ntos(value)}$`}</span>
      </div>
      <OppositeTextButton className="border-0 w-[90px] dark:border dark:border-violet11" onClick={onMaxClick}>
        Max
      </OppositeTextButton>
    </div>
  </label>
}
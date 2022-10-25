
import { OppositeTextButton, TextButtonStatic } from "components/buttons/button";
import { InputBorderLabel } from "components/input/input";
import { TitleDialog } from "components/layout/utils";
import { DialogFull } from "components/modals/dialog";
import { ErrorMessage } from "components/notifications/error";
import { BNBasset } from "components/test/data/defi";
import { CloseProps } from "libs/react/props";
import { StringHandle, useString } from "libs/react/string";
import { ntos } from "libs/types/number";
import Image from "next/image";
import { useMemo } from "react";


export function ImportTokenDialog(props: CloseProps) {

  const { close } = props

  const tokenContractAddress = useString()
  const tokenSymbol = useString()
  const tokenDecimal = useString()

  const disabled = useMemo(() => {
    if (tokenContractAddress.current === ""
      || tokenSymbol.current === ""
      || tokenDecimal.current === "") return true
    return false
  }, [tokenContractAddress, tokenSymbol, tokenDecimal])

  return <DialogFull close={close}>
    <TitleDialog close={close}>
      <span className="w-full grow text-center text-xl">
        Import token
      </span>
    </TitleDialog>
    <div className="my-4" />
    <ImportTokenInput tokenContractAddress={tokenContractAddress}
      tokenSymbol={tokenSymbol}
      tokenDecimal={tokenDecimal}
      disabled={disabled} />
    <div className="grow" />
    <div className="my-1" />
    <div className="p-md">
      <OppositeTextButton disabled={disabled} className="w-full text-xl" onClick={close}>
        Add token
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </DialogFull >
}


function ImportTokenInput(props: { tokenContractAddress: StringHandle, tokenSymbol: StringHandle, tokenDecimal: StringHandle, disabled: boolean }) {

  const { tokenContractAddress, tokenSymbol, tokenDecimal, disabled } = props

  return <div className="p-md flex flex-col gap-8">
    <InputBorderLabel stringHandle={tokenContractAddress}>
      Token contract address
    </InputBorderLabel>
    <InputBorderLabel stringHandle={tokenSymbol}>
      Token symbol
    </InputBorderLabel>
    <InputBorderLabel stringHandle={tokenDecimal}>
      Token decimal
    </InputBorderLabel>
    <ErrorMessage>
      {"Before manually importing a token, make sure you trust it"}
    </ErrorMessage>
    {!disabled && <TextButtonStatic >
      <div className="w-full flex items-center gap-4 px-4">
        <Image src={BNBasset.icon}
          alt={BNBasset.name} width={34} height={34} />
        <span className="text-colored text-xl">
          {tokenSymbol.current}
        </span>
        <div className="grow" />
        <div className="flex flex-col text-left text-colored">
          <span>{`${BNBasset.amount} ${BNBasset.name}`}</span>
          <span className="text-xs text-contrast">{`${ntos(BNBasset.dollarVallue * BNBasset.amount)}$`}</span>
        </div>
      </div>
    </TextButtonStatic>}
  </div>
}

import { OppositeTextButton } from "components/buttons/button";
import { useRoute } from "components/context/router";
import { TitleStep } from "components/layout/utils";
import { StringHandleProps } from "libs/react/props";
import { ImportMethodButton } from "./components/button";


export function ImportPage(props: StringHandleProps) {

  const { stringHandle } = props

  const route = useRoute()

  const back = (() => {
    route.set("new")
  })

  return <>
    <TitleStep back={back}>
      <span className="text-xl">Choose import method</span>
      <span>1/2</span>
    </TitleStep>
    <div className="my-2" />
    <div className="flex flex-col p-md text-sm text-contrast">
      <span className="text-sm text-contrast">
        {"Import your wallet account with 12-word secret recovery phrase or private key"}
      </span>
      <div className="my-4" />
      <ImportMethodButton stringHandle={stringHandle} />
    </div>
    <div className="grow" />
    <div className="my-1" />
    <div className="p-md w-full">
      <OppositeTextButton disabled={!stringHandle?.current} onClick={() => route.set(`new/import/${stringHandle?.current}`)} className="w-full text-xl">
        Continue
      </OppositeTextButton>
    </div>
    <div className="my-1" />
  </>
}
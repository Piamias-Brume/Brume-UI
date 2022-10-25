
import { OppositeTextButton } from "components/buttons/button"
import { HoverPopper } from "components/modals/popper"
import { useSelectAsset } from "components/test/context/asset"
import { useElement } from "libs/react/element"
import { StringHandleProps } from "libs/react/props"
import { useMemo } from "react"

export function SendButton(props: StringHandleProps & { validAddress: boolean }) {

  const { validAddress, stringHandle } = props

  const token = useSelectAsset()

  const disabled = useMemo(() => {
    if (!validAddress) return true
    if (stringHandle?.current === "") return true
    if (parseFloat(stringHandle!.current) > token.asset!.amount) return true
    return false
  }, [stringHandle, token, validAddress])

  const comingPopper = useElement()

  return <>
    <HoverPopper target={comingPopper}>
      {"Coming soon"}
    </HoverPopper>
    <OppositeTextButton className="w-full text-xl" disabled={disabled} onMouseEnter={comingPopper.use} onMouseLeave={comingPopper.unset}>
      {"Send token"}
    </OppositeTextButton>
  </>
}
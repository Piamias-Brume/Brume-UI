
import { OutlineArrowPathIcon } from "components/icons/heroicons";
import { HoverPopperTuto } from "components/modals/popper";
import { useBoolean } from "libs/react/boolean";
import { useElement } from "libs/react/element";
import { ClassProps } from "libs/react/props";
import { useCallback } from "react";

export function RefreshButton(props: ClassProps & { content: string, onClick: any }) {

  const { content, className, onClick } = props

  const refresh = useBoolean()
  const refreshPopper = useElement()
  const animation = refresh.current ? "animate-spin" : ""

  const onReload = useCallback(() => {
    onClick()
    refresh.enable()
    setTimeout(() => refresh.disable(), 970)
  }, [refresh, onClick])

  return <>
    <HoverPopperTuto target={refreshPopper}>
      {content}
    </HoverPopperTuto>
    <button onClick={onReload} className={`p-1 rounded-xl bg-ahover ${animation}`}
      onMouseEnter={refreshPopper.use}
      onMouseLeave={refreshPopper.unset}>
      <OutlineArrowPathIcon className={className} />
    </button>
  </>
}
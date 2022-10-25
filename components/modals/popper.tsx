import { useTutorial } from "components/context/tutorial"
import { useBoolean } from "libs/react/boolean"
import { useElement } from "libs/react/element"
import { ChildrenProps, TargetProps } from "libs/react/props"
import { usePopper } from "react-popper"
import { Modal } from "./modal"

export const popperNoOffsetOptions: any = {
  placement: "bottom",
  modifiers: [{
    name: 'offset',
    options: {
      offset: [0, 5],
    },
  }]
}

export function HoverPopperTuto(props: TargetProps & ChildrenProps) {

  const { children, target } = props

  const tutorial = useTutorial()
  const element = useElement<HTMLDivElement>()
  const popper = usePopper(
    target.current,
    element.current,
    popperNoOffsetOptions)
  const hovered = useBoolean()

  if (!hovered.current && !target.current)
    return null

  if (!tutorial.current) return null

  return <Modal>
    <div className="fixed px-2"
      style={popper.styles.popper}
      {...popper.attributes.popper}
      onMouseEnter={hovered.enable}
      onMouseLeave={hovered.disable}
      ref={element.set}>
      <div className="p-2 bg-violet2 dark:bg-violet12 border border-default rounded-xl animate-slidedown text-xs">
        {children}
      </div>
    </div>
  </Modal>
}

export function HoverPopper(props: TargetProps & ChildrenProps) {

  const { children, target } = props

  const element = useElement<HTMLDivElement>()
  const popper = usePopper(
    target.current,
    element.current,
    popperNoOffsetOptions)
  const hovered = useBoolean()

  if (!hovered.current && !target.current)
    return null

  return <Modal>
    <div className="fixed px-2"
      style={popper.styles.popper}
      {...popper.attributes.popper}
      onMouseEnter={hovered.enable}
      onMouseLeave={hovered.disable}
      ref={element.set}>
      <div className="p-2 bg-violet2 dark:bg-violet12 border border-default rounded-xl animate-slidedown text-xs">
        {children}
      </div>
    </div>
  </Modal>
}

export function Popper(props: TargetProps & ChildrenProps) {

  const { children, target } = props

  const element = useElement<HTMLDivElement>()
  const popper = usePopper(
    target.current,
    element.current,
    popperNoOffsetOptions)

  return <Modal>
    <div className="fixed inset-0"
      onClick={target.unset} />
    <div className="fixed"
      style={popper.styles.popper}
      {...popper.attributes.popper}
      ref={element.set}>
      <div className="w-full p-2 bg-violet2 dark:bg-violet12 border border-default rounded-xl animate-slidedown text-xs">
        {children}
      </div>
    </div>
  </Modal>
}
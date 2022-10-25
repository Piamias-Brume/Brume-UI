import { OutlineArrowLeftIcon, OutlineXMarkIcon } from "components/icons/heroicons"
import { BackProps, ChildrenProps, CloseProps } from "libs/react/props"

export function Title(props: ChildrenProps) {

  const { children } = props

  return <div className="flex p-md text-colored rounded-b-xl border-b border-violet6 bg-violet2 dark:bg-violet13 dark:border-violet11 flex-center justify-between">
    {children}
  </div>
}

export function TitleStep(props: ChildrenProps & BackProps) {

  const { children, back } = props

  return <div className="flex p-4 text-colored rounded-b-xl border-b border-violet6 bg-violet2 dark:bg-violet13 dark:border-violet11 flex-center justify-between">
    <button onClick={back}>
      <OutlineArrowLeftIcon className="icon-sm" />
    </button>
    {children}
  </div>
}

export function TitleDialog(props: ChildrenProps & CloseProps) {

  const { children, close } = props

  return <div className="flex p-4 text-colored rounded-b-xl border-b border-violet6 bg-violet2 dark:bg-violet13 dark:border-violet11 flex-center justify-between">
    {children}
    <button className="p-1 bg-ahover rounded-xl"
      onClick={close}>
      <OutlineXMarkIcon className="icon-sm" />
    </button>
  </div>
}
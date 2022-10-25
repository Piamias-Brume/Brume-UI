import { ChildrenProps, DivisionProps } from "libs/react/props"

export function ErrorMessage(props: DivisionProps & ChildrenProps) {

  const { className, children } = props

  return <div className={`rounded-xl w-full p-md bg-tomato3 dark:bg-tomato11.5 border border-tomato6 dark:border-0 animate-opacity-scale ${className}`} >
    <div className="flex p-0.5 justify-center items-center gap-2">
      <span className="text-tomato11 dark:text-white">{children}</span>
    </div>
  </div>
}
import { OutlineChevronDownIcon } from "components/icons/heroicons"
import { BooleanHandle, useBoolean } from "libs/react/boolean"
import { OptionalOutlineIconProps } from "libs/react/icon"
import { ButtonProps, RefProps } from "libs/react/props"

export function TextButton(props: ButtonProps & OptionalOutlineIconProps & RefProps<HTMLButtonElement>) {

  const { xref, oicon, className, children, ...other } = props

  return <button className={`w-full group flex items-center text-colored rounded-xl p-md border border-default bg-violet2 dark:bg-violet12 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    {...other}
    ref={xref}>
    <div className="flex grow justify-center items-center gap-2 group-enabled:group-active:scale-90 transition-transform">
      {children}
    </div>
    {props.oicon &&
      <props.oicon className="icon-sm" />}
  </button>
}

export function TextButtonStatic(props: ButtonProps & OptionalOutlineIconProps & RefProps<HTMLButtonElement> & { boolean?: boolean }) {

  const { xref, oicon, className, children, boolean, ...other } = props

  return <button className={`w-full rounded-xl flex items-center p-2 border border-default bg-violet2 dark:bg-violet12 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    {...other}
    ref={xref}>
    <div className="flex  grow justify-center items-center gap-2">
      {children}
    </div>
    {props.oicon && <props.oicon className="icon-sm text-colored" />}
  </button>
}

export function TextButtonDeploy(props: ButtonProps & RefProps<HTMLButtonElement>) {

  const { xref, className, children, ...other } = props

  const deploy = useBoolean()

  return <button className={`w-full group rounded-xl flex items-center p-2 border border-default bg-violet2 dark:bg-violet12 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    {...other} onClick={deploy.toggle}
    ref={xref}>
    <div className="flex grow justify-center items-center gap-2 group-enabled:group-active:scale-90 transition-transform">
      {children}
    </div>
    {!deploy.current
      ? <OutlineChevronDownIcon className="icon-sm text-colored flex-none transition-transform duration-300" />
      : <OutlineChevronDownIcon className="icon-sm text-colored flex-none transition-transform rotate-180 duration-300" />}
  </button>
}

export function ContrastTextButton(props: ButtonProps & OptionalOutlineIconProps & RefProps<HTMLButtonElement>) {

  const { xref, oicon, className, children, ...other } = props

  return <button className={`group rounded-xl p-md bg-ahover transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    {...other}
    ref={xref}>
    <div className="flex justify-center items-center gap-2 group-enabled:group-active:scale-90 transition-transform">
      {props.oicon &&
        <props.oicon className="icon-xs" />}
      {children}
    </div>
  </button>
}

export function NakedTextButtonStatic(props: ButtonProps & OptionalOutlineIconProps & RefProps<HTMLButtonElement>) {

  const { xref, oicon, className, children, ...other } = props

  return <button className={`w-full rounded-xl p-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    {...other}
    ref={xref}>
    <div className="flex  justify-center items-center gap-2 transition-transform">
      {props.oicon &&
        <props.oicon className="icon-xs" />}
      {children}
    </div>
  </button>
}

export function OppositeTextButtonRounded(props: ButtonProps & RefProps<HTMLButtonElement>) {

  const { xref, className, children, ...other } = props

  return <button className={`group flex flex-center rounded-xl p-2 bg-component text-colored transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    {...other}
    ref={xref}>
    <div className="flex  justify-center items-center gap-2 group-enabled:group-active:scale-90 transition-transform">
      {children}
    </div>
  </button>
}

export function OppositeTextButton(props: ButtonProps & OptionalOutlineIconProps & RefProps<HTMLButtonElement>) {

  const { xref, oicon, className, children, ...other } = props

  return <button className={`w-full group flex items-center rounded-xl p-md border border-default bg-component text-colored transition-colors disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
    {...other}
    ref={xref}>
    <div className="flex  grow justify-center items-center gap-2 group-enabled:group-active:scale-90 transition-transform">
      {children}
    </div>
    {props.oicon && <props.oicon className="icon-sm text-colored" />}
  </button>
}

export function OppositeTextButtonDeploy(props: ButtonProps & RefProps<HTMLButtonElement> & { deploy: BooleanHandle }) {

  const { xref, className, children, deploy, ...other } = props

  return <button className={`w-full group flex items-center rounded-xl p-md border border-default bg-component text-colored transition-colors disabled:opacity-70 disabled:cursor-not-allowed ${className}`}
    {...other}
    ref={xref}>
    <div className="flex grow justify-center items-center gap-2 group-enabled:group-active:scale-90 transition-transform">
      {children}
    </div>
    {
      !deploy?.current
        ? <OutlineChevronDownIcon className="icon-sm flex-none text-colored transition-transform duration-300" />
        : <OutlineChevronDownIcon className="icon-sm flex-none text-colored transition-transform rotate-180 duration-300" />
    }
  </button >
}


import { useInputChange } from "libs/react/events"
import { OptionalOutlineIconProps } from "libs/react/icon"
import { InputProps, StringHandleProps } from "libs/react/props"
import { useMemo } from "react"

export function InputBorder(props: InputProps & OptionalOutlineIconProps & StringHandleProps & { onIconClick?: () => void, fix?: boolean }) {

  const { oicon, className, children, stringHandle, onIconClick, fix, ...other } = props

  const onInputChange = useInputChange(e => {
    const value = e.currentTarget.value
    stringHandle?.set(value)
  }, [])

  return <div className={`w-full flex flex-center bg-violet2 dark:bg-violet12 rounded-xl gap-2 w-full p-1 border border-default ${className}`}>
    <div className={`form2`}>
      <input className="focus:outline-none" {...other} onChange={onInputChange} autoComplete="off"
        value={stringHandle?.current} required />
      <label htmlFor="name" className="label-name ">
        <span className="content-name">
          {children}
        </span>
      </label>
    </div>
    {props.oicon &&
      <button onClick={onIconClick} className="p-1 rounded-xl bg-ahover text-colored">
        <props.oicon className="icon-sm" />
      </button>
    }
  </div>
}

export function InputBorderLabel(props: InputProps & OptionalOutlineIconProps & StringHandleProps & { onIconClick?: () => void, fix?: boolean }) {

  const { oicon, className, children, stringHandle, onIconClick, fix, ...other } = props

  const onInputChange = useInputChange(e => {
    if (fix) return
    const value = e.currentTarget.value
    stringHandle?.set(value)
  }, [])

  const value = useMemo(() => {
    if (fix) return stringHandle?.current.slice(0, 11) + "..." + stringHandle?.current.slice(-11)
    return stringHandle?.current
  }, [stringHandle, fix])

  return <div className={`w-full bg-violet2 dark:bg-violet12 flex items-center rounded-xl gap-2 w-full p-2 border border-default ${className}`}>
    <div className={`form`}>
      <input className="focus:outline-none" {...other} onChange={onInputChange} autoComplete="off"
        value={value} required />
      <label htmlFor="name" className="label-name ">
        <span className="content-name">
          {children}
        </span>
      </label>
    </div>
    {props.oicon &&
      <button onClick={onIconClick} className="p-1 rounded-xl bg-ahover text-colored">
        <props.oicon className="icon-md" />
      </button>
    }
  </div>
}

export function InputAmount(props: InputProps & OptionalOutlineIconProps & StringHandleProps & { onIconClick?: () => void, fix?: boolean }) {

  const { oicon, className, children, stringHandle, onIconClick, fix, ...other } = props

  const onInputChange = useInputChange((e) => {
    const value = e.currentTarget.value
      .replaceAll(/[^\d.,]/g, "")
      .replaceAll(",", ".")
    stringHandle?.set(value)
  }, [])

  return <div className={`w-full flex flex-center bg-violet2 dark:bg-violet12 text-colored w-full ${className}`}>
    <div className={`form2`}>
      <input className="focus:outline-none" {...other} onChange={onInputChange} autoComplete="off"
        value={stringHandle?.current} required />
      <label htmlFor="name" className="label-name ">
        <span className="content-name">
          {children}
        </span>
      </label>
    </div>
    {props.oicon &&
      <button onClick={onIconClick} className="p-1 rounded-xl bg-ahover text-colored">
        <props.oicon className="icon-sm" />
      </button>
    }
  </div>
}
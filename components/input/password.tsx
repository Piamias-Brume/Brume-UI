
import { OutlineEyeIcon, OutlineEyeSlashIcon } from "components/icons/heroicons"
import { useBoolean } from "libs/react/boolean"
import { InputProps, StringHandleProps } from "libs/react/props"
import { useMemo } from "react"
import { InputBorderLabel } from "./input"

export function PasswordInput(props: StringHandleProps & InputProps & { label: string }) {

  const { stringHandle, label, ...other } = props

  const show = useBoolean()

  const type = useMemo(() => {
    if (show.current) return "text"
    return "password"
  }, [show])

  const icon = useMemo(() => {
    if (show.current) return OutlineEyeSlashIcon
    return OutlineEyeIcon
  }, [show])

  return <InputBorderLabel stringHandle={stringHandle} type={type} oicon={icon} onIconClick={show.toggle}
    {...other}>
    {label}
  </InputBorderLabel>
}
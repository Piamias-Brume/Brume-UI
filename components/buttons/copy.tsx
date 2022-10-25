import { useError } from "components/context/error"
import { useAsyncTry } from "libs/react/async"
import { BooleanHandle } from "libs/react/boolean"
import { ChildrenProps } from "libs/react/props"

export function CopyTemplateButton(props: ChildrenProps & { toCopy: string, copied: BooleanHandle }) {

  const { children, toCopy, copied } = props

  const error = useError()

  const onCopyClick = useAsyncTry(async () => {
    await navigator.clipboard.writeText(toCopy)
    copied.enable()
    setTimeout(() => copied.disable(), 600)
  }, [copied], error.set)

  return <button onClick={onCopyClick.run}>
    {children}
  </button>
}
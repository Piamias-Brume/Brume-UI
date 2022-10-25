import { BooleanHandle } from "libs/react/boolean"
import { useInputChange } from "libs/react/events"
import { useString } from "libs/react/string"
import { useEffect } from "react"

export function SecretRecoveryPhrase(props: { type: string, clear: BooleanHandle }) {

  const { type, clear } = props

  return <div className="p-md w-full flex flex-col flex-center gap-2">
    <RowWord index={[1, 2, 3]} type={type} clear={clear} />
    <RowWord index={[4, 5, 6]} type={type} clear={clear} />
    <RowWord index={[7, 8, 9]} type={type} clear={clear} />
    <RowWord index={[10, 11, 12]} type={type} clear={clear} />
  </div>
}

function RowWord(props: { index: number[], type: string, clear: BooleanHandle }) {

  const { index, type, clear } = props

  return <div className="w-full flex flex-center gap-2">
    <Word index={index[0]} type={type} clear={clear} />
    <Word index={index[1]} type={type} clear={clear} />
    <Word index={index[2]} type={type} clear={clear} />
  </div>
}

function Word(props: { index: number, type: string, clear: BooleanHandle }) {

  const { index, type, clear } = props

  const word = useString()

  const onInputChange = useInputChange(e => {
    const value = e.currentTarget.value
    word.set(value)
  }, [])

  useEffect(() => {
    console.log("ici")
    if (clear.current) word.set("")
    return clear.disable()
  }, [clear, word])

  // TODO: label bug renvoie tj sur le first input
  return <label htmlFor="word" className="w-[100px] flex items-center gap-1 text-xs p-2 bg-violet2 dark:bg-violet11 border border-default rounded-xl">
    <span className="text-contrast w-[20px]">{`#${index}`}</span>
    <input id="word" type={type} value={word.current} onChange={onInputChange} className="w-[60px] outline-none bg-violet2 dark:bg-violet11 text-colored"></input>
  </label>
}
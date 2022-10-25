

export function SecretRecoveryPhrase(props: { seedArray: string[] }) {

  const { seedArray } = props

  return <div className="w-full flex flex-col flex-center gap-2">
    <RowWord rowArray={seedArray.slice(0, 3)} totalArray={seedArray} />
    <RowWord rowArray={seedArray.slice(3, 6)} totalArray={seedArray} />
    <RowWord rowArray={seedArray.slice(6, 9)} totalArray={seedArray} />
    <RowWord rowArray={seedArray.slice(-3)} totalArray={seedArray} />
  </div>
}

function RowWord(props: { rowArray: string[], totalArray: string[] }) {

  const { rowArray, totalArray } = props

  return <div className="w-full flex flex-center gap-2">
    <Word word={rowArray[0]} index={totalArray.indexOf(rowArray[0])} />
    <Word word={rowArray[1]} index={totalArray.indexOf(rowArray[1])} />
    <Word word={rowArray[2]} index={totalArray.indexOf(rowArray[2])} />
  </div>
}

function Word(props: { word: string, index: number }) {

  const { word, index } = props

  return <div className="w-[100px] p-2 bg-violet2 dark:bg-violet11 border border-default rounded-xl">
    <div className="flex items-center gap-1 w-full text-xs">
      <span className="text-contrast">{`#${index + 1}`}</span>
      <span className="text-colored">{word}</span>
    </div>
  </div>
}
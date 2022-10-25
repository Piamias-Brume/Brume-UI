import { NewButton } from "./components/buttons"
import { NewTitle } from "./components/title"


export function NewPage() {

  return <>
    <NewTitle />
    <div className="grow" />
    <div className="my-1" />
    <NewButton />
    <div className="my-1" />
  </>
}
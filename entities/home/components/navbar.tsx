import { StringHandle } from "libs/react/string"

export function Navbar(props: { section: StringHandle }) {

  const { section } = props

  return <div className="w-full  flex flex-center gap-20">
    <button className="text-xl hover-underline-animation cursor-pointer"
      onClick={() => section.set("tokens")}>
      Tokens
      {section.current === "tokens" ? <div className="w-full bg-violet12 h-[2px]" /> : <div className="w-full h-[2px]" />}
    </button>
    <button className="text-xl hover-underline-animation cursor-pointer"
      onClick={() => section.set("history")}>
      History
      {section.current === "history" ? <div className="w-full bg-violet12 h-[2px]" /> : <div className="w-full h-[2px]" />}
    </button>
  </div>
}
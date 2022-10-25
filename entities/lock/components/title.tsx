
import Image from "next/image"


export function UnlockTitle() {

  return <>
    <div className="my-4" />
    <h1 className="text-center text-4xl text-colored">
      Welcome back
    </h1>
    <div className="my-1" />
    <span className="text-center text-2xl text-contrast">
      Privacy made simple
    </span>
    <div className="my-6" />
    <div className="w-full flex flex-center">
      <Image width={250} height={200}
        alt="logo" src="/logo.svg" />
    </div>
  </>
} 
import { AnchorProps, DivisionProps, RefProps } from "libs/react/props"
import Link, { LinkProps } from "next/link"
import { useCallback } from "react"

export function InternalAnchorLink(props: AnchorProps & LinkProps & RefProps<HTMLAnchorElement>) {

  const { xref, href, scroll, ...others } = props
  if (!href) return <a {...others} />

  return <Link href={href} scroll={scroll} passHref>
    <a ref={xref} {...others} />
  </Link>
}

export function InternalDivisionLink(props: AnchorProps & LinkProps & DivisionProps) {

  const { href, scroll, ...others } = props
  if (!href) return <div {...others} />

  return <Link href={href} scroll={scroll} passHref>
    <div  {...others} />
  </Link>
}

export function ExternalDivisionLink(props: AnchorProps & DivisionProps) {

  const { href, ...others } = props

  const onClick = useCallback(() => {
    open(href, "_blank", "noreferrer")
  }, [href])

  if (!href) return <div {...others} />

  return <div onClick={onClick} {...others} />
}
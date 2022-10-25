import { VectorProps } from "libs/react/props"

export type Icon = (props: VectorProps) => JSX.Element

export interface OutlineIconProps {
  oicon: Icon
}

export interface OptionalOutlineIconProps {
  oicon?: Icon
}
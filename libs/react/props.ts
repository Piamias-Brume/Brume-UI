import { NetworkHandle } from "components/context/network";
import { RouteHandle } from "components/context/router";
import {
  Approval,
  History,
  Recent,
  Site,
  Token,
  Wallet,
} from "components/test/interface/wallet";
import { ReactNode, Ref } from "react";
import { BooleanHandle } from "./boolean";
import { ElementHandle } from "./element";
import { StringHandle } from "./string";

export type DivisionProps = JSX.IntrinsicElements["div"];
export type ButtonProps = JSX.IntrinsicElements["button"];
export type InputProps = JSX.IntrinsicElements["input"];
export type VectorProps = JSX.IntrinsicElements["svg"];
export type AnchorProps = JSX.IntrinsicElements["a"];

export interface ChildrenProps {
  children?: ReactNode;
}

export interface StringChildrenProps {
  children?: string;
}

export interface StringHandleProps {
  stringHandle?: StringHandle;
}

export interface BooleanHandleProps {
  boolean?: BooleanHandle;
}

export interface ClassProps {
  className?: string;
}

export interface CloseProps {
  close(): void;
}

export interface BackProps {
  back(): void;
}

export interface OkProps<T> {
  ok(x: T): void;
}

export interface RefProps<T = HTMLElement> {
  xref?: Ref<T>;
}

export interface TitleProps {
  title: string;
}

export interface ExponentProps {
  exponent?: number;
}

export interface UUIDProps {
  uuid: string;
}

export interface RouteProps {
  route: RouteHandle;
}

export interface NetworkProps {
  network: NetworkHandle;
}

export interface TargetProps<T extends Element = Element> {
  target: ElementHandle<T>;
}

export interface WalletProps {
  wallet: Wallet;
}

export interface RecentProps {
  wallet: Recent;
}

export interface AssetProps {
  asset: Token;
}

export interface HistoryProps {
  history: History;
}

export interface SiteProps {
  site: Site;
}

export interface ApprovalProps {
  approval: Approval;
}

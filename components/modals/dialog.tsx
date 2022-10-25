import { keep } from "libs/react/events";
import { ChildrenProps, CloseProps } from "libs/react/props";
import { Modal } from "./modal";

export function DialogFull(props: CloseProps & ChildrenProps) {

  const { close, children } = props

  return <Modal>
    <div className="p-4 fixed inset-0 bg-backdrop animate-opacity"
      onMouseDown={close}
      onClick={keep}>
      <div className="h-full flex flex-col rounded-xl bg-default animate-opacity-scale"
        onMouseDown={keep}>
        {children}
      </div>
    </div>
  </Modal>
}

export function Dialog(props: CloseProps & ChildrenProps) {

  const { close, children } = props

  return <Modal>
    <div className="p-4 fixed inset-0 bg-backdrop animate-opacity"
      onMouseDown={close}
      onClick={keep}>
      <div className="flex flex-col rounded-xl bg-default animate-opacity-scale"
        onMouseDown={keep}>
        {children}
      </div>
    </div>
  </Modal>
}
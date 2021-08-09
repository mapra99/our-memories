import { ReactNode } from 'react'

export type ModalProps = {
  children: ReactNode[],
  onClose: () => void,
  maxWidth?: string,
  carousel?: boolean,
  start?: number
}

export type SingleModalDialogProps = {
  children: ReactNode,
  onClose: () => void,
  maxWidth?: string
}

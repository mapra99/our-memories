import { ReactNode } from 'react'
import { SplideEvent } from '@splidejs/react-splide';

export type ModalProps = {
  children: ReactNode[],
  onClose: () => void,
  maxWidth?: string,
  carousel?: boolean,
  start?: number,
  onMoved?: (e: any, newIndex: number, prevIndex: number, destIndex: number) => void,
}

export type SingleModalDialogProps = {
  children: ReactNode,
  onClose: () => void,
  maxWidth?: string
}

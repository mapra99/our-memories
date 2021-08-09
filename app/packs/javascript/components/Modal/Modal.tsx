import React from 'react';
import { CrossFilledIcon } from '../../icons/CrossFilledIcon';
import {
  ModalContainer,
  ModalDialog,
  ModalCloseButton
} from './Modal.styled';

import { ModalProps } from './types';

export const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <ModalContainer onKeyDown={() => console.log("holi")}>
      <ModalDialog>
        <ModalCloseButton onClick={onClose}>
          <CrossFilledIcon />
        </ModalCloseButton>

        { children }
      </ModalDialog>
    </ModalContainer>
  )
}

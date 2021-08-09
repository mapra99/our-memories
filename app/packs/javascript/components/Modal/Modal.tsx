import React, { useEffect } from 'react';
import { CrossFilledIcon } from '../../icons/CrossFilledIcon';
import {
  ModalContainer,
  ModalDialog,
  ModalCloseButton
} from './Modal.styled';
import { useKeyDown } from '../../hooks/useKeyDown';

import { ModalProps } from './types';

export const Modal = ({ children, onClose }: ModalProps) => {
  const { keyCode } = useKeyDown();

  useEffect(() => {
    if (keyCode === 27) onClose() // Close modal when ESC key pressed
  }, [keyCode])

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

import React from 'react';

import {
  ModalContainer,
  ModalDialog
} from './Modal.styled';

import { ModalProps } from './types';

export const Modal = ({ children }: ModalProps) => (
  <ModalContainer>
    <ModalDialog>
      { children }
    </ModalDialog>
  </ModalContainer>
)

import React from 'react';
import { SuccessPhotoModalProps } from './types';
import { Modal } from '../Modal';
import { ActionButton } from '../ActionButton';
import { ModalActionButtons } from '../ModalActionButtons';
import { ModalTitle } from '../ModalTitle';
import { SuccessPhotoModalIconWrap } from './SuccessPhotoModal.styled'
import { CheckIcon } from '../../icons/CheckIcon'

export const SuccessPhotoModal = ({onClose}: SuccessPhotoModalProps) => (
  <Modal>
    <SuccessPhotoModalIconWrap>
      <CheckIcon/>
    </SuccessPhotoModalIconWrap>

    <ModalTitle align="center" margin="20px 0 60px">
      Your photo was uploaded successfully!
    </ModalTitle>

    <ModalActionButtons>
      <ActionButton type="button" onClick={() => onClose()}>
        Close
      </ActionButton>
    </ModalActionButtons>
  </Modal>
)

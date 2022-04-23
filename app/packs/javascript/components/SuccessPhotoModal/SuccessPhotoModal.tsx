import React from 'react';
import { SuccessPhotoModalProps } from './types';
import { Modal } from '../Modal';
import { ActionButton } from '../ActionButton';
import { ModalActionButtons } from '../ModalActionButtons';
import { Title } from '../Title';
import { SuccessPhotoModalIconWrap } from './SuccessPhotoModal.styled'
import { CheckIcon } from '../../icons/CheckIcon'

export const SuccessPhotoModal = ({onClose}: SuccessPhotoModalProps) => (
  <Modal onClose={onClose}>
    <SuccessPhotoModalIconWrap>
      <CheckIcon/>
    </SuccessPhotoModalIconWrap>

    <Title align="center" margin="20px 0 60px">
      Your photo was uploaded successfully!
    </Title>

    <ModalActionButtons>
      <ActionButton type="button" onClick={() => onClose()}>
        Close
      </ActionButton>
    </ModalActionButtons>
  </Modal>
)

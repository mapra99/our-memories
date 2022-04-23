import React from 'react';
import { ErrorPhotoModalProps } from './types'
import { Modal } from '../Modal';
import { Title } from '../Title';
import { ActionButton } from '../ActionButton';
import { ModalActionButtons } from '../ModalActionButtons';
import { CrossIcon } from '../../icons/CrossIcon'
import { ErrorPhotoModalIconWrap } from './ErrorPhotoModal.styled'

export const ErrorPhotoModal = ({onClose}: ErrorPhotoModalProps) => (
  <Modal onClose={onClose}>
    <ErrorPhotoModalIconWrap>
      <CrossIcon />
    </ErrorPhotoModalIconWrap>

    <Title align="center" margin="20px 0 60px">
      There was an error. Please try again later
    </Title>

    <ModalActionButtons>
      <ActionButton type="button" onClick={() => onClose()}>
        Close
      </ActionButton>
    </ModalActionButtons>
  </Modal>
)

import React from 'react';
import { ErrorPhotoModalProps } from './types'
import { Modal } from '../Modal';
import { ModalTitle } from '../ModalTitle';
import { ActionButton } from '../ActionButton';
import { ModalActionButtons } from '../ModalActionButtons';
import { CrossIcon } from '../../icons/CrossIcon'
import { ErrorPhotoModalIconWrap } from './ErrorPhotoModal.styled'

export const ErrorPhotoModal = ({onClose}: ErrorPhotoModalProps) => (
  <Modal>
    <ErrorPhotoModalIconWrap>
      <CrossIcon />
    </ErrorPhotoModalIconWrap>

    <ModalTitle align="center" margin="20px 0 60px">
      There was an error. Please try again later
    </ModalTitle>

    <ModalActionButtons>
      <ActionButton type="button" onClick={() => onClose()}>
        Close
      </ActionButton>
    </ModalActionButtons>
  </Modal>
)

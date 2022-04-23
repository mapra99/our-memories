import React from 'react';
import { SuccessModalProps } from './types';
import { Modal } from '../Modal';
import { ActionButton } from '../ActionButton';
import { ModalActionButtons } from '../ModalActionButtons';
import { Title } from '../Title';
import { SuccessModalIconWrap } from './styled'
import { CheckIcon } from '../../icons/CheckIcon'

export const SuccessModal = ({message, onClose}: SuccessModalProps) => (
  <Modal onClose={onClose}>
    <SuccessModalIconWrap>
      <CheckIcon/>
    </SuccessModalIconWrap>

    <Title align="center" margin="20px 0 60px">
      { message }
    </Title>

    <ModalActionButtons>
      <ActionButton type="button" onClick={() => onClose()}>
        Close
      </ActionButton>
    </ModalActionButtons>
  </Modal>
)

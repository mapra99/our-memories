import React, { useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { CrossFilledIcon } from '../../icons/CrossFilledIcon';
import {
  ModalContainer,
  ModalDialog,
  ModalCloseButton,
  ModalDialogContainer
} from './Modal.styled';
import { useKeyDown } from '../../hooks/useKeyDown';
import { ModalProps, SingleModalDialogProps } from './types';

const SingleModalDialog = ({ children, onClose, maxWidth}: SingleModalDialogProps) => (
  <ModalDialogContainer>
    <ModalDialog maxWidth={maxWidth} >
      <ModalCloseButton onClick={onClose}>
        <CrossFilledIcon />
      </ModalCloseButton>

      { children }
    </ModalDialog>
  </ModalDialogContainer>
)

export const Modal = ({ children, onClose, maxWidth, onMoved, carousel=false, start=0 }: ModalProps) => {
  const { keyCode } = useKeyDown();

  useEffect(() => {
    if (keyCode === 27) onClose() // Close modal when ESC key pressed
  }, [keyCode])

  const splideOptions = {
    type: 'loop',
    pagination: false,
    start
  }

  return (
    <ModalContainer onKeyDown={() => console.log("holi")}>
      { carousel ? (
        <Splide options={splideOptions} onMoved={onMoved}>
          {children.map((child, index) => (
            <SplideSlide key={index}>
              <SingleModalDialog
                onClose={onClose}
                maxWidth={maxWidth}
              >
                {child}
              </SingleModalDialog>
            </SplideSlide>
          ))}
        </Splide>
      ) : (
        <SingleModalDialog
          children={children}
          onClose={onClose}
          maxWidth={maxWidth}
        />
      )}
    </ModalContainer>
  )
}

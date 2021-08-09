import styled from 'styled-components';
import { CrossFilledIcon } from '../../icons/CrossFilledIcon';
import { COLORS } from '../../constants';
import { BREAKPOINT_S } from '../../constants';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.black}40;
  z-index: 10;
  
  .splide__slide {
    height: 100vh;
  }
`;

export const ModalDialogContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDialog = styled.div`
  background-color: ${COLORS.white};
  box-sizing: border-box;
  width: 100%;
  max-width: ${props => props.maxWidth ? props.maxWidth : "620px"};
  margin: 0 16px;
  padding: 16px;
  border-radius: 12px;
  position: relative;

  @media (min-width: ${BREAKPOINT_S}px) {
    padding: 24px 32px
  }
`;

export const ModalCloseButton = styled.button`
  position: absolute;
  top: -35px;
  right: 0;
  width: 25px;
  height: 25px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`

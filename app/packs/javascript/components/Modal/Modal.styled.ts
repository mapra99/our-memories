import styled from 'styled-components';
import { COLORS } from '../../constants';
import { BREAKPOINT_S } from '../../constants';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${COLORS.black}40;
  z-index: 10;
`;

export const ModalDialog = styled.div`
  background-color: ${COLORS.white};
  box-sizing: border-box;
  width: 100%;
  max-width: 620px;
  margin: 0 16px;
  padding: 16px;
  border-radius: 12px;

  @media (min-width: ${BREAKPOINT_S}px) {
    padding: 24px 32px
  }
`;

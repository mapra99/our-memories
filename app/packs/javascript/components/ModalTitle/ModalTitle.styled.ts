import styled from 'styled-components';
import { COLORS } from '../../constants';
import { ModalTitleProps } from './types';

export const ModalTitle = styled.h1<ModalTitleProps>`
  font-family: 'Noto Sans';
  font-size: 24px;
  font-weight: 500;
  color: ${COLORS.jet};
  text-align: ${props => props.align || 'left'};
  margin: ${props => props.margin || 'left'};
`;

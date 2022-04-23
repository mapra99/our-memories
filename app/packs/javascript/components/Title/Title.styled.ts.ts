import styled from 'styled-components';
import { COLORS } from '../../constants';
import { TitleProps } from './types';

export const Title = styled.h1<TitleProps>`
  font-family: 'Noto Sans';
  font-size: 24px;
  font-weight: 500;
  color: ${COLORS.jet};
  text-align: ${props => props.align || 'left'};
  margin: ${props => props.margin || 'left'};
`;

import styled from 'styled-components';
import { COLORS } from '../../constants';

export const Button = styled.button`
  height: 55px;
  line-height: 55px;
  min-width: 140px;
  font-family: 'Noto Sans';
  font-size: 16px;
  font-weight: 700;
  border-radius: 12px;
  border: none;
  background: ${COLORS.grayX };
  transition: background 0.15s;
  box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

  &:hover, &:focus {
    background: ${COLORS.grayX }bf;
    outline: none;
    cursor: pointer;
  }
`;

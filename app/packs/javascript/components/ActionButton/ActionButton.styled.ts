import styled from 'styled-components';
import { Button } from '../Button';
import { COLORS } from '../../constants';

export const ActionButton = styled(Button)`
  background: ${COLORS.mediumSeaGreen};
  transition: background 0.15s;
  color: ${COLORS.white};
  border-radius: 12px;

  &:hover, &:focus {
    background: ${COLORS.mediumSeaGreen}bf;
    outline: none;
    cursor: pointer;
  }
`;

import styled from 'styled-components';
import { Button } from '../Button';
import { COLORS } from '../../constants';

export const CancelButton = styled(Button)`
  background: none;
  transition: background 0.15s;
  color: ${COLORS.grayX};
  border-radius: 12px;

  &:hover, &:focus {
    background: ${COLORS.black}bf;
    outline: none;
    cursor: pointer;
  }
`;

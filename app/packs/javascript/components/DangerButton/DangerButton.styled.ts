import styled from 'styled-components';
import { Button } from '../Button';
import { COLORS } from '../../constants';

export const DangerButton = styled(Button)`
  background: ${COLORS.redSalsa};
  color: ${COLORS.white};

  &:hover, &:focus {
    background: ${COLORS.redSalsa}bf;
  }
`;

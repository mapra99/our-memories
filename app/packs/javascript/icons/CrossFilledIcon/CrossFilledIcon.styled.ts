import styled from 'styled-components';
import { Icon } from '../Icon';
import { CrossFilledIconProps } from './types';
import { COLORS } from '../../constants';

export const StyledCrossFilledIcon = styled(Icon)<CrossFilledIconProps>`
  path {
    fill: ${props => props.bgColor || COLORS.davisGray};
  }
`;

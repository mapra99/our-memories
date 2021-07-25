import styled from 'styled-components';
import { COLORS } from '../../constants';

export const InputField = styled.input`
  box-sizing: border-box;
  height: 55px;
  line-height: 55px;
  padding: 0 20px;
  width: 100%;
  font-size: 14px;
  font-family: 'Noto Sans';
  font-weight: 500;
  border: 1px solid ${COLORS.davisGray};
  border-radius: 12px;
`;

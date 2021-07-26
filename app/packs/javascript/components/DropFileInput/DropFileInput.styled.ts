import styled from 'styled-components';
import { InputField } from '../InputField';
import { COLORS } from '../../constants';

export const DropFileInputArea = styled.div`
  position: relative;
  min-height: 55px;
  border: 1px solid ${COLORS.davisGray};
  border-radius: 12px;
  transition: background-color 0.1s;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover, &:focus {
    background: ${COLORS.grayX};
  }
`;

export const DropFileInputField = styled(InputField)`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  opacity: 0;
  z-index: 1;
`;

export const DropFileInputPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Noto Sans';
  font-size: 14px;
  color: ${COLORS.davisGray};
  z-index: 0;
`;

export const DropFileInputImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 12px;
  max-height: 400px;
  object-fit: contain;
`

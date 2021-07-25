import styled from 'styled-components';
import { InputField } from '../InputField';

export const SearchBarContainer = styled.div`
  position: relative;
`;

export const SearchIconContainer = styled.div`
  position: absolute;
  width: 18px;
  height: 55px;
  top: 19px;
  left: 19px;
`

export const SearchBarInput = styled(InputField)`
  padding: 0 20px 0 56px;
  width: 300px;
`;

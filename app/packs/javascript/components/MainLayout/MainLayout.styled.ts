import styled from 'styled-components';
import { BREAKPOINT_S } from '../../constants';

export const MainLayoutContainer = styled.div`
  box-sizing: border-box;
  padding: 32px 16px;
  margin: 0;
  min-height: 100vh;

  @media (min-width: ${BREAKPOINT_S}px) {
    padding: 32px 100px;
  }
`

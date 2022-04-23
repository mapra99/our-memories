import styled from 'styled-components';
import { BREAKPOINT_L } from '../../constants';

export const AlbumsListContainer = styled.div `
  display: grid;
  gap: 46px;
  margin: 23px 0;
  grid-template-columns: 1fr;

  @media (min-width: ${BREAKPOINT_L}px) {
    grid-template-columns: 1fr 1fr;
  }
`;

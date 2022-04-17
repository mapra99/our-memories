import styled from 'styled-components';
import { BREAKPOINT_S } from '../../constants';

export const PostViewerImage = styled.img`
  display: block;
  margin: 20px auto 0;
  max-height: calc(100vh - 200px);
  max-width: 100%;
  border-radius: 16px;
`;

export const PostViewerActions = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;

  @media (min-width: ${BREAKPOINT_S}px) {
    right: 32px;
    bottom: 24px;
  }
`

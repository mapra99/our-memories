import styled from 'styled-components';
import { BREAKPOINT_S } from '../../constants';

export const PostsGalleryContainer = styled.div`
  display: flex;
  gap: 46px;
  margin: -46px 0;
`

export const PostsGalleryColumn = styled.div`
  box-sizing: border-box;

  @media (min-width: ${BREAKPOINT_S}px) {
    width: 33%;
  }
`

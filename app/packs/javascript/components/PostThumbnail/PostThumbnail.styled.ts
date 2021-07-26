import styled from 'styled-components'
import { COLORS } from '../../constants'

export const ThumbnailContainer = styled.div`
  position: relative;
  margin: 46px 0;
  border-radius: 16px;
`

export const ThumbnailImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 16px;
`

export const ThumbnailHoverContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 16px;
  opacity: 0;
  transition: opacity 0.1s;

  &:hover {
    opacity: 1;
  }
`

export const ThumbnailTitle = styled.h1`
  font-family: 'Montserrat';
  font-size: 18px;
  line-height: 22px;
  font-weight: 700;
  color: ${COLORS.white};
  width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  bottom: 30px;
  position: absolute;
  text-shadow: 0px 0px 15px ${COLORS.black};
`

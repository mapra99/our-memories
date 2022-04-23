import styled from 'styled-components'
import { COLORS } from '../../constants'
import { DangerButton } from '../DangerButton';

export const ThumbnailContainer = styled.div`
  position: relative;
  border-radius: 16px;
  cursor: pointer;
  height: 375px;
`

export const ThumbnailImage = styled.img`
  width: 100%;
  display: block;
  border-radius: 16px;
  height: 100%;
  object-fit: cover;
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

export const ThumbnailDeleteButton = styled(DangerButton)`
  position: absolute;
  height: 23px;
  line-height: 23px;
  padding: 0 15px;
  font-size: 10px;
  background: none;
  color: ${COLORS.redSalsa};
  border: 1px solid ${COLORS.redSalsa};
  border-radius: 38px;
  min-width: auto;
  right: 18px;
  top: 18px;
  transition: all 0.2s;

  &:hover, &:focus {
    color: ${COLORS.white};
  }
`;

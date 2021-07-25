import styled from 'styled-components'
import { Icon } from '../Icon'
import { CheckIconProps } from './types'
import { COLORS } from '../../constants'

export const StyledCheckIcon = styled(Icon)<CheckIconProps>`
  path {
    fill: ${props => props.bgColor || COLORS.mediumSeaGreen};
  }
`

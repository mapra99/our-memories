import styled from 'styled-components'
import { Icon } from '../Icon'
import { CrossIconProps } from './types'
import { COLORS } from '../../constants'

export const StyledCrossIcon = styled(Icon)<CrossIconProps>`
  path {
    fill: ${props => props.bgColor || COLORS.redSalsa};
  }
`

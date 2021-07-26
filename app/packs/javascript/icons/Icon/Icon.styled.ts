import styled from 'styled-components'
import { IconProps } from './types'

export const Icon = styled.svg<IconProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
`

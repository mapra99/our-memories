import {
  BREAKPOINT_XL,
  BREAKPOINT_L,
  BREAKPOINT_M,
  BREAKPOINT_S,
} from '../../constants'

export const getBreakpoint = (width: number) => {
  if (width > BREAKPOINT_XL) {
    return 'xl'
  }
  if (width > BREAKPOINT_L) {
    return 'lg'
  }
  if (width > BREAKPOINT_M) {
    return 'md'
  }
  if (width >= BREAKPOINT_S) {
    return 'sm'
  }
  return 'xs'
}

// under 576px
export const isMobile = (width: number) => getBreakpoint(width) === 'xs'

// between 576px and 1200px
export const isTablet = (width: number) => getBreakpoint(width) === 'lg' || getBreakpoint(width) === 'md'

// over 1200px
export const isDesktop = (width: number) => getBreakpoint(width) === 'xl'

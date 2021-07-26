import { useState, useEffect } from 'react'
import {
  isMobile,
  isTablet,
  isDesktop,
} from '../../utils/getBreakpoint'

export function useBreakpoint() {
  const [mobile, setMobile] = useState(false)
  const [tablet, setTablet] = useState(false)
  const [desktop, setDesktop] = useState(false)

  useEffect(() => {
    function handleWidth() {
      const windowWidth = window ? window.innerWidth : 0
      const mobileWidth = isMobile(windowWidth)
      const tabletWidth = isTablet(windowWidth)
      const desktopWidth = isDesktop(windowWidth)

      setMobile(mobileWidth)
      setTablet(tabletWidth)
      setDesktop(desktopWidth)
    }

    window.addEventListener('resize', handleWidth)

    handleWidth()

    return () => {
      window.removeEventListener('resize', handleWidth)
    }
  })

  return { mobile, tablet, desktop }
}

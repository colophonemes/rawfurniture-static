import { useMediaQuery } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'

const BREAKPOINT_NAMES = ['xs', 'sm', 'md', 'lg', 'xl']

export const useBreakpoints = () => {
  const theme = useTheme()
  const breakpoints = {}
  for (const bp of BREAKPOINT_NAMES) {
    breakpoints[`${bp}Up`] = useMediaQuery(theme.breakpoints.up(bp))
    breakpoints[`${bp}Down`] = useMediaQuery(theme.breakpoints.down(bp))
    breakpoints[`${bp}Only`] = useMediaQuery(theme.breakpoints.only(bp))
  }
  return breakpoints
}

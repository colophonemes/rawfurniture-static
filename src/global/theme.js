import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles'

export const headingFontFamily = ['AgencyFB', 'Georgia', 'Palatino', 'Palatino Linotype', 'serif'].join(', ')
export const bodyFontFamily = ['Karla', 'Helvetica Neue', 'Helvetica', 'Arial', 'Tahoma', 'sans-serif'].join(', ')

const headings = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].reduce((coll, h, i) => {
  coll[h] = {
    fontFamily: headingFontFamily,
    fontWeight: 700
  }
  return coll
}, {})

const theme = createMuiTheme({
  typography: {
    fontSize: 16,
    fontFamily: bodyFontFamily,
    body1: {
    },
    body2: {
      fontFamily: bodyFontFamily
    },
    ...headings
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#8c6339',
      light: '#be9164',
      dark: '#5c3911',
      contrastText: '#FFF',
    },
    secondary: {
      main: '#5bb5e6',
      light: '#92e7ff',
      dark: '#1385b4',
      contrastText: '#000',
    },
  },
  overrides: {
    MuiLink: {
      root: {
        color: '#be9164'
      }
    },
    MuiTabs: {
      indicator: {
        display: 'none'
      }
    },
    MuiTab: {
      root: {
        textTransform: 'none',
        fontFamily: headingFontFamily,
        '&$selected': {
          backgroundColor: '#333'
        }
      }
    }
  }
})

export default responsiveFontSizes(theme, { variants: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] })

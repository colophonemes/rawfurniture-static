import { withStyles } from "@material-ui/styles"

// Globally-available styles
const styles = {
  '@font-face': {
    fontFamily: 'AgencyFB',
    src: `
      local('AgencyFB'), local('Agency FB'),
      url('../fonts/agencyb-webfont.eot?#iefix') format('embedded-opentype'),
      url('../fonts/agencyb-webfont.woff') format('woff'),
      url('../fonts/agencyb-webfont.ttf') format('truetype'),
      url('../fonts/agencyb-webfont.svg#agency_fbbold') format('svg');
    `
  },
  body: {
    backgroundImage: `url('${process.env.NEXT_PUBLIC_BACKGROUND_IMAGE}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
  },
  '#content img': {
    width: '100%'
  },
  '.center': {
    textAlign: 'center'
  },
  'p:first-of-type': {
    fontSize: '1.6em'
  }
}

export const withGlobalStyles = withStyles({
  '@global': styles
})

export default styles

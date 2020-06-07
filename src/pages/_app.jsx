import App from 'next/app'
// import Footer from 'components/layout/Footer'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from 'global/theme'
import { withGlobalStyles } from 'global/styles'
import Base from 'components/layout/Base'
import 'pure-react-carousel/dist/react-carousel.es.css'
// import { MDXProvider } from '@mdx-js/react'
// import MDXRenderers from 'components/MDXRenderers'
// import { StaticKitProvider } from '@statickit/react'

class MyApp extends App {

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props
    return <React.Fragment>
      <CssBaseline />
      {/* <StaticKitProvider site={process.env.STATICKIT_SITE_ID}> */}
      <ThemeProvider theme={theme}>
        <Base>
          <Component {...pageProps} />
        </Base>
      </ThemeProvider>
      {/* </StaticKitProvider> */}
    </React.Fragment>
  }
}


export default withGlobalStyles(MyApp)

/** @jsxImportSource theme-ui */
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'theme-ui'
import theme from '../utils/theme'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTwitter,faInstagram,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import Head from 'next/head'
library.add(fab,faTwitter,faInstagram,faLinkedinIn)

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
        <meta name="HandheldFriendly" content="true"/>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp

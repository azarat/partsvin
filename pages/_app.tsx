import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../src/components/Header/Header'
import '../styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>
          Partsvin
        </title>
        <link
          rel="shortcut icon"
          href="/assets/images/favicon.ico"
          type="image/x-icon"
        />
      </Head>
      <Header />
      <main >
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </>
  )
}

export default MyApp

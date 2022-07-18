import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'
import '../styles/main.scss'
import { hotjar } from 'react-hotjar'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    hotjar.initialize(215523203, 1)
  }, [])

  return (
    
    <>
      <Head>
        <title>
          Partsvin
        </title>
        <link rel="shortcut icon" href='/assets/svg/favicon.svg' />
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
      <Footer />
      <div id="modal-root"></div>
    </>
  )
}

export default MyApp

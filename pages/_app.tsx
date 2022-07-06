import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import Footer from '../src/components/Footer/Footer'
import Header from '../src/components/Header/Header'
import '../styles/main.scss'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const initialLink = sessionStorage.getItem('initialLink')
      if (!initialLink) sessionStorage.setItem('initialLink', location.href)
    }
  }, [])

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
      <Footer />
      <div id="modal-root"></div>
    </>
  )
}

export default MyApp

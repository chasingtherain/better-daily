import NavMenu from '../components/NavMenu'
import '../styles/globals.css'
import { Fragment } from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function App({ Component, pageProps }) {
  return <Fragment>
    <Head>
      <title>Better Daily</title>
      <meta name="description" content="A journal for daily reflection and a place to practice gratefulness"></meta>
      <meta name="keywords" content="grateful, gratefulness, daily journal,reflection, stoic, progress"></meta>
    </Head>
    <Navbar/>
    <Component {...pageProps} />
  </Fragment>
}

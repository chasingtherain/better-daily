import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { Fragment } from 'react'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return <Fragment>
    <Head>
      <title>A journal for daily reflection and a place to practice gratefulness</title>
      <meta name="description" content="A journal for daily reflection and a place to practice gratefulness"></meta>
      <meta name="keywords" content="grateful, gratefulness, daily journal,reflection, stoic, progress"></meta>
    </Head>
    <Navbar/>
    <Component {...pageProps} />
  </Fragment>
}

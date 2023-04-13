import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { Fragment } from 'react'

export default function App({ Component, pageProps }) {
  return <Fragment>
    <Navbar/>
    <Component {...pageProps} />
  </Fragment>
}

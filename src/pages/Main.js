import React from 'react'

import AppRouter from './AppRouter'
import Snackbars from '../components/Snackbars'
import Navbar from '../components/Navbar'
import SEO from './SEO'

const Main = () => {
  return (
      <>
        <SEO />
        <Navbar />
        <Snackbars />
        <AppRouter />
      </>
  )
}

export default Main

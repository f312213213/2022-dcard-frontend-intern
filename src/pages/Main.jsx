import React from 'react'

import AppRouter from './AppRouter'
import SEO from './SEO'

import Snackbars from '../components/Snackbars'
import Navbar from '../components/Navbar'

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

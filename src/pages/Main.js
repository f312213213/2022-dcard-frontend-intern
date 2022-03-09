import React from 'react'

import AppRouter from './AppRouter'
import Snackbars from '../components/Snackbars'
import Navbar from '../components/Navbar'

const Main = () => {
  return (
      <>
        <Navbar />
        <Snackbars />
        <AppRouter />
      </>
  )
}

export default Main

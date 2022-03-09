import React from 'react'
import { useSelector } from 'react-redux'

import SnackbarBase from './SnackbarBase'

const Snackbars = () => {
  const snackbarStatus = useSelector(state => state.app.snackbar)
  return (
      <>
        {
            snackbarStatus.show && <SnackbarBase type={snackbarStatus.type} open={snackbarStatus.show} message={snackbarStatus.message} />
        }
      </>
  )
}

export default Snackbars

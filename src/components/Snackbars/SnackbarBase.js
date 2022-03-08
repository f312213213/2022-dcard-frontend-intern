import React from 'react'

import { Alert } from '@mui/material'
import Snackbar from '@mui/material/Snackbar'

import actions from '../../redux/actions'
import { useDispatch } from 'react-redux'

const SnackbarBase = ({ open, message, type }) => {
  const dispatch = useDispatch()
  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return
    }
    dispatch(actions.app.closeSnackbar())
  }

  return (
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
  )
}

export default SnackbarBase

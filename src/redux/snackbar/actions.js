import actionTypes from './ActionTypes'

export const showSnackbar = (type, message) => ({
  type: actionTypes.SHOW_SNACKBAR,
  payload: {
    snackbarType: type,
    snackbarMessage: message
  }
})

export const closeSnackbar = () => ({
  type: actionTypes.CLOSE_SNACKBAR
})

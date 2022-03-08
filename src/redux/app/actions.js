import ActionTypes from './ActionTypes'

export const showModal = () => ({
  type: ActionTypes.SHOW_MODAL
})

export const closeModal = () => ({
  type: ActionTypes.CLOSE_MODAL
})

export const loadingTrue = () => ({
  type: ActionTypes.LOADING_TRUE
})

export const loadingFalse = () => ({
  type: ActionTypes.LOADING_FALSE
})

export const showSnackbar = (type, message) => ({
  type: ActionTypes.SHOW_SNACKBAR,
  payload: {
    snackbarType: type,
    snackbarMessage: message
  }
})

export const closeSnackbar = () => ({
  type: ActionTypes.CLOSE_SNACKBAR
})

import ActionTypes from './ActionTypes'

const defaultState = {
  show: false,
  type: '',
  message: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_SNACKBAR:
      return {
        show: true,
        type: action.payload.snackbarType,
        message: action.payload.snackbarMessage
      }

    case ActionTypes.CLOSE_SNACKBAR:
      return defaultState

    default:
      return state
  }
}

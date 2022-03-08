import ActionTypes from './ActionTypes'

const defaultState = {
  snackbar: {
    show: false,
    type: 'info',
    message: ''
  },
  modal: false,
  loading: false
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.LOADING_TRUE: {
      return {
        ...state,
        loading: true
      }
    }
    case ActionTypes.LOADING_FALSE: {
      return {
        ...state,
        loading: false
      }
    }
    case ActionTypes.SHOW_SNACKBAR: {
      return {
        ...state,
        snackbar: {
          show: true,
          type: action.payload.snackbarType,
          message: action.payload.snackbarMessage
        }
      }
    }
    case ActionTypes.CLOSE_SNACKBAR: {
      return {
        ...state,
        snackbar: defaultState.snackbar
      }
    }
    case ActionTypes.SHOW_MODAL: {
      return {
        ...state,
        modal: true
      }
    }
    case ActionTypes.CLOSE_MODAL: {
      return {
        ...state,
        modal: false
      }
    }
    default: {
      return state
    }
  }
}

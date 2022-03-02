import ActionTypes from './ActionTypes'

const defaultState = {
  userRepo: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.USER_REPO_INIT:
      return action.payload

    case ActionTypes.USER_REPO_ADD:
      return [...state, ...action.payload]

    case ActionTypes.USER_REPO_CLEAN:
      return []

    default:
      return state
  }
}

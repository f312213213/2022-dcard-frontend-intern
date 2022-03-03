import ActionTypes from './ActionTypes'

export default (state = 2, action) => {
  switch (action.type) {
    case ActionTypes.USER_REPO_PAGE_ADD: {
      return state + 1
    }
    default: {
      return state
    }
  }
}

import ActionTypes from './ActionTypes'

const defaultState = {
  repos: [],
  page: 2,
  haveMore: true,
  lastUsername: ''
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.USER_REPO_INIT:
      return {
        ...state,
        repos: action.payload.initRepo,
        lastUsername: action.payload.username
      }

    case ActionTypes.USER_REPO_ADD:
      return {
        ...state,
        repos: [...state.repos, ...action.payload],
        page: state.page + 1
      }

    case ActionTypes.USER_REPO_CLEAN:
      return defaultState

    case ActionTypes.USER_REPO_NO_MORE:
      return {
        ...state,
        haveMore: false
      }

    default:
      return state
  }
}

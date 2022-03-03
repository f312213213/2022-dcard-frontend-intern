import ActionTypes from './ActionTypes'

const defaultState = {
  trendingRepo: []
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.TRENDING_REPO_INIT:
      return action.payload

    case ActionTypes.TRENDING_REPO_ADD:
      return [...state, ...action.payload]

    case ActionTypes.TRENDING_REPO_CLEAN:
      return []

    default:
      return state
  }
}

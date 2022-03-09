import ActionTypes from './ActionTypes'

const defaultState = {
  title: 'Trending | Github Explorer',
  description: 'This is Dcard frontend intern 2022\'s homework'
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.SEO_CHANGE:
      return action.payload

    default: {
      return state
    }
  }
}

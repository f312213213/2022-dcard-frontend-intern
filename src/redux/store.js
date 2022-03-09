import thunk from 'redux-thunk'
import { createStore as _createStore, applyMiddleware, compose } from 'redux'

import rootReducer from './reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const createStore = () => _createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
)

const store = createStore()

export default store

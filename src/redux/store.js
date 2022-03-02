import rootReducer from './reducer'

import { createStore as _createStore } from 'redux'

export const createStore = () => _createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
)

const store = createStore()

export default store

import { combineReducers } from 'redux'

import userRepo from './userRepo/reducer'
import snackbar from './snackbar/reducer'

export default combineReducers({
  userRepo,
  snackbar
})

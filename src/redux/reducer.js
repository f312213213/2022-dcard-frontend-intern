import { combineReducers } from 'redux'

import userRepo from './userRepo/reducer'
import snackbar from './snackbar/reducer'
import userRepoPage from './userRepoPage/reducer'
import trendingRepo from './trendingRepo/reducer'
import trendingRepoPage from './trendingRepoPage/reducer'

export default combineReducers({
  userRepo,
  snackbar,
  userRepoPage,
  trendingRepo,
  trendingRepoPage
})

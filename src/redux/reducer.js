import { combineReducers } from 'redux'

import userRepo from './userRepo/reducer'
import trendingRepo from './trendingRepo/reducer'
import app from './app/reducer'
import seo from './seo/reducer'

export default combineReducers({
  userRepo,
  trendingRepo,
  app,
  seo
})

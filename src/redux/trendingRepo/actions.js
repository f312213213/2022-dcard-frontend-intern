import actionTypes from './ActionTypes'
import actions from '../actions'

export const trendingRepoInit = (dispatch, initRepo) => {
  dispatch(actions.app.loadingFalse())
  return {

    type: actionTypes.TRENDING_REPO_INIT,
    payload: initRepo
  }
}

export const trendingRepoAdd = (dispatch, addedRepo) => {
  dispatch(actions.app.loadingFalse())
  return {
    type: actionTypes.TRENDING_REPO_ADD,
    payload: addedRepo
  }
}

export const trendingRepoClean = () => ({
  type: actionTypes.TRENDING_REPO_CLEAN
})

export const trendingRepoNoMore = (dispatch) => {
  dispatch(actions.app.showSnackbar('info', '沒有更多Repo囉！'))
  dispatch(actions.app.loadingFalse())
  return {
    type: actionTypes.TRENDING_REPO_NO_MORE
  }
}

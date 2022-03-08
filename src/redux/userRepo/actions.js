import actionTypes from './ActionTypes'
import actions from '../actions'

export const userRepoInit = (initRepo) => ({
  type: actionTypes.USER_REPO_INIT,
  payload: initRepo
})

export const userRepoAdd = (addedRepo) => ({
  type: actionTypes.USER_REPO_ADD,
  payload: addedRepo
})

export const userRepoClean = () => ({
  type: actionTypes.USER_REPO_CLEAN
})

export const userRepoNoMore = (dispatch) => {
  dispatch(actions.app.showSnackbar('info', '沒有更多Repo囉！'))
  return {
    type: actionTypes.USER_REPO_NO_MORE
  }
}

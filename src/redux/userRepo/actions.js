import actionTypes from './ActionTypes'
import actions from '../actions'

export const userRepoInit = (dispatch, initRepo) => {
  dispatch(actions.app.loadingFalse())
  return {
    type: actionTypes.USER_REPO_INIT,
    payload: initRepo
  }
}

export const userRepoAdd = (dispatch, addedRepo) => {
  dispatch(actions.app.loadingFalse())
  return {
    type: actionTypes.USER_REPO_ADD,
    payload: addedRepo
  }
}

export const userRepoClean = (dispatch) => {
  return {
    type: actionTypes.USER_REPO_CLEAN
  }
}

export const userRepoNoMore = (dispatch) => {
  dispatch(actions.app.showSnackbar('info', '這是最後一頁了！'))
  return {
    type: actionTypes.USER_REPO_NO_MORE
  }
}

export const userGetFirstTenRepo = (username) => async (dispatch) => {
  dispatch(actions.userRepo.userRepoClean(dispatch))
  dispatch(actions.app.loadingTrue())
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=pushed&page=1`)
    if (response.status !== 200) {
      throw await response.json()
    }
    const responseJson = await response.json()
    if (responseJson.length < 10) {
      dispatch(actions.userRepo.userRepoNoMore(dispatch))
    }
    dispatch(actions.userRepo.userRepoInit(dispatch, responseJson))
    return dispatch(actions.app.loadingFalse())
  } catch (err) {
    dispatch(actions.app.handleError(err))
    return dispatch(actions.app.loadingFalse())
  }
}

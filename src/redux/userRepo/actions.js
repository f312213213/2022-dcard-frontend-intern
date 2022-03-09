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
  dispatch(actions.app.loadingFalse())
  return {
    type: actionTypes.USER_REPO_CLEAN
  }
}

export const userRepoNoMore = (dispatch) => {
  dispatch(actions.app.showSnackbar('info', '沒有更多Repo囉！'))
  return {
    type: actionTypes.USER_REPO_NO_MORE
  }
}

export const userGetFirstTenRepo = (dispatch, username) => async () => {
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
    return dispatch(actions.userRepo.userRepoInit(dispatch, responseJson))
  } catch (err) {
    if (err.message === 'Not Found') {
      dispatch(actions.userRepo.userRepoClean(dispatch))
      return dispatch(actions.app.showSnackbar('error', '找不到這個使用者 ！'))
    }
    if (err.message.indexOf('API') !== -1) {
      return dispatch(actions.app.showSnackbar('error', 'API 呼叫次數達到伺服器上限了！'))
    }
  }
}

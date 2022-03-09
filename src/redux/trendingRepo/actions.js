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

export const trendingGetFirstTenRepo = (dispatch) => async () => {
  dispatch(actions.app.loadingTrue())
  try {
    const response = await fetch('https://api.github.com/search/repositories?q=stars:%3E10000&sort=stars&per_page=10&page=1')
    if (response.status !== 200) {
      throw await response.json()
    }
    const responseJson = await response.json()
    const trendingRepo = responseJson.items
    dispatch(actions.trendingRepo.trendingRepoInit(dispatch, trendingRepo))
  } catch (err) {
    if (err.message.indexOf('API') !== -1) {
      dispatch(actions.app.showSnackbar('error', 'API 呼叫次數達到伺服器上限了！'))
    }
  }
}

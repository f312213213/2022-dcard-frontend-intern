import ActionTypes from './ActionTypes'
import actions from '../actions'
import store from '../store'

export const showModal = () => ({
  type: ActionTypes.SHOW_MODAL
})

export const closeModal = () => ({
  type: ActionTypes.CLOSE_MODAL
})

export const loadingTrue = () => ({
  type: ActionTypes.LOADING_TRUE
})

export const loadingFalse = () => ({
  type: ActionTypes.LOADING_FALSE
})

export const showSnackbar = (type, message) => ({
  type: ActionTypes.SHOW_SNACKBAR,
  payload: {
    snackbarType: type,
    snackbarMessage: message
  }
})

export const closeSnackbar = () => ({
  type: ActionTypes.CLOSE_SNACKBAR
})

export const getTenMoreRepo = (username, type) => async (dispatch) => {
  const userRepoPage = store.getState().userRepo.page
  const trendingRepoPage = store.getState().trendingRepo.page
  try {
    if (type === 'user') {
      const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=pushed&page=${userRepoPage}`)
      if (response.status !== 200) {
        throw await response.json()
      }
      const responseJson = await response.json()
      setTimeout(() => {
        if (responseJson.length < 10) dispatch(actions.userRepo.userRepoNoMore(dispatch))
        dispatch(actions.userRepo.userRepoAdd(dispatch, responseJson))
      }, 500)
      return
    }
    // trending
    const response = await fetch(`https://api.github.com/search/repositories?q=stars:%3E10000&sort=stars&per_page=10&page=${trendingRepoPage}`)
    if (response.status !== 200) {
      throw await response.json()
    }
    const responseJson = await response.json()
    const trendingRepo = responseJson.items
    setTimeout(() => {
      if (trendingRepo.length < 10) dispatch(actions.trendingRepo.trendingRepoNoMore(dispatch))
      dispatch(actions.trendingRepo.trendingRepoAdd(dispatch, trendingRepo))
    }, 500)
  } catch (err) {
    return dispatch(actions.app.handleError(err))
  }
}

export const getSingleRepoData = (username, repoName, setRepo, isCancelled) => async (dispatch) => {
  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`)
    if (response.status !== 200) {
      throw await response.json()
    }
    const responseJson = await response.json()
    if (!isCancelled.current) setRepo(responseJson)
  } catch (err) {
    return dispatch(actions.app.handleError(err))
  }
}

export const handleError = (err) => (dispatch) => {
  if (err.documentation_url.indexOf('list-repositories-for-a-user') !== -1) {
    return dispatch(actions.app.showSnackbar('error', '找不到這個使用者！'))
  }
  if (err.documentation_url.indexOf('get-a-repository') !== -1) {
    return dispatch(actions.app.showSnackbar('error', '找不到這個 repo ！'))
  }
  if (err.message.indexOf('API') !== -1) {
    return dispatch(actions.app.showSnackbar('error', 'API 呼叫次數達到伺服器上限了！'))
  }
  return dispatch(actions.app.showSnackbar('error', '現在出了點問題，請稍後再試！'))
}

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

export const getTenMoreRepo = (dispatch, username, type) => async () => {
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
    if (err.message.indexOf('API') !== -1) {
      dispatch(actions.app.showSnackbar('error', 'API 呼叫次數達到伺服器上限了！'))
    }
  }
}

export const getSingleRepoData = (dispatch, username, repoName, setRepo, isCancelled) => async () => {
  try {
    const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`)
    if (response.status !== 200) {
      throw await response.json()
    }
    const responseJson = await response.json()
    if (!isCancelled.current) setRepo(responseJson)
  } catch (err) {
    if (err.message === 'Not Found') {
      dispatch(actions.app.showSnackbar('error', '找不到這個 Repo ！'))
    } else if (err.message.indexOf('API') !== -1) {
      dispatch(actions.app.showSnackbar('error', 'API 呼叫次數達到伺服器上限了！'))
    }
  }
}

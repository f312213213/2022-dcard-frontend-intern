import actionTypes from './ActionTypes'

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

export const userRepoNoMore = () => ({
  type: actionTypes.USER_REPO_NO_MORE
})

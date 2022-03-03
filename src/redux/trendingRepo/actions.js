import actionTypes from './ActionTypes'

export const trendingRepoInit = (initRepo) => ({
  type: actionTypes.TRENDING_REPO_INIT,
  payload: initRepo
})

export const trendingRepoAdd = (addedRepo) => ({
  type: actionTypes.TRENDING_REPO_ADD,
  payload: addedRepo
})

export const trendingRepoClean = () => ({
  type: actionTypes.TRENDING_REPO_CLEAN
})

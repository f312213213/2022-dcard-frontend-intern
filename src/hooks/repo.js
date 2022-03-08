import { useSelector } from 'react-redux'

export const useUserRepo = () => {
  return useSelector(state => state.userRepo.repos)
}

export const useUserRepoLength = () => {
  return useSelector(state => state.userRepo.repos).length
}

export const useUserRepoPage = () => {
  return useSelector(state => state.userRepo.page)
}

export const useUserRepoHaveMore = (dispatch) => {
  return useSelector(state => state.userRepo.haveMore)
}

export const useTrendingRepo = () => {
  return useSelector(state => state.trendingRepo.repos)
}

export const useTrendingRepoLength = () => {
  return useSelector(state => state.trendingRepo.repos).length
}

export const useTrendingRepoPage = () => {
  return useSelector(state => state.trendingRepo.page)
}

export const useTrendingHaveMore = () => {
  return useSelector(state => state.trendingRepo.haveMore)
}

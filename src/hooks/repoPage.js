import { useSelector } from 'react-redux'

export const useUserRepoPage = () => {
  return useSelector(state => state.userRepoPage)
}

export const useTrendingRepoPage = () => {
  return useSelector(state => state.trendingRepoPage)
}

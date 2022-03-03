import { useSelector } from 'react-redux'

export const useUserRepo = () => {
  return useSelector(state => state.userRepo)
}

export const useUserRepoLength = () => {
  return useSelector(state => state.userRepo).length
}

export const useTrendingRepo = () => {
  return useSelector(state => state.trendingRepo)
}

export const useTrendingRepoLength = () => {
  return useSelector(state => state.trendingRepo).length
}

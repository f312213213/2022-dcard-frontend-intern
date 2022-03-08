import { useSelector } from 'react-redux'

export const useLoading = () => {
  return useSelector(state => state.loading)
}

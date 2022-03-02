import { useSelector } from 'react-redux'

export const useUserRepo = () => {
  return useSelector(state => state.userRepo)
}

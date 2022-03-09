import { useSelector } from 'react-redux'

export const useLoading = () => {
  return useSelector(state => state.app.loading)
}

export const useModal = () => {
  return useSelector(state => state.app.modal)
}

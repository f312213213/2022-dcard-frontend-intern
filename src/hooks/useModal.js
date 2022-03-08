import { useSelector } from 'react-redux'

const useModal = () => {
  return useSelector(state => state.modal)
}

export default useModal

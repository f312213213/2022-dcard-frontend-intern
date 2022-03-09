import React, { createRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import actions from '../../../redux/actions'

const InputSearch = () => {
  const searchRef = createRef()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSearch = () => {
    if (searchRef.current.value === '') return dispatch(actions.app.showSnackbar('error', '請輸入使用者帳號唷！'))
    if (localStorage.ghex_recent) {
      if (localStorage.ghex_recent.indexOf(searchRef.current.value) === -1) {
        localStorage.ghex_recent = [searchRef.current.value, localStorage.ghex_recent]
      } else {
        const tempRecent = localStorage.ghex_recent.split(',')
        if (tempRecent.length > 1) {
          tempRecent.splice(tempRecent.indexOf(searchRef.current.value), 1)
          tempRecent.length === 0 ? localStorage.ghex_recent = [searchRef.current.value] : localStorage.ghex_recent = [searchRef.current.value, tempRecent]
        }
      }
      const tempRecent = localStorage.ghex_recent.split(',')
      if (tempRecent.length > 3) {
        tempRecent.splice(-1, 1)
        localStorage.ghex_recent = tempRecent
      }
    } else {
      localStorage.ghex_recent = [searchRef.current.value]
    }
    navigate(`/users/${searchRef.current.value}/repos`)
    searchRef.current.value = ''
  }

  return (
      <div className={'flex justify-around items-center text-white hidden md:block'}>
        <input ref={searchRef} type="text" className={'bg-dcard-input-blue rounded w-96 p-2 outline-0'} placeholder={'搜尋 Github 帳號'}/>
        <button className={'text-xl my-auto rounded-sm p-1 h-full'} onClick={handleSearch}>
          <AiOutlineSearch />
        </button>
      </div>
  )
}

export default InputSearch

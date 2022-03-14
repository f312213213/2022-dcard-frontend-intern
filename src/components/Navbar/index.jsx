import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import InputSearch from './components/InputSearch'
import RecentSearch from './components/RecentSearch'
import LinkToHome from './components/LinkToHome'
import MobileSearch from './components/MobileSearch'
import ToggleMobile from './components/ToggleMobile'

import actions from '../../redux/actions'

const Navbar = () => {
  const [showMS, setShowMS] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleSearch = (searchRef) => {
    setShowMS(false)
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
      <nav className={'fixed top-0 p-2 flex justify-between md:justify-around items-center bg-dcard-light-blue w-full z-30'}>
        <LinkToHome setShowMS={setShowMS} />
        <InputSearch handleSearch={handleSearch}/>
        <RecentSearch setShowMS={setShowMS} />
        <ToggleMobile setShowMS={setShowMS} showMS={showMS} />
        <MobileSearch setShowMS={setShowMS} showMS={showMS} handleSearch={handleSearch}/>
      </nav>
  )
}

export default Navbar

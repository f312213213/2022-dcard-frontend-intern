import React from 'react'

import InputSearch from './components/InputSearch'
import RecentSearch from './components/RecentSearch'
import LinkToHome from './components/LinkToHome'

const Navbar = () => {
  return (
      <nav className={'fixed top-0 p-2 flex justify-around items-center bg-dcard-light-blue w-full z-40'}>
        <LinkToHome />
        <InputSearch />
        <RecentSearch />
      </nav>
  )
}

export default Navbar

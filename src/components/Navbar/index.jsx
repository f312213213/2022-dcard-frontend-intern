import React, { useState } from 'react'

import InputSearch from './components/InputSearch'
import RecentSearch from './components/RecentSearch'
import LinkToHome from './components/LinkToHome'
import MobileSearch from './components/MobileSearch'
import ToggleMobile from './components/ToggleMobile'

const Navbar = () => {
  const [showMS, setShowMS] = useState(false)

  return (
      <nav className={'fixed top-0 p-2 flex justify-between md:justify-around items-center bg-dcard-light-blue w-full z-30'}>
        <LinkToHome />
        <InputSearch />
        <RecentSearch setShowMS={setShowMS} />
        <ToggleMobile setShowMS={setShowMS} showMS={showMS} />
        {
          showMS && <MobileSearch setShowMS={setShowMS} />
        }
      </nav>
  )
}

export default Navbar

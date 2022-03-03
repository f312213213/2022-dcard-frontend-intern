import React from 'react'
import { Route, Routes } from 'react-router-dom'

import UserSearch from './UserSearch'
import RepoPage from './RepoPage'
import Trending from './Trending'

const AppRouter = () => {
  return (
      <div className={'pt-10 md:pt-20 md:bg-dcard-dark-blue pb-10'}>
        <Routes>
          <Route path={'/user/:username/repos/:repo'} element={<RepoPage />} />
          <Route path={'/user/:username/repos'} element={<UserSearch />} />
          <Route path={'/'} exact element={<Trending />} />
        </Routes>
      </div>
  )
}

export default AppRouter

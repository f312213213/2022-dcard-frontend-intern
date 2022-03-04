import React from 'react'
import { Route, Routes } from 'react-router-dom'

import UserSearch from './UserSearch'
import RepoPage from './RepoPage'
import Trending from './Trending'
import RepoPageModal from './RepoPage/RepoPageModal'

const AppRouter = () => {
  return (
      <div className={'md:bg-dcard-dark-blue'}>
        <Routes>
          <Route path={'/users/:username/repos/:repo'} element={<RepoPageModal />} />
          <Route path={'/users/:username/repos/:repo'} element={<RepoPage />} />
          <Route path={'/users/:username/repos'} element={<UserSearch />} />
          <Route path={'/'} exact element={<Trending />} />
        </Routes>
      </div>
  )
}

export default AppRouter

import React, { useEffect } from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import UserSearch from './UserSearch'
import RepoPage from './RepoPage'
import Trending from './Trending'
import RepoPageModal from './RepoPage/RepoPageModal'

import { useModal } from '../hooks/app'

const AppRouter = () => {
  const modal = useModal()

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [modal])

  return (
      <div className={'md:bg-dcard-dark-blue'}>
        <Routes>
          <Route path={'/trending'} exact element={<Trending />} >
            {
                modal && <Route path={'/trending/users/:username/repos/:repoName'} element={<RepoPageModal />} />
            }
          </Route>
          <Route path={'/users/:username/repos'} element={<UserSearch />} >
            {
                modal && <Route path={'/users/:username/repos/:repoName'} element={<RepoPageModal />} />
            }
          </Route>
          <Route path={'/users/:username/repos/:repoName'} element={<RepoPage />} />
          <Route path={'/trending/users/:username/repos/:repoName'} element={<RepoPage />} />

          <Route path={'*'} element={<Navigate to="/trending" />} />
        </Routes>
      </div>
  )
}

export default AppRouter

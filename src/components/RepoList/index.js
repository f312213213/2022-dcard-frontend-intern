import React from 'react'

import Repo from '../Repo'
import RepoLoader from './components/RepoLoader'

const RepoList = ({ repos }) => {
  return (
      <div className={'divide-y divide-gray-300 w-full px-4'}>
        {repos.map(repo => <Repo repo={repo} key={repo.id}/>)}
        <RepoLoader />
      </div>
  )
}

export default RepoList

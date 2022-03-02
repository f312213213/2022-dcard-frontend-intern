import React from 'react'
// import { Link } from 'react-router-dom'

// import { FAKE_SINGLE_REPO as repo } from '../../FAKE_SINGLE_REPO'
import RepoBase from './RepoBase'

const Repo = ({ repo }) => {
  return (

        <div className={'w-full flex flex-col p-4 hover:bg-gray-200 transition rounded'}>
          <div className={'flex items-center space-x-2 mb-3'}>
            <div className={'text-sm'}>
            <span className={'text-gray-500'}>
              {repo.pushed_at.substring(0, 10)}．{repo.language}
            </span>
            </div>
          </div>
          <RepoBase repo={repo} />
        </div>

  )
}

export default Repo

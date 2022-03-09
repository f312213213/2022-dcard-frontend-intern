import React from 'react'

import Topics from './Topics'

const RepoBody = ({ repo }) => {
  return (
      <div className={'w-full text-left'}>
        <h1 className={'text-left text-xl font-bold mb-4'}>
          {repo.full_name}
        </h1>
        <p className={'text-lg mb-4'}>
          {repo.description}
        </p>
        <Topics repo={repo} />
      </div>
  )
}

export default RepoBody

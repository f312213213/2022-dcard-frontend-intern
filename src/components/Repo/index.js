import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

// import { FAKE_SINGLE_REPO as repo } from '../../FAKE_SINGLE_REPO'
import RepoBase from './RepoBase'
import actions from '../../redux/actions'
import RepoLoader from '../RepoLoader'

const Repo = ({ repo, type }) => {
  const dispatch = useDispatch()

  const showModal = () => {
    dispatch(actions.app.showModal())
  }

  if (type === 'trending') {
    return (
        <Link to={`/trending/users/${repo.owner.login}/repos/${repo.name}`}>
          <div className={'w-full flex flex-col p-4 hover:bg-gray-200 transition rounded'} onClick={showModal}>
            <div className={'flex items-center space-x-2 mb-3'}>
              <div className={'text-sm'}>
            <span className={'text-gray-500'}>
              {repo.owner.login}．{repo.pushed_at.substring(0, 10)}
            </span>
              </div>
            </div>
            <RepoBase repo={repo} />
          </div>
        </Link>
    )
  } else if (type === 'user') {
    return (
        <Link to={`/users/${repo.owner.login}/repos/${repo.name}`}>
          <div className={'w-full flex flex-col p-4 hover:bg-gray-200 transition rounded'} onClick={showModal}>
            <div className={'flex items-center space-x-2 mb-3'}>
              <div className={'text-sm'}>
            <span className={'text-gray-500'}>
              {repo.pushed_at.substring(0, 10)}．{repo.language}
            </span>
              </div>
            </div>
            <RepoBase repo={repo} />
          </div>
        </Link>
    )
  } else if (type === 'topic') {
    return (
        <Link to={`/topic/${repo.owner.login}/repos/${repo.name}`}>
          <div className={'w-full flex flex-col p-4 hover:bg-gray-200 transition rounded'} onClick={showModal}>
            <div className={'flex items-center space-x-2 mb-3'}>
              <div className={'text-sm'}>
            <span className={'text-gray-500'}>
              {repo.pushed_at.substring(0, 10)}．{repo.language}
            </span>
              </div>
            </div>
            <RepoBase repo={repo} />
          </div>
        </Link>
    )
  }
  return (
      <RepoLoader />
  )
}

export default Repo

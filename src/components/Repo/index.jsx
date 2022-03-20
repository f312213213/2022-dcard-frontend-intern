import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import RepoBase from './RepoBase'

import actions from '../../redux/actions'

const Repo = ({ repo, type }) => {
  const dispatch = useDispatch()

  const showModal = () => {
    dispatch(actions.app.showModal())
  }

  const renderPath = () => {
    if (type === 'trending') return `/trending/users/${repo.owner.login}/repos/${repo.name}`
    if (type === 'user') return `/users/${repo.owner.login}/repos/${repo.name}`
  }

  const renderText = () => {
    if (type === 'trending') return `${repo.owner.login}．${repo.pushed_at.substring(0, 10)}`
    if (type === 'user') return `${repo.pushed_at.substring(0, 10)}．${repo.language}`
  }

  return (
      <Link to={renderPath()}>
        <div className={'w-full flex flex-col p-4 hover:bg-gray-200 transition rounded border-b'} onClick={showModal}>
          <h4 className={'text-sm text-gray-500 mb-3'}>
            {renderText()}
          </h4>
          <RepoBase repo={repo} />
        </div>
      </Link>
  )
}

export default Repo

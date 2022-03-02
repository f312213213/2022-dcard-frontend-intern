import React from 'react'
import { AiOutlineStar, AiOutlineEye } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'

const RepoBase = ({ repo }) => {
  return (
      <div>
        <div className={'font-bold text-lg'}>
          {repo.name}
        </div>
        <span className={'text-sm text-gray-500 text-truncate'}>
          {repo.description
            ? repo.description.length > 150 ? repo.description.substring(0, 150) + '...' : repo.description
            : '作者還在努力寫簡介'}
        </span>

        <div className={'space-x-4 flex text-gray-500 mt-2'}>
          <div className={'flex items-center'}>
            <AiOutlineStar/>&nbsp;{repo.stargazers_count}
          </div>
          <div className={'flex items-center '}>
            <AiOutlineEye/>&nbsp;{repo.watchers_count}
          </div>
          <div className={'flex items-center '}>
            <BiGitRepoForked/>&nbsp;{repo.forks_count}
          </div>
        </div>
      </div>
  )
}

export default RepoBase

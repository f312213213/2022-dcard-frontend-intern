import React from 'react'
import { AiOutlineEye, AiOutlineStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'

const STAT_STYLE = 'flex items-center'
const Statistic = ({ repo }) => {
  return (
      <div className={'space-x-4 flex text-gray-500 mt-4 w-full'}>
        <div className={STAT_STYLE}>
          <AiOutlineStar/>&nbsp;{repo.stargazers_count}
        </div>
        <div className={STAT_STYLE}>
          <AiOutlineEye/>&nbsp;{repo.watchers_count}
        </div>
        <div className={STAT_STYLE}>
          <BiGitRepoForked/>&nbsp;{repo.forks_count}
        </div>
      </div>
  )
}

export default Statistic

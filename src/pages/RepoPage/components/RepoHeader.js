import React from 'react'
import { MdOpenInNew } from 'react-icons/md'

const RepoHeader = ({ repo }) => {
  return (
      <header className={'flex justify-between items-center w-full mb-4'}>
        <div className={'flex items-center space-x-4'}>
          <img src={repo.owner.avatar_url} alt={repo.owner.login} className={'rounded-full w-12 h-12'}/>
          <h3>{repo.owner.login}</h3>
        </div>
        <a href={repo.html_url} target={'_blank'} referrerPolicy={'no-referrer'} rel="noreferrer" >
          <button className={'flex items-center justify-center transition bg-dcard-btn-blue hover:bg-dcard-btn-hover-blue p-2 text-white rounded'}>
                  <span className={'hidden lg:block'}>
                    點我到repo頁面&nbsp;
                  </span>
            <MdOpenInNew/>
          </button>
        </a>
      </header>
  )
}

export default RepoHeader

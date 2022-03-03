import React from 'react'

import Header from '../../components/RepoList/components/Header'
import RepoList from '../../components/RepoList'
import { FAKE_REPOS as repos } from '../../FAKE_REPOS'

const Trending = () => {
  return (
      <div className={'w-full flex justify-center'}>
        <div className={'w-full  relative md:w-2/3 bg-white flex flex-col items-center rounded-2xl'}>
          <Header header={'Trending'}/>
          <RepoList repos={repos}/>
        </div>
      </div>
  )
}

export default Trending

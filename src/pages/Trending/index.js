import React from 'react'

import Header from '../../components/RepoList/components/Header'
import RepoList from '../../components/RepoList'
// import { FAKE_REPOS as repos } from '../../FAKE_REPOS'

const Trending = () => {
  return (
      <div className={'w-full min-h-screen flex justify-center'}>
        <div className={'relative h-full md:w-2/3 bg-white flex flex-col items-center rounded-2xl'}>
          <Header header={'Trending'}/>
          <RepoList />
        </div>
      </div>
  )
}

export default Trending

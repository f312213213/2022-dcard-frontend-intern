import React from 'react'

import { FAKE_SINGLE_REPO as repo } from '../../FAKE_SINGLE_REPO'
import Statistic from './components/Statistic'
import RepoBody from './components/RepoBody'
import RepoHeader from './components/RepoHeader'

const RepoPage = () => {
  return (
      <div className={'Page items-center'}>
        <div className={'PageContainer h-96 p-8'}>
          <RepoHeader repo={repo} />
          <RepoBody repo={repo} />
          <Statistic repo={repo} />
        </div>
      </div>
  )
}

export default RepoPage

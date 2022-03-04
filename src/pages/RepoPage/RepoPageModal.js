import React from 'react'
import RepoHeader from './components/RepoHeader'
import { FAKE_SINGLE_REPO as repo } from '../../FAKE_SINGLE_REPO'
import RepoBody from './components/RepoBody'
import Statistic from './components/Statistic'

const RepoPageModal = () => {
  return (
      <div className={'Page items-center Modal'}>
        <div className={'PageContainer h-96 p-8'}>
          <RepoHeader repo={repo} />
          <RepoBody repo={repo} />
          <Statistic repo={repo} />
        </div>
      </div>
  )
}

export default RepoPageModal

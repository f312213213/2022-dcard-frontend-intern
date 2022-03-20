import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Statistic from './components/Statistic'
import RepoBody from './components/RepoBody'
import RepoHeader from './components/RepoHeader'
import RepoPageLoader from './components/RepoPageLoader'

import actions from '../../redux/actions'

const RepoPage = () => {
  const { username, repoName } = useParams()
  const [repo, setRepo] = useState({})
  const dispatch = useDispatch()
  const isCancelled = useRef(false)

  const metaData = {
    title: `${repoName} | Github Explorer`,
    description: `${repoName} 在 GitHub 上的repo資料`
  }

  useEffect(() => {
    dispatch(actions.seo.seoChange(metaData))
  }, [])

  useEffect(() => {
    dispatch(actions.app.getSingleRepoData(username, repoName, setRepo, isCancelled))
    return () => {
      isCancelled.current = true
    }
  }, [])
  return (
      <div className={'Page items-center'}>
        <div className={'PageContainer h-96 p-8'}>
          {
            repo.full_name
              ? <>
                  <RepoHeader repo={repo} />
                  <RepoBody repo={repo} />
                  <Statistic repo={repo} />
                </>
              : <RepoPageLoader />
          }
        </div>
      </div>
  )
}

export default RepoPage

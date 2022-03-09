import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Statistic from './components/Statistic'
import RepoBody from './components/RepoBody'
import RepoHeader from './components/RepoHeader'
import actions from '../../redux/actions'
import RepoPageLoader from './components/RepoPageLoader'

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

  const getRepoData = async () => {
    try {
      const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`)
      if (response.status !== 200) {
        throw await response.json()
      }
      const responseJson = await response.json()
      if (!isCancelled.current) setRepo(responseJson)
    } catch (err) {
      if (err.message === 'Not Found') {
        dispatch(actions.app.showSnackbar('error', '找不到這個 Repo ！'))
      } else if (err.message.indexOf('API') !== -1) {
        dispatch(actions.app.showSnackbar('error', 'API 呼叫次數達到伺服器上限了！'))
      }
    }
  }

  useEffect(() => {
    getRepoData()
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

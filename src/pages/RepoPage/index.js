import React, { useEffect, useState } from 'react'
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

  const getRepoData = async () => {
    try {
      const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`)
      if (response.status !== 200) {
        throw await response.json()
      }
      const responseJson = await response.json()
      setRepo(responseJson)
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

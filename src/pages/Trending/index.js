import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'

import Header from '../../components/RepoList/components/Header'
import RepoList from '../../components/RepoList'
import Repo from '../../components/Repo'
import { useTrendingRepo } from '../../hooks/repo'
import actions from '../../redux/actions'
import RepoLoader from '../../components/RepoLoader'
import { useLoading } from '../../hooks/app'
// import { FAKE_REPOS as repos } from '../../FAKE_REPOS'

const Trending = () => {
  const AllRows = ({ index, key, style }) => {
    return (
        <div key={key} style={style}>
          {
            repos[index] ? <Repo repo={repos[index]} type={'trending'} /> : <RepoLoader />
          }
        </div>
    )
  }

  const repos = useTrendingRepo()
  const dispatch = useDispatch()
  const loading = useLoading()

  useEffect(() => {
    const getFirstTenTrendingRepos = async () => {
      dispatch(actions.app.loadingTrue())
      try {
        const response = await fetch('https://api.github.com/search/repositories?q=stars:%3E10000&sort=stars&per_page=10&page=1')
        if (response.status !== 200) {
          throw await response.json()
        }
        const responseJson = await response.json()
        const trendingRepo = responseJson.items
        dispatch(actions.trendingRepo.trendingRepoInit(dispatch, trendingRepo))
      } catch (err) {
        if (err.message.indexOf('API') !== -1) {
          dispatch(actions.app.showSnackbar('error', 'API 呼叫次數達到伺服器上限了！'))
        }
      }
    }
    if (repos.length < 1) {
      getFirstTenTrendingRepos()
    }
  }, [])

  useEffect(() => {
    dispatch(actions.app.loadingFalse())
  }, [])

  return (
      <>
        <Outlet />
        <div className={'Page'}>
          <div className={'PageContainer'}>
            <Header header={'Trending'}/>
            <RepoList type={'trending'} username={''} renderer={AllRows} count={repos.length === 0 ? 10 : repos.length}/>
            {
              loading && <RepoLoader />
            }
          </div>
        </div>
      </>

  )
}

export default Trending

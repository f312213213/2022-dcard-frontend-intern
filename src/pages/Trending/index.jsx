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

  const metaData = {
    title: 'Trending | Github Explorer',
    description: 'Trending repo on Github.'
  }

  useEffect(() => {
    dispatch(actions.seo.seoChange(metaData))
  }, [])

  useEffect(() => {
    if (repos.length < 1) {
      dispatch(actions.trendingRepo.trendingGetFirstTenRepo(dispatch))
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
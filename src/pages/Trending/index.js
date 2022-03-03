import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from '../../components/RepoList/components/Header'
import RepoList from '../../components/RepoList'
import Repo from '../../components/Repo'
import { useTrendingRepo, useTrendingRepoLength } from '../../hooks/repo'
import actions from '../../redux/actions'
import RepoLoader from '../../components/RepoLoader'
import { useTrendingRepoPage } from '../../hooks/repoPage'
// import { FAKE_REPOS as repos } from '../../FAKE_REPOS'

const Trending = () => {
  const AllRows = ({ index, key, style }) => {
    return (
        <div key={key} style={style}>
          <Repo repo={repos[index]} />
        </div>
    )
  }
  const isRowLoaded = ({ index }) => {
    return !!repos[index]
  }

  const repos = useTrendingRepo()
  const page = useTrendingRepoPage()
  const length = useTrendingRepoLength()
  const dispatch = useDispatch()

  useEffect(() => {
    const getFirstTenTrendingRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/search/repositories?q=stars:%3E10000&sort=stars&per_page=10&page=1')
        if (response.status !== 200) {
          throw await response.json()
        }
        const responseJson = await response.json()
        const trendingRepo = responseJson.items
        dispatch(actions.trendingRepo.trendingRepoInit(trendingRepo))
      } catch (err) {
        if (err.message.indexOf('API') !== -1) {
          dispatch(actions.snackbar.showSnackbar('alert', 'Hit API limit!'))
        }
      }
    }
    getFirstTenTrendingRepos()
  }, [])

  return (
      <div className={'repoListPage'}>
        <div className={'repoListPageContainer'}>
          <Header header={'Trending'}/>
          {
            length > 0
              ? <RepoList type={'trending'} renderer={AllRows} count={repos.length} isRowLoaded={isRowLoaded} path={`https://api.github.com/search/repositories?q=stars:%3E10000&sort=stars&per_page=10&page=${page}`}/>
              : <RepoLoader />
          }
        </div>
      </div>
  )
}

export default Trending

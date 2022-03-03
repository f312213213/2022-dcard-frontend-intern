import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Header from '../../components/RepoList/components/Header'
import RepoList from '../../components/RepoList'
import Repo from '../../components/Repo'
import { useUserRepo, useUserRepoLength } from '../../hooks/repo'
import actions from '../../redux/actions'
import RepoLoader from '../../components/RepoLoader'
import { useUserRepoPage } from '../../hooks/repoPage'
// import { FAKE_REPOS as repos } from '../../FAKE_REPOS'

const UserSearch = () => {
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

  const repos = useUserRepo()
  const page = useUserRepoPage()
  const length = useUserRepoLength()
  const dispatch = useDispatch()

  useEffect(() => {
    const getFirstTenUserRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/f312213213/repos?per_page=10&sort=pushed&page=1')
        if (response.status !== 200) {
          throw await response.json()
        }
        const responseJson = await response.json()

        dispatch(actions.userRepo.userRepoInit(responseJson))
      } catch (err) {
        if (err.message.indexOf('API') !== -1) {
          dispatch(actions.snackbar.showSnackbar('alert', 'Hit API limit!'))
        }
      }
    }
    getFirstTenUserRepos()
  }, [])

  return (
      <div className={'Page'}>
        <div className={'PageContainer'}>
          <Header header={'User'}/>
          {
            length > 0
              ? <RepoList type={'user'} renderer={AllRows} count={repos.length} isRowLoaded={isRowLoaded} path={`https://api.github.com/users/f312213213/repos?per_page=10&sort=pushed&page=${page}`}/>
              : <RepoLoader />
          }
        </div>
      </div>
  )
}

export default UserSearch

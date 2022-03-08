import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, Outlet } from 'react-router-dom'

import Header from '../../components/RepoList/components/Header'
import RepoList from '../../components/RepoList'
import Repo from '../../components/Repo'
import { useUserRepo } from '../../hooks/repo'
import actions from '../../redux/actions'
import RepoLoader from '../../components/RepoLoader'
// import { FAKE_REPOS as repos } from '../../FAKE_REPOS'

const UserSearch = () => {
  const AllRows = ({ index, key, style }) => {
    return (
        <div key={key} style={style}>
          {
            repos[index] ? <Repo repo={repos[index]} type={'user'} /> : <RepoLoader />
          }
        </div>
    )
  }
  const { username } = useParams()
  const repos = useUserRepo()
  const dispatch = useDispatch()

  useEffect(() => {
    const getFirstTenUserRepos = async () => {
      dispatch(actions.app.loadingTrue())
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=pushed&page=1`)
        if (response.status !== 200) {
          throw await response.json()
        }
        const responseJson = await response.json()
        dispatch(actions.app.loadingFalse())
        dispatch(actions.userRepo.userRepoInit(responseJson))
      } catch (err) {
        if (err.message.indexOf('API') !== -1) {
          dispatch(actions.app.showSnackbar('error', 'Hit API limit!'))
        }
      }
    }
    getFirstTenUserRepos()
  }, [username])

  return (
      <>
        <Outlet />
        <div className={'Page'}>
          <div className={'PageContainer'}>
            <Header header={`${username}' s repo`}/>
            <RepoList type={'user'} username={username} renderer={AllRows} count={repos.length === 0 ? 10 : repos.length + 1}/>
          </div>
        </div>
      </>

  )
}

export default UserSearch

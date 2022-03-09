import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, Outlet } from 'react-router-dom'

import Header from '../../components/RepoList/components/Header'
import RepoList from '../../components/RepoList'
import Repo from '../../components/Repo'
import { useUserRepo } from '../../hooks/repo'
import actions from '../../redux/actions'
import RepoLoader from '../../components/RepoLoader'
import { useLoading } from '../../hooks/app'
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
  const loading = useLoading()

  useEffect(() => {
    const getFirstTenUserRepos = async () => {
      dispatch(actions.userRepo.userRepoClean(dispatch))
      dispatch(actions.app.loadingTrue())
      try {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=pushed&page=1`)
        if (response.status !== 200) {
          throw await response.json()
        }
        const responseJson = await response.json()
        if (responseJson.length < 10) {
          dispatch(actions.userRepo.userRepoNoMore(dispatch))
        }
        dispatch(actions.userRepo.userRepoInit(dispatch, responseJson))
      } catch (err) {
        if (err.message === 'Not Found') {
          dispatch(actions.userRepo.userRepoClean(dispatch))
          return dispatch(actions.app.showSnackbar('error', '找不到這個使用者 ！'))
        }
        if (err.message.indexOf('API') !== -1) {
          return dispatch(actions.app.showSnackbar('error', 'API 呼叫次數達到伺服器上限了！'))
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
            <RepoList type={'user'} username={username} renderer={AllRows} count={repos.length === 0 ? 10 : repos.length}/>
            {
                loading && <RepoLoader />
            }
          </div>
        </div>
      </>

  )
}

export default UserSearch

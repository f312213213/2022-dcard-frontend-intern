import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams, Outlet } from 'react-router-dom'

import Header from '../../components/RepoList/components/Header'
import RepoList from '../../components/RepoList'
import Repo from '../../components/Repo'
import RepoLoader from '../../components/RepoLoader'
import ExistNoRepo from '../../components/ExistNoRepo'

import { useLastUsername, useUserRepo } from '../../hooks/repo'
import { useLoading } from '../../hooks/app'

import actions from '../../redux/actions'

const UserSearch = () => {
  const AllRows = ({ index, key, style }) => {
    return (
        <div key={repos[index].id} style={style}>
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
  const lastUsername = useLastUsername()
  const metaData = {
    title: `「${username}」 的搜尋結果 | Github Explorer`,
    description: `在 Github 上搜尋「${username}」的結果`
  }

  useEffect(() => {
    dispatch(actions.seo.seoChange(metaData))
  }, [username])

  useEffect(() => {
    if (lastUsername.toLowerCase() === username.toLowerCase()) return
    dispatch(actions.userRepo.userGetFirstTenRepo(username))
  }, [username])

  return (
      <>
        <Outlet />
        <div className={'Page'}>
          <div className={'PageContainer'}>
            <Header header={`${username.toLowerCase()}' s repo`}/>
            {
              repos.length !== 0 &&
                <RepoList
                    type={'user'}
                    username={username}
                    renderer={AllRows}
                    count={repos.length}
                />
            }

            {
                loading && <RepoLoader />
            }

            {
              repos.length === 0 && !loading &&
                <ExistNoRepo />
            }
          </div>
        </div>
      </>

  )
}

export default UserSearch

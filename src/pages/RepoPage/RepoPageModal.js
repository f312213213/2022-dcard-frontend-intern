import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import RepoHeader from './components/RepoHeader'
import RepoBody from './components/RepoBody'
import Statistic from './components/Statistic'
import actions from '../../redux/actions'
import { useModal } from '../../hooks/app'
import RepoPageLoader from './components/RepoPageLoader'

const RepoPageModal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { username, repoName } = useParams()
  const divRef = useRef()
  const modal = useModal()
  const [repo, setRepo] = useState({})

  const leaveModal = () => {
    navigate(-1)
    dispatch(actions.app.closeModal())
  }

  const handleClick = (e) => {
    if (e.target === divRef.current && modal) {
      leaveModal()
    }
  }

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
      <>
        <nav className={'md:hidden flex w-full bg-dcard-dark-blue absolute top-0 z-50 text-white p-4 justify-center items-center'}>
          <button onClick={leaveModal}>
            ＜
          </button>
        </nav>
        <div className={'Page items-center Modal'} onClick={handleClick} ref={divRef}>
          <div className={'PageContainer h-screen md:h-96 p-8 z-50'}>
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
      </>

  )
}

export default RepoPageModal

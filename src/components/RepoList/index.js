import React, { useEffect, useState } from 'react'
import { List, WindowScroller, AutoSizer } from 'react-virtualized'
import { useDispatch } from 'react-redux'

import actions from '../../redux/actions'
import { useTrendingHaveMore, useTrendingRepoPage, useUserRepoHaveMore, useUserRepoPage } from '../../hooks/repo'
import { useLoading } from '../../hooks/app'
// import RepoLoader from '../RepoLoader'

const RepoList = ({ renderer, count, type, username }) => {
  const dispatch = useDispatch()
  const loading = useLoading()
  const userRepoPage = useUserRepoPage()
  const trendingRepoPage = useTrendingRepoPage()
  const haveMore = type === 'user' ? useUserRepoHaveMore() : useTrendingHaveMore()

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !loading && haveMore) {
      dispatch(actions.app.loadingTrue())
      getTenMoreRepo()
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading, userRepoPage, trendingRepoPage])

  const getTenMoreRepo = async () => {
    try {
      if (type === 'user') {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=pushed&page=${userRepoPage}`)
        if (response.status !== 200) {
          throw await response.json()
        }
        const responseJson = await response.json()
        setTimeout(() => {
          if (responseJson.length < 10) dispatch(actions.userRepo.userRepoNoMore(dispatch))
          dispatch(actions.userRepo.userRepoAdd(dispatch, responseJson))
        }, 500)
        return
      }
      // trending
      const response = await fetch(`https://api.github.com/search/repositories?q=stars:%3E10000&sort=stars&per_page=10&page=${trendingRepoPage}`)
      if (response.status !== 200) {
        throw await response.json()
      }
      const responseJson = await response.json()
      const trendingRepo = responseJson.items
      setTimeout(() => {
        if (trendingRepo.length < 10) dispatch(actions.trendingRepo.trendingRepoNoMore(dispatch))
        dispatch(actions.trendingRepo.trendingRepoAdd(dispatch, trendingRepo))
      }, 500)
    } catch (err) {
      if (err.message.indexOf('API') !== -1) {
        dispatch(actions.app.showSnackbar('error', 'API 呼叫次數達到伺服器上限了！'))
      }
    }
  }

  return (
      <div className={'divide-y divide-gray-300 w-full px-4 min-h-screen'}>
          <WindowScroller>
            {({ height, scrollTop }) => (
                <div className={'h-full flex-1'}>
                  <AutoSizer disableHeight>
                    {({ width }) => (
                          <List
                              autoHeight
                              height={height}
                              width={width}
                              scrollTop={scrollTop}
                              rowHeight={165}
                              rowRenderer={renderer}
                              rowCount={count}
                              overscanRowCount={5}
                          />
                    )}
                  </AutoSizer>
                </div>
            )}
          </WindowScroller>
      </div>
  )
}

export default RepoList

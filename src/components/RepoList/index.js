import React, { useCallback, useEffect, useState, useRef } from 'react'
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
  }, [loading])

  // FIXME 滾到底沒有觸發
  const getTenMoreRepo = async () => {
    try {
      if (type === 'user') {
        const response = await fetch(`https://api.github.com/users/${username}/repos?per_page=10&sort=pushed&page=${userRepoPage}`)
        if (response.status !== 200) {
          throw await response.json()
        }
        const responseJson = await response.json()
        if (responseJson.length < 10) {
          dispatch(actions.userRepo.userRepoNoMore(dispatch))
        }
        setTimeout(() => {
          dispatch(actions.userRepo.userRepoAdd(responseJson))
          dispatch(actions.app.loadingFalse())
        }, 1000)
        return
      }
      // trending
      const response = await fetch(`https://api.github.com/search/repositories?q=stars:%3E10000&sort=stars&per_page=10&page=${trendingRepoPage}`)
      if (response.status !== 200) {
        throw await response.json()
      }
      const responseJson = await response.json()
      const trendingRepo = responseJson.items
      if (trendingRepo.length < 10) dispatch(actions.trendingRepo.trendingRepoNoMore())
      dispatch(actions.trendingRepo.trendingRepoAdd(trendingRepo))
      dispatch(actions.app.loadingFalse())
    } catch (err) {
      if (err.message.indexOf('API') !== -1) {
        dispatch(actions.app.showSnackbar('error', 'Hit API limit!'))
      }
    }
  }
  return (
      <div className={'divide-y divide-gray-300 w-full px-4 min-h-screen'}>
          <WindowScroller>
            {({ height, scrollTop }) => (
                <div className={'h-full flex-1'} onScroll={() => console.log('scroll')}>
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

import React, { useEffect, useState } from 'react'
import { List, WindowScroller, AutoSizer } from 'react-virtualized'
import { useDispatch } from 'react-redux'

import actions from '../../redux/actions'
import { useTrendingHaveMore, useTrendingRepoPage, useUserRepoHaveMore, useUserRepoPage } from '../../hooks/repo'
import { useLoading } from '../../hooks/app'

const RepoList = ({ renderer, count, type, username }) => {
  const dispatch = useDispatch()
  const loading = useLoading()
  const userRepoPage = useUserRepoPage()
  const trendingRepoPage = useTrendingRepoPage()
  const haveMore = type === 'user' ? useUserRepoHaveMore() : useTrendingHaveMore()

  const handleScroll = () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight && !loading && haveMore) {
      dispatch(actions.app.loadingTrue())
      dispatch(actions.app.getTenMoreRepo(dispatch, username, type))
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [loading, userRepoPage, trendingRepoPage])

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

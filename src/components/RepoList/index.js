import React from 'react'
import { List, WindowScroller, AutoSizer, InfiniteLoader } from 'react-virtualized'
import { useDispatch } from 'react-redux'

import actions from '../../redux/actions'
import RepoLoader from '../RepoLoader'

// import Repo from '../Repo'
// import { FAKE_REPOS as repos } from '../../FAKE_REPOS'
// import RepoLoader from './components/RepoLoader'

const RepoList = ({ renderer, count, isRowLoaded, path, type }) => {
  const dispatch = useDispatch()
  // FIXME 滾到底沒有觸發
  const getTenMoreRepo = () => {
    console.log('fire')
    return async () => {
      try {
        const response = await fetch(path)
        if (response.status !== 200) {
          throw await response.json()
        }
        const responseJson = await response.json()
        if (type === 'user') {
          dispatch(actions.userRepo.userRepoInit(responseJson))
          return
        }
        const trendingRepo = responseJson.items
        dispatch(actions.trendingRepo.trendingRepoAdd(trendingRepo))
      } catch (err) {
        if (err.message.indexOf('API') !== -1) {
          dispatch(actions.snackbar.showSnackbar('alert', 'Hit API limit!'))
        }
      }
    }
  }
  return (
      <div className={'divide-y divide-gray-300 w-full px-4 min-h-screen'}>
        <InfiniteLoader
            minimumBatchSize={10}
            isRowLoaded={isRowLoaded}
            loadMoreRows={getTenMoreRepo}
            rowCount={count}
            threshold={8}
        >
          {({ onRowsRendered, registerChild }) => (
          <WindowScroller>
            {({ height, scrollTop }) => (
                <AutoSizer disableHeight>
                  {({ width }) => (
                      <List
                          onRowsRendered={onRowsRendered}
                          ref={registerChild}
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
            )}
          </WindowScroller>
          )}
        </InfiniteLoader>
        <RepoLoader />
      </div>
  )
}

export default RepoList

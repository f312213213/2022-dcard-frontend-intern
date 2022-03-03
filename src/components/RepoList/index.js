import React from 'react'
import { List, WindowScroller, AutoSizer } from 'react-virtualized'

import Repo from '../Repo'
import { FAKE_REPOS as repos } from '../../FAKE_REPOS'
// import RepoLoader from './components/RepoLoader'

const AllRows = ({ index, key, style }) => {
  return (
      <div key={key} style={style}>
        <Repo repo={repos[index]} key={repos[index].id}/>
      </div>
  )
}
const RepoList = () => {
  return (
      <div className={'divide-y divide-gray-300 w-full px-4 min-h-screen'}>
        <WindowScroller>
          {({ height, scrollTop }) => (
              <AutoSizer disableHeight>
                {({ width }) => (
                    <List
                        autoHeight
                        height={height}
                        width={width}
                        scrollTop={scrollTop}
                        rowHeight={148}
                        rowRenderer={AllRows}
                        rowCount={repos.length}
                        overscanRowCount={5}
                    />
                )}
              </AutoSizer>
          )}
        </WindowScroller>
      </div>
  )
}

export default RepoList

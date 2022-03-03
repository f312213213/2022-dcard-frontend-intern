import React from 'react'
import { FixedSizeList as List } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'

import Repo from '../Repo'
import { FAKE_REPOS as repos } from '../../FAKE_REPOS'
// import RepoLoader from './components/RepoLoader'
const AllRows = () => repos.map(repo => <Repo repo={repo} key={repo.id}/>)

const RepoList = ({ repos }) => {
  return (
        <AutoSizer>
          {({ height, width }) => (
              <List
                  className={'divide-y divide-gray-300 w-full px-4 min-h-screen -translate-x-1/2'}
                  height={height}
                  itemCount={1}
                  itemSize={repos.length}
                  width={width}
              >
                {AllRows}
              </List>
          )}
        </AutoSizer>

  )
}

export default RepoList

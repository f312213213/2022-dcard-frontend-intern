import React from 'react'
import { Skeleton } from '@mui/material'

const RepoLoader = () => {
  return (
      <div className={'w-full p-4 flex flex-col space-y-2'}>
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={105} height={10} />
        <Skeleton variant="rectangular" width={210} height={10} />
      </div>
  )
}

export default RepoLoader

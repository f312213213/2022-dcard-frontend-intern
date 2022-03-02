import React from 'react'
import { TailSpin } from 'react-loader-spinner'

const RepoLoader = () => {
  return (
      <div className={'flex justify-center p-4'}>
        <TailSpin color="#246AA6" height={40} width={40}/>
      </div>
  )
}

export default RepoLoader

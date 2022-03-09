import React from 'react'
import { Skeleton } from '@mui/material'
import { AiOutlineEye, AiOutlineStar } from 'react-icons/ai'
import { BiGitRepoForked } from 'react-icons/bi'

const STAT_STYLE = 'flex items-center'
const RepoPageLoader = () => {
  return (
      <>
        <header className={'flex justify-between items-center w-full mb-4'}>
          <div className={'flex items-center space-x-4'}>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant={'text'} width={200} height={20} />
          </div>
            <button className={'flex items-center justify-center transition p-2 text-white rounded'}>
                  <span className={'hidden lg:block'}>
                    <Skeleton variant={'text'} width={100} height={50} />
                  </span>
              <div className={'block lg:hidden'}>
                <Skeleton variant={'text'} width={50} height={50} />
              </div>
            </button>
        </header>
        <div className={'w-full text-left'}>
          <h1 className={'text-left text-xl font-bold mb-4'}>
            <Skeleton variant={'text'} width={200} height={20} />
          </h1>
          <p className={'text-lg mb-4'}>
            <Skeleton variant={'text'} width={200} height={20} />
          </p>
          <div className={'flex space-x-4'}>
            <Skeleton variant={'text'} width={50} height={20} />
            <Skeleton variant={'text'} width={50} height={20} />
            <Skeleton variant={'text'} width={50} height={20} />
            <Skeleton variant={'text'} width={50} height={20} />
          </div>
        </div>
        <div className={'space-x-4 flex text-gray-500 mt-4 w-full'}>
          <div className={STAT_STYLE}>
            <AiOutlineStar/>&nbsp;
            <Skeleton variant={'text'} width={50} height={20} />
          </div>
          <div className={STAT_STYLE}>
            <AiOutlineEye/>&nbsp;
            <Skeleton variant={'text'} width={50} height={20} />
          </div>
          <div className={STAT_STYLE}>
            <BiGitRepoForked/>&nbsp;
            <Skeleton variant={'text'} width={50} height={20} />
          </div>
        </div>
      </>
  )
}

export default RepoPageLoader

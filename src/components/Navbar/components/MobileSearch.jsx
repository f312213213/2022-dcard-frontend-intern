import React, { createRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

import RecentTable from './RecentTable'

function MobileSearch ({ setShowMS, showMS, handleSearch }) {
  const searchRef = createRef()

  return (
      <div className={`md:hidden h-screen w-full bg-white fixed top-12 transition left-0 ${showMS ? 'scale-100' : 'scale-0'}`}>
          <div className={'flex justify-center items-center text-black mt-4'}>
            <input ref={searchRef} type="text" className={'bg-white rounded w-96 p-2 outline-0 border-2 text-gray-500'} placeholder={'搜尋 Github 帳號'}/>
            <button className={'text-xl my-auto rounded-sm p-1 h-full text-gray-500'} onClick={() => handleSearch(searchRef)}>
              <AiOutlineSearch />
            </button>
          </div>
        <RecentTable setShowMS={setShowMS} />
      </div>
  )
}

export default MobileSearch

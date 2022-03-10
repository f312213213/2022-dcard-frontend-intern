import React, { createRef } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const InputSearch = ({ handleSearch }) => {
  const searchRef = createRef()

  return (
      <div className={'flex justify-around items-center text-white hidden md:block'}>
        <input ref={searchRef} type="text" className={'bg-dcard-input-blue rounded w-96 p-2 outline-0'} placeholder={'搜尋 Github 帳號'}/>
        <button className={'text-xl my-auto rounded-sm p-1 h-full'} onClick={() => handleSearch(searchRef)}>
          <AiOutlineSearch />
        </button>
      </div>
  )
}

export default InputSearch

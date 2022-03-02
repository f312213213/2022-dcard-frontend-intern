import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const InputSearch = () => {
  return (
      <div className={'flex justify-around items-center text-white relative hidden md:block'}>
        <input type="text" className={'bg-dcard-input-blue rounded w-96 p-2 outline-0'} placeholder={'搜尋 Github 帳號'}/>
        <button className={'text-xl  rounded-sm p-1'}>
          <AiOutlineSearch />
        </button>
      </div>
  )
}

export default InputSearch

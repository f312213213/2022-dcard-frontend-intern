import React from 'react'
import { RiArrowDropDownLine } from 'react-icons/ri'

import RecentTable from './RecentTable'

const RecentSearch = ({ setShowMS }) => {
  return (
      <div className={'dropdown hidden md:block'}>
        <button className={'text-white flex items-center cursor-pointer relative'} type={'button'} aria-haspopup={'true'} aria-expanded={'true'} aria-controls={'headlessui-menu-items-117'}>
          最近搜尋過的紀錄
          <div className={'text-xl'}>
            <RiArrowDropDownLine />
          </div>
        </button>
        <RecentTable setShowMS={setShowMS} />
      </div>
  )
}

export default RecentSearch

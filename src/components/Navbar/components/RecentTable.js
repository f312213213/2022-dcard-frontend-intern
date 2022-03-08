import React from 'react'
import { Link } from 'react-router-dom'

const RecentTable = () => {
  return (
      <div className={'opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95'}>
        <div className={'absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none'}
            aria-labelledby={'headlessui-menu-button-1'} id={'headlessui-menu-items-117'} role={'menu'}>
          <div className={'py-1'}>
            <Link to={'/users/f312213213/repos'}>
              <div className={'text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-300'}>f312213213</div>
            </Link>
            </div>
        </div>
      </div>
  )
}

export default RecentTable

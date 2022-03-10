import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const RecentTable = ({ setShowMS }) => {
  const [recent, setRecent] = useState([])

  useEffect(() => {
    if (localStorage.ghex_recent) {
      setRecent(localStorage.ghex_recent.split(','))
    }
  }, [localStorage.ghex_recent])

  const clickHandler = (username) => {
    setShowMS(false)
    if (localStorage.ghex_recent) {
      if (localStorage.ghex_recent.indexOf(username) === -1) {
        localStorage.ghex_recent = [username, localStorage.ghex_recent]
      } else {
        const tempRecent = localStorage.ghex_recent.split(',')
        if (tempRecent.length > 1) {
          tempRecent.splice(tempRecent.indexOf(username), 1)
          tempRecent.length === 0 ? localStorage.ghex_recent = [username] : localStorage.ghex_recent = [username, tempRecent]
        }
      }
      const tempRecent = localStorage.ghex_recent.split(',')
      if (tempRecent.length > 3) {
        tempRecent.splice(-1, 1)
        localStorage.ghex_recent = tempRecent
      }
    } else {
      localStorage.ghex_recent = [username]
    }
    setRecent(localStorage.ghex_recent.split(','))
  }

  return (
      <>
        <div className={'opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95'}>
          <div className={'absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none'}
               aria-labelledby={'headlessui-menu-button-1'} id={'headlessui-menu-items-117'} role={'menu'}>
            <div className={'py-1'}>
              {
                recent.map((r, index) => (
                    <Link to={`/users/${r}/repos`} key={index}>
                      <div onClick={() => clickHandler(r)} className={'text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-300'}>{r}</div>
                    </Link>
                ))
              }
            </div>
          </div>
        </div>

        <div className={'md:hidden block flex w-full justify-center space-x-4 mt-4'}>
          {
            recent.map((r, index) => (
                <Link to={`/users/${r}/repos`} key={index}>
                  <div onClick={() => clickHandler(r)} className={'transition text-gray-700 flex justify-between w-full px-4 py-2 border-2 text-sm leading-5 text-left hover:bg-gray-300 rounded-md'}>{r}</div>
                </Link>
            ))
          }
        </div>
      </>

  )
}

export default RecentTable

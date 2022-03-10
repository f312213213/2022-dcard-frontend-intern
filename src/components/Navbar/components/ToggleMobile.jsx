import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'

function ToggleMobile ({ setShowMS, showMS }) {
  return (
      <button className={'block md:hidden text-xl my-auto rounded-sm p-1 h-full text-white'} onClick={() => setShowMS(!showMS)}>
        {
          showMS ? <FaTimes /> : <AiOutlineSearch />
        }
      </button>
  )
}

export default ToggleMobile

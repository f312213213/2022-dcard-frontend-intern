import React from 'react'

const Header = ({ header }) => {
  return (
      <>
        <div className={'sticky top-10 bg-white text-left text-3xl w-full border-b-2 h-16 p-4 font-bold rounded-t-2xl z-10'}>
          {header}
        </div>
      </>
  )
}

export default Header

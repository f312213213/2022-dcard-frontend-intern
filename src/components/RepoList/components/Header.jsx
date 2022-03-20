import React from 'react'

const Header = ({ header }) => {
  return (
      <>
        <h1 className={'sticky top-11 bg-white text-left text-3xl w-full border-b-2 h-16 p-4 font-bold rounded-t-2xl z-10'}>
          {header}
        </h1>
      </>
  )
}

export default Header

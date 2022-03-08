import React from 'react'
import { Link } from 'react-router-dom'

const LinkToHome = () => {
  return (
      <Link to={'/trending'}>
        <div className={'text-white text-xl'}>
          Github Explorer
        </div>
      </Link>
  )
}

export default LinkToHome

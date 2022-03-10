import React from 'react'
import { Link } from 'react-router-dom'

const LinkToHome = ({ setShowMS }) => {
  return (
      <Link to={'/trending'}>
        <div className={'text-white text-xl'} onClick={() => setShowMS(false)}>
          Github Explorer
        </div>
      </Link>
  )
}

export default LinkToHome

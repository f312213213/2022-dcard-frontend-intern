import React from 'react'

const Topic = ({ t }) => {
  return (
      <div className={'bg-gray-200 hover:bg-gray-100 transition rounded-xl p-1.5 my-1 text-sm'} >
        {t}
      </div>
  )
}

export default Topic

import React from 'react'

import Topic from './Topic'

const Topics = ({ repo }) => {
  return (
      <div className={'flex w-full space-x-2 flex-wrap mt-20'}>
        {repo.topics.slice(0, 3).map((t, index) => (
            <Topic t={t} key={index} />
        ))}
      </div>
  )
}

export default Topics

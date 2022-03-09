import React from 'react'

import Topic from './Topic'

const Topics = ({ repo }) => {
  return (
      <div className={'flex w-full space-x-2 flex-wrap '}>
        {repo.topics.map((t, index) => (
            <Topic t={t} key={index} />
        ))}
      </div>
  )
}

export default Topics

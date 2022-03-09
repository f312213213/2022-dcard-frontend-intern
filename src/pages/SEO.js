import React from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'

const SEO = () => {
  const metaData = useSelector(state => state.seo)
  return (
      <Helmet>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
      </Helmet>
  )
}

export default SEO

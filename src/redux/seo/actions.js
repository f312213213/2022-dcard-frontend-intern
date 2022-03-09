import actionTypes from './ActionTypes'

export const seoChange = (metadata) => {
  return {
    type: actionTypes.SEO_CHANGE,
    payload: metadata
  }
}

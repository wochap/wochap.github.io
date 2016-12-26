import * as api from 'app/api'
import {normalize} from 'normalizr'
import * as schema from './schemas'

export const FETCH_WORK = 'works/FETCH_WORK'
export function fetchWork (fileName) {
  return (dispatch) => {
    return dispatch({
      type: FETCH_WORK,
      payload: api.getWork(fileName).then((work) => {
        return normalize(work, schema.work)
      })
    })
  }
}

export const FETCH_WORKS = 'works/FETCH_WORKS'
export function fetchWorks () {
  return (dispatch) => {
    return dispatch({
      type: FETCH_WORKS,
      payload: api.getWorks().then((works) => {
        return normalize(works, schema.arrayOfWorks)
      })
    })
  }
}

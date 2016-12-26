import * as worksActions from 'app/actions/works'

const defaultState = {
  data: {}
}

export default function works (state = defaultState, action) {
  switch (action.type) {
    case `${worksActions.FETCH_POST}_PENDING`:
    case `${worksActions.FETCH_POSTS}_PENDING`: {
      return {
        ...state,
        isFetching: true
      }
    }
    case `${worksActions.FETCH_POST}_FULFILLED`:
    case `${worksActions.FETCH_POSTS}_FULFILLED`: {
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload.entities.works
        },
        isFulfilled: true
      }
    }
    case `${worksActions.FETCH_POST}_REJECTED`:
    case `${worksActions.FETCH_POSTS}_REJECTED`: {
      return {
        data: {
          ...state.data
        },
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export function getWorkError ({works}) { // eslint-disable-line
  return works.error ? works.error : false
}

export function getWork ({works}, workSlug) { // eslint-disable-line
  return {
    ...works.data[workSlug]
  }
}

export function getWorks ({works}) { // eslint-disable-line
  // TODO: improve code
  return Object.values(works.data).map(p => p)
}

import * as postsActions from 'app/actions/posts'

const defaultState = {
  data: {}
}

export default function posts (state = defaultState, action) {
  switch (action.type) {
    case `${postsActions.FETCH_POST}_PENDING`:
    case `${postsActions.FETCH_POSTS}_PENDING`: {
      return {
        ...state,
        isFetching: true
      }
    }
    case `${postsActions.FETCH_POST}_FULFILLED`:
    case `${postsActions.FETCH_POSTS}_FULFILLED`: {
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload.entities.posts
        },
        isFulfilled: true
      }
    }
    case `${postsActions.FETCH_POST}_REJECTED`:
    case `${postsActions.FETCH_POSTS}_REJECTED`: {
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

export function getPostError ({posts}) { // eslint-disable-line
  return posts.error ? posts.error : false
}

export function getPost ({posts}, postSlug) { // eslint-disable-line
  return {
    ...posts.data[postSlug]
  }
}

export function getPosts ({posts}) { // eslint-disable-line
  // TODO: improve code
  return Object.values(posts.data).map(p => p)
}

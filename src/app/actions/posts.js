import * as api from 'app/api'
import {normalize} from 'normalizr'
import * as schema from './schemas'

export const FETCH_POST = 'posts/FETCH_POST'
export function fetchPost (fileName) {
  return (dispatch) => {
    return dispatch({
      type: FETCH_POST,
      payload: api.getPost(fileName).then((post) => {
        return normalize(post, schema.post)
      })
    })
  }
}

export const FETCH_POSTS = 'posts/FETCH_POSTS'
export function fetchPosts () {
  return (dispatch) => {
    return dispatch({
      type: FETCH_POSTS,
      payload: api.getPosts().then((posts) => {
        return normalize(posts, schema.arrayOfPosts)
      })
    })
  }
}

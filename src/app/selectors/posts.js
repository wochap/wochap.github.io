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

export interface State {
  isPending: boolean
  isFulfilled: boolean
  error: boolean | Error
}

export interface CollectionItem {
  frontMatter: {
    slug: string
    title: string
    description: string
    date: string
    dateModified: string
    imageUrl: string
    imageCaption: string
    tags: string[]
  }
  bodyHtml: string
  state: State
}

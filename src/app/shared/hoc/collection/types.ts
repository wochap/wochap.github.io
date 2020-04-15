export interface State {
  isPending: boolean
  isFulfilled: boolean
  error: boolean | Error
}

export interface FrontMatter {
  slug: string
  title: string
  description: string
  date: string
  dateModified: string
  imageUrl: string
  imageCaption: string
  tags: string[]
  keywords?: string[]
}

export interface CollectionItem {
  frontMatter: FrontMatter
  bodyHtml: string
  state: State
}

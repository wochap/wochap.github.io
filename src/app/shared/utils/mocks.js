export const collection = [
  {
    frontMatter: {
      fileName: 'fake-collection',
      date: '2016-19-12',
      imageUrl: 'http://placehold.it/1350x450',
      title: 'Fake collection',
      description: '',
    },
    bodyHtml: '<p>Lorem</p>',
  },
  {
    frontMatter: {
      fileName: 'fake-collection-2',
      date: '2016-20-12',
      imageUrl: 'http://placehold.it/1350x450',
      title: 'Fake collection 2',
      description: '',
    },
    bodyHtml: '<p>Lorem 2</p>',
  },
]

export const collectionItem = {
  frontMatter: {
    fileName: 'fake-collection',
    date: '2016-19-12',
    imageUrl: 'http://placehold.it/1350x450',
    title: 'Fake collection',
    description: '',
  },
  bodyHtml: '<p>Lorem</p>',
}

export const state = {
  error: false,
  isPending: false,
  isFulfilled: false,
}

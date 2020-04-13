import moment from 'moment'
// @ts-ignore
import {COLLECTION_DATE_FORMAT} from 'app/config/constants'
// @ts-ignore
import data from 'app/config/data'
import {BlogPosting, Person, ImageObject, Organization, WebSite, WebPage, BreadcrumbList, ListItem} from 'schema-dts'

export const logoId = `${data.baseUrl}/#logo`
export const logo: ImageObject = {
  '@type': 'ImageObject',
  '@id': logoId,
  'url': 'https://res.cloudinary.com/wochap/image/upload/v1586724454/wochap/android-chrome-384x384.png',
  'caption': data.title,
  'width': '384px',
  'height': '384px',
}

export const personId = `${data.screens.about.canonicalHref}/#person`
export const person: Person = {
  '@type': 'Person',
  '@id': personId,
  'name': data.title,
  'jobTitle': 'JS Developer',
  'url': data.screens.about.canonicalHref,
}

// requires logo
export const organizationId = `${data.screens.about.canonicalHref}/#organization`
export const organization: Organization = {
  '@type': 'Organization',
  '@id': organizationId,
  'name': data.title,
  'url': data.baseUrl,
  // @ts-ignore
  'logo': {
    '@id': logoId,
  },
}

// requires organization
export const webSiteId = `${data.screens.home.canonicalHref}/#website`
export const webSite: WebSite = {
  '@type': 'WebSite',
  '@id': webSiteId,
  'url': data.screens.home.canonicalHref,
  'name': data.screens.home.title,
  'description': data.screens.home.description,
  // @ts-ignore
  'publisher': {
    '@id': organizationId,
  },
}

interface ScreenData {
  canonicalHref: string
  title: string
  description: string
}
const generateWebPage = (screenData: ScreenData): [string, WebPage] => {
  const id = `${screenData.canonicalHref}/#webpage`
  return [
    id,
    {
      '@type': 'WebPage',
      '@id': id,
      'url': screenData.canonicalHref,
      'name': screenData.title,
      'description': screenData.description,
      // @ts-ignore
      'isPartOf': {
        '@id': webSiteId,
      },
    },
  ]
}

// requires website
export const [blogWebPageId, blogWebPage] = generateWebPage(data.screens.blog)

// requires website
export const [aboutWebPageId, aboutWebPage] = generateWebPage(data.screens.about)

// requires website
export const [contactWebPageId, contactWebPage] = generateWebPage(data.screens.contact)

interface CIImageInterface {
  siteUrl: string
  url: string
  caption: string
}
const getCollectionItemImage = ({siteUrl, url, caption}: CIImageInterface): ImageObject => ({
  '@type': 'ImageObject',
  '@id': `${siteUrl}/#image`,
  'url': url,
  'caption': caption,
})

interface CIWebPage {
  siteUrl: string
  parentId: string
  title: string
  description: string
}
export const getCollectionItemWebPage = ({siteUrl, parentId, title, description}: CIWebPage): WebPage => ({
  '@type': 'WebPage',
  '@id': `${siteUrl}/#webpage`,
  'url': siteUrl,
  'name': title,
  'description': description,
  // @ts-ignore
  'isPartOf': {
    '@id': parentId,
  },
})

// requires person and organization
interface CIBlogPosting {
  screenKey: string
  parentId: string
  frontMatter: {
    slug: string
    date: string
    dateModified: string
    imageUrl: string
    imageCaption: string
    description: string
    title: string
    tags: string[]
  }
}
export const getCollectionItemBlogPosting = ({screenKey, parentId, frontMatter}: CIBlogPosting): BlogPosting => {
  const datePublished = moment(frontMatter.date, COLLECTION_DATE_FORMAT).format()
  const dateModified = frontMatter.dateModified ? moment(frontMatter.dateModified, COLLECTION_DATE_FORMAT).format() : datePublished
  const postUrl = `${data.screens[screenKey].canonicalHref}/${frontMatter?.slug}`

  const collectionItemImage = getCollectionItemImage({
    siteUrl: postUrl,
    url: frontMatter.imageUrl,
    caption: frontMatter.imageCaption || '',
  })

  return {
    '@type': 'BlogPosting',
    '@id': `${postUrl}/#post`,
    'url': postUrl,
    'description': frontMatter.description,
    'datePublished': datePublished,
    'dateModified': dateModified,
    'name': frontMatter.title,
    'headline': frontMatter.title,
    'keywords': frontMatter.tags.join(', '),
    // @ts-ignore
    'author': {
      '@id': personId,
    },
    // @ts-ignore
    'publisher': {
      '@id': organizationId,
    },
    'image': collectionItemImage,
    // @ts-ignore
    'isPartOf': {
      '@id': parentId,
    },
    // @ts-ignore
    'mainEntityOfPage': {
      '@id': parentId,
    },
    'inLanguage': {
      '@type': 'Language',
      'name': 'Spanish',
      'alternateName': 'es',
    },
  }
}

interface BreadCrumb {
  siteUrl: string
  items: {
    breadCrumbName: string
    siteUrl: string
  }[]
}
export const getBreadCrumList = ({siteUrl, items = []}: BreadCrumb): BreadcrumbList => ({
  '@type': 'BreadcrumbList',
  '@id': `${siteUrl}/#breadcrumb`,
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': data.screens.home.breadCrumbName,
      'item': data.screens.home.canonicalHref,
    },
    ...items.map(
      (item, index): ListItem => ({
        '@type': 'ListItem',
        'position': index + 2,
        'name': item.breadCrumbName,
        ...(items.length - 1 === index ? {} : {item: item.siteUrl}),
      }),
    ),
  ],
})

// const jsonLd = {
//   '@context': 'https://schema.org',
//   '@graph': [],
// }

import moment from 'moment'
import {COLLECTION_DATE_FORMAT} from 'app/config/constants'
import data from 'app/config/data'

export const logoId = `${data.baseUrl}/#logo`
export const logo = {
  '@type': 'ImageObject',
  '@id': logoId,
  'url': 'https://res.cloudinary.com/wochap/image/upload/v1586724454/wochap/android-chrome-384x384.png',
  'width': 384,
  'height': 384,
  'caption': data.title,
}

export const personId = `${data.screens.about.canonicalHref}/#person`
export const person = {
  '@type': 'Person',
  '@id': personId,
  'name': data.title,
}

// requires logo
export const organizationId = `${data.screens.about.canonicalHref}/#organization`
export const organization = {
  '@type': 'Organization',
  '@id': organizationId,
  'name': data.title,
  'url': data.baseUrl,
  'logo': {
    '@id': logoId,
  },
  'image': {
    '@id': logoId,
  },
}

// requires organization
export const webSiteId = `${data.screens.home.canonicalHref}/#website`
export const webSite = {
  '@type': 'WebSite',
  '@id': webSiteId,
  'url': data.screens.home.canonicalHref,
  'name': data.screens.home.title,
  'description': data.screens.home.description,
  'publisher': {
    '@id': organizationId,
  },
}

// requires website
export const blogWebPageId = `${data.screens.blog.canonicalHref}/#webpage`
export const blogWebPage = {
  '@type': 'WebPage',
  '@id': blogWebPageId,
  'url': data.screens.blog.canonicalHref,
  'name': data.screens.blog.title,
  'description': data.screens.blog.description,
  'isPartOf': {
    '@id': webSiteId,
  },
}

const getCollectionItemImage = ({siteUrl, url, caption}) => ({
  '@type': 'ImageObject',
  '@id': `${siteUrl}/#image`,
  'url': url,
  'caption': caption,
})

export const getCollectionItemWebPage = ({siteUrl, parentId, title, description}) => ({
  '@type': 'WebPage',
  '@id': `${siteUrl}/#webpage`,
  'url': siteUrl,
  'name': title,
  'description': description,
  'isPartOf': {
    '@id': parentId,
  },
})

// requires person and organization
export const getCollectionItemBlogPosting = ({screenKey, parentId, frontMatter}) => {
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
    'description': frontMatter.description,
    'datePublished': datePublished,
    'dateModified': dateModified,
    'headline': frontMatter.title,
    'keywords': frontMatter.tags.join(' '),
    'author': {
      '@id': personId,
    },
    'publisher': {
      '@id': organizationId,
    },
    'image': collectionItemImage,
    'isPartOf': {
      '@id': parentId,
    },
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

export const getBreadCrumList = ({siteUrl, items = []}) => ({
  '@type': 'BreadcrumbList',
  '@id': `${siteUrl}/#breadcrumb`,
  'itemListElement': [
    {
      '@type': 'ListItem',
      'position': 1,
      'name': data.screens.home.breadCrumbName,
      'item': data.screens.home.canonicalHref,
    },
    ...items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 2,
      'name': item.breadCrumbName,
      'item': item.siteUrl,
    })),
  ],
})

// const jsonLd = {
//   '@context': 'https://schema.org',
//   '@graph': [],
// }

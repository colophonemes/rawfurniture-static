import { getClient } from './'
// function parseAuthor({ fields }) {
//   return {
//     name: fields.name,
//     picture: fields.picture.fields.file,
//   }
// }

// function parsePost({ fields }) {
//   return {
//     title: fields.title,
//     slug: fields.slug,
//     date: fields.date,
//     content: fields.content,
//     excerpt: fields.excerpt,
//     coverImage: fields.coverImage.fields.file,
//     author: parseAuthor(fields.author),
//   }
// }

function parsePostEntries(entries, cb = parsePost) {
  return entries?.items?.map(cb)
}

// export async function getPreviewPostBySlug(slug) {
//   const entries = await getClient(true).getEntries({
//     content_type: 'post',
//     limit: 1,
//     'fields.slug[in]': slug,
//   })
//   return parsePostEntries(entries)[0]
// }

const getParser = contentType => {
  switch (contentType) {
    case 'page':
      return pageParser
    case 'furniture':
      return furnitureParser
    case 'category':
      return null//categoryParser
    default:
      return entry => entry
  }
}

const getContentType = sys => {
  switch (sys.type) {
    case 'Asset':
      return 'asset'
    default:
      return sys.contentType?.sys?.id ?? null
  }
}

export const entryParser = ({ sys, fields }) => {
  const { id } = sys
  return {
    id,
    contentType: getContentType(sys),
    ...fields
  }
}

export const imageParser = (contentfulImage) => {
  const imageEntry = entryParser(contentfulImage)
  return {
    ...imageEntry,
    description: imageEntry.description || null,
    src: imageEntry?.file?.url ?? null
  }
}

const imageFilter = img => !!img.src


export const pageParser = (contentfulPage) => {
  const entry = entryParser(contentfulPage)
  return {
    ...entry,
    featuredImages: entry.featuredImages?.map(imageParser).filter(imageFilter) || null
  }
}

export const furnitureParser = contentfulFurniture => {
  const entry = entryParser(contentfulFurniture)
  return {
    ...entry,
    images: entry.images?.map(imageParser).filter(imageFilter) || null
  }
}

export async function getAllEntries ({contentType, preview, ...rest}) {
  const client = await getClient(preview)
  const response = await client.getEntries({
    content_type: contentType,
    ...rest
  })
  const parser = getParser(contentType)
  return {
    ...response,
    entries: response.items?.map(parser)
  }
}

export async function getEntry ({contentType, slug, preview}) {
  const client = await getClient(preview)
  const entry = await client.getEntries({
    content_type: contentType,
    limit: 1,
    'fields.slug[in]': slug,
  }).then(entries => entries?.items[0])
  if (entry) return getParser(contentType)(entry)
  return null
}


// export async function getAllPostsForHome(preview) {
//   const client = await getClient(preview)
//   const entries = await client.getEntries({
//     content_type: 'post',
//     order: '-fields.date',
//   })
//   return parsePostEntries(entries)
// }

// export async function getPostAndMorePosts(slug, preview) {
//   const entry = await getClient(preview).getEntries({
//     content_type: 'post',
//     limit: 1,
//     'fields.slug[in]': slug,
//   })
//   const entries = await getClient(preview).getEntries({
//     content_type: 'post',
//     limit: 2,
//     order: '-fields.date',
//     'fields.slug[nin]': slug,
//   })

//   return {
//     post: parsePostEntries(entry)[0],
//     morePosts: parsePostEntries(entries),
//   }
// }

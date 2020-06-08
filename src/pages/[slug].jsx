import { useRouter } from 'next/router'
import Page from 'components/content/Page'
import ErrorPage from 'components/content/ErrorPage'
import { getEntry, getAllEntries } from 'lib/contentful/entries'

export default function PageFromSlug({ data, preview }) {
  const router = useRouter()

  if (!router.isFallback && !data) {
    return <ErrorPage />
  }

  if (router.isFallback) return 'Loading...'

  const {title, body, featuredImages} = data
  const props = { title, body, featuredImages }
  return <Page {...props} />
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getEntry({contentType: 'page', slug: params.slug, preview})
  return {
    props: {
      preview,
      data
    },
  }
}

const STANDALONE_PAGE_SLUGS = ['home', 'contact']

export async function getStaticPaths () {
  const { entries } = await getAllEntries({contentType: 'page'})

  const allPages = entries?.filter(({ slug }) => !STANDALONE_PAGE_SLUGS.includes(slug))
  return {
    paths: allPages?.map(({ slug }) => ({ params: {slug} })) ?? [],
    fallback: true
  }
}

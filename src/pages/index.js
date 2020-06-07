import Page from 'components/content/Page'
import { getEntry } from 'lib/contentful/entries'

const PAGE_SLUG = 'home'

export default function HomePage ({ data, preview }) {
  const { body, featuredImages } = data
  const props = { body, featuredImages}
  return <Page {...props} />
}

export async function getStaticProps({ preview = false }) {
  const data = await getEntry({ contentType: 'page', slug: PAGE_SLUG, preview })
  return { props: { preview, data } }
}

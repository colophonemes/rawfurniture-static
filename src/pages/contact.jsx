import Page from 'components/content/Page'
import { getEntry } from 'lib/contentful/entries'

const PAGE_SLUG = 'contact'

export default function ContactPage ({ data, preview }) {
  const { title, body, featuredImages } = data
  const props = { title, body, featuredImages }
  return <Page {...props} pageTitleWidth={6} />
}

export async function getStaticProps({ preview = false }) {
  const data = await getEntry({ contentType: 'page', slug: PAGE_SLUG, preview })
  return { props: { preview, data } }
}

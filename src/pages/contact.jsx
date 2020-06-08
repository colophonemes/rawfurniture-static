import Page from 'components/content/Page'
import { getEntry } from 'lib/contentful/entries'
import ContactForm from 'components/ContactForm'
import Typography from '@material-ui/core/Typography'

const PAGE_SLUG = 'contact'

const ContactFormWrapped = () => <>
  <Typography color='textPrimary' variant='h4' component='h3' gutterBottom>Send us an email</Typography>
  <ContactForm />
</>

export default function ContactPage ({ data, preview }) {
  const { title, body, featuredImages } = data
  const props = { title, body, featuredImages }
  return <Page {...props} rightColumn={<ContactFormWrapped />} />
}

export async function getStaticProps({ preview = false }) {
  const data = await getEntry({ contentType: 'page', slug: PAGE_SLUG, preview })
  return { props: { preview, data } }
}

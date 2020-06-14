import {useState} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'components/content/ErrorPage'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { getEntry, getAllEntries } from 'lib/contentful/entries'
import PageTitle from 'components/layout/PageTitle'
import ImageCarousel from 'components/ImageCarousel'
import Currency from 'components/Currency'
import ContentfulImage from 'components/contentful/Image'
import { Link, RouterLinkWithRef } from 'components/Link'
import FurnitureEnquiryModal from 'components/FurnitureEnquryModal'
import { renderDocument } from 'lib/contentful/render'
import { makeStyles } from '@material-ui/styles'

const CONTENT_TYPE = 'furniture'

const useStyles = makeStyles(theme => ({
  specificationItems: {
    marginBottom: theme.spacing(2)
  }
}))

const SpecificationItem = props => <Typography gutterBottom color='textPrimary' {...props} />

export default function FurnitureFromSlug({ data, preview }) {
  const router = useRouter()
  const classes = useStyles()
  const [showEnquiryModal, setShowEnquiryModal] = useState(false)

  if (!router.isFallback && !data) {
    return <ErrorPage />
  }

  if (router.isFallback) return 'Loading...'

  const { title, body, images, price, dimensions, categories } = data
  return <article>
    <Head>
      <title>{title} | Furniture | {process.env.NEXT_PUBLIC_SITE_TITLE}</title>
    </Head>
    <PageTitle>{title}</PageTitle>
    <Grid container spacing={6}>
      <Grid item xs={12} md={6}>
        {images && <>
          {images.length > 1
            ? <ImageCarousel images={images} />
            : <ContentfulImage src={images[0].src} />
          }
        </>}
      </Grid>
      <Grid item xs={12} md={6}>
        {renderDocument(body)}
        <div className={classes.specificationItems}>
          {price && <SpecificationItem><strong>Price from:</strong> <Currency value={price} /></SpecificationItem>}
          {dimensions && <SpecificationItem>
            <strong>Approximate Dimensions:</strong> {dimensions}<br />
            <em>(item dimensions can be customised to your specifications)</em>
          </SpecificationItem>}
        </div>
        <Button onClick={() => setShowEnquiryModal(true)} variant='contained'>
          Enquire about this item
        </Button>
      </Grid>
    </Grid>
    <FurnitureEnquiryModal
      open={showEnquiryModal}
      onClose={() => setShowEnquiryModal(false)}
      furniture={{ title, url: `https://${process.env.NEXT_PUBLIC_SITE_DOMAIN}${router.asPath}` }}
    />
  </article>
}

export async function getStaticProps({ params, preview = false }) {
  const data = await getEntry({ contentType: CONTENT_TYPE, slug: params.slug, preview })
  return { props: { preview, data } }
}

export async function getStaticPaths() {
  const { entries } = await getAllEntries({ contentType: CONTENT_TYPE })
  return {
    paths: entries?.map(({ slug }) => ({ params: { slug } })) ?? [],
    fallback: true
  }
}

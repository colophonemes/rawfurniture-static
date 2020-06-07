import Head from 'next/head'
import { useRouter } from 'next/router'
import ErrorPage from 'components/content/ErrorPage'
import Grid from '@material-ui/core/Grid'
import { getEntry, getAllEntries } from 'lib/contentful/entries'
import PageTitle from 'components/layout/PageTitle'
import ImageCarousel from 'components/ImageCarousel'
import Currency from 'components/Currency'
import ContentfulImage from 'components/contentful/Image'
import Link from 'components/Link'
import { renderDocument } from 'lib/contentful/render'
import { Typography } from '@material-ui/core'


const CONTENT_TYPE = 'furniture'

const SpecificationItem = props => <Typography gutterBottom color='textPrimary' {...props} />

export default function FurnitureFromSlug({ data, preview }) {
  const router = useRouter()
  // const classes = useStyles()

  if (!router.isFallback && !data) {
    return <ErrorPage />
  }

  const { title, body, images, price, dimensions, sold, categories } = data
  return <article>
    <Head>
      <title>{title} | Furniture | {process.env.NEXT_PUBLIC_SITE_TITLE}</title>
    </Head>
    <PageTitle>{title}</PageTitle>
    <Grid container spacing={6}>
      <Grid item md={6}>
        {images && <>
          {images.length > 1
            ? <ImageCarousel images={images} />
            : <ContentfulImage src={images[0].src} />
          }
        </>}
      </Grid>
      <Grid item md={6}>
        {renderDocument(body)}
        {price && <SpecificationItem><strong>Price:</strong> <Currency value={price} /></SpecificationItem>}
        {dimensions && <SpecificationItem><strong>Dimensions:</strong> {dimensions}</SpecificationItem>}
        {sold && <SpecificationItem>
          <em>
            <>This Item Has Been Sold.</>{' '}
            Please feel free to <Link href='/:slug' as='/contact'>contact us</Link> if you'd like to discuss commissioning a similar piece.
          </em>
        </SpecificationItem>}
      </Grid>
    </Grid>
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

import Head from 'next/head'
import Grid from '@material-ui/core/Grid'
import { renderDocument } from 'lib/contentful/render'
import PageTitle from 'components/layout/PageTitle'
import ContentfulImage from 'components/contentful/Image'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  featuredImage: {
    marginBottom: theme.spacing(6)
  }
}))

export default function Page({ title, body, featuredImages, pageTitleWidth }) {
  const classes = useStyles()
  return <>
    <article>
      <Head>
        <title>{title && `${title} | `}{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
      </Head>
      <PageTitle width={pageTitleWidth}>{title}</PageTitle>
      <Grid container spacing={6} justify='center'>
        <Grid item md={6}>
          {renderDocument(body)}
        </Grid>
        {featuredImages && <Grid item md={6}>
          {featuredImages.map(({ id, title, src }) => <ContentfulImage key={id} src={src} title={title} className={classes.featuredImage} />)}
        </Grid>}
      </Grid>
    </article>
  </>
}

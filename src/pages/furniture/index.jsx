import Head from 'next/head'
import FurnitureGrid from 'components/content/FurnitureGrid'
import { getAllEntries } from 'lib/contentful/entries'
import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination'
import PageTitle from 'components/layout/PageTitle'

const CONTENT_TYPE = 'furniture'
const PAGE_TITLE = 'Furniture'
export const ENTRIES_PER_PAGE = 12

export default function FurniturePage ({ data, preview }) {
  if (!data) return null
  const { entries, total } = data
  const title = PAGE_TITLE
  const numPages = Math.ceil(total / ENTRIES_PER_PAGE)
  return <article>
    <Head>
      <title>{title} | {process.env.NEXT_PUBLIC_SITE_TITLE}</title>
    </Head>
    <PageTitle>{PAGE_TITLE}</PageTitle>
    <FurnitureGrid entries={entries} />)}
    <Box justifyContent='center' display='flex'>
      <Pagination count={numPages} />
    </Box>
  </article>
}

export async function getStaticProps({ preview = false }) {
  const data = await getAllEntries({
    contentType: CONTENT_TYPE,
    skip: 0,
    limit: ENTRIES_PER_PAGE,
    order: '-sys.createdAt',
    preview
  })
  return { props: { preview, data } }
}

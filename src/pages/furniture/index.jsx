import Head from 'next/head'
import FurnitureGrid from 'components/content/FurnitureGrid'
import { renderDocument } from 'lib/contentful/render'
import { getEntry, getAllEntries } from 'lib/contentful/entries'
import Box from '@material-ui/core/Box'
import Pagination from '@material-ui/lab/Pagination'
import PageTitle from 'components/layout/PageTitle'
import Router from 'next/router'
import HR from 'components/HR'

export const CONTENT_TYPE = 'furniture'
export const ENTRIES_PER_PAGE = 12

export default function FurniturePage ({ data, preview }) {
  if (!data) return null
  const { page, entries, total, pageNum } = data

  const numPages = Math.ceil(total / ENTRIES_PER_PAGE)
  const handlePaginationChange = (event, pageNum) => Router.push(`/furniture/page/:pageNum`, `/furniture/page/${pageNum}`)

  return <article>
    <Head>
      <title>{page.title} | {process.env.NEXT_PUBLIC_SITE_TITLE}</title>
    </Head>
    <PageTitle>{page.title}</PageTitle>
    {renderDocument(page.body)}
    <HR />
    <FurnitureGrid entries={entries} />
    <Box justifyContent='center' display='flex'>
      <Pagination count={numPages} page={pageNum} onChange={handlePaginationChange} />
    </Box>
  </article>
}

export async function getStaticProps({ params, preview = false }) {
  const pageNum = parseInt(params?.pageNum, 10) || 1
  const skip = (pageNum * ENTRIES_PER_PAGE) - ENTRIES_PER_PAGE

  const page = await getEntry({ contentType: 'page', slug: 'furniture', preview})

  const furniture = await getAllEntries({
    contentType: CONTENT_TYPE,
    skip,
    limit: ENTRIES_PER_PAGE,
    order: 'fields.title',
    preview
  })

  const data = { ...furniture, page }
  data.pageNum = pageNum
  return { props: { preview, data } }
}

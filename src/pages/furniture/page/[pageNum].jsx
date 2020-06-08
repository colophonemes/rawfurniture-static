import FurniturePage, { getStaticProps, CONTENT_TYPE, ENTRIES_PER_PAGE } from 'pages/furniture'
import { getAllEntries } from 'lib/contentful/entries'

export default FurniturePage

export { getStaticProps }

export async function getStaticPaths() {
  const { total } = await getAllEntries({ contentType: CONTENT_TYPE })
  const numPages = Math.ceil(total / ENTRIES_PER_PAGE)

  return {
    paths: [...Array(numPages)]?.map((_, i) => ({ params: { pageNum: (i + 1).toString() } })) ?? [],
    fallback: true
  }
}

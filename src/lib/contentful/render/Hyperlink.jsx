import Link from 'components/Link'
const HyperlinkRenderer = (node, children) => <Link href={node.data.uri} children={children} />

export default HyperlinkRenderer

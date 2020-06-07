import RouterLink from 'next/link'
import StyledLink from '@material-ui/core/Link'

export const isRelative = href => /^\//.test(href)

const InternalLink = props => <StyledLink component={RouterLink} {...props} />

export default InternalLink

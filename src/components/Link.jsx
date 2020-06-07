import { forwardRef } from 'react'
import RouterLink from 'next/link'
import MUILink from '@material-ui/core/Link'
import ButtonBase from '@material-ui/core/ButtonBase'

export const isRelativeLink = link => /^\//.test(link)

const internalLinkRE = new RegExp(`^https?:\/\/${process.env.NEXT_PUBLIC_SITE_DOMAIN}`)
export const formatInternalLink = link => link.replace(internalLinkRE, '')

export const RouterLinkWithRef = forwardRef(
  ({ href, as, ...rest }, ref) => <RouterLink ref={ref} href={href} as={as}>
    <a {...rest} />
  </RouterLink>
)

export const Link = ({href, as, children, ...rest}) => {
  const formattedHref = formatInternalLink(href)
  const isRelative = isRelativeLink(formattedHref)
  if (isRelative) return <MUILink {...rest} component={RouterLinkWithRef} href={formattedHref} as={as}>{children}</MUILink>
  return <MUILink {...rest} href={formattedHref} target='_blank' rel='noopener noreferrer'>
    {children}
  </MUILink>
}

export default Link

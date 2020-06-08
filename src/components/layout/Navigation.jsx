import { useRouter } from 'next/router'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { makeStyles } from '@material-ui/styles'
import FacebookIcon from '@material-ui/icons/Facebook'
import { isRelativeLink, formatInternalLink, RouterLinkWithRef } from 'components/Link'

const useStyles = makeStyles(theme => ({

}))

const routes = [
  {
    title: 'Home',
    href: '/:slug',
    as: '/'
  },
  {
    title: 'Furniture',
    href: '/furniture',
    as: '/furniture'
  },
  {
    title: 'Why Raw?',
    href: '/:slug',
    as: '/why-raw'
  },
  {
    title: 'About Us',
    href: '/:slug',
    as: '/about-us'
  },
  {
    title: 'Contact',
    href: '/:slug',
    as: '/contact'
  },
  {
    title: 'Facebook',
    href: 'https://facebook.com/RawFurniture',
    icon: <FacebookIcon />
  }
]

const makeTab = ({ title, href, as, icon }) => {
  const formattedHref = formatInternalLink(as || href)
  const isRelative = isRelativeLink(formattedHref)
  return <Tab
    key={as || formattedHref}
    label={!icon && title}
    icon={icon}
    component={isRelative ? RouterLinkWithRef : 'a'}
    href={formattedHref}
    as={as}
    target={!isRelative ? '_blank' : null}
    rel={!isRelative ? 'noopener noreferrer' : null}
  />
}

const Navigation = props => {
  const classes = useStyles()
  const router = useRouter()
  let activeIndex = routes.findIndex(({as, href}) => {
    // exact match
    if ((as || href) === router.asPath) return true
    // partial match
    if ((as || href).split('/')[1] === router.asPath.split('/')[1]) return true
    // no match
    return false
  })
  return <div>
    <AppBar position='static'>
      <Tabs centered value={activeIndex === -1 ? false : activeIndex}>
        {routes.map(makeTab)}
      </Tabs>
    </AppBar>
  </div>
}

export default Navigation

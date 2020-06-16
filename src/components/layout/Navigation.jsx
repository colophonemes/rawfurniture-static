import { useState } from 'react'
import { useRouter } from 'next/router'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/styles'
import { useBreakpoints } from 'global/breakpoints'
import MenuIcon from '@material-ui/icons/Menu'
import FacebookIcon from '@material-ui/icons/Facebook'
import { isRelativeLink, formatInternalLink, RouterLinkWithRef } from 'components/Link'

const useStyles = makeStyles(theme => ({
  listItem: {
    width: 200,
    color: theme.palette.text.primary
  },
  tab: {
    textTransform: 'lowercase'
  }
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
  const classes = useStyles()
  return <Tab
    key={as || formattedHref}
    label={!icon && title}
    icon={icon}
    component={isRelative ? RouterLinkWithRef : 'a'}
    href={formattedHref}
    as={as}
    target={!isRelative ? '_blank' : null}
    rel={!isRelative ? 'noopener noreferrer' : null}
    className={classes.tab}
  />
}

const makeListItem = ({ title, href, as, icon }) => {
  const formattedHref = formatInternalLink(as || href)
  const isRelative = isRelativeLink(formattedHref)
  const classes = useStyles()
  return <ListItem
    key={as || formattedHref}
    icon={icon}
    component={isRelative ? RouterLinkWithRef : 'a'}
    href={formattedHref}
    as={as}
    target={!isRelative ? '_blank' : null}
    rel={!isRelative ? 'noopener noreferrer' : null}
    className={classes.listItem}
  >
    <ListItemText>{title}</ListItemText>
  </ListItem>
}

const Navigation = props => {
  const classes = useStyles()
  const router = useRouter()
  const { mdUp } = useBreakpoints()
  const [showMenuDrawer, setShowMenuDrawer] = useState(false)
  let activeIndex = routes.findIndex(({as, href}) => {
    // exact match
    if ((as || href) === router.asPath) return true
    // partial match
    if ((as || href).split('/')[1] === router.asPath.split('/')[1]) return true
    // no match
    return false
  })
  return <>
    <AppBar position='static'>
      {mdUp
        ? <Tabs centered value={activeIndex === -1 ? false : activeIndex}>
          {routes.map(makeTab)}
        </Tabs>
        : <Button onClick={() => setShowMenuDrawer(!showMenuDrawer)}>Menu <MenuIcon /></Button>
      }
    </AppBar>
    <Drawer open={showMenuDrawer} onClose={() => setShowMenuDrawer(false)}>
      <List onClick={() => setShowMenuDrawer(false)}>
        {routes.map(makeListItem)}
      </List>
    </Drawer>
  </>
}

export default Navigation

import React from 'react'
import ReactContentfulImage from 'react-contentful-image'
import { makeStyles } from '@material-ui/styles'
import { imageSizes } from 'global/contentfulImageMediaQueries'


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: '100%'
  }
}))

const ContentfulImage = ({ responsive, className, ...componentProps }) => {
  const classes = useStyles()
  const componentClasses = [classes.root, className]
  if (responsive) componentClasses.push(classes.responsive)
  if (!componentProps.src) return null
  return <ReactContentfulImage {...componentProps} sizes={imageSizes} className={componentClasses.join(' ')} />
}

export default ContentfulImage

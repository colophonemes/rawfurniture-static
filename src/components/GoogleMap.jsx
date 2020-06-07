import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    border: 0
  }
}))

const GoogleMap = ({ mapUrl }) => {
  const classes = useStyles()
  return <iframe
    src={mapUrl}
    className={classes.root}
    width="100%"
    height="450"
    frameBorder="0"
    allowFullScreen={false}
    aria-hidden={false}
    tabIndex="0"
  />
}

export default GoogleMap

import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    margin: `${theme.spacing(6)}px 0`
  }
}))

const Content = props => {
  const classes = useStyles()
  return <Container><div className={classes.root} {...props} /></Container>
}

export default Content

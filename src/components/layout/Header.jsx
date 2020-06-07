import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    // height: 300,
    textAlign: 'center'
  },
  img: {
    width: '100%',
    maxWidth: '100%'
  }
}))

const Header = () => {
  const classes = useStyles()
  return <header className={classes.root}>
    <Typography variant='srOnly'>{process.env.NEXT_PUBLIC_SITE_TITLE}</Typography>
    <Grid container justify='center'>
      <Grid item md={8}>
        <img className={classes.img} src={process.env.NEXT_PUBLIC_HEADER_IMAGE} alt={process.env.NEXT_PUBLIC_SITE_TITLE} />
      </Grid>
    </Grid>
  </header>
}

export default Header

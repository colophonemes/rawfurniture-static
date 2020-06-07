import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const PageTitle = ({ children, width = 12, ...rest }) => <Grid container justify='center'>
  <Grid item md={width}>
    <Typography variant='h2' component='h1' color='textPrimary' gutterBottom {...rest}>
      {children}
    </Typography>
  </Grid>
</Grid>
export default PageTitle

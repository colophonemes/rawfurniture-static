import Typography from '@material-ui/core/Typography'

const HeadingRenderer = ({ children, variant }) => <Typography variant={variant} color='textPrimary' gutterBottom>
  {children}
</Typography>

const H1 = (node, children) => <HeadingRenderer variant='h2' component='h1'>{children}</HeadingRenderer>
const H2 = (node, children) => <HeadingRenderer variant='h3' component='h2'>{children}</HeadingRenderer>
const H3 = (node, children) => <HeadingRenderer variant='h4' component='h3'>{children}</HeadingRenderer>
const H4 = (node, children) => <HeadingRenderer variant='h5' component='h4'>{children}</HeadingRenderer>
const H5 = (node, children) => <HeadingRenderer variant='h6' component='h5'>{children}</HeadingRenderer>
const H6 = (node, children) => <HeadingRenderer variant='body2' component='h6'>{children}</HeadingRenderer>

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6
}

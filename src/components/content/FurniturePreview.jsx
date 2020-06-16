import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import { makeStyles } from '@material-ui/styles'
import { useBreakpoints } from 'global/breakpoints'
import Link from 'components/Link'

const useStyles = makeStyles(theme => ({
  root: {},
  link: {
    '&:hover': {
      textDecoration: 'none'
    }
  },
  badge: {
    display: 'flex',
    '& .MuiBadge-badge': {
      marginTop: theme.spacing(2),
      marginRight: theme.spacing(4),
      fontSize: '1.2em',
      fontWeight: 700
    }
  },
  media: ({ xsOnly, mdUp }) => ({
    height: xsOnly || mdUp ? 230 : 400,
    overflow: 'hidden',
    width: '100%'
  }),
  image: ({ featuredImage, xsOnly, mdUp }) => ({
    width: '100%',
    height: xsOnly || mdUp ? 230 : 400,
    backgroundImage: `url('https://${featuredImage.src}?w=${mdUp ? 600 : 400}')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }),
  contentHeading: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%',
    textOverflow: 'ellipsis',
    textTransform: 'lowercase'
  }
}))

export default function FurniturePreview ({ title, slug, images }) {
  const featuredImage = images[0]
  const breakpoints = useBreakpoints()
  const classes = useStyles({ featuredImage, ...breakpoints })
  return <Card>
    <Link href={`/furniture/${slug}`} className={classes.link}>
      <CardActionArea>
        <CardMedia className={classes.media}>
          {featuredImage && <div className={classes.image} />}
        </CardMedia>
        <CardContent>
          <Typography className={classes.contentHeading} variant='h5' component='h2' color='textPrimary'>{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Link>
  </Card>
}

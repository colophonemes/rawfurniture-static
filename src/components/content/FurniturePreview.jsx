import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Badge from '@material-ui/core/Badge'
import ContentfulImage from 'components/contentful/Image'
import { makeStyles } from '@material-ui/styles'
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
  media: {
    height: 230,
    overflow: 'hidden',
    width: '100%'
  },
  image: ({ featuredImage }) => ({
    width: '100%',
    height: 230,
    backgroundImage: `url('https://${featuredImage.src}?w=600')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }),
  contentHeading: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    width: '100%',
    textOverflow: 'ellipsis'
  }
}))

export default function FurniturePreview ({ title, slug, images, body, sold }) {
  const featuredImage = images[0]
  console.log(`url('https://${featuredImage.src}?w=600')`)
  const classes = useStyles({ featuredImage })
  return <Card>
    <Link href={`/furniture/${slug}`} className={classes.link}>
      <CardActionArea>
        <Badge badgeContent={sold ? 'sold' : null} color='primary' className={classes.badge}>
          <CardMedia className={classes.media}>
            {featuredImage && <div className={classes.image} />}
          </CardMedia>
        </Badge>
        <CardContent>
          <Typography className={classes.contentHeading} variant='h5' component='h2' color='textPrimary'>{title}</Typography>
        </CardContent>
      </CardActionArea>
    </Link>
  </Card>
}

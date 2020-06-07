import Grid from '@material-ui/core/Grid'
import ContentfulImage from 'components/contentful/Image'
import { CarouselProvider, Slider, Slide, Dot, ButtonBack, ButtonNext } from 'pure-react-carousel'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  carousel: {
    position: 'relative',
    height: '100%'
  },
  dot: {
    border: 'none',
    borderRadius: 0,
    padding: 0,
    background: 'transparent',
    opacity: 0.6,
    transition: 'opacity 0.5s',
    '&.carousel__dot--selected': {
      opacity: 1
    }
  },
  controlPositionWrapper: {
    position: 'relative'
  },
  controlWrapper: {
    height: '80%',
    width: '100%',
    position: 'absolute'
  },
  controlButtons: {
    position: 'relative',
    top: '50%',
    zIndex: 1000
  },
  controlButton: {
    marginTop: '25%',
    opacity: 0.7,
    borderRadius: '50%',
    height: '3em',
    width: '3em',
    border: 'none',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: `0 ${theme.spacing(1)}px`,
    '&:disabled': {
      opacity: 0.5,
      color: '#999'
    },
    '&:focus': {
      outline: 'none',
      boxShadow: 'none'
    }
  }
}))

export default function ImageCarousel ({images}) {
  const classes = useStyles()

  return <CarouselProvider
    totalSlides={images.length}
    naturalSlideWidth={300}
    naturalSlideHeight={200}
    isPlaying={true}
    infinite={true}
    className={classes.carousel}
  >
    <div className={classes.controlPositionWrapper}>
      <div className={classes.controlWrapper}>
        <Grid container justify='space-between' className={classes.controlButtons}>
          <Grid item>
            <ButtonBack className={classes.controlButton}><ChevronLeftIcon /></ButtonBack>
          </Grid>
          <Grid item>
            <ButtonNext className={classes.controlButton}><ChevronRightIcon /></ButtonNext>
          </Grid>
        </Grid>
      </div>
      <Slider>
        {images.map(({ id, src, title }, index) => <Slide key={id}>
          <ContentfulImage src={src} title={title} />
        </Slide>)}
      </Slider>
    </div>
    <Grid container justify='center' className={classes.imageControls}>
      {images.map(({ id, src, title }, index) => <Grid item key={id} sm={3}>
        <Dot className={classes.dot} slide={index}><img src={`https://${src}?w=130&h=87`} title={title} /></Dot>
      </Grid>)}
    </Grid>
  </CarouselProvider>
}

import {makeStyles} from '@material-ui/styles'

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3)
  }
}))

export default function HR (props) {
  const classes = useStyles()
  return <hr className={classes.root} {...props} />
}

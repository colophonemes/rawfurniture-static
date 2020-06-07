import Grid from '@material-ui/core/Grid'
import FurniturePreview from 'components/content/FurniturePreview'

export default function FurnitureGrid ({ entries }) {
  return <Grid container spacing={4}>
    {entries.map(entry => <Grid key={entry.id} item sm={6} md={4}>
      <FurniturePreview {...entry} />
    </Grid>)}
  </Grid>
}

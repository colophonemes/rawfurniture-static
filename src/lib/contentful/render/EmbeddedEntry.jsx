import { entryParser } from 'lib/contentful/entries'
import GoogleMap from 'components/GoogleMap'
const GoogleMapRenderer = ({ mapUrl }) => <GoogleMap mapUrl={mapUrl} />


const embeddedEntryRenderers = {
  googleMap: GoogleMapRenderer
}

const EmbeddedEntryRenderer = node => {
  const entry = entryParser(node.data.target)
  const { contentType } = entry
  const Renderer = embeddedEntryRenderers[contentType]
  return <>
    {Renderer
      ? <Renderer {...entry} />
      : <div><strong>Unknown content type {contentType}</strong></div>
    }
  </>
}

export default EmbeddedEntryRenderer

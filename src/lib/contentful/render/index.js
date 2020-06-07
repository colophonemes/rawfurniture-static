import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import ParagraphRenderer from './Paragraph';
import HeadingRenderers from './Heading'
import HyperlinkRenderer from './Hyperlink'
import EmbeddedEntryRenderer from './EmbeddedEntry'

const options = {
  renderMark: {},
  renderNode: {
    [BLOCKS.PARAGRAPH]: ParagraphRenderer,
    [BLOCKS.HEADING_1]: HeadingRenderers.H1,
    [BLOCKS.HEADING_2]: HeadingRenderers.H2,
    [BLOCKS.HEADING_3]: HeadingRenderers.H3,
    [BLOCKS.HEADING_4]: HeadingRenderers.H4,
    [BLOCKS.HEADING_5]: HeadingRenderers.H5,
    [BLOCKS.HEADING_6]: HeadingRenderers.H6,
    [INLINES.HYPERLINK]: HyperlinkRenderer,
    [BLOCKS.EMBEDDED_ENTRY]: EmbeddedEntryRenderer
  }
}

export const renderDocument = (document) => documentToReactComponents(document, options)

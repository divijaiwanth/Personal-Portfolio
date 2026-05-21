import { Helmet } from 'react-helmet-async'
import { site } from '../../data/site'

interface PageMetaProps {
  title?: string
  description?: string
  path?: string
}

export function PageMeta({
  title,
  description = site.bio.lead,
  path = '/',
}: PageMetaProps) {
  const fullTitle = title ? `${title} · ${site.name}` : `${site.brand}. — Portfolio`

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/og-image.svg" />
      <meta property="og:url" content={path} />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  )
}

import { Helmet } from 'react-helmet-async'
import { site } from '../../data/site'

export function PersonSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: site.name,
    jobTitle: site.role,
    email: site.email,
    url: typeof window !== 'undefined' ? window.location.origin : '',
    sameAs: [site.github, site.linkedin],
    telephone: site.phone,
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

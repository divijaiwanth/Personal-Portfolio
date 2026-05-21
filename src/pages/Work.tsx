import { Navigate, useParams } from 'react-router-dom'
import { ProjectDetail } from '../components/work/ProjectDetail'
import { PageMeta } from '../components/seo/PageMeta'
import { getProjectBySlug } from '../data/projects'

export function Work() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <PageMeta
        title={project.title}
        description={project.shortDescription}
        path={`/work/${project.slug}`}
      />
      <ProjectDetail key={project.slug} project={project} />
    </>
  )
}

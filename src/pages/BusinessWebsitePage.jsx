import ProjectRoutePage from '../components/ProjectRoutePage'
import { getProjectBySlug } from '../data/projects'

export default function BusinessWebsitePage() {
  return <ProjectRoutePage project={getProjectBySlug('business-website')} />
}

import ProjectRoutePage from '../components/ProjectRoutePage'
import { getProjectBySlug } from '../data/projects'

export default function ECommercePlatformPage() {
  return <ProjectRoutePage project={getProjectBySlug('e-commerce-platform')} />
}

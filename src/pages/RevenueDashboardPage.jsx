import ProjectRoutePage from '../components/ProjectRoutePage'
import { getProjectBySlug } from '../data/projects'

export default function RevenueDashboardPage() {
  return <ProjectRoutePage project={getProjectBySlug('revenue-dashboard')} />
}

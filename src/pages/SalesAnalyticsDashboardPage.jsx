import ProjectRoutePage from '../components/ProjectRoutePage'
import { getProjectBySlug } from '../data/projects'

export default function SalesAnalyticsDashboardPage() {
  return <ProjectRoutePage project={getProjectBySlug('sales-analytics-dashboard')} />
}

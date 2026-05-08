import ProjectRoutePage from '../components/ProjectRoutePage'
import { getProjectBySlug } from '../data/projects'

export default function CoffeeShopPage() {
  return <ProjectRoutePage project={getProjectBySlug('coffee-shop')} />
}

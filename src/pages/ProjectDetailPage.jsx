import { Link, Navigate, useParams } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { getProjectBySlug } from '../data/projects'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <Link to="/projects" className="text-blue-400 hover:text-blue-300 transition-colors">
          ← Back to Projects
        </Link>

        <div className="mt-8 rounded-2xl border border-blue-900/30 bg-dark-800/60 p-8">
          <div className="text-5xl mb-4">{project.icon}</div>
          <p className="text-sm text-blue-300 uppercase tracking-[0.2em]">{project.category}</p>
          <h1 className="text-4xl lg:text-5xl font-extrabold mt-3">{project.title}</h1>
          <p className="text-xl text-gray-300 mt-4">{project.desc}</p>
          <p className="text-gray-400 mt-5 leading-relaxed">{project.summary}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold transition-colors inline-flex items-center gap-2"
            >
              Open Live Application <ExternalLink size={16} />
            </a>
            <a
              href="/#contact"
              className="px-5 py-3 rounded-lg border border-blue-500/40 text-blue-200 hover:text-white hover:border-blue-400 font-semibold transition-colors"
            >
              Start Similar Project
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

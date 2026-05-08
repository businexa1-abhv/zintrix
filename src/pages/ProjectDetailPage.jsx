import { Link, Navigate, useParams } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { getProjectBySlug } from '../data/projects'

export default function ProjectDetailPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/projects" replace />
  }

  if (project.route) {
    return <Navigate to={project.route} replace />
  }

  return (
    <div className="min-h-screen bg-dark-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 -right-20 w-80 h-80 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 -left-20 w-72 h-72 bg-cyan-400/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <Link to="/projects" className="text-blue-400 hover:text-blue-300 transition-colors">
          ← Back to Projects
        </Link>

        <div className="mt-8 rounded-3xl border border-blue-900/30 bg-dark-800/70 backdrop-blur-sm p-6 sm:p-8 lg:p-10 shadow-2xl shadow-blue-950/30">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="text-5xl mb-4">{project.icon}</div>
              <p className="text-xs sm:text-sm text-blue-300 uppercase tracking-[0.2em]">{project.category}</p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3">{project.title}</h1>
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-500/40 text-blue-200 bg-blue-600/10">
              Client Showcase Ready
            </span>
          </div>

          <p className="text-lg sm:text-xl text-gray-300 mt-6">{project.desc}</p>
          <p className="text-gray-400 mt-4 leading-relaxed">{project.summary}</p>

          <div className="mt-6 p-4 rounded-xl border border-blue-900/40 bg-dark-900/60">
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">Application URL</p>
            <a
              href={project.appUrl}
              target="_blank"
              rel="noreferrer"
              className="text-blue-300 hover:text-blue-200 break-all transition-colors"
            >
              {project.appUrl}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 sm:gap-4">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold transition-colors inline-flex items-center gap-2"
            >
              Open Live Application <ExternalLink size={16} />
            </a>
            <a
              href={project.appUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-lg border border-blue-500/40 text-blue-200 hover:text-white hover:border-blue-400 font-semibold transition-colors inline-flex items-center gap-2"
            >
              Open Application URL <ExternalLink size={16} />
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

import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/3 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400/10 blur-3xl rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 relative z-10">
        <div className="mb-12">
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-extrabold mt-6">All Projects</h1>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Showcasing client-ready web and analytics applications you can present to win more freelancing work.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group rounded-2xl border border-blue-900/30 bg-dark-800/70 backdrop-blur-sm p-6 hover:border-blue-600/40 hover:-translate-y-1 transition-all shadow-xl shadow-blue-950/20"
            >
              <div className="text-3xl mb-3">{project.icon}</div>
              <p className="text-xs text-blue-300 uppercase tracking-widest">{project.category}</p>
              <h2 className="text-2xl font-bold mt-2 group-hover:text-blue-200 transition-colors">{project.title}</h2>
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">{project.desc}</p>

              <div className="mt-4 p-3 rounded-lg border border-blue-900/40 bg-dark-900/70">
                <p className="text-[11px] uppercase tracking-widest text-gray-500 mb-1">Application URL</p>
                <a
                  href={project.appUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-blue-300 hover:text-blue-200 break-all transition-colors"
                >
                  {project.appUrl}
                </a>
              </div>

              <div className="mt-6 flex items-center gap-3 flex-wrap">
                <Link
                  to={project.route}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-sm font-semibold transition-colors"
                >
                  View Details
                </Link>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg border border-blue-500/40 text-sm font-semibold text-blue-200 hover:text-white hover:border-blue-400 transition-colors inline-flex items-center gap-2"
                >
                  Open Live Application <ExternalLink size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

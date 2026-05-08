import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
        <div className="mb-10">
          <Link to="/" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-extrabold mt-6">All Projects</h1>
          <p className="text-gray-400 mt-3 max-w-2xl">
            Showcasing client-ready web and analytics applications you can present to win more freelancing work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="rounded-2xl border border-blue-900/30 bg-dark-800/60 p-6 hover:border-blue-600/40 transition-all"
            >
              <div className="text-3xl mb-3">{project.icon}</div>
              <p className="text-xs text-blue-300 uppercase tracking-widest">{project.category}</p>
              <h2 className="text-2xl font-bold mt-2">{project.title}</h2>
              <p className="text-gray-400 mt-3 text-sm leading-relaxed">{project.desc}</p>

              <div className="mt-6 flex items-center gap-3">
                <Link
                  to={`/projects/${project.slug}`}
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
                  Live Link <ExternalLink size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

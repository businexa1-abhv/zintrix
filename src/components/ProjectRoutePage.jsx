import { Link } from 'react-router-dom'
import { ExternalLink, CheckCircle2 } from 'lucide-react'

export default function ProjectRoutePage({ project }) {
  return (
    <div className="min-h-screen bg-dark-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/3 w-[28rem] h-[28rem] bg-blue-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 -right-20 w-96 h-96 bg-cyan-400/10 blur-3xl rounded-full" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <Link to="/projects" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← View All Projects
          </Link>
          <span className="text-xs font-semibold px-3 py-1.5 rounded-full border border-blue-500/40 text-blue-200 bg-blue-600/10">
            {project.category}
          </span>
        </div>

        <section className="mt-8 grid lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl border border-blue-900/30 bg-dark-800/70 backdrop-blur-sm p-6 sm:p-8">
            <div className="text-5xl mb-4">{project.icon}</div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold">{project.title}</h1>
            <p className="text-lg text-gray-300 mt-4">{project.desc}</p>
            <p className="text-gray-400 mt-4 leading-relaxed">{project.summary}</p>

            <div className="mt-6 p-4 rounded-xl border border-blue-900/40 bg-dark-900/70">
              <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">Application URL</p>
              <a
                href={project.appUrl}
                target="_blank"
                rel="noreferrer"
                className="text-blue-300 hover:text-blue-200 break-all transition-colors"
              >
                {project.appUrl}
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
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
            </div>
          </div>

          <div className="rounded-3xl border border-blue-900/30 bg-dark-800/70 backdrop-blur-sm p-6 sm:p-8">
            <p className="text-sm text-blue-300 uppercase tracking-[0.2em] mb-4">Highlights</p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle2 size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                Mobile-first, responsive UI for client presentations.
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle2 size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                Conversion-focused sections and clear call-to-action flow.
              </li>
              <li className="flex items-start gap-3 text-gray-300">
                <CheckCircle2 size={18} className="text-cyan-400 mt-0.5 flex-shrink-0" />
                Built to demonstrate quality and help win freelancing clients.
              </li>
            </ul>

            <div className="mt-8 rounded-2xl border border-blue-900/40 bg-dark-900/70 p-5">
              <p className="text-sm text-gray-300">Need a similar web app for your business?</p>
              <a
                href="/#contact"
                className="mt-3 inline-flex px-4 py-2 rounded-lg border border-blue-500/40 text-blue-200 hover:text-white hover:border-blue-400 font-semibold transition-colors"
              >
                Start Similar Project
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

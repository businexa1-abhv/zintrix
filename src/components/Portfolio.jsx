import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink } from 'lucide-react'
import { projects } from '../data/projects'

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative rounded-xl overflow-hidden border border-blue-900/20 hover:border-blue-700/40 transition-all duration-400 hover:-translate-y-2"
      style={{ background: project.color }}
    >
      <Link to={project.route} aria-label={`Open ${project.title} case study`} className="absolute inset-0 z-10" />
      {/* Mockup area */}
      <div className="relative h-44 overflow-hidden flex items-center justify-center" style={{ background: project.color }}>
        {/* Fake UI mockup */}
        <div className="w-full h-full p-4 relative">
          {/* Browser chrome */}
          <div className="bg-black/30 rounded-t-lg px-3 py-1.5 flex items-center gap-1.5 border border-white/5">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-400/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
              <div className="w-2 h-2 rounded-full bg-green-400/60" />
            </div>
            <div className="flex-1 bg-black/20 rounded text-center">
              <span className="text-[7px] text-white/30">zintrix.in/{project.slug}</span>
            </div>
          </div>

          {/* Content area */}
          <div className="bg-black/20 rounded-b-lg p-4 border border-t-0 border-white/5 h-28 flex flex-col justify-between overflow-hidden relative">
            <div>
              <p className="text-lg font-bold leading-tight" style={{ color: project.accent }}>
                {project.desc}
              </p>
              <div className="flex gap-1 mt-2">
                <div className="h-1 rounded-full w-12 opacity-40" style={{ background: project.accent }} />
                <div className="h-1 rounded-full w-8 opacity-20" style={{ background: project.accent }} />
                <div className="h-1 rounded-full w-6 opacity-20" style={{ background: project.accent }} />
              </div>
            </div>
            <div className="text-3xl opacity-40 absolute right-4 bottom-4">{project.icon}</div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 opacity-0 group-hover:opacity-100 transform scale-75 group-hover:scale-100 transition-all duration-300">
            <ExternalLink size={18} className="text-white" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="bg-dark-700/80 backdrop-blur-sm px-4 py-3 border-t border-white/5">
        <h4 className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">{project.title}</h4>
        <p className="text-xs text-gray-500 mt-0.5">{project.category}</p>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="portfolio" className="relative py-24 bg-dark-800/30" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Our Work</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Recent <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-10">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="group px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 inline-flex items-center gap-2"
          >
            View All Projects
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

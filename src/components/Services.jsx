import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Code2, BarChart3, ArrowRight } from 'lucide-react'

const services = [
  {
    icon: <Code2 size={28} />,
    title: 'Website Development',
    description:
      'We create fast, responsive and SEO-friendly websites that help your business stand out online. From landing pages to complex web apps.',
    color: 'from-blue-600 to-blue-800',
    glow: 'group-hover:shadow-blue-600/30',
    tag: 'Most Popular',
  },
  {
    icon: <BarChart3 size={28} />,
    title: 'Data Analytics',
    description:
      'We turn your raw data into meaningful insights and interactive dashboards. Make smarter decisions backed by real numbers.',
    color: 'from-cyan-600 to-blue-700',
    glow: 'group-hover:shadow-cyan-600/30',
    tag: 'Data-Driven',
  },
]

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="services" className="relative py-24 overflow-hidden" ref={ref}>
      {/* BG accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-blue-700/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">What We Do</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="text-gradient">Services</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`group relative bg-dark-700/50 border border-blue-900/30 rounded-2xl p-8 hover:-translate-y-2 transition-all duration-400 hover:shadow-2xl ${service.glow} cursor-pointer overflow-hidden`}
            >
              {/* Top accent line */}
              <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-20 mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>

              {/* Tag */}
              <div className="absolute top-6 right-6 text-xs text-blue-300 bg-blue-900/40 border border-blue-800/40 px-3 py-1 rounded-full">
                {service.tag}
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm">
                {service.description}
              </p>

              <a href="#" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link">
                Learn More
                <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
              </a>

              {/* BG glow effect */}
              <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

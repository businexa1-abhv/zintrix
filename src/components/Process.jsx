import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Circle } from 'lucide-react'

const processes = [
  {
    step: 1,
    title: 'Discovery & Planning',
    description:
      'We start by understanding your business, goals, target audience, and competitive landscape. Through detailed consultations and research, we create a comprehensive project roadmap.',
    icon: '🎯',
    duration: '1-2 weeks',
  },
  {
    step: 2,
    title: 'Design & Architecture',
    description:
      'Our design team creates wireframes and mockups based on your brand guidelines. We design with user experience in mind, ensuring beautiful and functional interfaces.',
    icon: '🎨',
    duration: '2-3 weeks',
  },
  {
    step: 3,
    title: 'Development',
    description:
      'Our developers build your project using modern technologies and best practices. We maintain code quality through reviews and automated testing throughout the process.',
    icon: '⚙️',
    duration: '3-6 weeks',
  },
  {
    step: 4,
    title: 'Testing & QA',
    description:
      'Rigorous testing across all devices and browsers. We perform functionality testing, performance optimization, security audits, and user acceptance testing before launch.',
    icon: '✓',
    duration: '1-2 weeks',
  },
  {
    step: 5,
    title: 'Deployment & Launch',
    description:
      'We handle smooth deployment to production with zero downtime. Your team gets training, documentation, and 24/7 support during launch week to ensure everything runs perfectly.',
    icon: '🚀',
    duration: '1 week',
  },
]

function ProcessStep({ process, index, isLast }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex gap-6 lg:gap-8"
    >
      {/* Timeline circle */}
      <div className="relative flex flex-col items-center shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center text-2xl mb-4 relative z-10 shadow-lg shadow-blue-600/40"
        >
          {process.icon}
        </motion.div>

        {/* Vertical line */}
        {!isLast && (
          <div className="absolute top-20 left-1/2 -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-blue-600 to-transparent" />
        )}
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.1 + 0.1 }}
        className="flex-1 pt-2"
      >
        <div className="mb-2">
          <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">Step {process.step}</span>
          <span className="text-xs text-gray-400 ml-3">• {process.duration}</span>
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{process.title}</h3>
        <p className="text-gray-400 leading-relaxed mb-4">{process.description}</p>
        <div className="flex flex-wrap gap-2">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="px-3 py-1 bg-blue-950/40 border border-blue-800/40 rounded-full text-xs text-blue-300"
            >
              {['Planning', 'Design', 'Development', 'Testing'][i]}
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="process" className="relative py-24 overflow-hidden bg-dark-800/30" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Our Methodology</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            How We <span className="text-gradient">Build Your Project</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            A proven 5-step process that ensures quality, transparency, and results
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-12 lg:space-y-16">
          {processes.map((process, i) => (
            <ProcessStep key={process.step} process={process} index={i} isLast={i === processes.length - 1} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center bg-gradient-to-r from-blue-950/40 to-cyan-950/40 border border-blue-900/30 rounded-2xl p-8 lg:p-12"
        >
          <h3 className="text-2xl font-bold text-white mb-3">Ready to Start Your Project?</h3>
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Our process has been refined through 80+ successful projects. Let's start the journey to transform your business.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/40 hover:-translate-y-0.5 group"
          >
            Schedule Consultation
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

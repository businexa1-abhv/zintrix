import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Kumar',
    role: 'CEO, Tech Innovations Ltd',
    company: 'Tech Innovations',
    content:
      'Zintrix transformed our online presence completely. Their website development team created something truly exceptional that increased our leads by 250%.',
    rating: 5,
    avatar: '👨‍💼',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Priya Sharma',
    role: 'Marketing Director, Cafe Delights',
    company: 'Cafe Delights',
    content:
      'The analytics dashboard they built has been a game-changer for our business. Real-time insights helped us optimize operations and reduce costs significantly.',
    rating: 5,
    avatar: '👩‍💼',
    color: 'from-cyan-600 to-blue-700',
  },
  {
    name: 'Amit Patel',
    role: 'Founder, E-Commerce Plus',
    company: 'E-Commerce Plus',
    content:
      'Professional, responsive, and results-oriented. The Zintrix team delivered on time and exceeded expectations. Highly recommended for any digital project!',
    rating: 5,
    avatar: '👨‍💼',
    color: 'from-purple-600 to-pink-700',
  },
  {
    name: 'Neha Desai',
    role: 'Operations Manager, Construction Co',
    company: 'BuildRight',
    content:
      'Their team understood our business needs perfectly. The website showcases our projects beautifully and has helped us land major contracts.',
    rating: 5,
    avatar: '👩‍💼',
    color: 'from-orange-600 to-red-700',
  },
]

function TestimonialCard({ testimonial, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-dark-700/50 border border-blue-900/30 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-400 hover:shadow-2xl hover:shadow-blue-600/20 overflow-hidden"
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${testimonial.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
        ))}
      </div>

      {/* Content */}
      <p className="text-gray-300 leading-relaxed mb-6 text-sm italic">
        "{testimonial.content}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-blue-900/20">
        <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-xl`}>
          {testimonial.avatar}
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">{testimonial.name}</h4>
          <p className="text-xs text-gray-400">{testimonial.role}</p>
        </div>
      </div>

      {/* BG glow effect */}
      <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${testimonial.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
    </motion.div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="testimonials" className="relative py-24 overflow-hidden" ref={ref}>
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
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Success Stories</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who've transformed their business with Zintrix
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, i) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

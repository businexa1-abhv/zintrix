import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Rajesh Sharma',
    role: 'Owner, E-commerce Store',
    company: 'Fashion Plus',
    content:
      'Zintrix helped us launch our online store in just 4 weeks. The e-commerce platform is fast, secure, and easy to manage. Our sales increased by 180% in the first month!',
    rating: 5,
    avatar: '👨‍💼',
    color: 'from-blue-600 to-blue-800',
  },
  {
    name: 'Priya Singh',
    role: 'Marketing Director, Manufacturing',
    company: 'Industrial Solutions',
    content:
      'The Power BI dashboard they created completely transformed how we track our business metrics. We now make data-driven decisions faster than ever before.',
    rating: 5,
    avatar: '👩‍💼',
    color: 'from-cyan-600 to-blue-700',
  },
  {
    name: 'Amit Patel',
    role: 'Director, Service Business',
    company: 'Plumbing Services',
    content:
      'Our new business website has been incredible. It looks professional and helped us get 50+ inquiries per month. Best investment for our business!',
    rating: 5,
    avatar: '👨‍💼',
    color: 'from-purple-600 to-pink-700',
  },
  {
    name: 'Neha Desai',
    role: 'CEO, Software Startup',
    company: 'Tech Solutions India',
    content:
      'Zintrix delivered our Excel dashboard with automation that saves us 10 hours every week. Professional, affordable, and results-driven. Highly recommended!',
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

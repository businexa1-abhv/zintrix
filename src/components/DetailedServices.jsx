import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Globe, Store, Zap, Clock } from 'lucide-react'

const webServices = [
  {
    icon: <Globe size={24} />,
    title: 'Basic Website',
    description: 'Perfect for startups and individuals. Professional online presence with essential pages.',
    price: 'Starting ₹15,000',
    color: 'from-blue-600 to-blue-800',
    features: ['4-5 Pages', 'Mobile Responsive', 'Contact Form', 'Basic SEO'],
  },
  {
    icon: <Globe size={24} />,
    title: 'Business Website',
    description: 'Comprehensive solution for established businesses. Showcase your services and build credibility.',
    price: 'Starting ₹25,000',
    color: 'from-cyan-600 to-blue-700',
    features: ['Unlimited Pages', 'Blog Integration', 'Analytics', 'Advanced SEO', 'Email Newsletter'],
  },
  {
    icon: <Store size={24} />,
    title: 'E-commerce Website',
    description: 'Complete online store with payment integration, inventory management, and order tracking.',
    price: 'Starting ₹60,000',
    color: 'from-purple-600 to-pink-700',
    features: ['Product Management', 'Payment Gateway', 'Inventory System', 'Customer Accounts', 'Order Tracking'],
  },
  {
    icon: <Zap size={24} />,
    title: 'Dashboard Creation',
    description: 'Custom dashboards for real-time business insights. Excel, Power BI, Tableau, or custom solutions.',
    price: 'Starting ₹20,000',
    color: 'from-orange-600 to-red-700',
    features: ['Real-time Data', 'Multiple Sources', 'Interactive Reports', 'Automated Updates'],
  },
]

const analyticsServices = [
  {
    icon: '📊',
    title: 'Excel Dashboards',
    description: 'Professional Excel dashboards with automated reports and data visualization.',
    price: 'Starting ₹10,000',
  },
  {
    icon: '📈',
    title: 'Power BI Solutions',
    description: 'Enterprise-level analytics and business intelligence dashboards.',
    price: 'Starting ₹30,000',
  },
  {
    icon: '📉',
    title: 'Tableau Dashboards',
    description: 'Beautiful, interactive data visualizations for business insights.',
    price: 'Starting ₹25,000',
  },
  {
    icon: '📋',
    title: 'Custom Reports',
    description: 'Tailored analytical reports based on your business needs and data sources.',
    price: 'Starting ₹15,000',
  },
]

function WebServiceCard({ service, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group relative bg-dark-700/50 border border-blue-900/30 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-400 hover:shadow-2xl ${service.color.replace('from', 'hover:shadow')}30 overflow-hidden`}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      {/* Icon */}
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} bg-opacity-20 mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
        {service.icon}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>

      {/* Price */}
      <div className="text-blue-400 font-semibold mb-4 text-lg">{service.price}</div>

      {/* Features */}
      <ul className="space-y-2 mb-4">
        {service.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <button className="w-full py-2 px-4 bg-blue-950/40 border border-blue-700/60 text-blue-300 hover:text-white hover:border-blue-500 rounded-lg font-semibold transition-all duration-300 mt-auto">
        Learn More
      </button>

      {/* BG glow */}
      <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
    </motion.div>
  )
}

export default function DetailedServices() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="detailed-services" className="relative py-24 overflow-hidden bg-dark-800/30" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Our Offerings</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Services We <span className="text-gradient">Provide</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Complete solutions for website development and data analytics for small businesses
          </p>
        </motion.div>

        {/* Web Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Web Development Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {webServices.map((service, i) => (
              <WebServiceCard key={service.title} service={service} index={i} />
            ))}
          </div>
        </div>

        {/* Analytics Services */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Data Analytics Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsServices.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (i + 4) * 0.1 }}
                className="group relative bg-dark-700/50 border border-blue-900/30 rounded-2xl p-6 hover:-translate-y-2 transition-all duration-400 hover:shadow-2xl hover:shadow-cyan-600/30 overflow-hidden"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="text-3xl mb-4">{service.icon}</div>
                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="text-cyan-400 font-semibold">{service.price}</div>

                {/* BG glow */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/40 hover:-translate-y-0.5 group"
          >
            Get Started Today
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Check, X } from 'lucide-react'

const pricingPlans = [
  {
    name: 'Basic Website',
    description: 'Perfect for getting started online',
    price: '₹15,000',
    period: 'one-time',
    color: 'from-blue-600 to-blue-800',
    highlighted: false,
    features: [
      { text: '4-5 Professional Pages', included: true },
      { text: 'Mobile Responsive Design', included: true },
      { text: 'Contact Form', included: true },
      { text: 'Basic SEO Setup', included: true },
      { text: '1 Month Support', included: true },
      { text: 'Blog/CMS', included: false },
      { text: 'Analytics Dashboard', included: false },
    ],
    cta: 'Get Started',
  },
  {
    name: 'Business Website',
    description: 'For growing businesses',
    price: '₹25,000',
    period: 'one-time',
    color: 'from-cyan-600 to-blue-700',
    highlighted: true,
    badge: 'Popular',
    features: [
      { text: 'Unlimited Pages', included: true },
      { text: 'Mobile & Tablet Optimized', included: true },
      { text: 'Advanced SEO Optimization', included: true },
      { text: 'Blog Integration', included: true },
      { text: 'Newsletter Setup', included: true },
      { text: '3 Months Support', included: true },
      { text: 'Google Analytics Integration', included: true },
    ],
    cta: 'Choose Plan',
  },
  {
    name: 'E-commerce Store',
    description: 'Start selling online',
    price: '₹60,000',
    period: 'one-time',
    color: 'from-purple-600 to-pink-700',
    highlighted: false,
    features: [
      { text: 'Complete Online Store', included: true },
      { text: 'Product Management System', included: true },
      { text: 'Payment Gateway Integration', included: true },
      { text: 'Inventory Management', included: true },
      { text: 'Order Tracking', included: true },
      { text: 'Customer Accounts', included: true },
      { text: '6 Months Support', included: true },
    ],
    cta: 'Start Selling',
  },
]

const analyticsServices = [
  {
    name: 'Excel Dashboards',
    description: 'Professional dashboards with automation',
    price: '₹10,000',
    period: 'onwards',
    color: 'from-green-600 to-emerald-700',
    highlighted: false,
    features: [
      { text: 'Automated Data Visualizations', included: true },
      { text: 'Multiple Worksheet Dashboards', included: true },
      { text: 'Formulas & Automation', included: true },
      { text: 'Monthly Updates (1 month)', included: true },
      { text: 'Training Session', included: false },
      { text: 'Custom Data Integration', included: false },
    ],
    cta: 'Get Dashboard',
  },
  {
    name: 'Power BI & Tableau',
    description: 'Enterprise-level analytics',
    price: '₹25,000',
    period: 'onwards',
    color: 'from-blue-600 to-cyan-700',
    highlighted: false,
    features: [
      { text: 'Interactive Dashboards', included: true },
      { text: 'Real-time Data Connection', included: true },
      { text: 'Multiple Data Sources', included: true },
      { text: 'Advanced Analytics Reports', included: true },
      { text: '3 Months Support', included: true },
      { text: 'Training for Your Team', included: true },
    ],
    cta: 'Get BI Solution',
  },
]

function PricingCard({ plan, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative rounded-2xl overflow-hidden transition-all duration-400 ${
        plan.highlighted
          ? 'lg:scale-105 bg-gradient-to-br from-dark-700 to-dark-800 border-2 border-blue-500 shadow-2xl shadow-blue-600/30'
          : 'bg-dark-700/50 border border-blue-900/30 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-600/20'
      }`}
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${plan.color}`} />

      {/* Badge */}
      {plan.badge && (
        <div className="absolute top-6 right-6">
          <span className="text-xs font-bold text-white bg-blue-600 px-3 py-1 rounded-full">
            {plan.badge}
          </span>
        </div>
      )}

      <div className="p-8">
        {/* Header */}
        <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
        <p className="text-sm text-gray-400 mb-6">{plan.description}</p>

        {/* Price */}
        <div className="mb-8">
          <div className="text-4xl font-extrabold text-white mb-1">{plan.price}</div>
          <div className="text-sm text-gray-400">{plan.period}</div>
        </div>

        {/* CTA Button */}
        <button
          className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 mb-8 ${
            plan.highlighted
              ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/40 hover:-translate-y-0.5'
              : 'bg-blue-950/40 border border-blue-700/60 text-blue-300 hover:border-blue-500 hover:text-white hover:bg-blue-900/40'
          }`}
        >
          {plan.cta}
        </button>

        {/* Features */}
        <div className="space-y-4">
          {plan.features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              {feature.included ? (
                <Check size={18} className="text-green-400 shrink-0 mt-0.5" />
              ) : (
                <X size={18} className="text-gray-600 shrink-0 mt-0.5" />
              )}
              <span className={`text-sm ${feature.included ? 'text-gray-300' : 'text-gray-600'}`}>
                {feature.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Pricing() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="pricing" className="relative py-24 overflow-hidden" ref={ref}>
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
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Simple Pricing</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Plans That <span className="text-gradient">Scale With You</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            Choose the perfect plan for your business needs. Always flexible to customize.
          </p>
        </motion.div>

        {/* Website Services */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Website Development</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, i) => (
              <PricingCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>
        </div>

        {/* Analytics Services */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Data Analytics Services</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {analyticsServices.map((service, i) => (
              <PricingCard key={service.name} plan={service} index={i + 3} />
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-sm">
            All plans include 30-day money-back guarantee. No credit card required.{' '}
            <a href="#contact" className="text-blue-400 hover:text-blue-300 font-semibold">
              Contact us
            </a>{' '}
            for custom quotes.
          </p>
        </div>
      </div>
    </section>
  )
}

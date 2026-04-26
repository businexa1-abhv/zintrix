import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How long does a typical website project take?',
    answer:
      'Our standard website projects take 4-8 weeks depending on complexity and scope. Starter packages are faster (2-3 weeks), while enterprise solutions may take longer. We work in phases and keep you updated throughout.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Yes! All our packages include support and maintenance. Starter plans include 6 months, Professional includes 12 months, and Enterprise plans include 24/7 priority support. We handle updates, security patches, and performance optimization.',
  },
  {
    question: 'What is your process for starting a project?',
    answer:
      'We follow a structured 5-step process: 1) Discovery & Requirements, 2) Design & Planning, 3) Development, 4) Testing & QA, 5) Deployment & Training. Each phase has clear milestones and deliverables.',
  },
  {
    question: 'Can you migrate my existing website to a new platform?',
    answer:
      'Absolutely! We specialize in website migrations with zero downtime. We handle data migration, URL redirects, SEO preservation, and ensure all functionality works perfectly on the new platform.',
  },
  {
    question: 'Do you offer SEO services?',
    answer:
      'Yes, all our website packages include basic SEO setup. Professional and Enterprise plans include advanced SEO optimization with keyword research, on-page optimization, and technical SEO. We also offer dedicated SEO services separately.',
  },
  {
    question: 'What technology stack do you use?',
    answer:
      'We use modern, scalable technologies: React/Vue for frontends, Node.js/Python for backends, and cloud platforms like AWS/GCP. We choose the best tech for your specific needs. All code follows industry best practices.',
  },
  {
    question: 'How much does analytics implementation cost?',
    answer:
      'Our Analytics Setup starts at ₹35,000 for basic dashboards, while Advanced Analytics with ML features is ₹85,000. Custom implementations are quoted separately based on your specific data sources and requirements.',
  },
  {
    question: 'Do you provide training for our team?',
    answer:
      'Yes! We provide comprehensive training for your team on all platforms and tools we implement. This includes documentation, video tutorials, and live training sessions. Enterprise clients get dedicated training days.',
  },
  {
    question: 'What if I need to make changes after the project is complete?',
    answer:
      'Changes within the support period are covered in your maintenance plan. After that, we offer hourly support (₹2,500/hour for standard work) or retainer packages. Major features can be quoted separately.',
  },
  {
    question: 'How do you ensure my website is secure?',
    answer:
      'We implement industry-standard security: SSL/TLS encryption, secure authentication, regular security audits, DDoS protection, and automated backups. All sites get security patches and updates as part of maintenance.',
  },
]

function FAQItem({ item, index, isOpen, onToggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="border border-blue-900/30 rounded-xl overflow-hidden hover:border-blue-700/50 transition-all duration-300"
    >
      <button
        onClick={() => onToggle(index)}
        className="w-full px-6 py-4 flex items-center justify-between bg-dark-700/50 hover:bg-dark-700/80 transition-colors text-left"
      >
        <span className="font-semibold text-white text-lg">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 ml-4"
        >
          <ChevronDown size={20} className="text-blue-400" />
        </motion.div>
      </button>

      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 bg-dark-800/40 border-t border-blue-900/20">
          <p className="text-gray-400 leading-relaxed">{item.answer}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="relative py-24 overflow-hidden" ref={ref}>
      {/* BG accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-px bg-gradient-to-r from-transparent via-blue-700/50 to-transparent" />

      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Have Questions?</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={setOpenIndex}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/40 hover:-translate-y-0.5 group"
          >
            Get in Touch
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What is included in the Basic Website package?',
    answer:
      'The Basic Website includes 5-7 pages, responsive design, basic SEO optimization, contact form, WhatsApp integration, and 1 year of free hosting. Perfect for small businesses getting started online.',
  },
  {
    question: 'How does the E-commerce package work?',
    answer:
      'Our E-commerce solution includes product management, secure payment gateway (Razorpay/PayPal), inventory tracking, order management, and mobile-responsive design. We also provide 3 months of free support.',
  },
  {
    question: 'What can I track with Power BI dashboards?',
    answer:
      'You can track sales, revenue, customer metrics, operational KPIs, inventory levels, team performance, and more. We customize the dashboard based on your business needs.',
  },
  {
    question: 'How are Excel dashboards different from Power BI?',
    answer:
      'Excel dashboards are cost-effective and work within familiar tools. Power BI offers real-time data updates, automation, and advanced analytics. Choose Excel for simpler needs, Power BI for complex data analysis.',
  },
  {
    question: 'What is your typical project turnaround time?',
    answer:
      'Basic websites take 2-3 weeks, E-commerce takes 4-6 weeks, and dashboards take 1-2 weeks depending on complexity. We provide a detailed timeline before starting.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Yes! All projects include support packages. We offer monthly maintenance plans, security updates, backup services, and content updates. Custom packages available.',
  },
  {
    question: 'How much will my website cost?',
    answer:
      'Pricing starts at ₹15,000 for basic websites, ₹25,000 for business websites, and ₹60,000 for e-commerce. Analytics services start at ₹10,000. Custom solutions available based on requirements.',
  },
  {
    question: 'Can I contact you on WhatsApp?',
    answer:
      'Absolutely! WhatsApp is our preferred channel for quick queries. Click the WhatsApp button on the bottom-right of the page to connect with our team instantly.',
  },
  {
    question: 'Do you work with clients outside India?',
    answer:
      'Yes, we work with international clients through Upwork and direct partnerships. All communication is in English, and we handle timezone differences professionally.',
  },
  {
    question: 'What if I need changes after my website launches?',
    answer:
      'We provide unlimited revisions during development and maintenance support post-launch. Our goal is your complete satisfaction with the final product.',
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

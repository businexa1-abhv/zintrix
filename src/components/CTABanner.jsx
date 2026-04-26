import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Check } from 'lucide-react'

export default function CTABanner() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) return

    setIsLoading(true)
    // Simulate subscription
    setTimeout(() => {
      setIsLoading(false)
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }, 1000)
  }

  return (
    <section id="cta-banner" className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-700/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[80px]" />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-dark-700/50 to-dark-800/50 border border-blue-900/30 rounded-2xl p-8 lg:p-12"
        >
          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-600 to-transparent" />

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Don't Miss Out on <span className="text-gradient">Updates</span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-2">
                Get the latest insights, case studies, and industry tips delivered to your inbox.
              </p>
              <p className="text-sm text-gray-500">
                No spam, unsubscribe anytime. We promise quality over quantity.
              </p>
            </motion.div>

            {/* Right Form */}
            <motion.form
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3"
            >
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 text-green-400 font-semibold"
                >
                  <Check size={20} />
                  <span>Thanks for subscribing!</span>
                </motion.div>
              ) : (
                <>
                  <div className="relative flex items-center">
                    <Mail size={18} className="absolute left-4 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder="Enter your email"
                      className="w-full pl-12 pr-4 py-3 bg-dark-800/60 border border-blue-900/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/40"
                  >
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </>
              )}
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

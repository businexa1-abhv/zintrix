import { motion } from 'framer-motion'
import { Zap, Shield, Headphones, TrendingUp, Users, Activity } from 'lucide-react'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: 'easeOut' },
})

function AnalyticsCard() {
  return (
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      className="absolute -right-4 top-1/2 -translate-y-1/2 w-56 bg-dark-700/90 backdrop-blur-xl border border-blue-900/40 rounded-2xl p-4 shadow-2xl glow-blue z-20"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Analytics Overview</span>
        <span className="text-xs text-blue-400 bg-blue-900/30 px-2 py-0.5 rounded-full">This Month</span>
      </div>

      <div className="space-y-3">
        <div className="bg-dark-800/60 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <TrendingUp size={12} className="text-green-400" />
            <span className="text-xs text-gray-400">Total Revenue</span>
          </div>
          <p className="text-lg font-bold text-white">₹2,45,000</p>
          <p className="text-xs text-green-400 font-medium">↑ 18.2% vs last month</p>
        </div>

        <div className="bg-dark-800/60 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <Users size={12} className="text-blue-400" />
            <span className="text-xs text-gray-400">Users</span>
          </div>
          <p className="text-lg font-bold text-white">3,782</p>
          <p className="text-xs text-green-400 font-medium">↑ 12.5%</p>
        </div>

        <div className="bg-dark-800/60 rounded-xl p-3">
          <div className="flex items-center gap-2 mb-1">
            <Activity size={12} className="text-cyan-400" />
            <span className="text-xs text-gray-400">Conversion Rate</span>
          </div>
          <p className="text-lg font-bold text-white">7.24%</p>
          <p className="text-xs text-green-400 font-medium">↑ 8.4%</p>
          {/* Mini chart */}
          <svg className="w-full h-8 mt-2" viewBox="0 0 80 24">
            <polyline
              points="0,20 12,16 24,18 36,10 48,12 60,6 72,4 80,2"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
            </linearGradient>
            <polyline
              points="0,20 12,16 24,18 36,10 48,12 60,6 72,4 80,2 80,24 0,24"
              fill="url(#lineGrad)"
            />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

function LaptopMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      {/* Glow behind laptop */}
      <div className="absolute inset-0 bg-blue-600/20 blur-3xl rounded-full scale-75 translate-y-8" />

      {/* Laptop */}
      <div className="relative z-10">
        {/* Screen */}
        <div className="bg-dark-700 rounded-t-xl border border-blue-900/40 overflow-hidden shadow-2xl">
          {/* Browser bar */}
          <div className="bg-dark-800 px-4 py-2 flex items-center gap-2 border-b border-blue-900/20">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 bg-dark-900 rounded-md text-xs text-gray-500 text-center py-0.5 mx-4">
              www.zintrix.in
            </div>
          </div>

          {/* Screen Content */}
          <div className="bg-gradient-to-br from-dark-800 to-dark-900 p-6 h-52 relative overflow-hidden">
            {/* Nav in mockup */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 bg-blue-500 rounded" />
                <span className="text-xs font-bold text-white">ZINTRIX</span>
              </div>
              <div className="flex gap-3">
                {['Home', 'About', 'Services', 'Contact'].map(item => (
                  <span key={item} className="text-[8px] text-gray-400">{item}</span>
                ))}
              </div>
            </div>

            <h3 className="text-sm font-bold text-white leading-tight mb-1">
              Digital Solutions<br />
              For Your <span className="text-blue-400">Business</span>
            </h3>
            <p className="text-[8px] text-gray-400 mb-3 max-w-xs">
              Zintrix helps businesses establish a powerful online presence...
            </p>
            <div className="inline-block bg-blue-600 text-white text-[8px] font-semibold px-3 py-1 rounded">
              Get Started
            </div>

            {/* Decorative glowing shapes */}
            <div className="absolute right-4 bottom-4 w-24 h-24 bg-blue-600/10 rounded-lg border border-blue-500/20 backdrop-blur-sm flex items-center justify-center">
              <div className="w-16 h-16 bg-blue-500/10 rounded border border-blue-400/30 animate-pulse" />
            </div>
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl" />
          </div>
        </div>

        {/* Laptop base */}
        <div className="bg-gradient-to-b from-gray-700 to-gray-800 h-4 rounded-b-sm mx-2 shadow-xl" />
        <div className="bg-gradient-to-b from-gray-800 to-gray-900 h-2 rounded-b-lg mx-0 shadow-xl" />
      </div>

      {/* Analytics floating card */}
      <AnalyticsCard />
    </div>
  )
}

const features = [
  { icon: <Zap size={18} className="text-yellow-400" />, label: 'Fast Delivery' },
  { icon: <Shield size={18} className="text-green-400" />, label: 'Secure & Reliable' },
  { icon: <Headphones size={18} className="text-blue-400" />, label: '24/7 Support' },
]

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-700/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-600/10 rounded-full blur-[80px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px]" />
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div {...fadeUp(0)} className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-800/50 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              <span className="text-xs text-blue-300 font-medium tracking-wide">Code • Analyze • Grow</span>
            </motion.div>

            {/* Headline */}
            <motion.h1 {...fadeUp(0.1)} className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 tracking-tight">
              WE BUILD WEBSITES &{' '}
              <br className="hidden sm:block" />
              TURN DATA INTO{' '}
              <span className="text-gradient glow-text">GROWTH</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p {...fadeUp(0.2)} className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              Zintrix helps businesses establish a powerful online presence and make smarter decisions with data-driven insights.
            </motion.p>

            {/* Buttons */}
            <motion.div {...fadeUp(0.3)} className="flex flex-wrap gap-4 mb-10">
              <button className="group px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5 flex items-center gap-2">
                Get Your Website
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="group px-7 py-3.5 bg-transparent border border-blue-700/60 hover:border-blue-400 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-blue-950/40 hover:-translate-y-0.5 flex items-center gap-2">
                View Our Work
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>

            {/* Features bar */}
            <motion.div {...fadeUp(0.4)} className="flex flex-wrap gap-6">
              {features.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-sm text-gray-300">
                  {icon}
                  <span>{label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Laptop Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: 'easeOut' }}
            className="relative"
          >
            <LaptopMockup />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

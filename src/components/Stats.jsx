import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Smile, Rocket, TrendingUp, Headphones } from 'lucide-react'

function useCounter(target, inView, duration = 2000) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = 0
    const step = target / (duration / 16)
    const timer = setInterval(() => {
      start += step
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)
    return () => clearInterval(timer)
  }, [inView, target, duration])
  return count
}

const stats = [
  { icon: <Smile size={28} />, value: 80, suffix: '+', label: 'Happy Clients' },
  { icon: <Rocket size={28} />, value: 150, suffix: '+', label: 'Websites & Dashboards' },
  { icon: <TrendingUp size={28} />, value: 3, suffix: '+', label: 'Years Excellence' },
  { icon: <Headphones size={28} />, value: 24, suffix: '/7', label: 'Client Support' },
]

function StatItem({ stat, inView, index }) {
  const count = useCounter(stat.value, inView)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center text-center group"
    >
      <div className="w-14 h-14 rounded-xl bg-blue-950/60 border border-blue-800/40 flex items-center justify-center text-blue-400 mb-4 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300">
        {stat.icon}
      </div>
      <div className="text-3xl lg:text-4xl font-extrabold text-white mb-1">
        {count}{stat.suffix}
      </div>
      <p className="text-gray-400 text-sm font-medium">{stat.label}</p>
    </motion.div>
  )
}

export default function Stats() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <section className="relative py-20 border-t border-blue-900/20" ref={ref}>
      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-950/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-4">
          {stats.map((stat, i) => (
            <div key={stat.label} className="relative">
              <StatItem stat={stat} inView={inView} index={i} />
              {/* Divider (except last) */}
              {i < stats.length - 1 && (
                <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-px h-12 bg-blue-900/40" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

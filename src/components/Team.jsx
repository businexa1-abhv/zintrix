import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Linkedin, Twitter, Mail } from 'lucide-react'

const teamMembers = [
  {
    name: 'Swambhavi',
    role: 'Data Analytics Specialist',
    bio: 'Data analytics professional with 5 years of experience delivering actionable insights and business-focused reporting.',
    avatar: '👩‍💻',
    color: 'from-blue-600 to-blue-800',
    socials: [
      { icon: Linkedin, url: '#' },
      { icon: Twitter, url: '#' },
      { icon: Mail, url: '#' },
    ],
  },
  {
    name: 'Harsha Vardhan Kokollu',
    role: 'Fullstack Developer',
    bio: 'Fullstack developer with 8+ years of experience building modern, scalable web applications end to end.',
    avatar: '👨‍💻',
    color: 'from-cyan-600 to-blue-700',
    socials: [
      { icon: Linkedin, url: '#' },
      { icon: Twitter, url: '#' },
      { icon: Mail, url: '#' },
    ],
  },
]

function TeamMemberCard({ member, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-dark-700/50 border border-blue-900/30 rounded-2xl overflow-hidden hover:-translate-y-2 transition-all duration-400 hover:shadow-2xl hover:shadow-blue-600/20"
    >
      {/* Top accent line */}
      <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${member.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

      <div className="p-8">
        {/* Avatar */}
        <div
          className={`w-20 h-20 rounded-xl bg-gradient-to-br ${member.color} flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
        >
          {member.avatar}
        </div>

        {/* Info */}
        <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
        <p className="text-sm text-blue-400 font-semibold mb-4">{member.role}</p>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">{member.bio}</p>

        {/* Socials */}
        <div className="flex gap-3">
          {member.socials.map((social, i) => {
            const Icon = social.icon
            return (
              <a
                key={i}
                href={social.url}
                className="w-9 h-9 rounded-lg bg-blue-950/60 border border-blue-900/40 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500 transition-all duration-200"
              >
                <Icon size={16} />
              </a>
            )
          })}
        </div>
      </div>

      {/* BG glow effect */}
      <div className={`absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />
    </motion.div>
  )
}

export default function Team() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="team" className="relative py-24 overflow-hidden" ref={ref}>
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
          <p className="text-blue-400 text-sm font-semibold tracking-[0.2em] uppercase mb-3">Meet the Experts</p>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our <span className="text-gradient">Team</span>
          </h2>
          <p className="text-gray-400 text-lg mt-4 max-w-2xl mx-auto">
            A talented group of developers, designers, and strategists dedicated to your success
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {teamMembers.map((member, i) => (
            <TeamMemberCard key={member.name} member={member} index={i} />
          ))}
        </div>

        {/* Team stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-3 gap-8 max-w-2xl mx-auto text-center"
        >
          <div>
            <div className="text-3xl lg:text-4xl font-extrabold text-blue-400 mb-2">35+</div>
            <p className="text-gray-400 text-sm">Team Members</p>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-extrabold text-cyan-400 mb-2">80+</div>
            <p className="text-gray-400 text-sm">Successful Projects</p>
          </div>
          <div>
            <div className="text-3xl lg:text-4xl font-extrabold text-purple-400 mb-2">98%</div>
            <p className="text-gray-400 text-sm">Client Satisfaction</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

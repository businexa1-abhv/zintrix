import { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Code2, LineChart, Search, ArrowRight, Quote } from 'lucide-react'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Case studies', href: '#case-studies' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  {
    title: 'Web development',
    desc: 'Fast, scalable sites and apps with React, performance-first builds, and clean UX.',
    icon: Code2,
  },
  {
    title: 'Data analytics',
    desc: 'Dashboards and reporting that turn your numbers into confident decisions.',
    icon: LineChart,
  },
  {
    title: 'SEO',
    desc: 'Technical SEO, structured content strategy, and growth-focused optimization.',
    icon: Search,
  },
]

const caseStudies = [
  {
    title: 'Coffee ordering platform',
    client: 'Local hospitality',
    result: '+40% online orders',
    desc: 'Streamlined menus, faster checkout flows, and mobile-first UX.',
  },
  {
    title: 'E‑commerce rollout',
    client: 'Retail brand',
    result: '+32% conversion',
    desc: 'Product discovery, PDP optimization, and catalog performance tuning.',
  },
  {
    title: 'Executive analytics',
    client: 'B2B SaaS',
    result: '−48% reporting time',
    desc: 'Unified KPI views and clearer weekly leadership snapshots.',
  },
]

const testimonials = [
  {
    quote:
      'Zintrix shipped a polished site ahead of schedule. Our enquiries doubled in the first month.',
    author: 'Sarah M.',
    role: 'Marketing Director',
  },
  {
    quote: 'Their analytics work finally made sense of messy spreadsheets. Huge clarity win.',
    author: 'James L.',
    role: 'COO',
  },
  {
    quote: 'Professional, proactive, and easy to collaborate with—from kickoff through launch.',
    author: 'Priya K.',
    role: 'Founder',
  },
]

export default function BusinessWebsitePage() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  const headlineWords = ['Build.', 'Analyze.', 'Grow.']

  return (
    <div className="min-h-screen bg-[#0b1426] text-white">
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#081020]/90 backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="#" className="text-xl font-bold tracking-tight">
            Zintrix<span className="text-sky-400">.</span>
          </a>

          <ul className="hidden gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-slate-300 transition hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden rounded-lg bg-white px-4 py-2 text-sm font-semibold text-[#0b1426] transition hover:bg-slate-100 md:inline-flex"
          >
            Get a quote
          </a>

          <button
            type="button"
            className="rounded-lg p-2 text-white md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[#081020] px-4 py-4 md:hidden">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block py-1 text-slate-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="mt-2 block rounded-lg bg-white py-3 text-center font-semibold text-[#0b1426]"
                  onClick={() => setMobileOpen(false)}
                >
                  Get a quote
                </a>
              </li>
            </ul>
          </div>
        )}
      </header>

      <section className="relative overflow-hidden px-4 pb-24 pt-28 sm:px-6 sm:pb-28 sm:pt-32 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-900/40 via-transparent to-transparent" />
        <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-400"
          >
            Digital agency
          </motion.p>

          <h1 className="mt-4 flex flex-wrap gap-x-3 gap-y-2 text-4xl font-black leading-tight tracking-tight sm:text-6xl lg:text-7xl lg:leading-[1.05]">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: 0.12 + i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="inline-block bg-gradient-to-br from-white to-slate-300 bg-clip-text text-transparent"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 max-w-xl text-lg text-slate-300"
          >
            Zintrix helps ambitious teams ship better websites and clearer analytics—with strategy, execution, and
            measurable outcomes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.72 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-[#0b1426] transition hover:bg-slate-100"
            >
              Start a project <ArrowRight size={18} />
            </a>
            <a
              href="#case-studies"
              className="inline-flex items-center rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:border-white/30 hover:bg-white/10"
            >
              View results
            </a>
          </motion.div>
        </div>
      </section>

      <section id="services" className="scroll-mt-24 bg-white px-4 py-20 text-[#0b1426] sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-sm font-bold uppercase tracking-widest text-sky-700">Services</p>
          <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Everything you need to grow online</h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            From build to measurement—focused deliverables without agency fluff.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {services.map((s, idx) => {
              const Icon = s.icon
              return (
                <motion.article
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0b1426] text-white">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">{s.desc}</p>
                </motion.article>
              )
            })}
          </div>
        </div>
      </section>

      <section id="case-studies" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-sky-400">Case studies</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Outcomes clients can feel</h2>
            </div>
            <p className="max-w-md text-slate-400">Demo summaries—swap with your real work when pitching clients.</p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {caseStudies.map((c, idx) => (
              <motion.article
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm transition hover:border-sky-500/30 hover:bg-white/[0.09]"
              >
                <span className="inline-flex w-fit rounded-full bg-sky-500/20 px-3 py-1 text-xs font-bold text-sky-300">
                  {c.result}
                </span>
                <h3 className="mt-4 text-xl font-bold text-white">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-400">{c.client}</p>
                <p className="mt-4 flex-1 text-slate-300 leading-relaxed">{c.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="scroll-mt-24 bg-[#081020] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <p className="text-center text-sm font-bold uppercase tracking-widest text-sky-400">Testimonials</p>
          <h2 className="mt-2 text-center text-3xl font-black tracking-tight sm:text-4xl">Teams trust Zintrix</h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t, idx) => (
              <motion.blockquote
                key={t.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="relative rounded-2xl border border-white/10 bg-white p-8 text-[#0b1426] shadow-xl"
              >
                <Quote className="absolute right-6 top-6 h-10 w-10 text-sky-500/25" aria-hidden />
                <p className="relative text-lg font-medium leading-relaxed text-slate-800">&ldquo;{t.quote}&rdquo;</p>
                <footer className="mt-6 border-t border-slate-200 pt-6">
                  <cite className="not-italic">
                    <span className="font-bold">{t.author}</span>
                    <span className="mt-1 block text-sm text-slate-500">{t.role}</span>
                  </cite>
                </footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-white/10 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-sky-400">Contact</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight sm:text-4xl">Tell us about your goals</h2>
            <p className="mt-4 text-slate-400 leading-relaxed">
              No backend on this demo—submitting the form only shows a confirmation in the UI. Wire it to email or your
              CRM when you&apos;re ready.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm"
          >
            <div>
              <label htmlFor="biz-name" className="block text-sm font-medium text-slate-300">
                Name
              </label>
              <input
                id="biz-name"
                name="name"
                type="text"
                required
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                placeholder="Your name"
                autoComplete="name"
              />
            </div>
            <div>
              <label htmlFor="biz-email" className="block text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                id="biz-email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                placeholder="you@company.com"
                autoComplete="email"
              />
            </div>
            <div>
              <label htmlFor="biz-message" className="block text-sm font-medium text-slate-300">
                Project details
              </label>
              <textarea
                id="biz-message"
                name="message"
                rows={4}
                required
                className="mt-2 w-full resize-y rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500/30"
                placeholder="What would you like to build or measure?"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-xl bg-white py-3.5 text-sm font-bold text-[#0b1426] transition hover:bg-slate-100"
            >
              Send message
            </button>
            {sent && (
              <p
                className="rounded-lg bg-sky-500/15 px-4 py-3 text-center text-sm font-medium text-sky-300"
                role="status"
              >
                Thanks—this is a UI-only demo; no message was sent to a server.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-4 py-10 text-center text-sm text-slate-500 sm:px-6">
        © {new Date().getFullYear()} Zintrix Digital Agency — Code. Analyze. Grow.
      </footer>
    </div>
  )
}

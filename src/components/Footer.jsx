import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative bg-dark-800/60 border-t border-blue-900/20 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 40 40" className="w-8 h-8">
                <defs>
                  <linearGradient id="footerZ" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#2563eb" />
                  </linearGradient>
                </defs>
                <polygon points="5,8 35,8 35,14 15,26 35,26 35,32 5,32 5,26 25,14 5,14" fill="url(#footerZ)" />
              </svg>
              <span className="text-lg font-bold tracking-widest">ZINTRI<span className="text-blue-400">X</span></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              Building powerful digital experiences and turning data into business growth.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 rounded-lg bg-blue-950/60 border border-blue-900/40 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500 transition-all duration-200">
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {['Website Development', 'Data Analytics', 'SEO Optimization', 'UI/UX Design', 'Dashboard Creation'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              {['About Us', 'Portfolio', 'Blog', 'Careers', 'Contact'].map(item => (
                <li key={item}>
                  <a href="#" className="text-sm text-gray-400 hover:text-blue-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Phone size={14} className="text-blue-400 mt-0.5 shrink-0" />
                +91 98765 43210
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Mail size={14} className="text-blue-400 mt-0.5 shrink-0" />
                hello@zintrix.in
              </li>
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin size={14} className="text-blue-400 mt-0.5 shrink-0" />
                India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-blue-900/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">© 2024 Zintrix. All rights reserved.</p>
          <p className="text-xs text-gray-500">
            Made with <span className="text-blue-400">♥</span> in India
          </p>
        </div>
      </div>
    </footer>
  )
}

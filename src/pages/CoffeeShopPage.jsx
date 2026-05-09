import { Coffee, MapPin, Clock, Phone } from 'lucide-react'

const menuItems = [
  { name: 'Espresso Shot', price: '$3.50', emoji: '☕' },
  { name: 'Cappuccino', price: '$4.80', emoji: '🥛' },
  { name: 'Caramel Latte', price: '$5.20', emoji: '🍮' },
  { name: 'Cold Brew', price: '$4.60', emoji: '🧊' },
  { name: 'Mocha Delight', price: '$5.50', emoji: '🍫' },
  { name: 'Butter Croissant', price: '$3.20', emoji: '🥐' },
]

export default function CoffeeShopPage() {
  return (
    <div className="min-h-screen bg-[#2a1d16] text-[#fff8f1]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3b2a21] via-[#2a1d16] to-[#2a1d16]" />
        <div className="absolute -top-20 -right-10 w-72 h-72 rounded-full bg-[#d4a373]/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-8 w-64 h-64 rounded-full bg-[#ddb892]/20 blur-3xl" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
          <div className="flex items-center gap-2 text-[#f5e6d3] mb-6">
            <Coffee size={22} />
            <span className="tracking-widest uppercase text-sm">Brew & Co</span>
          </div>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight">
              Freshly Brewed Happiness,
              <span className="block text-[#ddb892]">Served Daily.</span>
            </h1>
            <p className="mt-5 text-[#f4e6d8]/90 text-lg sm:text-xl leading-relaxed">
              Your neighborhood coffee spot for handcrafted drinks, warm vibes, and quick online ordering.
            </p>
            <a
              href="#menu"
              className="inline-flex mt-8 px-7 py-3.5 rounded-xl bg-[#d4a373] text-[#2d1f16] font-bold hover:bg-[#e2ba8f] transition-colors"
            >
              Order Online
            </a>
          </div>
        </div>
      </section>

      <section id="menu" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-10">
          <p className="text-[#ddb892] tracking-[0.2em] uppercase text-sm">Our Menu</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">Coffee & Bites You Will Love</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {menuItems.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-[#6f4e37]/50 bg-[#3b2a21]/70 p-5 hover:-translate-y-1 hover:border-[#d4a373] transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <span className="text-3xl">{item.emoji}</span>
                <span className="text-[#ddb892] font-bold">{item.price}</span>
              </div>
              <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#3b2a21]/60 border-y border-[#6f4e37]/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-[#ddb892] tracking-[0.2em] uppercase text-sm">About Brew & Co</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-3">Where Community Meets Coffee</h2>
            <p className="mt-5 text-[#f4e6d8]/90 leading-relaxed">
              At Brew & Co, we roast with care, brew with precision, and serve with heart. From your morning rush to
              evening catch-ups, our cafe offers the perfect mix of flavor, comfort, and local charm.
            </p>
          </div>
          <div className="rounded-3xl border border-[#6f4e37]/60 bg-[#2f221a]/80 p-6">
            <div className="space-y-4 text-[#f4e6d8]">
              <p className="flex items-center gap-3">
                <MapPin size={18} className="text-[#ddb892]" /> 42 Market Street, Downtown
              </p>
              <p className="flex items-center gap-3">
                <Clock size={18} className="text-[#ddb892]" /> Mon-Sun: 7:00 AM - 9:00 PM
              </p>
              <p className="flex items-center gap-3">
                <Phone size={18} className="text-[#ddb892]" /> +1 (555) 012-3456
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-center">
        <p className="text-[#f4e6d8]/80">Contact us: hello@brewandco.cafe | +1 (555) 012-3456</p>
        <p className="mt-2 text-[#c7a68a] text-sm">© {new Date().getFullYear()} Brew & Co. Crafted with warmth.</p>
      </footer>
    </div>
  )
}

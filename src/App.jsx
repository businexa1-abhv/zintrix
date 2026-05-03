import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import DetailedServices from './components/DetailedServices'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Process from './components/Process'
import Team from './components/Team'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import CTABanner from './components/CTABanner'
import Portfolio from './components/Portfolio'
import Stats from './components/Stats'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <DetailedServices />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Process />
      <Team />
      <CTABanner />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

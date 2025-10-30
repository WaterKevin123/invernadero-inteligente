import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import TeamSection from './components/TeamSection'
import TechnologySection from './components/TechnologySection'
import BenefitsSection from './components/BenefitsSection'
import ContactSection from './components/ContactSection'
import QRSection from './components/QRSection'
import Navigation from './components/Navigation'

const HomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => { setIsLoaded(true) }, [])
  return (
    <div className={`min-h-screen bg-white transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      <Navigation />
      <main>
        <Hero />
        <Features />
        <TechnologySection />
        <BenefitsSection />
        <TeamSection />
        <QRSection />
        <ContactSection />
      </main>
    </div>
  )
}
export default HomePage

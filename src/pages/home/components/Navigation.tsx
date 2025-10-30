import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 50) }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) { element.scrollIntoView({ behavior: 'smooth' }) }
    setIsMobileMenuOpen(false)
  }
  return (
    <motion.nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`} initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.5 }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <i className="ri-plant-line text-white text-xl"></i>
            </div>
            <h1 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Pacifico, serif' }}>
              Invernadero Inteligente
            </h1>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('inicio')} className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer whitespace-nowrap">Inicio</button>
            <button onClick={() => scrollToSection('caracteristicas')} className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer whitespace-nowrap">Características</button>
            <button onClick={() => scrollToSection('tecnologia')} className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer whitespace-nowrap">Tecnología</button>
            <button onClick={() => scrollToSection('beneficios')} className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer whitespace-nowrap">Beneficios</button>
            <button onClick={() => scrollToSection('equipo')} className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer whitespace-nowrap">Equipo</button>
            <button onClick={() => scrollToSection('qr')} className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer whitespace-nowrap">QR</button>
            <button onClick={() => scrollToSection('contacto')} className="text-gray-700 hover:text-green-600 transition-colors cursor-pointer whitespace-nowrap">Contacto</button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Abrir menú">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <motion.div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} bg-white/95 border-t`} initial={{ height: 0 }} animate={{ height: isMobileMenuOpen ? 'auto' : 0 }} transition={{ duration: 0.28 }}>
        <div className="px-4 py-4 space-y-2">
          <button onClick={() => scrollToSection('inicio')} className="block w-full text-left">Inicio</button>
          <button onClick={() => scrollToSection('caracteristicas')} className="block w-full text-left">Características</button>
          <button onClick={() => scrollToSection('tecnologia')} className="block w-full text-left">Tecnología</button>
          <button onClick={() => scrollToSection('beneficios')} className="block w-full text-left">Beneficios</button>
          <button onClick={() => scrollToSection('equipo')} className="block w-full text-left">Equipo</button>
          <button onClick={() => scrollToSection('qr')} className="block w-full text-left">QR</button>
          <button onClick={() => scrollToSection('contacto')} className="block w-full text-left">Contacto</button>
        </div>
      </motion.div>
    </motion.nav>
  )
}
export default Navigation

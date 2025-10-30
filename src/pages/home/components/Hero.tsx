import React from 'react'
import { motion } from 'framer-motion'

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } }
}
const itemUp = { hidden: { y: 30, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } } }

const Hero: React.FC = () => {
  return (
    <motion.section id="inicio" className="pt-24 pb-16 bg-gradient-to-b from-white to-green-50"
      initial="hidden" animate="show" variants={container}>
      <div className="container px-4 mx-auto flex flex-col md:flex-row items-center gap-8">
        <motion.div className="w-full md:w-1/2" variants={itemUp}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900" style={{ fontFamily: 'Pacifico, cursive' }}>
            Invernadero Inteligente
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            Agricultura sostenible con tecnología avanzada — IoT, automatización y monitoreo en tiempo real para mejorar tus cultivos.
          </p>
          <div className="mt-6 flex items-center gap-4">
            <a href="#contacto" className="px-6 py-3 rounded-lg bg-primary text-white font-semibold shadow hover:bg-primary-dark transition transform hover:-translate-y-0.5">Contactar</a>
            <a href="#caracteristicas" className="px-6 py-3 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-100 transition">Ver características</a>
          </div>
          <div className="mt-6 text-sm text-gray-600">Equipo: Kevin Sacancela, Marco Peralta, Daniel Quito, Isaac Quizhpi</div>
        </motion.div>
        <motion.div className="w-full md:w-1/2 flex justify-center" variants={itemUp}>
          <div className="w-full max-w-md h-64 rounded-2xl shadow-lg bg-white flex items-center justify-center border border-gray-100 overflow-hidden">
            <img alt="invernadero-preview" src="/assets/greenhouse-preview.jpg" className="object-cover w-full h-full" />
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
export default Hero

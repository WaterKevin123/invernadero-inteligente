import React from 'react'
import { motion } from 'framer-motion'
const features = [
  { title: 'Monitoreo de sensores', desc: 'Temperatura, humedad, CO₂ y luminosidad en tiempo real.' },
  { title: 'Riego automatizado', desc: 'Controla bombas y válvulas según necesidades del cultivo.' },
  { title: 'Análisis de datos', desc: 'Históricos y alertas para maximizar rendimiento.' },
]
const list = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } }
const card = { hidden: { y: 20, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } } }

const Features: React.FC = () => {
  return (
    <motion.section id="caracteristicas" className="py-16" initial="hidden" whileInView="show" viewport={{ once: true }} variants={list}>
      <div className="container px-4 mx-auto">
        <h3 className="text-3xl font-bold mb-6">Características</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <motion.div key={f.title} className="p-6 bg-white rounded-xl shadow transform hover:scale-[1.02] transition" variants={card}>
              <h4 className="font-semibold text-xl">{f.title}</h4>
              <p className="mt-2 text-gray-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
export default Features

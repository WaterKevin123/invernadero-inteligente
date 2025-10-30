import React from 'react'
import { motion } from 'framer-motion'
const members = [
  { name: 'Kevin Sacancela', role: 'Desarrollo & Diseño' },
  { name: 'Marco Peralta', role: 'Hardware & Electrónica' },
  { name: 'Daniel Quito', role: 'Firmware & Integración' },
  { name: 'Isaac Quizhpi', role: 'Investigación Agronómica' },
]
const card = { hidden: { scale: 0.98, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: 0.45 } } }
const TeamSection: React.FC = () => {
  return (
    <motion.section id="equipo" className="py-16 bg-gray-50" initial="hidden" whileInView="show" viewport={{ once: true }}>
      <div className="container px-4 mx-auto">
        <h3 className="text-3xl font-bold mb-6">Equipo</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {members.map((m) => (
            <motion.div key={m.name} className="p-6 bg-white rounded-xl shadow text-center transform hover:scale-105 transition" variants={card}>
              <div className="w-20 h-20 rounded-full bg-green-100 mx-auto flex items-center justify-center font-semibold text-green-700">{m.name.split(' ')[0].slice(0,1)}</div>
              <h4 className="mt-4 font-semibold">{m.name}</h4>
              <p className="text-sm text-gray-600">{m.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
export default TeamSection

import React from 'react'
import { motion } from 'framer-motion'
const BenefitsSection: React.FC = () => {
  return (
    <motion.section id="beneficios" className="py-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
      <div className="container px-4 mx-auto">
        <h3 className="text-3xl font-bold mb-6">Beneficios</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">Ahorro de agua y recursos</div>
          <div className="p-6 bg-white rounded-xl shadow">Mayor rendimiento por m²</div>
          <div className="p-6 bg-white rounded-xl shadow">Monitoreo remoto y alertas</div>
        </div>
      </div>
    </motion.section>
  )
}
export default BenefitsSection

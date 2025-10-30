import React from 'react'
import { motion } from 'framer-motion'

const item = { hidden: { x: -10, opacity: 0 }, show: { x: 0, opacity: 1, transition: { duration: 0.5 } } }

const TechnologySection: React.FC = () => {
  return (
    <motion.section id="tecnologia" className="py-16 bg-gray-50" initial="hidden" whileInView="show" viewport={{ once: true }}>
      <div className="container px-4 mx-auto">
        <h3 className="text-3xl font-bold mb-6">Tecnología</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div className="p-6 bg-white rounded-xl shadow" variants={item}>
            <h4 className="font-semibold">ESP32 + Sensores</h4>
            <p className="mt-2 text-gray-600">Control central con lecturas de humedad y temperatura.</p>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-xl shadow" variants={item}>
            <h4 className="font-semibold">Conectividad</h4>
            <p className="mt-2 text-gray-600">WiFi para telemetría, base de datos en la nube (Supabase/Firebase).</p>
          </motion.div>
          <motion.div className="p-6 bg-white rounded-xl shadow" variants={item}>
            <h4 className="font-semibold">Automatización</h4>
            <p className="mt-2 text-gray-600">Actuadores para riego, ventilación y sombreo automatizados.</p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
export default TechnologySection

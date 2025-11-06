import React from 'react'
import { motion } from 'framer-motion'
import { QR_TARGET } from '../../../config/qr'

const QRSection: React.FC = () => {
  // Generate a QR via Google Charts API as fallback (client-side)
  const qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=300x300&chl=${encodeURIComponent(QR_TARGET)}`
  return (
    <motion.section id="qr" className="py-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="container px-4 mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Escanea el QR</h3>
        <p className="mb-6 text-gray-600">Accede a la vista móvil del proyecto o descarga la documentación.</p>
        <div className="inline-block p-6 bg-white rounded-xl shadow">
          <img src={qrUrl} alt="qr" className="w-48 h-48 object-contain" />
        </div>
      </div>
    </motion.section>
  )
}
export default QRSection

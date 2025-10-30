import React from 'react'
import { motion } from 'framer-motion'

const ContactSection: React.FC = () => {
  return (
    <motion.section id="contacto" className="py-16 bg-gray-50" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
      <div className="container px-4 mx-auto">
        <h3 className="text-3xl font-bold mb-6">Contacto</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl shadow">
            <h4 className="font-semibold">¿Tienes preguntas?</h4>
            <p className="mt-2 text-gray-600">Escríbenos y te responderemos a la brevedad.</p>
            <p className="mt-4 text-sm text-gray-600">Email: <a href="mailto:info@invernadero-inteligente.readdy.ai" className="text-primary">info@invernadero-inteligente.readdy.ai</a></p>
          </div>
          <form className="p-6 bg-white rounded-xl shadow space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Mensaje enviado (demo)')}}>
            <input className="w-full p-3 border rounded" placeholder="Nombre" />
            <input className="w-full p-3 border rounded" placeholder="Email" />
            <textarea className="w-full p-3 border rounded" placeholder="Mensaje" rows={4}></textarea>
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Enviar</button>
          </form>
        </div>
      </div>
    </motion.section>
  )
}
export default ContactSection

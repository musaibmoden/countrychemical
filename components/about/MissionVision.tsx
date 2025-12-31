'use client'

import { motion } from 'framer-motion'

export default function MissionVision() {
  return (
    <section className="py-20 bg-industrial-light">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-industrial-accent/10 rounded-lg flex items-center justify-center mb-4">
              <div className="w-8 h-8 border-2 border-industrial-accent rounded-full"></div>
            </div>
            <h2 className="text-3xl font-bold text-industrial-dark mb-4">
              Our Mission
            </h2>
            <p className="text-industrial-grey leading-relaxed">
              To provide innovative, high-quality construction chemical solutions that enhance the durability, performance, and sustainability of built environments worldwide. We are committed to supporting our customers' success through superior products, technical expertise, and responsive service.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <div className="w-16 h-16 bg-industrial-accent/10 rounded-lg flex items-center justify-center mb-4">
              <div className="w-8 h-8 border-2 border-industrial-accent"></div>
            </div>
            <h2 className="text-3xl font-bold text-industrial-dark mb-4">
              Our Vision
            </h2>
            <p className="text-industrial-grey leading-relaxed">
              To be the global leader in construction chemicals, recognized for innovation, quality, and sustainability. We envision a future where our products contribute to building structures that are not only stronger and more durable but also more environmentally responsible.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 bg-industrial-grey text-white rounded-lg p-8"
        >
          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Quality', desc: 'Uncompromising standards in every product' },
              { title: 'Innovation', desc: 'Continuous improvement and R&D investment' },
              { title: 'Integrity', desc: 'Ethical business practices and transparency' },
              { title: 'Sustainability', desc: 'Environmental responsibility in all operations' },
              { title: 'Customer Focus', desc: 'Dedicated to customer success and satisfaction' },
              { title: 'Safety', desc: 'Protecting people and the environment' },
            ].map((value, index) => (
              <div key={index} className="bg-white/5 rounded-lg p-4">
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-300 text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}


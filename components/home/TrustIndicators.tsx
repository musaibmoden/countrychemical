'use client'

import { motion } from 'framer-motion'

export default function TrustIndicators() {
  const indicators = [
    {
      title: 'ISO 9001 Certified',
      description: 'Quality management systems',
      icon: '✓',
    },
    {
      title: 'ISO 14001 Certified',
      description: 'Environmental management',
      icon: '🌱',
    },
    {
      title: 'ASTM Compliant',
      description: 'Meets international standards',
      icon: '📋',
    },
    {
      title: 'Third-Party Tested',
      description: 'Independent quality verification',
      icon: '🔬',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-4">
            Quality & Compliance
          </h2>
          <p className="text-xl text-industrial-grey max-w-2xl mx-auto">
            Committed to the highest standards of quality, safety, and environmental responsibility
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {indicators.map((indicator, index) => (
            <motion.div
              key={indicator.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center p-6 bg-industrial-light rounded-lg hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl mb-4 text-industrial-accent">
                {indicator.icon}
              </div>
              <h3 className="text-xl font-bold text-industrial-dark mb-2">
                {indicator.title}
              </h3>
              <p className="text-industrial-grey text-sm">
                {indicator.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


'use client'

import { motion } from 'framer-motion'

export default function QualityCommitment() {
  const commitments = [
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing protocols and quality control measures at every stage of production.',
    },
    {
      title: 'Safety Standards',
      description: 'Compliance with international safety regulations and best practices.',
    },
    {
      title: 'Innovation',
      description: 'Continuous R&D investment to develop next-generation construction solutions.',
    },
    {
      title: 'Environmental Responsibility',
      description: 'Sustainable manufacturing processes and eco-friendly product formulations.',
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
            Our Commitment
          </h2>
          <p className="text-xl text-industrial-grey max-w-2xl mx-auto">
            Excellence in quality, safety, and innovation drives everything we do
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {commitments.map((commitment, index) => (
            <motion.div
              key={commitment.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-industrial-light rounded-lg p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className="w-16 h-16 bg-industrial-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <div className="w-8 h-8 border-2 border-industrial-accent rounded"></div>
              </div>
              <h3 className="text-xl font-bold text-industrial-dark mb-3">
                {commitment.title}
              </h3>
              <p className="text-industrial-grey text-sm">
                {commitment.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


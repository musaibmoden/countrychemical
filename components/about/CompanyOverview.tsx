'use client'

import { motion } from 'framer-motion'

export default function CompanyOverview() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-industrial-dark mb-6">
              Company Overview
            </h2>
            <div className="space-y-4 text-industrial-grey">
              <p>
                Country Chemical has been a leading manufacturer of construction chemicals for over 25 years, serving contractors, engineers, and distributors across the globe. Our commitment to innovation, quality, and customer service has established us as a trusted partner in the construction industry.
              </p>
              <p>
                We specialize in developing and manufacturing high-performance admixtures, waterproofing systems, repair materials, protective coatings, and sealants. Our products are engineered to meet the demanding requirements of modern construction projects, from high-rise buildings to critical infrastructure.
              </p>
              <p>
                With state-of-the-art manufacturing facilities and a dedicated research and development team, we continuously advance our product portfolio to address emerging challenges in construction technology and sustainability.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-industrial-light rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-industrial-dark mb-6">
              Our Strengths
            </h3>
            <ul className="space-y-4">
              {[
                'Extensive product portfolio covering all construction needs',
                'Rigorous quality control and testing protocols',
                'Technical support and application expertise',
                'Global distribution network',
                'Sustainable and environmentally responsible solutions',
              ].map((strength, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                  className="flex items-start"
                >
                  <span className="text-industrial-accent mr-3 font-bold">✓</span>
                  <span className="text-industrial-grey">{strength}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


'use client'

import { motion } from 'framer-motion'

export default function IndustriesServed() {
  const industries = [
    {
      name: 'Infrastructure',
      description: 'Bridges, highways, tunnels, and public works',
    },
    {
      name: 'Commercial Construction',
      description: 'Office buildings, retail spaces, and mixed-use developments',
    },
    {
      name: 'Industrial Facilities',
      description: 'Manufacturing plants, warehouses, and processing facilities',
    },
    {
      name: 'Residential',
      description: 'Housing developments and residential complexes',
    },
    {
      name: 'Marine & Coastal',
      description: 'Ports, harbors, and coastal protection structures',
    },
    {
      name: 'Energy & Utilities',
      description: 'Power plants, water treatment, and energy infrastructure',
    },
  ]

  return (
    <section className="py-20 bg-industrial-grey text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Supporting construction excellence across diverse sectors
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-12 h-12 border-2 border-white/30 rounded-lg flex items-center justify-center mb-4">
                <div className="w-6 h-6 border border-white/50"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
              <p className="text-gray-300 text-sm">{industry.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


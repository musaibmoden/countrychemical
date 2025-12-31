'use client'

import { motion } from 'framer-motion'

export default function ContactInfo() {
  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      content: 'info@countrychemical.com',
      link: 'mailto:info@countrychemical.com',
    },
    {
      icon: '📞',
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: '📍',
      title: 'Address',
      content: '123 Industrial Boulevard\nManufacturing District\nCity, State 12345\nUnited States',
      link: null,
    },
    {
      icon: '🕒',
      title: 'Business Hours',
      content: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 1:00 PM\nSunday: Closed',
      link: null,
    },
  ]

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-white rounded-lg p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-industrial-dark mb-6">
          Get in Touch
        </h2>
        <p className="text-industrial-grey mb-6">
          Our team is ready to assist you with product inquiries, technical support, or partnership opportunities. Reach out to us through any of the following channels.
        </p>

        <div className="space-y-6">
          {contactMethods.map((method, index) => (
            <motion.div
              key={method.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="flex items-start"
            >
              <div className="text-3xl mr-4">{method.icon}</div>
              <div>
                <h3 className="font-semibold text-industrial-dark mb-1">
                  {method.title}
                </h3>
                {method.link ? (
                  <a
                    href={method.link}
                    className="text-industrial-accent hover:underline"
                  >
                    {method.content}
                  </a>
                ) : (
                  <p className="text-industrial-grey whitespace-pre-line">
                    {method.content}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Map Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-industrial-light rounded-lg p-8 shadow-lg"
      >
        <h3 className="text-xl font-bold text-industrial-dark mb-4">
          Find Us on the Map
        </h3>
        <div className="bg-industrial-concrete rounded-lg h-64 flex items-center justify-center">
          <div className="text-center text-industrial-grey">
            <div className="text-4xl mb-2">📍</div>
            <p className="text-sm">Google Maps integration placeholder</p>
            <p className="text-xs mt-2">
              Replace with actual Google Maps embed
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}


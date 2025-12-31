'use client'

import { motion } from 'framer-motion'

export default function ContactInfo() {
  const contactMethods = [
    {
      title: 'Email',
      content: 'info@countrychemical.com',
      link: 'mailto:info@countrychemical.com',
    },
    {
      title: 'Phone',
      content: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      title: 'Address',
      content: '123 Industrial Boulevard\nManufacturing District\nCity, State 12345\nUnited States',
      link: null,
    },
    {
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
              <div className="w-10 h-10 bg-industrial-accent/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <div className="w-5 h-5 border border-industrial-accent rounded"></div>
              </div>
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

      {/* Google Maps */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-white rounded-lg p-4 sm:p-8 shadow-lg"
      >
        <h3 className="text-xl font-bold text-industrial-dark mb-4">
          Find Us on the Map
        </h3>
        <div className="rounded-lg overflow-hidden h-64 sm:h-96 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1841321915767!2d-73.98811768459398!3d40.74844097932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full"
            title="Country Chemical Location"
          ></iframe>
        </div>
        <p className="text-sm text-industrial-grey mt-4">
          Visit us at our headquarters or contact us for directions.
        </p>
      </motion.div>
    </div>
  )
}


'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface StatItemProps {
  value: number
  suffix?: string
  label: string
  delay?: number
}

function StatItem({ value, suffix = '', label, delay = 0 }: StatItemProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      const stepDuration = duration / steps

      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ delay, duration: 0.6 }}
      className="text-center"
    >
      <div className="text-5xl md:text-6xl font-bold text-industrial-accent mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg text-industrial-grey font-medium">{label}</div>
    </motion.div>
  )
}

export default function Stats() {
  const stats = [
    { value: 25, suffix: '+', label: 'Years of Experience' },
    { value: 500, suffix: '+', label: 'Products in Portfolio' },
    { value: 10000, suffix: '+', label: 'Projects Served' },
  ]

  return (
    <section className="py-20 bg-industrial-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-industrial-dark mb-4">
            Trusted Industry Leader
          </h2>
          <p className="text-xl text-industrial-grey max-w-2xl mx-auto">
            Delivering excellence in construction chemicals across the globe
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


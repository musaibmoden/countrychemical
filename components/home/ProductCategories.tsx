'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { categories } from '@/lib/products'

export default function ProductCategories() {
  // Professional icon placeholders - can be replaced with SVG icons if needed
  const categoryIcons = {
    admixtures: null,
    waterproofing: null,
    repair: null,
    coatings: null,
    sealants: null,
  }

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
            Our Product Range
          </h2>
          <p className="text-xl text-industrial-grey max-w-2xl mx-auto">
            Comprehensive solutions for every construction challenge
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link href={`/products?category=${category.id}`} className="focus-visible:outline-2 focus-visible:outline-industrial-accent focus-visible:outline-offset-2 rounded-lg">
                <div className="bg-industrial-light rounded-lg p-8 h-full hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-industrial-accent group cursor-pointer">
                  <div className="w-16 h-16 bg-industrial-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-industrial-accent/20 transition-colors">
                    <div className="w-8 h-8 border-2 border-industrial-accent rounded"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-industrial-dark mb-2 group-hover:text-industrial-accent transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-industrial-grey">{category.description}</p>
                  <div className="mt-4 text-industrial-accent font-semibold group-hover:translate-x-2 transition-transform inline-block">
                    Learn more →
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/products"
            className="bg-industrial-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-all inline-block transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 shadow-soft"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}


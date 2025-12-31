'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import type { Product } from '@/lib/products'
import { categories } from '@/lib/products'

interface ProductDetailProps {
  product: Product
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const category = categories.find((c) => c.id === product.category)

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="bg-industrial-grey text-white py-16">
        <div className="container mx-auto px-4">
          <div className="mb-4">
            <Link
              href="/products"
              className="text-industrial-accent hover:text-white transition-colors inline-flex items-center"
            >
              ← Back to Products
            </Link>
          </div>
          <h1 className="text-5xl font-bold mb-4">{product.name}</h1>
          <p className="text-xl text-gray-300 max-w-3xl">{product.description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Product Image */}
            {product.imageUrl && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="relative w-full h-96 bg-industrial-concrete">
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    priority
                  />
                </div>
              </motion.section>
            )}

            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-industrial-dark mb-4">
                Product Description
              </h2>
              <p className="text-industrial-grey leading-relaxed">
                {product.description}
              </p>
            </motion.section>

            {/* Technical Highlights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-industrial-dark mb-4">
                Technical Highlights
              </h2>
              <ul className="space-y-3">
                {product.technicalHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-industrial-accent mr-3 font-bold text-xl">✓</span>
                    <span className="text-industrial-grey">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Applications */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-industrial-dark mb-4">
                Applications
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {product.applications.map((application, index) => (
                  <div
                    key={index}
                    className="flex items-start bg-industrial-light rounded-lg p-4"
                  >
                    <span className="text-industrial-accent mr-3 font-bold">•</span>
                    <span className="text-industrial-grey">{application}</span>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Downloads Section */}
            {product.brochureUrl && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="bg-industrial-accent text-white rounded-lg p-8 shadow-lg"
              >
                <h2 className="text-3xl font-bold mb-4">Product Resources</h2>
                <p className="text-white/90 mb-6">
                  Download our comprehensive product brochure for detailed information, technical specifications, and application guidelines.
                </p>
                <a
                  href={product.brochureUrl}
                  download
                  className="inline-flex items-center bg-white text-industrial-accent px-8 py-4 rounded-lg font-semibold hover:bg-industrial-light transition-colors"
                >
                  <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Product Brochure (PDF)
                </a>
              </motion.section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Specifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white rounded-lg p-8 shadow-lg sticky top-24"
            >
              <h2 className="text-2xl font-bold text-industrial-dark mb-6">
                Specifications
              </h2>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-industrial-concrete pb-3">
                    <div className="font-semibold text-industrial-dark mb-1">
                      {key}
                    </div>
                    <div className="text-industrial-grey">{value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Category & CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-industrial-accent text-white rounded-lg p-8"
            >
              <div className="mb-4">
                <span className="text-sm opacity-90">Category</span>
                <div className="text-xl font-bold">{category?.name}</div>
              </div>
              <Link
                href="/contact"
                className="block w-full bg-white text-industrial-accent px-6 py-3 rounded-lg font-semibold text-center hover:bg-industrial-light transition-colors mt-6"
              >
                Request Quote
              </Link>
              {product.brochureUrl ? (
                <a
                  href={product.brochureUrl}
                  download
                  className="block w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/20 transition-colors mt-3 flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure
                </a>
              ) : (
                <button 
                  onClick={() => alert('Brochure will be available soon. Please contact us for more information.')}
                  className="block w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/20 transition-colors mt-3 flex items-center justify-center opacity-75"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Brochure
                </button>
              )}
              <button 
                onClick={() => alert('Datasheet will be available soon. Please contact us for technical specifications.')}
                className="block w-full bg-white/10 text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white/20 transition-colors mt-3 flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Datasheet
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}


'use client'

import { useState, useMemo, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { getAllProducts, getProductsByCategory, categories, type Product } from '@/lib/products'

export default function ProductGrid() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get('category') || 'all'
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory)

  useEffect(() => {
    setSelectedCategory(initialCategory)
  }, [initialCategory])

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    if (category === 'all') {
      router.push('/products')
    } else {
      router.push(`/products?category=${category}`)
    }
  }

  const filteredProducts = useMemo(() => {
    if (selectedCategory === 'all') {
      return getAllProducts()
    }
    return getProductsByCategory(selectedCategory as Product['category'])
  }, [selectedCategory])

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`px-6 py-3 rounded-lg font-semibold transition-all focus-visible:outline-2 focus-visible:outline-industrial-accent focus-visible:outline-offset-2 ${
                selectedCategory === 'all'
                  ? 'bg-industrial-accent text-white shadow-soft'
                  : 'bg-industrial-light text-industrial-grey hover:bg-industrial-concrete'
              }`}
              aria-pressed={selectedCategory === 'all'}
            >
              All Products
            </button>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all focus-visible:outline-2 focus-visible:outline-industrial-accent focus-visible:outline-offset-2 ${
                  selectedCategory === category.id
                    ? 'bg-industrial-accent text-white shadow-soft'
                    : 'bg-industrial-light text-industrial-grey hover:bg-industrial-concrete'
                }`}
                aria-pressed={selectedCategory === category.id}
              >
                {category.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Link href={`/products/${product.slug}`} className="focus-visible:outline-2 focus-visible:outline-industrial-accent focus-visible:outline-offset-2 rounded-lg">
                <div className="bg-industrial-light rounded-lg overflow-hidden h-full hover:shadow-strong transition-all duration-300 transform hover:-translate-y-2 border-2 border-transparent hover:border-industrial-accent group cursor-pointer">
                  {product.imageUrl && (
                    <div className="relative w-full h-48 bg-industrial-concrete overflow-hidden">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="inline-block bg-industrial-accent/10 text-industrial-accent px-3 py-1 rounded-full text-sm font-semibold">
                        {categories.find((c) => c.id === product.category)?.name}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-industrial-dark mb-3 group-hover:text-industrial-accent transition-colors">
                      {product.name}
                    </h3>
                  <p className="text-industrial-grey mb-4 line-clamp-3">
                    {product.shortDescription}
                  </p>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-industrial-dark mb-2">
                      Key Features:
                    </h4>
                    <ul className="space-y-1">
                      {product.technicalHighlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="text-sm text-industrial-grey flex items-start">
                          <span className="text-industrial-accent mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="text-industrial-accent font-semibold group-hover:translate-x-2 transition-transform inline-block">
                        View Details →
                      </div>
                      {product.brochureUrl && (
                        <a
                          href={product.brochureUrl}
                          download
                          onClick={(e) => e.stopPropagation()}
                          className="text-industrial-accent hover:text-primary-700 transition-colors flex items-center text-sm font-medium"
                          title="Download Brochure"
                        >
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                          Brochure
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-industrial-grey text-lg">
              No products found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}


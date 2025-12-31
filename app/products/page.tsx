import { Suspense } from 'react'
import ProductGrid from '@/components/products/ProductGrid'

function ProductGridFallback() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center py-12">
          <p className="text-industrial-grey">Loading products...</p>
        </div>
      </div>
    </section>
  )
}

export default function ProductsPage() {
  return (
    <div className="pt-20">
      <div className="bg-industrial-grey text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Comprehensive range of construction chemicals engineered for performance and durability
          </p>
        </div>
      </div>
      <Suspense fallback={<ProductGridFallback />}>
        <ProductGrid />
      </Suspense>
    </div>
  )
}


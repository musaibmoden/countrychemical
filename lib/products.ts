export interface Product {
  id: string
  slug: string
  name: string
  category: 'admixtures' | 'waterproofing' | 'repair' | 'coatings' | 'sealants'
  description: string
  shortDescription: string
  technicalHighlights: string[]
  specifications: {
    [key: string]: string
  }
  applications: string[]
  imageUrl?: string
  brochureUrl?: string
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'superplasticizer-admixture',
    name: 'Superplasticizer Admixture',
    category: 'admixtures',
    description: 'High-performance superplasticizer admixture designed to improve workability and reduce water content in concrete mixes. Ideal for high-strength concrete applications requiring superior flow properties without compromising strength.',
    shortDescription: 'High-performance superplasticizer for improved workability and reduced water content.',
    technicalHighlights: [
      'Water reduction up to 30%',
      'Enhanced workability and flow',
      'Improved strength development',
      'Compatible with all cement types',
    ],
    specifications: {
      'Appearance': 'Clear to light yellow liquid',
      'Density': '1.08 - 1.12 g/cm³',
      'pH': '6.0 - 8.0',
      'Dosage': '0.5 - 2.0% by weight of cement',
      'Storage': '12 months in original sealed container',
    },
    applications: [
      'High-strength concrete',
      'Precast concrete elements',
      'Self-compacting concrete',
      'Pumped concrete',
    ],
    imageUrl: '/products/Capiseal Admix.PNG',
    brochureUrl: '/brochures/superplasticizer-admixture.pdf',
  },
  {
    id: '2',
    slug: 'crystalline-waterproofing',
    name: 'Crystalline Waterproofing System',
    category: 'waterproofing',
    description: 'Advanced crystalline waterproofing technology that forms permanent, self-sealing barriers within concrete structures. Reacts with water and unhydrated cement particles to create insoluble crystalline formations that block water penetration.',
    shortDescription: 'Advanced crystalline technology for permanent waterproofing protection.',
    technicalHighlights: [
      'Permanent waterproofing protection',
      'Self-healing capabilities',
      'Chemical resistance',
      'VOC-free formulation',
    ],
    specifications: {
      'Form': 'Powder',
      'Coverage': '1.0 - 1.5 kg/m²',
      'Application': 'Brush, spray, or trowel',
      'Curing Time': '24-48 hours',
      'Chemical Resistance': 'pH 3-11',
    },
    applications: [
      'Basement walls and floors',
      'Water tanks and reservoirs',
      'Tunnels and underground structures',
      'Swimming pools',
    ],
    imageUrl: '/products/conseal 3C.PNG',
    brochureUrl: '/brochures/crystalline-waterproofing.pdf',
  },
  {
    id: '3',
    slug: 'concrete-repair-mortar',
    name: 'High-Performance Concrete Repair Mortar',
    category: 'repair',
    description: 'Rapid-setting, high-strength repair mortar for structural concrete restoration. Provides excellent bond strength, durability, and resistance to freeze-thaw cycles. Suitable for vertical and overhead applications.',
    shortDescription: 'Rapid-setting repair mortar for structural concrete restoration.',
    technicalHighlights: [
      'Rapid setting (2-4 hours)',
      'High bond strength',
      'Freeze-thaw resistant',
      'Non-shrink formulation',
    ],
    specifications: {
      'Compressive Strength': '> 50 MPa at 28 days',
      'Bond Strength': '> 2.0 MPa',
      'Working Time': '30-45 minutes',
      'Application Thickness': '5-50 mm',
      'Packaging': '25 kg bags',
    },
    applications: [
      'Structural concrete repair',
      'Spall repair',
      'Column and beam restoration',
      'Bridge deck repair',
    ],
    imageUrl: '/products/contar fx.PNG',
    brochureUrl: '/brochures/concrete-repair-mortar.pdf',
  },
  {
    id: '4',
    slug: 'epoxy-coating',
    name: 'Epoxy Protective Coating',
    category: 'coatings',
    description: 'Two-component epoxy coating system providing exceptional chemical resistance and durability. Ideal for industrial floors, parking garages, and areas requiring high abrasion resistance and easy maintenance.',
    shortDescription: 'Durable two-component epoxy coating for industrial applications.',
    technicalHighlights: [
      'Excellent chemical resistance',
      'High abrasion resistance',
      'Seamless application',
      'Easy to clean and maintain',
    ],
    specifications: {
      'Mix Ratio': '2:1 (Base:Hardener)',
      'Coverage': '0.2 - 0.3 kg/m² per coat',
      'Pot Life': '30-45 minutes',
      'Cure Time': '24 hours (walkable)',
      'Full Cure': '7 days',
    },
    applications: [
      'Industrial floors',
      'Parking garages',
      'Warehouse floors',
      'Food processing facilities',
    ],
    imageUrl: '/products/product banner.PNG',
  },
  {
    id: '5',
    slug: 'polyurethane-sealant',
    name: 'Polyurethane Construction Sealant',
    category: 'sealants',
    description: 'High-performance polyurethane sealant offering excellent adhesion, flexibility, and weather resistance. Suitable for expansion joints, curtain walls, and other construction sealing applications.',
    shortDescription: 'Flexible polyurethane sealant for construction joints and gaps.',
    technicalHighlights: [
      'Excellent flexibility',
      'UV resistant',
      'Weatherproof',
      'Paintable surface',
    ],
    specifications: {
      'Elongation': '> 400%',
      'Hardness': '25-35 Shore A',
      'Application Temperature': '5-40°C',
      'Service Temperature': '-40 to 80°C',
      'Packaging': '310 ml cartridges',
    },
    applications: [
      'Expansion joints',
      'Curtain wall sealing',
      'Window and door perimeters',
      'Concrete joints',
    ],
  },
  {
    id: '6',
    slug: 'air-entraining-admixture',
    name: 'Air-Entraining Admixture',
    category: 'admixtures',
    description: 'Specialized admixture that introduces microscopic air bubbles into concrete, significantly improving freeze-thaw resistance and workability. Essential for concrete exposed to harsh winter conditions.',
    shortDescription: 'Air-entraining admixture for enhanced freeze-thaw resistance.',
    technicalHighlights: [
      'Improved freeze-thaw resistance',
      'Enhanced workability',
      'Reduced bleeding',
      'Consistent air content',
    ],
    specifications: {
      'Air Content': '4-7% typical',
      'Dosage': '0.1 - 0.5% by weight of cement',
      'Form': 'Liquid',
      'Compatibility': 'All cement types',
      'Storage': '12 months',
    },
    applications: [
      'Cold weather concreting',
      'Pavements and roads',
      'Marine structures',
      'Exposed concrete surfaces',
    ],
  },
  {
    id: '7',
    slug: 'bituminous-waterproofing',
    name: 'Bituminous Waterproofing Membrane',
    category: 'waterproofing',
    description: 'Premium bituminous waterproofing membrane with polymer modification for superior flexibility and adhesion. Self-adhesive application for roofs, foundations, and below-grade structures.',
    shortDescription: 'Polymer-modified bituminous membrane for roofing and foundations.',
    technicalHighlights: [
      'Self-adhesive application',
      'High tensile strength',
      'Excellent adhesion',
      'Long-term durability',
    ],
    specifications: {
      'Thickness': '3-4 mm',
      'Width': '1.0 m',
      'Length': '10 m rolls',
      'Tensile Strength': '> 600 N/50mm',
      'Elongation': '> 40%',
    },
    applications: [
      'Flat roofs',
      'Foundation waterproofing',
      'Terraces and balconies',
      'Underground structures',
    ],
  },
  {
    id: '8',
    slug: 'shotcrete-admixture',
    name: 'Shotcrete Accelerating Admixture',
    category: 'admixtures',
    description: 'Fast-setting admixture specifically formulated for shotcrete applications. Provides rapid strength development and excellent early-age performance for tunnel linings, slope stabilization, and repair work.',
    shortDescription: 'Fast-setting admixture for shotcrete and sprayed concrete applications.',
    technicalHighlights: [
      'Rapid setting',
      'High early strength',
      'Reduced rebound',
      'Improved adhesion',
    ],
    specifications: {
      'Initial Set': '< 3 minutes',
      'Dosage': '2-6% by weight of cement',
      'Form': 'Liquid',
      'Compatibility': 'Wet and dry shotcrete',
      'Packaging': '20 L containers',
    },
    applications: [
      'Tunnel linings',
      'Slope stabilization',
      'Rock support',
      'Repair and rehabilitation',
    ],
  },
]

export function getAllProducts(): Product[] {
  return products
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug)
}

export function getProductsByCategory(category: Product['category']): Product[] {
  return products.filter((product) => product.category === category)
}

export const categories = [
  { id: 'admixtures', name: 'Admixtures', description: 'Concrete and mortar admixtures' },
  { id: 'waterproofing', name: 'Waterproofing', description: 'Waterproofing systems and membranes' },
  { id: 'repair', name: 'Repair Materials', description: 'Concrete repair and restoration' },
  { id: 'coatings', name: 'Coatings', description: 'Protective coatings and finishes' },
  { id: 'sealants', name: 'Sealants', description: 'Construction sealants and joint fillers' },
]


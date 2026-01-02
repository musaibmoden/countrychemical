'use client'

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
    <section className="py-16 sm:py-20 bg-industrial-grey text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-2">
            Supporting construction excellence across diverse sectors
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="bg-white/5 backdrop-blur-sm rounded-lg p-5 sm:p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 border-2 border-white/30 rounded-lg flex items-center justify-center mb-4 group-hover:border-white/50 transition-colors duration-300">
                <div className="w-6 h-6 border border-white/50 group-hover:border-white transition-colors duration-300"></div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-2">{industry.name}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


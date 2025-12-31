import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { href: '/about', label: 'About Us' },
      { href: '/products', label: 'Products' },
      { href: '/contact', label: 'Contact' },
    ],
    products: [
      { href: '/products?category=admixtures', label: 'Admixtures' },
      { href: '/products?category=waterproofing', label: 'Waterproofing' },
      { href: '/products?category=repair', label: 'Repair Materials' },
      { href: '/products?category=coatings', label: 'Coatings' },
    ],
    resources: [
      { href: '#', label: 'Technical Data Sheets' },
      { href: '#', label: 'Safety Data Sheets' },
      { href: '#', label: 'Application Guides' },
      { href: '#', label: 'Certifications' },
    ],
  }

  return (
    <footer className="bg-industrial-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/logo.png"
                alt="Country Chemical Logo"
                width={50}
                height={50}
                className="h-10 w-auto object-contain"
              />
              <span className="text-xl font-bold">Country Chemical</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Leading manufacturer of construction chemicals for the global building industry.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Email: info@countrychemical.com</p>
              <p>Phone: +1 (555) 123-4567</p>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; {currentYear} Country Chemical. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


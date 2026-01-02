'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/products', label: 'Products' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <a href="#main-content" className="skip-to-main">
        Skip to main content
      </a>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 shadow-medium'
            : 'bg-white/70 backdrop-blur-md'
        }`}
        role="banner"
      >
        <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/logo.png"
              alt="Country Chemical Logo"
              width={50}
              height={50}
              className="h-10 w-auto object-contain"
              priority
            />
            <span className="text-xl font-bold text-industrial-dark">
              Country Chemical
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Main menu">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-industrial-grey hover:text-industrial-accent transition-colors font-medium focus-visible:outline-2 focus-visible:outline-industrial-accent focus-visible:outline-offset-2 rounded"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-industrial-accent text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 focus-visible:outline-2 focus-visible:outline-industrial-accent focus-visible:outline-offset-2 rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-industrial-dark transition-all ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-industrial-dark transition-all ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-industrial-dark transition-all ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
            role="menu"
          >
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-industrial-grey hover:text-industrial-accent transition-colors font-medium py-2 focus-visible:outline-2 focus-visible:outline-industrial-accent focus-visible:outline-offset-2 rounded"
                  onClick={() => setIsMobileMenuOpen(false)}
                  role="menuitem"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block bg-industrial-accent text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </header>
    </>
  )
}


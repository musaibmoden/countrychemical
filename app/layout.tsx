import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://countrychemical.com'),
  title: {
    default: 'Country Chemical - Leading Construction Chemicals Manufacturer',
    template: '%s | Country Chemical',
  },
  description: 'Premium construction chemicals including admixtures, waterproofing solutions, concrete repair materials, sealants, and coatings for the construction industry.',
  keywords: ['construction chemicals', 'admixtures', 'waterproofing', 'concrete repair', 'sealants', 'coatings', 'construction materials'],
  authors: [{ name: 'Country Chemical' }],
  creator: 'Country Chemical',
  publisher: 'Country Chemical',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://countrychemical.com',
    siteName: 'Country Chemical',
    title: 'Country Chemical - Leading Construction Chemicals Manufacturer',
    description: 'Premium construction chemicals engineered for performance, durability, and sustainability.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Country Chemical Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Country Chemical - Leading Construction Chemicals Manufacturer',
    description: 'Premium construction chemicals engineered for performance, durability, and sustainability.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="antialiased">
        <Header />
        <main id="main-content" className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


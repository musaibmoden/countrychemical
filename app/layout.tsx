import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Country Chemical - Leading Construction Chemicals Manufacturer',
  description: 'Premium construction chemicals including admixtures, waterproofing solutions, concrete repair materials, sealants, and coatings for the construction industry.',
  keywords: 'construction chemicals, admixtures, waterproofing, concrete repair, sealants, coatings',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}


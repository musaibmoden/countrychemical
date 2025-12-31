import type { Metadata } from 'next'
import ContactForm from '@/components/contact/ContactForm'
import ContactInfo from '@/components/contact/ContactInfo'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Country Chemical for product inquiries, technical support, or partnership opportunities. We\'re here to help with your construction chemical needs.',
  openGraph: {
    title: 'Contact Us | Country Chemical',
    description: 'Get in touch with Country Chemical for product inquiries, technical support, or partnership opportunities.',
  },
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="bg-industrial-grey text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl">
            Get in touch with our team for technical support, product inquiries, or partnership opportunities
          </p>
        </div>
      </div>
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </div>
  )
}


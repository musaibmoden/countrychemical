import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-industrial-light pt-20">
      <div className="text-center px-4">
        <h1 className="text-9xl font-bold text-industrial-accent mb-4">404</h1>
        <h2 className="text-4xl font-bold text-industrial-dark mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-industrial-grey mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-industrial-accent text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-all"
        >
          Return to Homepage
        </Link>
      </div>
    </div>
  )
}




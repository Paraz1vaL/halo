import Link from 'next/link'

export default function Header() {
  return (
    <header className="py-4 sm:py-6 px-4 sm:px-6 lg:px-8 border-b border-gray-200">
      <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
        <Link href="/" className="text-2xl font-semibold mb-4 sm:mb-0">Cerita Kami</Link>
        <div className="space-x-4">
          <Link href="#gallery" className="hover:text-gray-600 transition-colors">Kenangan</Link>
          <Link href="#reasons" className="hover:text-gray-600 transition-colors">Why?</Link>
          <Link href="#timeline" className="hover:text-gray-600 transition-colors">Perjalanan</Link>
        </div>
      </nav>
    </header>
  )
}


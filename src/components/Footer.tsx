import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="text-white" style={{backgroundColor: '#002b00'}}>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2 mb-8 md:mb-0">
            <h3 className="text-xl md:text-2xl font-bold text-green-600 mb-4">PLANTED SLO</h3>
            <p className="text-gray-300 mb-4">
              Plant-based culinary experiences in San Luis Obispo. 
              Personal chef services featuring fresh, locally-sourced ingredients.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-green-500 transition-colors">
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h4 className="text-base md:text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-green-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-green-500 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-gray-300 hover:text-green-500 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-green-500 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>

          {/* Contact Info */}
          <div>
            <h4 className="text-base md:text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📧 slo.planted@gmail.com</li>
              <li>📍 Service Area: San Luis Obispo County</li>
            </ul>
          </div>
        </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            2024 PLANTED SLO. All rights reserved. | 
            <Link href="/privacy" className="hover:text-green-500 transition-colors ml-1">
              Privacy Policy
            </Link> | 
            <Link href="/terms" className="hover:text-green-500 transition-colors ml-1">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

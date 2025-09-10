'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, BookOpen } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">BlogSite</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </Link>
            <div className="flex items-center space-x-4 pl-4 border-l border-gray-300">
              <Link
                href="/create"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Create Post
              </Link>
              <Link
                href="/manage"
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                Manage
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link
                href="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blog"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="border-t border-gray-200 pt-2 mt-2">
                <Link
                  href="/create"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Create Post
                </Link>
                <Link
                  href="/manage"
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Manage
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

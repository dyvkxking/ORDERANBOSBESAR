'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, BookOpen } from 'lucide-react'
import SearchBar from './SearchBar'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
      <nav className="bg-white/95 backdrop-blur-md border-b border-[#d1d5db] sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="w-8 h-8 text-[#255F38]" />
            <span className="text-xl font-bold text-[#1a1a1a]">BlogSite</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-center">
            <Link
              href="/"
              className="text-[#666666] hover:text-[#1a1a1a] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/blog"
              className="text-[#666666] hover:text-[#1a1a1a] transition-colors font-medium"
            >
              Blog
            </Link>
            <Link
              href="/kegiatan"
              className="text-[#666666] hover:text-[#1a1a1a] transition-colors font-medium"
            >
              Kegiatan
            </Link>
            <Link
              href="/layanan"
              className="text-[#666666] hover:text-[#1a1a1a] transition-colors font-medium"
            >
              Layanan
            </Link>
            <Link
              href="/contact"
              className="text-[#666666] hover:text-[#1a1a1a] transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden md:block w-80">
            <SearchBar placeholder="Search posts..." />
          </div>


          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#1F7D53] hover:text-[#a7f3d0] transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-[#d1d5db] shadow-lg">
              {/* Mobile Search Bar */}
              <div className="px-3 py-2">
                <SearchBar placeholder="Search posts..." />
              </div>
              
              <div className="border-t border-[#d1d5db] pt-2 mt-2">
                <Link
                  href="/"
                  className="block px-3 py-2 text-[#1F7D53] hover:text-[#a7f3d0] transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/blog"
                  className="block px-3 py-2 text-[#1F7D53] hover:text-[#a7f3d0] transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/kegiatan"
                  className="block px-3 py-2 text-[#1F7D53] hover:text-[#a7f3d0] transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Kegiatan
                </Link>
                <Link
                  href="/layanan"
                  className="block px-3 py-2 text-[#1F7D53] hover:text-[#a7f3d0] transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Layanan
                </Link>
                <Link
                  href="/contact"
                  className="block px-3 py-2 text-[#1F7D53] hover:text-[#a7f3d0] transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
              
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

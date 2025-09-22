'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin, Mail, Github } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white text-[#1a1a1a] border-t border-[#d1d5db]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex flex-col items-center text-center mb-6">
              <div className="w-24 h-24 relative mb-4 overflow-hidden">
                <Image
                  src="/osis-logo.svg"
                  alt="Madrasah Tsanawiyah OSIS Logo"
                  fill
                  className="object-fill"
                />
              </div>
              <Link href="/" className="text-2xl font-bold text-[#1a1a1a] hover:text-[#255F38] transition-colors">
                OSIS MTs
              </Link>
            </div>
            <p className="mt-4 text-[#666666] text-sm leading-relaxed text-center">
              Organisasi Siswa Intra Sekolah Madrasah Tsanawiyah. 
              Membangun karakter siswa yang berakhlak mulia dan berprestasi.
            </p>
            <div className="mt-6 text-center">
              <p className="text-sm text-[#255F38] mb-2 font-semibold">Ikhlas Beramal</p>
              <div className="flex items-center justify-center space-x-2">
                <Mail className="w-4 h-4 text-[#255F38]" />
                <span className="text-sm text-[#666666]">osis@mts.edu</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Menu</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-[#666666] hover:text-[#1a1a1a] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-[#666666] hover:text-[#1a1a1a] transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#666666] hover:text-[#1a1a1a] transition-colors text-sm">
                  About
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontak & Media</h3>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#e5e5e5] rounded-full flex items-center justify-center hover:bg-[#255F38] hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#e5e5e5] rounded-full flex items-center justify-center hover:bg-[#255F38] hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#e5e5e5] rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#e5e5e5] rounded-full flex items-center justify-center hover:bg-[#1F7D53] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-[#e5e5e5] rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
            <div className="text-sm text-[#255F38]">
              <p>Berlangganan newsletter</p>
              <div className="mt-2 flex">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="flex-1 px-3 py-2 bg-white border border-[#d1d5db] rounded-l-md text-[#1a1a1a] placeholder-[#666666] focus:outline-none focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                />
                <button 
                  type="button"
                  className="px-4 py-2 bg-[#255F38] hover:bg-[#1F7D53] rounded-r-md transition-colors"
                >
                  Berlangganan
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}

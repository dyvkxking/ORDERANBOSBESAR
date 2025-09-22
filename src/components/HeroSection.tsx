'use client'

import Link from 'next/link'
import { BookOpen, ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-[#F2F2F2] via-[#ffffff] to-[#F2F2F2] overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 via-emerald-600/20 to-teal-600/20"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-[#255F38] to-[#1F7D53] rounded-xl flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <span className="text-2xl font-bold text-[#1a1a1a]">Lorem Ipsum</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a1a] mb-6 leading-tight">
            Lorem Ipsum Dolor
            <span className="block bg-gradient-to-r from-[#255F38] to-[#1F7D53] bg-clip-text text-transparent">
              Sit Amet Consectetur
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-[#666666] mb-8 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/blog"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#255F38] to-[#1F7D53] text-white font-semibold rounded-full hover:from-[#1F7D53] hover:to-[#255F38] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Explore Articles
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/create"
              className="inline-flex items-center px-8 py-4 border-2 border-[#1F7D53] text-[#1F7D53] font-semibold rounded-full hover:bg-[#1F7D53] hover:text-white transition-all duration-300"
            >
              Start Writing
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1a1a1a] mb-2">500+</div>
              <div className="text-[#1F7D53]">Lorem Ipsum</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1a1a1a] mb-2">10K+</div>
              <div className="text-[#1F7D53]">Dolor Sit</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-[#1a1a1a] mb-2">50+</div>
              <div className="text-[#1F7D53]">Amet Consectetur</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#255F38]/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#1F7D53]/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#255F38]/20 rounded-full blur-xl animate-pulse delay-500"></div>
    </div>
  )
}

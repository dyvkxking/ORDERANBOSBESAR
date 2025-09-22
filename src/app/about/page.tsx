import { BookOpen, Users, Zap, Heart } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Lorem Ipsum Dolor
          </h1>
          <p className="text-xl md:text-2xl text-white/90">
            Sit amet consectetur adipiscing elit
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8 text-center">
            Lorem Ipsum
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#d1d5db]">
            <p className="text-lg text-[#666666] leading-relaxed mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="text-lg text-[#666666] leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8 text-center">
            Dolor Sit Amet
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-[#d1d5db]">
              <div className="w-12 h-12 bg-[#255F38]/20 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-[#255F38]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">
                Lorem Ipsum
              </h3>
              <p className="text-[#666666]">
                Dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-[#d1d5db]">
              <div className="w-12 h-12 bg-[#1F7D53]/20 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#1F7D53]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">
                Dolor Sit
              </h3>
              <p className="text-[#666666]">
                Amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-[#d1d5db]">
              <div className="w-12 h-12 bg-[#255F38]/20 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-[#255F38]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">
                Amet Consectetur
              </h3>
              <p className="text-[#666666]">
                Adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 border border-[#d1d5db]">
              <div className="w-12 h-12 bg-[#1F7D53]/20 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-[#1F7D53]" />
              </div>
              <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">
                Adipiscing Elit
              </h3>
              <p className="text-[#666666]">
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8 text-center">
            Veniam Quis Nostrud
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-[#d1d5db]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Next.js 15</h3>
                <p className="text-[#666666]">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Exercitation</h3>
                <p className="text-[#666666]">Ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-2">Duis Aute</h3>
                <p className="text-[#666666]">Iure dolor in reprehenderit in voluptate velit esse</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Cillum Dolore Eu Fugiat
            </h2>
            <p className="text-xl text-white/90 mb-6">
              Nulla pariatur excepteur sint occaecat cupidatat non proident.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-white text-[#255F38] font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Explore Blog
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

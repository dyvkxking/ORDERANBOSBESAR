import { BookOpen, Users, Zap, Heart } from 'lucide-react'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            About Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-blue-100">
            Sharing knowledge, insights, and stories that matter
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Mission
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              We believe in the power of sharing knowledge and experiences. Our blog platform 
              is designed to connect readers with valuable content, insights, and stories from 
              experts and creators around the world.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you&apos;re looking to learn something new, stay updated with industry trends, 
              or simply enjoy well-crafted content, our platform provides a curated experience 
              that brings together the best of what the web has to offer.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Quality Content
              </h3>
              <p className="text-gray-600">
                We curate and create high-quality content that provides real value to our readers.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Community First
              </h3>
              <p className="text-gray-600">
                We build a supportive community where writers and readers can connect and grow.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                We embrace new technologies and approaches to deliver the best reading experience.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Authenticity
              </h3>
              <p className="text-gray-600">
                We encourage authentic voices and genuine stories that resonate with our audience.
              </p>
            </div>
          </div>
        </section>

        {/* Technology Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Built with Modern Technology
          </h2>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Next.js 15</h3>
                <p className="text-gray-600">React framework with App Router for optimal performance</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Sanity CMS</h3>
                <p className="text-gray-600">Headless CMS for flexible content management</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tailwind CSS</h3>
                <p className="text-gray-600">Utility-first CSS framework for rapid styling</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Community?
            </h2>
            <p className="text-xl text-blue-100 mb-6">
              Start reading amazing content today or contribute your own stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Explore Blog
              </Link>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Welcome to Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                Blog Platform
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Discover amazing stories, insights, and knowledge shared by our community of writers and creators.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/blog"
                className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors text-lg"
              >
                Explore Blog
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-colors text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Platform?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Built with modern technology and designed for the best reading experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Rich Content
              </h3>
              <p className="text-gray-600">
                High-quality articles with rich media, code snippets, and interactive content.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Expert Authors
              </h3>
              <p className="text-gray-600">
                Learn from industry experts and thought leaders in various fields.
              </p>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Fast & Modern
              </h3>
              <p className="text-gray-600">
                Built with Next.js and Sanity CMS for lightning-fast performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Reading?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of readers who discover new insights every day.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors text-lg"
          >
            Browse All Posts
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}

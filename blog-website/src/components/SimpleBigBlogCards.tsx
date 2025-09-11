'use client'

import { PostWithDetails } from '@/types/supabase'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight } from 'lucide-react'

interface SimpleBigBlogCardsProps {
  posts: PostWithDetails[]
}

export default function SimpleBigBlogCards({ posts }: SimpleBigBlogCardsProps) {
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600">
              No featured articles available at the moment.
            </p>
          </div>
        </div>
      </section>
    )
  }

  const firstPost = posts[0]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and trending blog posts
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <Link href={`/blog/${firstPost.slug}`} className="group">
            <div className="flex flex-col lg:flex-row">
              {/* Image */}
              {firstPost.featured_image_url && (
                <div className="lg:w-1/2 aspect-video lg:aspect-square relative">
                  <Image
                    src={firstPost.featured_image_url}
                    alt={firstPost.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}

              {/* Content */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                {/* Categories */}
                {firstPost.categories && Array.isArray(firstPost.categories) && firstPost.categories.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {firstPost.categories.slice(0, 2).map((category, index) => (
                      <span
                        key={category?.slug || index}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                      >
                        {category?.title || 'Uncategorized'}
                      </span>
                    ))}
                  </div>
                )}

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4">
                  {firstPost.title}
                </h3>

                {/* Excerpt */}
                {firstPost.excerpt && (
                  <p className="text-lg text-gray-600 mb-6 line-clamp-3">
                    {firstPost.excerpt}
                  </p>
                )}

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    {firstPost.author && firstPost.author.name && (
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-1" />
                        <span>{firstPost.author.name}</span>
                      </div>
                    )}
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>
                        {firstPost.published_at ? new Date(firstPost.published_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        }) : 'Draft'}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>5 min read</span>
                  </div>
                </div>

                {/* Read More */}
                <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-700">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-lg"
          >
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

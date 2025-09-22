'use client'

import { PostWithDetails } from '@/types/supabase'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight } from 'lucide-react'

interface BlogRecommendationCardsProps {
  posts: PostWithDetails[]
  title?: string
  description?: string
}

export default function BlogRecommendationCards({ 
  posts, 
  title = "Latest Articles",
  description = "Stay updated with our newest blog posts"
}: BlogRecommendationCardsProps) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className="py-20 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
            Lorem Ipsum
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Dolor sit amet consectetur adipiscing elit sed do eiusmod
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group border border-[#d1d5db]">
              <Link href={`/blog/${post.slug}`}>
                {/* Image */}
                {post.featured_image_url && (
                  <div className="aspect-video relative">
                    <Image
                      src={post.featured_image_url}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Categories */}
                  {post.categories && post.categories.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.categories.slice(0, 2).map((category) => (
                        <span
                          key={category.slug}
                          className={`px-3 py-1 rounded-full text-sm font-medium bg-${category.color}-500/20 text-${category.color}-400`}
                        >
                          {category.title}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#1a1a1a] group-hover:text-[#255F38] transition-colors mb-3 line-clamp-2">
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-[#666666] mb-4 text-sm line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-[#255F38]">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>
                          {post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric',
                          }) : 'Draft'}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>5 min</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-[#255F38] text-white font-semibold rounded-full hover:bg-[#1F7D53] transition-colors text-lg"
          >
            Minim Veniam
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

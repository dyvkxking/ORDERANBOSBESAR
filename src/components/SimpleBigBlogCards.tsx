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
      <section className="py-20 bg-[#F2F2F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
              Featured Articles
            </h2>
            <p className="text-xl text-[#1F7D53]">
              No featured articles available at the moment.
            </p>
          </div>
        </div>
      </section>
    )
  }

  const firstPost = posts[0]

  return (
    <section className="py-20 bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1a1a1a] mb-4">
            Lorem Ipsum Dolor
          </h2>
          <p className="text-xl text-[#666666] max-w-2xl mx-auto">
            Sit amet consectetur adipiscing elit sed do eiusmod tempor
          </p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#d1d5db]">
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

                {/* Title */}
                <h3 className="text-3xl lg:text-4xl font-bold text-[#1a1a1a] group-hover:text-[#255F38] transition-colors mb-4">
                  {firstPost.title}
                </h3>

                {/* Excerpt */}
                {firstPost.excerpt && (
                  <p className="text-lg text-[#666666] mb-6 line-clamp-3">
                    {firstPost.excerpt}
                  </p>
                )}

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-[#255F38] mb-6">
                  <div className="flex items-center space-x-4">
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
                <div className="inline-flex items-center text-[#255F38] font-semibold group-hover:text-[#1F7D53]">
                  Incididunt Ut
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
            className="inline-flex items-center px-8 py-4 bg-[#255F38] text-white font-semibold rounded-full hover:bg-[#1F7D53] transition-colors text-lg"
          >
            Magna Aliqua
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

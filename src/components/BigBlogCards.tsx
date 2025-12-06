'use client'

import { PostWithDetails } from '@/types/supabase'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

interface BigBlogCardsProps {
  posts: PostWithDetails[]
}

export default function BigBlogCards({ posts }: BigBlogCardsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  // Defensive programming - ensure posts is an array
  if (!posts || !Array.isArray(posts) || posts.length === 0) {
    return null
  }

  const currentPost = posts[currentIndex]

  const goToPrevious = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? posts.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentIndex((prevIndex) => 
      prevIndex === posts.length - 1 ? 0 : prevIndex + 1
    )
  }

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return
    setIsTransitioning(true)
    setCurrentIndex(index)
  }

  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false)
      }, 600)
      return () => clearTimeout(timer)
    }
  }, [isTransitioning])

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
        
        <div className="relative overflow-hidden">
          {/* Featured Article Card */}
          <div 
            className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl carousel-transition ${
              isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
            }`}
          >
            <Link href={`/blog/${currentPost.slug}`} className="group">
              <div className="flex flex-col lg:flex-row">
                {/* Image */}
                {currentPost.featured_image_url && (
                  <div className="lg:w-1/2 aspect-video lg:aspect-square relative">
                    <Image
                      src={currentPost.featured_image_url}
                      alt={currentPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center animate-fade-in">

                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-4">
                    {currentPost.title}
                  </h3>

                  {/* Excerpt */}
                  {currentPost.excerpt && (
                    <p className="text-lg text-gray-600 mb-6 line-clamp-3">
                      {currentPost.excerpt}
                    </p>
                  )}

                  {/* Meta */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-4">
                      {currentPost.author && currentPost.author.name && (
                        <div className="flex items-center">
                          <User className="w-4 h-4 mr-1" />
                          <span>{currentPost.author.name}</span>
                        </div>
                      )}
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>
                          {currentPost.published_at ? new Date(currentPost.published_at).toLocaleDateString('en-US', {
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

          {/* Navigation Controls */}
          {posts.length > 1 && (
            <>
              {/* Previous Button */}
              <button
                onClick={goToPrevious}
                disabled={isTransitioning}
                className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-10 ${
                  isTransitioning 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-gray-50 hover:scale-110 active:scale-95'
                }`}
                aria-label="Previous article"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>

              {/* Next Button */}
              <button
                onClick={goToNext}
                disabled={isTransitioning}
                className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 z-10 ${
                  isTransitioning 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-gray-50 hover:scale-110 active:scale-95'
                }`}
                aria-label="Next article"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {posts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    disabled={isTransitioning}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-blue-600 scale-125' 
                        : isTransitioning
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-gray-300 hover:bg-gray-400 hover:scale-110'
                    }`}
                    aria-label={`Go to article ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
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

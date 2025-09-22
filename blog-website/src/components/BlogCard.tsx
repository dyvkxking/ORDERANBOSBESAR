import { PostWithDetails } from '@/types/supabase'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, Clock } from 'lucide-react'

interface BlogCardProps {
  post: PostWithDetails
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardClasses = featured
    ? 'flex flex-col lg:flex-row gap-8 p-8'
    : 'h-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-[#d1d5db]'

  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <div className={cardClasses}>
        {/* Image */}
        {post.featured_image_url && (
          <div className={featured ? 'lg:w-1/2' : 'aspect-video relative'}>
            <Image
              src={post.featured_image_url}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}

        {/* Content */}
        <div className={featured ? 'lg:w-1/2 flex flex-col justify-center' : 'p-6 flex flex-col flex-1'}>
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
          <h2 className={`font-bold text-[#1a1a1a] group-hover:text-[#255F38] transition-colors mb-4 ${
            featured ? 'text-3xl lg:text-4xl' : 'text-xl'
          }`}>
            {post.title}
          </h2>

          {/* Excerpt */}
          {post.excerpt && (
            <p className={`text-[#666666] mb-6 ${
              featured ? 'text-lg' : 'text-sm'
            }`}>
              {post.excerpt}
            </p>
          )}

          {/* Meta */}
          <div className="flex items-center justify-between text-sm text-[#255F38] mt-auto">
            <div className="flex items-center space-x-4">
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
              <span>5 min read</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

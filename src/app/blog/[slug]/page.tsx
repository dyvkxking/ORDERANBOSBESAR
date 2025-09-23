import { getPostBySlug } from '@/lib/supabase/queries'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import ContentRenderer from '@/components/ContentRenderer'

interface BlogPostPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.featured_image_url ? [post.featured_image_url] : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Navigation */}
      <div className="bg-white border-b border-[#d1d5db]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-[#666666] hover:text-[#1a1a1a] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-[#666666] mb-8">
            <div className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              <span>
                {post.published_at ? new Date(post.published_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                }) : 'Draft'}
              </span>
            </div>
            <div className="flex items-center">
              <Clock className="w-5 h-5 mr-2" />
              <span>5 min read</span>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        {post.featured_image_url && (
          <div className="mb-12">
            <Image
              src={post.featured_image_url}
              alt={post.title}
              width={1200}
              height={600}
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
              priority
            />
          </div>
        )}

        {/* Content */}
        {post.content && (
          <ContentRenderer 
            content={post.content} 
            className="prose prose-lg max-w-none"
          />
        )}

      </article>
    </div>
  )
}

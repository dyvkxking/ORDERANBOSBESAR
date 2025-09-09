import { getPostBySlug } from '@/lib/supabase/queries'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getPostBySlug(params.slug)
  
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
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-6">
            {post.categories?.map((category) => (
              <span
                key={category.slug}
                className={`px-3 py-1 rounded-full text-sm font-medium bg-${category.color}-100 text-${category.color}-800`}
              >
                {category.title}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center">
              <User className="w-5 h-5 mr-2" />
              <span>{post.author?.name}</span>
            </div>
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
        <div className="prose prose-lg max-w-none">
          {post.content && (
            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br>') }} />
          )}
        </div>

        {/* Author Bio */}
        {post.author && (
          <div className="mt-16 p-8 bg-white rounded-2xl shadow-lg">
            <div className="flex items-start space-x-6">
              {post.author.image_url && (
                <Image
                  src={post.author.image_url}
                  alt={post.author.name}
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full object-cover"
                />
              )}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {post.author.name}
                </h3>
                {post.author.bio && (
                  <div className="text-gray-600 mb-4">
                    <p>{post.author.bio}</p>
                  </div>
                )}
                <div className="flex space-x-4">
                  {post.author.twitter_url && (
                    <a
                      href={post.author.twitter_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Twitter
                    </a>
                  )}
                  {post.author.linkedin_url && (
                    <a
                      href={post.author.linkedin_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      LinkedIn
                    </a>
                  )}
                  {post.author.github_url && (
                    <a
                      href={post.author.github_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      GitHub
                    </a>
                  )}
                  {post.author.website_url && (
                    <a
                      href={post.author.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </article>
    </div>
  )
}

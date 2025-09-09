import { getPosts } from '@/lib/supabase/queries'
import BlogCard from '@/components/BlogCard'
import { Calendar, Tag } from 'lucide-react'

export default async function BlogPage() {
  const posts = await getPosts()
  const featuredPost = posts.find(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Discover insights, tutorials, and stories from our team
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Tag className="w-8 h-8 text-purple-600 mr-3" />
              Featured Post
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <BlogCard post={featuredPost} featured={true} />
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
            <Calendar className="w-8 h-8 text-blue-600 mr-3" />
            Latest Posts
          </h2>
          
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Calendar className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No posts yet
              </h3>
              <p className="text-gray-500">
                Check back soon for new content!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

import type { Metadata } from "next"
import Link from "next/link"
import { getPosts } from "@/lib/supabase/queries"
import { Eye, Edit, Calendar, Tag, Search, Filter } from "lucide-react"

export const metadata: Metadata = {
  title: "All Posts | Admin | Blog Website",
  description: "View all blog posts in a grid layout",
}

export default async function AllPostsPage() {
  const posts = await getPosts()

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#1a1a1a]">All Posts</h1>
          <p className="text-[#666666] mt-2">Browse all your blog posts</p>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-6 bg-white rounded-lg shadow p-6 border border-[#d1d5db]">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#666666] w-4 h-4" />
              <input
                type="text"
                placeholder="Search by title, content, or author..."
                className="w-full pl-10 pr-4 py-2 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
              <option value="">All Status</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
          </div>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-white rounded-lg shadow p-8 border border-[#d1d5db]">
            <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">No blog posts yet</h3>
            <p className="text-[#666666] mb-6">Get started by creating your first blog post.</p>
            <Link
              href="/admin/create"
              className="inline-flex items-center px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] transition-colors"
            >
              Create Your First Post
            </Link>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow border border-[#d1d5db] overflow-hidden hover:shadow-lg transition-shadow">
              {post.featured_image_url && (
                <div className="aspect-video overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={post.featured_image_url}
                    alt={post.title}
                  />
                </div>
              )}
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    post.published 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-gray-500/20 text-[#666666]'
                  }`}>
                    {post.published ? 'Published' : 'Draft'}
                  </span>
                  {post.featured && (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400">
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold text-[#1a1a1a] mb-2 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-[#666666] text-sm mb-4 line-clamp-3">
                  {post.excerpt || 'No excerpt available'}
                </p>
                
                
                <div className="flex items-center justify-between text-sm text-[#666666] mb-4">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {post.published_at 
                      ? new Date(post.published_at).toLocaleDateString()
                      : 'Not published'
                    }
                  </span>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex-1 flex items-center justify-center px-3 py-2 text-[#255F38] border border-[#255F38] rounded-lg hover:bg-[#255F38] hover:text-white transition-colors"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Link>
                  <Link
                    href={`/edit/${post.id}`}
                    className="flex-1 flex items-center justify-center px-3 py-2 text-[#1F7D53] border border-[#1F7D53] rounded-lg hover:bg-[#1F7D53] hover:text-white transition-colors"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

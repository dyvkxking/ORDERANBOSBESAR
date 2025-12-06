import type { Metadata } from "next"
import Link from "next/link"
import { getPosts } from "@/lib/supabase/queries"
import { 
  Plus, 
  FileText, 
  Eye, 
  Edit, 
  TrendingUp,
  Users,
  Calendar
} from "lucide-react"

export const metadata: Metadata = {
  title: "Admin Dashboard | Blog Website",
  description: "Admin dashboard for managing blog content",
}

export default async function AdminDashboard() {
  const posts = await getPosts()
  
  const stats = {
    totalPosts: posts.length,
    publishedPosts: posts.filter(p => p.published).length,
    draftPosts: posts.filter(p => !p.published).length,
    featuredPosts: posts.filter(p => p.featured).length,
  }

  const recentPosts = posts.slice(0, 5)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#1a1a1a]">Dashboard</h1>
        <p className="text-[#666666] mt-2">Welcome to your blog admin panel</p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link
          href="/hhhghghgwangik4167/create"
          className="bg-white rounded-lg shadow p-6 border border-[#d1d5db] hover:shadow-lg transition-shadow group"
        >
          <div className="flex items-center">
            <div className="p-3 bg-[#255F38]/20 rounded-lg mr-4 group-hover:bg-[#255F38]/30 transition-colors">
              <Plus className="w-6 h-6 text-[#255F38]" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">Create New Post</h3>
              <p className="text-[#666666]">Start writing a new blog post</p>
            </div>
          </div>
        </Link>

        <Link
          href="/hhhghghgwangik4167/manage"
          className="bg-white rounded-lg shadow p-6 border border-[#d1d5db] hover:shadow-lg transition-shadow group"
        >
          <div className="flex items-center">
            <div className="p-3 bg-blue-500/20 rounded-lg mr-4 group-hover:bg-blue-500/30 transition-colors">
              <Edit className="w-6 h-6 text-blue-500" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-[#1a1a1a]">Manage Posts</h3>
              <p className="text-[#666666]">Edit and organize your content</p>
            </div>
          </div>
        </Link>

      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border border-[#d1d5db]">
          <div className="flex items-center">
            <div className="p-2 bg-[#255F38]/20 rounded-lg mr-3">
              <FileText className="w-5 h-5 text-[#255F38]" />
            </div>
            <div>
              <p className="text-sm text-[#666666]">Total Posts</p>
              <p className="text-2xl font-bold text-[#1a1a1a]">{stats.totalPosts}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-[#d1d5db]">
          <div className="flex items-center">
            <div className="p-2 bg-green-500/20 rounded-lg mr-3">
              <Eye className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-[#666666]">Published</p>
              <p className="text-2xl font-bold text-[#1a1a1a]">{stats.publishedPosts}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-[#d1d5db]">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-500/20 rounded-lg mr-3">
              <Edit className="w-5 h-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-[#666666]">Drafts</p>
              <p className="text-2xl font-bold text-[#1a1a1a]">{stats.draftPosts}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-[#d1d5db]">
          <div className="flex items-center">
            <div className="p-2 bg-purple-500/20 rounded-lg mr-3">
              <TrendingUp className="w-5 h-5 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-[#666666]">Featured</p>
              <p className="text-2xl font-bold text-[#1a1a1a]">{stats.featuredPosts}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow border border-[#d1d5db]">
        <div className="p-6 border-b border-[#d1d5db]">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-[#1a1a1a]">Recent Posts</h2>
            <Link
              href="/hhhghghgwangik4167/manage"
              className="text-[#255F38] hover:text-[#1F7D53] font-medium"
            >
              View All
            </Link>
          </div>
        </div>
        
        <div className="divide-y divide-[#d1d5db]">
          {recentPosts.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-[#666666]">No posts yet. Create your first post!</p>
            </div>
          ) : (
            recentPosts.map((post) => (
              <div key={post.id} className="p-6 hover:bg-[#f3f4f6] transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-[#1a1a1a] mb-1">
                      {post.title}
                    </h3>
                    <p className="text-[#666666] text-sm mb-2">
                      {post.excerpt && post.excerpt.length > 100 
                        ? `${post.excerpt.substring(0, 100)}...` 
                        : post.excerpt || 'No excerpt'}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-[#666666]">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        post.published 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-gray-500/20 text-[#666666]'
                      }`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                      {post.published_at && (
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(post.published_at).toLocaleDateString()}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-[#255F38] hover:text-[#1F7D53] p-1"
                      title="View post"
                    >
                      <Eye className="w-4 h-4" />
                    </Link>
                    <Link
                      href={`/edit/${post.id}`}
                      className="text-[#1F7D53] hover:text-[#255F38] p-1"
                      title="Edit post"
                    >
                      <Edit className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

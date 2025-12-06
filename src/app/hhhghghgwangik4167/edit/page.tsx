import type { Metadata } from "next"
import Link from "next/link"
import { getPosts } from "@/lib/supabase/queries"
import { Edit, Eye, Calendar, User, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Edit Posts | Admin | Blog Website",
  description: "Edit and manage blog posts",
}

export default async function EditPostsPage() {
  const posts = await getPosts()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#1a1a1a]">Edit Posts</h1>
        <p className="text-[#666666] mt-2">Select a post to edit</p>
      </div>

      {/* Posts Table */}
      <div className="bg-white rounded-lg shadow border border-[#d1d5db]">
        <div className="p-6 border-b border-[#d1d5db]">
          <h2 className="text-xl font-semibold text-[#1a1a1a] flex items-center">
            <Edit className="w-5 h-5 mr-2 text-[#255F38]" />
            All Posts ({posts.length})
          </h2>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-[#d1d5db]">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                  Post
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-[#d1d5db]">
              {posts.map((post) => (
                <tr key={post.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-12 w-12">
                        {post.featured_image_url ? (
                          <img
                            className="h-12 w-12 rounded-lg object-cover"
                            src={post.featured_image_url}
                            alt={post.title}
                          />
                        ) : (
                          <div className="h-12 w-12 rounded-lg bg-gray-200 flex items-center justify-center">
                            <Edit className="w-6 h-6 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-[#1a1a1a]">
                          {post.title}
                        </div>
                        <div className="text-sm text-[#666666]">
                          {post.excerpt ? post.excerpt.substring(0, 60) + '...' : 'No excerpt'}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col space-y-1">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        post.published 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-gray-500/20 text-[#666666]'
                      }`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                      {post.featured && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-500/20 text-purple-400">
                          Featured
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#666666]">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>
                        {post.published_at 
                          ? new Date(post.published_at).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric',
                              year: 'numeric'
                            })
                          : 'Not published'
                        }
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <Link
                        href={`/hhhghghgwangik4167/edit/${post.id}`}
                        className="inline-flex items-center px-3 py-1.5 border border-[#255F38] text-[#255F38] text-sm font-medium rounded-lg hover:bg-[#255F38] hover:text-white transition-colors"
                      >
                        <Edit className="w-4 h-4 mr-1" />
                        Edit
                      </Link>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center px-3 py-1.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <Eye className="w-4 h-4 mr-1" />
                        View
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {posts.length === 0 && (
        <div className="text-center py-12">
          <Edit className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">No posts to edit</h3>
          <p className="text-[#666666] mb-6">Create your first blog post to get started</p>
          <Link
            href="/hhhghghgwangik4167/create"
            className="inline-flex items-center px-4 py-2 bg-[#255F38] text-white text-sm font-medium rounded-lg hover:bg-[#1F7D53] transition-colors"
          >
            Create Post
          </Link>
        </div>
      )}
    </div>
  )
}

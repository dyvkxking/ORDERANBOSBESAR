import type { Metadata } from "next"
import Link from "next/link"
import { getAllPosts, deletePost } from "@/lib/supabase/queries"
import { Edit, Eye, Plus, Calendar, User, Tag, Search, Filter } from "lucide-react"
import { revalidatePath } from "next/cache"
import DeleteButton from "@/components/DeleteButton"
import FeaturedButton from "@/components/FeaturedButton"

export const metadata: Metadata = {
  title: "Manage Blog Posts | Admin | Blog Website",
  description: "Manage your blog posts - view, edit, and delete posts",
}

async function handleDelete(postId: string) {
  "use server"
  
  const result = await deletePost(postId)
  if (result.success) {
    revalidatePath('/admin/manage')
    revalidatePath('/blog')
  }
  return result
}

export default async function ManageBlogPage() {
  const posts = await getAllPosts()

  return (
    <div>
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#1a1a1a]">Manage Blog Posts</h1>
          <p className="text-[#666666] mt-2">View, edit, and manage your blog posts</p>
        </div>
        <Link
          href="/hhhghghgwangik4167/create"
          className="flex items-center px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Create New Post
        </Link>
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

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-lg shadow p-4 border border-[#d1d5db]">
          <div className="flex items-center">
            <div className="p-2 bg-[#255F38]/20 rounded-lg mr-3">
              <Tag className="w-5 h-5 text-[#255F38]" />
            </div>
            <div>
              <p className="text-sm text-[#666666]">Total Posts</p>
              <p className="text-2xl font-bold text-[#1a1a1a]">{posts.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border border-[#d1d5db]">
          <div className="flex items-center">
            <div className="p-2 bg-green-500/20 rounded-lg mr-3">
              <Eye className="w-5 h-5 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-[#666666]">Published</p>
              <p className="text-2xl font-bold text-[#1a1a1a]">{posts.filter(p => p.published).length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border border-[#d1d5db]">
          <div className="flex items-center">
            <div className="p-2 bg-yellow-500/20 rounded-lg mr-3">
              <Edit className="w-5 h-5 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-[#666666]">Drafts</p>
              <p className="text-2xl font-bold text-[#1a1a1a]">{posts.filter(p => !p.published).length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow p-4 border border-[#d1d5db]">
          <div className="flex items-center">
            <div className="p-2 bg-blue-500/20 rounded-lg mr-3">
              <Calendar className="w-5 h-5 text-blue-500" />
            </div>
            <div>
              <p className="text-sm text-[#666666]">Featured</p>
              <p className="text-2xl font-bold text-[#1a1a1a]">{posts.filter(p => p.featured).length}</p>
            </div>
          </div>
        </div>
      </div>

      {posts.length === 0 ? (
        <div className="text-center py-12">
          <div className="bg-white rounded-lg shadow p-8 border border-[#d1d5db]">
            <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">No blog posts yet</h3>
            <p className="text-[#666666] mb-6">Get started by creating your first blog post.</p>
            <Link
              href="/hhhghghgwangik4167/create"
              className="inline-flex items-center px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Create Your First Post
            </Link>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden border border-[#d1d5db]">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-[#d1d5db]">
              <thead className="bg-[#e5e5e5]">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Post
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Published
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-[#d1d5db]">
                {posts.map((post) => (
                  <tr key={post.id} className="hover:bg-[#f3f4f6]">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        {post.featured_image_url && (
                          <img
                            className="h-12 w-12 rounded-lg object-cover mr-4"
                            src={post.featured_image_url}
                            alt={post.title}
                          />
                        )}
                        <div>
                          <div className="text-sm font-medium text-[#1a1a1a]">
                            {post.title}
                          </div>
                          <div className="text-sm text-[#666666]">
                            {post.excerpt && post.excerpt.length > 100 
                              ? `${post.excerpt.substring(0, 100)}...` 
                              : post.excerpt || 'No excerpt'}
                          </div>
                          <div className="flex items-center mt-1">
                            {post.featured && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 mr-2">
                                Featured
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm text-[#1a1a1a]">Admin User</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        post.published 
                          ? 'bg-green-500/20 text-green-400' 
                          : 'bg-gray-500/20 text-[#666666]'
                      }`}>
                        {post.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-[#666666]">
                      {post.published_at 
                        ? new Date(post.published_at).toLocaleDateString()
                        : 'Not published'
                      }
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex items-center space-x-2">
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
                        <FeaturedButton 
                          postId={post.id} 
                          postTitle={post.title} 
                          isFeatured={post.featured} 
                        />
                        <DeleteButton postId={post.id} postTitle={post.title} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

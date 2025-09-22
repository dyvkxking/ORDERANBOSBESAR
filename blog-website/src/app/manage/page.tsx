import type { Metadata } from "next"
import Link from "next/link"
import { getPosts, deletePost } from "@/lib/supabase/queries"
import { Edit, Trash2, Eye, Plus, Calendar, User, Tag, Search, Filter } from "lucide-react"
import { revalidatePath } from "next/cache"

export const metadata: Metadata = {
  title: "Manage Blog Posts | Blog Website",
  description: "Manage your blog posts - view, edit, and delete posts",
}

async function handleDelete(postId: string) {
  "use server"
  
  const result = await deletePost(postId)
  if (result.success) {
    revalidatePath('/manage')
    revalidatePath('/blog')
  }
  return result
}

export default async function ManageBlogPage() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#1a1a1a]">Lorem Ipsum Dolor</h1>
            <p className="text-[#666666] mt-2">Sit amet consectetur adipiscing elit sed do eiusmod</p>
          </div>
          <Link
            href="/create"
            className="flex items-center px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            Tempor Incididunt
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
                  placeholder="Search posts..."
                  className="w-full pl-10 pr-4 py-2 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
                <option value="">All Status</option>
                <option value="published">Consectetur</option>
                <option value="draft">Adipiscing</option>
              </select>
              <select className="px-4 py-2 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
                <option value="">All Categories</option>
                <option value="tech">Lorem</option>
                <option value="lifestyle">Ipsum</option>
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
                <p className="text-sm text-[#666666]">Consectetur</p>
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
                <p className="text-sm text-[#666666]">Adipiscing</p>
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
                <p className="text-sm text-[#666666]">Elit Sed</p>
                <p className="text-2xl font-bold text-[#1a1a1a]">{posts.filter(p => p.featured).length}</p>
              </div>
            </div>
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow p-8 border border-[#d1d5db]">
              <h3 className="text-lg font-medium text-[#1a1a1a] mb-2">Ut Labore Et</h3>
              <p className="text-[#666666] mb-6">Dolore magna aliqua ut enim ad minim veniam.</p>
              <Link
                href="/create"
                className="inline-flex items-center px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Quis Nostrud
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
                      Lorem
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                      Ipsum
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                      Dolor
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                      Sit
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#666666] uppercase tracking-wider">
                      Amet
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
                              <div className="flex flex-wrap gap-1">
                                {post.categories.slice(0, 2).map((category) => (
                                  <span
                                    key={category.id}
                                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400"
                                  >
                                    {category.title}
                                  </span>
                                ))}
                                {post.categories.length > 2 && (
                                  <span className="text-xs text-[#666666]">
                                    +{post.categories.length - 2} more
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="text-sm text-[#1a1a1a]">Lorem Ipsum</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          post.published 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-gray-500/20 text-[#666666]'
                        }`}>
                          {post.published ? 'Consectetur' : 'Adipiscing'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-[#666666]">
                        {post.published_at 
                          ? new Date(post.published_at).toLocaleDateString()
                          : 'Elit Sed'
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
                          <form action={async () => {
                            "use server"
                            await handleDelete(post.id)
                          }}>
                            <button
                              type="submit"
                              className="text-red-500 hover:text-red-600 p-1"
                              title="Delete post"
                              onClick={(e) => {
                                if (!confirm('Are you sure you want to delete this post?')) {
                                  e.preventDefault()
                                }
                              }}
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </form>
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
    </div>
  )
}

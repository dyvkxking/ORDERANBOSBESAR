import type { Metadata } from "next"
import Link from "next/link"
import { getPosts, deletePost } from "@/lib/supabase/queries"
import { Edit, Trash2, Eye, Plus, Calendar, User, Tag } from "lucide-react"
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
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Manage Blog Posts</h1>
            <p className="text-gray-600 mt-2">View, edit, and manage your blog posts</p>
          </div>
          <Link
            href="/create"
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4 mr-2" />
            Create New Post
          </Link>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-white rounded-lg shadow p-8">
              <h3 className="text-lg font-medium text-gray-900 mb-2">No blog posts yet</h3>
              <p className="text-gray-600 mb-6">Get started by creating your first blog post.</p>
              <Link
                href="/create"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                <Plus className="w-4 h-4 mr-2" />
                Create Your First Post
              </Link>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Post
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Author
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Published
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {posts.map((post) => (
                    <tr key={post.id} className="hover:bg-gray-50">
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
                            <div className="text-sm font-medium text-gray-900">
                              {post.title}
                            </div>
                            <div className="text-sm text-gray-500">
                              {post.excerpt && post.excerpt.length > 100 
                                ? `${post.excerpt.substring(0, 100)}...` 
                                : post.excerpt || 'No excerpt'}
                            </div>
                            <div className="flex items-center mt-1">
                              {post.featured && (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 mr-2">
                                  Featured
                                </span>
                              )}
                              <div className="flex flex-wrap gap-1">
                                {post.categories.slice(0, 2).map((category) => (
                                  <span
                                    key={category.id}
                                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                                  >
                                    {category.title}
                                  </span>
                                ))}
                                {post.categories.length > 2 && (
                                  <span className="text-xs text-gray-500">
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
                          {post.author.image_url && (
                            <img
                              className="h-8 w-8 rounded-full mr-3"
                              src={post.author.image_url}
                              alt={post.author.name}
                            />
                          )}
                          <div className="text-sm text-gray-900">{post.author.name}</div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          post.published 
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {post.published ? 'Published' : 'Draft'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {post.published_at 
                          ? new Date(post.published_at).toLocaleDateString()
                          : 'Not published'
                        }
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex items-center space-x-2">
                          <Link
                            href={`/blog/${post.slug}`}
                            className="text-blue-600 hover:text-blue-900 p-1"
                            title="View post"
                          >
                            <Eye className="w-4 h-4" />
                          </Link>
                          <Link
                            href={`/edit/${post.id}`}
                            className="text-indigo-600 hover:text-indigo-900 p-1"
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
                              className="text-red-600 hover:text-red-900 p-1"
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

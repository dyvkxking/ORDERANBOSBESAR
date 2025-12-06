"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { Edit, Eye, Trash2, Plus, ArrowLeft } from "lucide-react"
import { getAllPosts } from "@/lib/supabase/queries"
import { PostWithDetails } from "@/types/supabase"

export default function ManageDraftsPage() {
  const [drafts, setDrafts] = useState<PostWithDetails[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchDrafts() {
      setLoading(true)
      const allPosts = await getAllPosts()
      setDrafts(allPosts.filter(post => !post.published))
      setLoading(false)
    }
    fetchDrafts()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <Link href="/admin/manage-post" className="mr-4 p-2 hover:bg-gray-100 rounded-lg">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Manage Drafts</h1>
                <p className="text-gray-600 mt-1">View, edit, publish, or delete draft blog posts</p>
              </div>
            </div>
            <Link href="/admin/create/blog" className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1F7D53] transition-colors">
              <Plus className="w-4 h-4 inline mr-2" />
              New Blog Post
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-12 text-gray-500">Loading drafts...</div>
        ) : drafts.length === 0 ? (
          <div className="text-center py-12 text-gray-500">No drafts found.</div>
        ) : (
          <div className="bg-white rounded-lg shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Author</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Created</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {drafts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{post.title}</td>
                    <td className="px-6 py-4 text-gray-700">{post.author?.name || "-"}</td>
                    <td className="px-6 py-4 text-gray-700">{post.created_at ? new Date(post.created_at).toLocaleDateString() : "-"}</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Link href={`/admin/manage-post/blog/edit/${post.id}`} className="text-indigo-600 hover:text-indigo-900 p-1 rounded">
                          <Edit className="w-4 h-4" />
                        </Link>
                        <Link href={`/blog/${post.slug}`} className="text-blue-600 hover:text-blue-900 p-1 rounded">
                          <Eye className="w-4 h-4" />
                        </Link>
                        <button className="text-red-600 hover:text-red-900 p-1 rounded" onClick={() => {/* TODO: implement delete */}}>
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

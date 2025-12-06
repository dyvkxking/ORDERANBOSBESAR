"use client"

import { useEffect, useState } from "react"
import { useRouter, useParams } from "next/navigation"
import { getAllPosts } from "@/lib/supabase/queries"
import { PostWithDetails } from "@/types/supabase"
import Link from "next/link"
import { ArrowLeft, Save, Eye } from "lucide-react"

export default function EditDraftPage() {
  const router = useRouter()
  const params = useParams()
  const { id } = params as { id: string }
  const [post, setPost] = useState<PostWithDetails | null>(null)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState<any>(null)

  useEffect(() => {
    async function fetchDraft() {
      setLoading(true)
      const allPosts = await getAllPosts()
      const found = allPosts.find(p => p.id === id)
      setPost(found || null)
      setFormData(found ? { ...found } : null)
      setLoading(false)
    }
    if (id) fetchDraft()
  }, [id])

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }))
  }

  const handleSave = async (status: "draft" | "published") => {
    // TODO: implement update API call
    alert(`Would save as ${status}`)
    // router.push("/admin/manage-post/blog")
  }

  if (loading) return <div className="p-8 text-gray-500">Loading...</div>
  if (!post) return <div className="p-8 text-red-500">Draft not found.</div>

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-6">
            <Link href="/admin/manage-post/blog" className="mr-4 p-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <h1 className="text-3xl font-bold text-gray-900">Edit Draft</h1>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form className="bg-white rounded-lg shadow p-8 space-y-6" onSubmit={e => { e.preventDefault() }}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
            <input type="text" value={formData.title} onChange={e => handleInputChange('title', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Excerpt</label>
            <textarea value={formData.excerpt || ''} onChange={e => handleInputChange('excerpt', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Content</label>
            <textarea value={formData.content || ''} onChange={e => handleInputChange('content', e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg min-h-[200px]" />
          </div>
          <div className="flex space-x-3">
            <button type="button" className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center" onClick={() => handleSave("draft")}> <Save className="w-4 h-4 mr-2" /> Save Draft </button>
            <button type="button" className="px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] flex items-center" onClick={() => handleSave("published")}> <Eye className="w-4 h-4 mr-2" /> Publish </button>
          </div>
        </form>
      </div>
    </div>
  )
}

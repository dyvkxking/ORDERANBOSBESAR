'use client'

import { useState, useEffect } from 'react'
import { createPost, updatePost } from '@/lib/supabase/queries'
import { useRouter } from 'next/navigation'
import { Save, Eye, X, Upload, Image as ImageIcon, FileText } from 'lucide-react'
import RichTextEditor from './RichTextEditor'
import ImageUpload from './ImageUpload'

interface BlogFormProps {
  initialData?: {
    id?: string
    title?: string
    slug?: string
    excerpt?: string
    content?: string
    featured_image_url?: string
  }
  mode?: 'create' | 'edit'
}

export default function BlogForm({ initialData, mode = 'create' }: BlogFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    excerpt: initialData?.excerpt || '',
    content: initialData?.content || '',
    featured_image_url: initialData?.featured_image_url || ''
  })


  // Auto-generate slug from title
  useEffect(() => {
    if (formData.title && !initialData?.slug) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setFormData(prev => ({ ...prev, slug }))
    }
  }, [formData.title, initialData?.slug])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }


  const handleImageChange = (url: string) => {
    setFormData(prev => ({ ...prev, featured_image_url: url }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      // Generate random featured status (30% chance of being featured)
      const isFeatured = Math.random() < 0.3
      
      const postData = {
        ...formData,
        published: true, // Always publish immediately
        published_at: new Date().toISOString(),
        featured: isFeatured
      }

      let result
      if (mode === 'edit' && initialData?.id) {
        result = await updatePost(initialData.id, postData)
      } else {
        result = await createPost(postData)
      }

      if (result.success) {
        router.push('/blog')
        router.refresh()
      } else {
        alert(`Error: ${result.error}`)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const handlePreview = () => {
    // In a real app, you might want to open a preview modal or navigate to a preview page
    alert('Preview functionality would be implemented here')
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-lg p-8 border border-[#d1d5db]">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-[#1a1a1a]">
            {mode === 'edit' ? 'Edit Blog Post' : 'Create New Blog Post'}
          </h1>
          <div className="flex space-x-3">
            <button
              type="button"
              onClick={handlePreview}
              className="flex items-center px-4 py-2 text-white bg-[#255F38] rounded-lg hover:bg-[#1F7D53] transition-colors"
            >
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Title and Slug */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-[#666666] mb-2">
                <FileText className="w-4 h-4 inline mr-2" />
                Headlines *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent bg-white text-[#1a1a1a]"
                placeholder="Enter your blog post headline"
              />
            </div>
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-[#666666] mb-2">
                URL Slug *
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent bg-white text-[#1a1a1a]"
                placeholder="blog-post-url-slug"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-[#666666] mb-2">
              Summary
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent bg-white text-[#1a1a1a]"
              placeholder="Write a brief summary of your blog post"
            />
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-[#666666] mb-2">
              Article Content *
            </label>
            <RichTextEditor
              value={formData.content}
              onChange={(value) => setFormData(prev => ({ ...prev, content: value }))}
              placeholder="Start writing your article content here..."
              className="mb-2"
            />
            <p className="text-sm text-[#666666]">
              Use the toolbar above to format your content with headings, lists, links, and more.
            </p>
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-sm font-medium text-[#666666] mb-2">
              <ImageIcon className="w-4 h-4 inline mr-2" />
              Featured Image (Post Thumbnail)
            </label>
            <ImageUpload
              value={formData.featured_image_url}
              onChange={handleImageChange}
              className="mb-2"
            />
            <p className="text-sm text-[#666666]">
              This image will be used as the main thumbnail for your blog post. It appears in blog listings and social media previews. Recommended size: 800x400px.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              💡 <strong>Note:</strong> To add images within your article content, use the image button in the editor toolbar above.
            </p>
          </div>


          {/* Submit Buttons */}
          <div className="flex justify-end space-x-4 pt-6 border-t">
            <button
              type="button"
              onClick={() => router.back()}
              className="px-6 py-2 text-[#255F38] bg-[#1F7D53] rounded-lg hover:bg-[#255F38] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex items-center px-6 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  {mode === 'edit' ? 'Updating...' : 'Publishing...'}
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  {mode === 'edit' ? 'Update & Publish' : 'Publish Post'}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

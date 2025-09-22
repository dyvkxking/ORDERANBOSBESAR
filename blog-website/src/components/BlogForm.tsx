'use client'

import { useState, useEffect } from 'react'
import { Category } from '@/types/supabase'
import { createPost, updatePost, getCategories } from '@/lib/supabase/queries'
import { useRouter } from 'next/navigation'
import { Save, Eye, X, Upload, Image as ImageIcon, Calendar, User, Tag, FileText, Star } from 'lucide-react'
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
    featured?: boolean
    published?: boolean
    published_at?: string
    category_ids?: string[]
  }
  mode?: 'create' | 'edit'
}

export default function BlogForm({ initialData, mode = 'create' }: BlogFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialData?.category_ids || [])
  
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    excerpt: initialData?.excerpt || '',
    content: initialData?.content || '',
    featured_image_url: initialData?.featured_image_url || '',
    featured: initialData?.featured || false,
    published: initialData?.published || false,
    published_at: initialData?.published_at || new Date().toISOString().slice(0, 16)
  })

  // Load categories on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        const categoriesData = await getCategories()
        setCategories(categoriesData)
      } catch (error) {
        console.error('Error loading data:', error)
      }
    }
    loadData()
  }, [])

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

  const handleCategoryToggle = (categoryId: string) => {
    setSelectedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    )
  }

  const handleImageChange = (url: string) => {
    setFormData(prev => ({ ...prev, featured_image_url: url }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const postData = {
        ...formData,
        category_ids: selectedCategories,
        published_at: formData.published ? formData.published_at : undefined
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
            {mode === 'edit' ? 'Lorem Ipsum Dolor' : 'Sit Amet Consectetur'}
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
                Lorem Ipsum *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent bg-white text-[#1a1a1a]"
                placeholder="Lorem ipsum dolor sit amet"
              />
            </div>
            <div>
              <label htmlFor="slug" className="block text-sm font-medium text-[#666666] mb-2">
                Dolor Sit *
              </label>
              <input
                type="text"
                id="slug"
                name="slug"
                value={formData.slug}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent bg-white text-[#1a1a1a]"
                placeholder="lorem-ipsum-dolor"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-[#666666] mb-2">
              Amet Consectetur
            </label>
            <textarea
              id="excerpt"
              name="excerpt"
              value={formData.excerpt}
              onChange={handleInputChange}
              rows={3}
              className="w-full px-3 py-2 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent bg-white text-[#1a1a1a]"
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            />
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-[#666666] mb-2">
              Adipiscing Elit *
            </label>
            <RichTextEditor
              value={formData.content}
              onChange={(value) => setFormData(prev => ({ ...prev, content: value }))}
              placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit..."
              className="mb-2"
            />
            <p className="text-sm text-[#666666]">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Featured Image */}
          <div>
            <label className="block text-sm font-medium text-[#666666] mb-2">
              <ImageIcon className="w-4 h-4 inline mr-2" />
              Ut Enim Ad
            </label>
            <ImageUpload
              value={formData.featured_image_url}
              onChange={handleImageChange}
              className="mb-2"
            />
            <p className="text-sm text-[#666666]">
              Minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
            </p>
          </div>

          {/* Categories */}
          <div>
              <label className="block text-sm font-medium text-[#666666] mb-2">
                <Tag className="w-4 h-4 inline mr-2" />
                Ex Ea Commodo
              </label>
            <div className="max-h-32 overflow-y-auto border border-[#255F38] rounded-lg p-2">
              {categories.map(category => (
                <label key={category.id} className="flex items-center space-x-2 py-1">
                  <input
                    type="checkbox"
                    checked={selectedCategories.includes(category.id)}
                    onChange={() => handleCategoryToggle(category.id)}
                    className="rounded border-[#255F38] text-[#255F38] focus:ring-[#255F38]"
                  />
                  <span className="text-sm text-[#1F7D53]">{category.title}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Publish Settings */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-medium text-[#a7f3d0] mb-4">Consequat Duis</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="featured"
                  name="featured"
                  checked={formData.featured}
                  onChange={handleInputChange}
                  className="rounded border-[#255F38] text-[#255F38] focus:ring-[#255F38]"
                />
                <label htmlFor="featured" className="flex items-center text-sm text-[#1F7D53]">
                  <Star className="w-4 h-4 mr-1" />
                  Aute Iure
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="published"
                  name="published"
                  checked={formData.published}
                  onChange={handleInputChange}
                  className="rounded border-[#255F38] text-[#255F38] focus:ring-[#255F38]"
                />
                <label htmlFor="published" className="text-sm text-[#1F7D53]">
                  Dolor In
                </label>
              </div>

              {formData.published && (
                <div>
                  <label htmlFor="published_at" className="block text-sm font-medium text-[#1F7D53] mb-1">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Reprehenderit
                  </label>
                  <input
                    type="datetime-local"
                    id="published_at"
                    name="published_at"
                    value={formData.published_at}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-[#d1d5db] rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent bg-white text-[#1a1a1a]"
                  />
                </div>
              )}
            </div>
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
                  {mode === 'edit' ? 'Updating...' : 'Creating...'}
                </>
              ) : (
                <>
                  <Save className="w-4 h-4 mr-2" />
                  {mode === 'edit' ? 'Update Post' : 'Create Post'}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

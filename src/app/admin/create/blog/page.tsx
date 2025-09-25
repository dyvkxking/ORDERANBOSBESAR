"use client"

import Link from "next/link"
import { useState } from "react"
import { 
  ArrowLeft,
  Save,
  Eye,
  EyeOff,
  Upload,
  X,
  Plus,
  Calendar,
  Clock,
  Tag,
  Share2,
  Settings
} from "lucide-react"
import RichTextEditor from "@/components/RichTextEditor"

export default function CreateBlogPage() {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    excerpt: '',
    content: '',
    category: '',
    tags: [] as string[],
    featuredImage: '',
    publishDate: '',
    readTime: '5 min read',
    status: 'draft',
    metaTitle: '',
    metaDescription: '',
    slug: ''
  })

  const [newTag, setNewTag] = useState('')

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleAddTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }))
      setNewTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    
    // Validate required fields
    if (!formData.title.trim()) {
      alert('Judul blog harus diisi!')
      return
    }
    if (!formData.author.trim()) {
      alert('Author harus diisi!')
      return
    }
    if (!formData.content.trim()) {
      alert('Konten harus diisi!')
      return
    }
    if (!formData.category) {
      alert('Kategori harus dipilih!')
      return
    }
    
    // Here you would typically send the data to your API
    console.log('All validation passed, ready to submit:', {
      ...formData,
      content: formData.content // This should contain the HTML content from the editor
    })
    
    // Example API call (replace with your actual API endpoint)
    // fetch('/api/blogs', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData)
    // })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <Link href="/admin/create" className="mr-4 p-2 hover:bg-gray-100 rounded-lg">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Create Blog</h1>
                <p className="text-gray-600 mt-1">Buat artikel blog baru</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button 
                type="button"
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center"
                onClick={() => {
                  console.log('Preview clicked')
                  console.log('Current content:', formData.content)
                }}
              >
                <EyeOff className="w-4 h-4 mr-2" />
                Preview
              </button>
              <button 
                type="button"
                className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center"
                onClick={() => {
                  handleInputChange('status', 'draft')
                  handleSubmit(new Event('submit') as any)
                }}
              >
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </button>
              <button 
                type="button"
                className="px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] flex items-center"
                onClick={() => {
                  handleInputChange('status', 'published')
                  handleSubmit(new Event('submit') as any)
                }}
              >
                <Eye className="w-4 h-4 mr-2" />
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Basic Information */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Judul Blog *
                  </label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleInputChange('title', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                    placeholder="Masukkan judul blog yang menarik..."
                  />
                </div>

                {/* Author */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author *
                  </label>
                  <input
                    type="text"
                    value={formData.author}
                    onChange={(e) => handleInputChange('author', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                    placeholder="Nama penulis..."
                  />
                </div>

                {/* Excerpt */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Excerpt (Ringkasan)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.excerpt}
                    onChange={(e) => handleInputChange('excerpt', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                    placeholder="Ringkasan singkat artikel (akan muncul di preview)..."
                  />
                </div>

                {/* Content Editor */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Konten *
                  </label>
                  <RichTextEditor
                    content={formData.content}
                    onChange={(content) => {
                      console.log('Content changed:', content)
                      handleInputChange('content', content)
                    }}
                    placeholder="Tulis konten blog di sini... Anda dapat menempelkan gambar langsung dari clipboard (Ctrl+V) atau menggunakan tombol gambar untuk mengunggah dari URL atau file."
                    className="min-h-[500px]"
                  />
                  
                  {/* Debug section - remove in production */}
                  <div className="mt-4 p-4 bg-gray-100 rounded-lg">
                    <h4 className="font-semibold text-gray-700 mb-2">Debug Info:</h4>
                    <p className="text-sm text-gray-600">
                      <strong>Content length:</strong> {formData.content.length} characters
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Has content:</strong> {formData.content ? 'Yes' : 'No'}
                    </p>
                    <details className="mt-2">
                      <summary className="text-sm text-gray-600 cursor-pointer">Show raw content</summary>
                      <pre className="text-xs text-gray-500 mt-2 bg-white p-2 rounded overflow-auto max-h-32">
                        {formData.content}
                      </pre>
                    </details>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Featured Image */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Featured Image
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">Upload gambar atau drag & drop</p>
                    <button type="button" className="text-[#255F38] hover:text-[#1F7D53] font-medium">
                      Pilih File
                    </button>
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Kategori *
                  </label>
                  <select 
                    value={formData.category}
                    onChange={(e) => handleInputChange('category', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                  >
                    <option value="">Pilih kategori...</option>
                    <option value="Technology">Technology</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Business">Business</option>
                    <option value="Education">Education</option>
                    <option value="Health">Health</option>
                    <option value="Travel">Travel</option>
                  </select>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Tag className="w-4 h-4 inline mr-2" />
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {formData.tags.map((tag, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center">
                        {tag}
                        <button 
                          type="button" 
                          onClick={() => handleRemoveTag(tag)}
                          className="ml-2 text-blue-600 hover:text-blue-800"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                      placeholder="Tambahkan tag..."
                    />
                    <button 
                      type="button" 
                      onClick={handleAddTag}
                      className="px-4 py-2 bg-[#255F38] text-white rounded-r-lg hover:bg-[#1F7D53]"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Publish Settings */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="w-4 h-4 inline mr-2" />
                    Publish Date
                  </label>
                  <input
                    type="datetime-local"
                    value={formData.publishDate}
                    onChange={(e) => handleInputChange('publishDate', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                  />
                </div>

                {/* Read Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Clock className="w-4 h-4 inline mr-2" />
                    Estimated Read Time
                  </label>
                  <input
                    type="text"
                    value={formData.readTime}
                    onChange={(e) => handleInputChange('readTime', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                    placeholder="5 min read"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select 
                    value={formData.status}
                    onChange={(e) => handleInputChange('status', e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                  >
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="scheduled">Scheduled</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                {/* Social Sharing */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Share2 className="w-4 h-4 mr-2" />
                    Social Sharing
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="facebook"
                        className="mr-2"
                      />
                      <label htmlFor="facebook" className="text-sm text-gray-700">
                        Share to Facebook
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="twitter"
                        className="mr-2"
                      />
                      <label htmlFor="twitter" className="text-sm text-gray-700">
                        Share to Twitter
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="checkbox"
                        id="linkedin"
                        className="mr-2"
                      />
                      <label htmlFor="linkedin" className="text-sm text-gray-700">
                        Share to LinkedIn
                      </label>
                    </div>
                  </div>
                </div>

                {/* SEO Settings */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                    <Settings className="w-4 h-4 mr-2" />
                    SEO Settings
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Title
                      </label>
                      <input
                        type="text"
                        value={formData.metaTitle}
                        onChange={(e) => handleInputChange('metaTitle', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                        placeholder="SEO title..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Description
                      </label>
                      <textarea
                        rows={3}
                        value={formData.metaDescription}
                        onChange={(e) => handleInputChange('metaDescription', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                        placeholder="SEO description..."
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Slug (URL)
                      </label>
                      <input
                        type="text"
                        value={formData.slug}
                        onChange={(e) => handleInputChange('slug', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                        placeholder="blog-post-url"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}




import type { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowLeft,
  Save,
  Eye,
  EyeOff,
  Upload,
  X,
  Plus,
  Minus,
  Bold,
  Italic,
  Underline,
  Link as LinkIcon,
  List,
  ListOrdered,
  Heading1,
  Heading2,
  Heading3,
  Image as ImageIcon,
  Type
} from "lucide-react"

export const metadata: Metadata = {
  title: "Create Jurnal | Admin Dashboard",
  description: "Create new journal article",
}

export default function CreateJurnalPage() {
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
                <h1 className="text-3xl font-bold text-gray-900">Create Jurnal</h1>
                <p className="text-gray-600 mt-1">Buat artikel jurnal baru</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
                <EyeOff className="w-4 h-4 mr-2" />
                Preview
              </button>
              <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </button>
              <button className="px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] flex items-center">
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
          <form className="p-8 space-y-8">
            {/* Basic Information */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Judul Jurnal *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                    placeholder="Masukkan judul jurnal yang menarik..."
                  />
                </div>

                {/* Author */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Author *
                  </label>
                  <input
                    type="text"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                    placeholder="Ringkasan singkat artikel (akan muncul di preview)..."
                  />
                </div>

                {/* Content Editor */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Konten *
                  </label>
                  <div className="border border-gray-300 rounded-lg">
                    {/* Toolbar */}
                    <div className="border-b border-gray-300 p-3 flex flex-wrap gap-2">
                      <button type="button" className="p-2 hover:bg-gray-100 rounded">
                        <Bold className="w-4 h-4" />
                      </button>
                      <button type="button" className="p-2 hover:bg-gray-100 rounded">
                        <Italic className="w-4 h-4" />
                      </button>
                      <button type="button" className="p-2 hover:bg-gray-100 rounded">
                        <Underline className="w-4 h-4" />
                      </button>
                      <div className="border-l border-gray-300 mx-2"></div>
                      <button type="button" className="p-2 hover:bg-gray-100 rounded">
                        <Heading1 className="w-4 h-4" />
                      </button>
                      <button type="button" className="p-2 hover:bg-gray-100 rounded">
                        <Heading2 className="w-4 h-4" />
                      </button>
                      <button type="button" className="p-2 hover:bg-gray-100 rounded">
                        <Heading3 className="w-4 h-4" />
                      </button>
                      <div className="border-l border-gray-300 mx-2"></div>
                      <button type="button" className="p-2 hover:bg-gray-100 rounded">
                        <LinkIcon className="w-4 h-4" />
                      </button>
                      <button type="button" className="p-2 hover:bg-gray-100 rounded">
                        <ImageIcon className="w-4 h-4" />
                      </button>
                      <div className="border-l border-gray-300 mx-2"></div>
                      <button type="button" className="p-2 hover:bg-gray-100 rounded">
                        <List className="w-4 h-4" />
                      </button>
                      <button type="button" className="p-2 hover:bg-gray-100 rounded">
                        <ListOrdered className="w-4 h-4" />
                      </button>
                    </div>
                    {/* Editor */}
                    <textarea
                      rows={15}
                      className="w-full px-4 py-4 border-0 focus:ring-0 resize-none"
                      placeholder="Tulis konten artikel di sini..."
                    />
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
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
                    <option value="">Pilih kategori...</option>
                    <option value="Lorem">Lorem</option>
                    <option value="Ipsum">Ipsum</option>
                    <option value="Dolor">Dolor</option>
                    <option value="Sit">Sit</option>
                  </select>
                </div>

                {/* Tags */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tags
                  </label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center">
                      Lorem
                      <button type="button" className="ml-2 text-blue-600 hover:text-blue-800">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm flex items-center">
                      Ipsum
                      <button type="button" className="ml-2 text-green-600 hover:text-green-800">
                        <X className="w-3 h-3" />
                      </button>
                    </span>
                  </div>
                  <div className="flex">
                    <input
                      type="text"
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                      placeholder="Tambahkan tag..."
                    />
                    <button type="button" className="px-4 py-2 bg-[#255F38] text-white rounded-r-lg hover:bg-[#1F7D53]">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Read Time */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Estimated Read Time
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                    placeholder="5 min read"
                  />
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
                    <option value="draft">Draft</option>
                    <option value="published">Published</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>

                {/* SEO Settings */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">SEO Settings</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Meta Title
                      </label>
                      <input
                        type="text"
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
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                        placeholder="SEO description..."
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





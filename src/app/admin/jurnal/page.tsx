import type { Metadata } from "next"
import { 
  ArrowLeft,
  Save,
  Eye,
  EyeOff,
  Upload,
  X,
  Plus,
  Minus
} from "lucide-react"

export const metadata: Metadata = {
  title: "Kelola Jurnal | Admin Dashboard",
  description: "Kelola artikel jurnal dan konten",
}

export default function JurnalManagement() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-6">
            <button className="mr-4 p-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Kelola Jurnal</h1>
              <p className="text-gray-600 mt-1">Buat dan edit artikel jurnal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Tambah Jurnal Baru</h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
                  <EyeOff className="w-4 h-4 mr-2" />
                  Preview
                </button>
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center">
                  <Save className="w-4 h-4 mr-2" />
                  Simpan Draft
                </button>
                <button className="px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] flex items-center">
                  <Eye className="w-4 h-4 mr-2" />
                  Publish
                </button>
              </div>
            </div>
          </div>

          <form className="p-6 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Judul Jurnal
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                placeholder="Masukkan judul jurnal..."
              />
            </div>

            {/* Author */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Author
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                placeholder="Nama penulis..."
              />
            </div>

            {/* Category */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
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

            {/* Excerpt */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Excerpt (Ringkasan)
              </label>
              <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                placeholder="Ringkasan singkat artikel..."
              />
            </div>

            {/* Content */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Konten
              </label>
              <div className="border border-gray-300 rounded-lg">
                {/* Toolbar */}
                <div className="border-b border-gray-300 p-2 flex space-x-2">
                  <button type="button" className="p-2 hover:bg-gray-100 rounded">
                    <strong>B</strong>
                  </button>
                  <button type="button" className="p-2 hover:bg-gray-100 rounded">
                    <em>I</em>
                  </button>
                  <button type="button" className="p-2 hover:bg-gray-100 rounded">
                    U
                  </button>
                  <div className="border-l border-gray-300 mx-2"></div>
                  <button type="button" className="p-2 hover:bg-gray-100 rounded">
                    H1
                  </button>
                  <button type="button" className="p-2 hover:bg-gray-100 rounded">
                    H2
                  </button>
                  <button type="button" className="p-2 hover:bg-gray-100 rounded">
                    H3
                  </button>
                  <div className="border-l border-gray-300 mx-2"></div>
                  <button type="button" className="p-2 hover:bg-gray-100 rounded">
                    Link
                  </button>
                  <button type="button" className="p-2 hover:bg-gray-100 rounded">
                    List
                  </button>
                </div>
                {/* Editor */}
                <textarea
                  rows={15}
                  className="w-full px-3 py-2 border-0 focus:ring-0 resize-none"
                  placeholder="Tulis konten artikel di sini..."
                />
              </div>
            </div>

            {/* Read Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Estimated Read Time
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                placeholder="5 min read"
              />
            </div>

            {/* Status */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}


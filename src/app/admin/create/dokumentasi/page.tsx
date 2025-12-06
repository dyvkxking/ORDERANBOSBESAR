import type { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowLeft,
  Save,
  Upload,
  X,
  Plus,
  Image as ImageIcon,
  Calendar,
  MapPin,
  Users,
  Trash2,
  Eye,
  Download,
  RotateCcw,
  Filter
} from "lucide-react"

export const metadata: Metadata = {
  title: "Create Dokumentasi | Admin Dashboard",
  description: "Create new event documentation with multiple photos",
}

export default function CreateDokumentasiPage() {
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
                <h1 className="text-3xl font-bold text-gray-900">Create Dokumentasi</h1>
                <p className="text-gray-600 mt-1">Upload dokumentasi acara dengan multiple photos</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
                <Eye className="w-4 h-4 mr-2" />
                Preview
              </button>
              <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </button>
              <button className="px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] flex items-center">
                <Upload className="w-4 h-4 mr-2" />
                Publish
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* Basic Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Informasi Acara</h2>
              
              <div className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Judul Acara *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                    placeholder="Masukkan judul acara..."
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Deskripsi
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                    placeholder="Deskripsi acara..."
                  />
                </div>

                {/* Event Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Calendar className="w-4 h-4 inline mr-2" />
                      Tanggal Acara *
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-2" />
                      Lokasi
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                      placeholder="Lokasi acara..."
                    />
                  </div>
                </div>

                {/* Participants */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="w-4 h-4 inline mr-2" />
                    Jumlah Peserta
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Photo Upload Section */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Upload Foto</h2>
                <div className="flex space-x-2">
                  <button className="px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter
                  </button>
                  <button className="px-3 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Foto
                  </button>
                </div>
              </div>

              {/* Upload Area */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center mb-6">
                <ImageIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-lg text-gray-600 mb-2">Upload foto atau drag & drop</p>
                <p className="text-sm text-gray-500 mb-4">Support: JPG, PNG, GIF (Max 10MB per file)</p>
                <div className="flex justify-center space-x-4">
                  <button className="px-6 py-3 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] flex items-center">
                    <Upload className="w-4 h-4 mr-2" />
                    Pilih File
                  </button>
                  <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Upload Multiple
                  </button>
                </div>
              </div>

              {/* Photo Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {/* Sample Photos */}
                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop" 
                    alt="Event photo" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 flex space-x-2">
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <RotateCcw className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-red-500 rounded-full hover:bg-red-600">
                        <Trash2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 bg-white bg-opacity-90 rounded text-xs font-medium">1</span>
                  </div>
                </div>

                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=200&fit=crop" 
                    alt="Event photo" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 flex space-x-2">
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <RotateCcw className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-red-500 rounded-full hover:bg-red-600">
                        <Trash2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 bg-white bg-opacity-90 rounded text-xs font-medium">2</span>
                  </div>
                </div>

                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=300&h=200&fit=crop" 
                    alt="Event photo" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 flex space-x-2">
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <RotateCcw className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-red-500 rounded-full hover:bg-red-600">
                        <Trash2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 bg-white bg-opacity-90 rounded text-xs font-medium">3</span>
                  </div>
                </div>

                <div className="relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop" 
                    alt="Event photo" 
                    className="w-full h-32 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-200 rounded-lg flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 flex space-x-2">
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <Download className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-white rounded-full hover:bg-gray-100">
                        <RotateCcw className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="p-2 bg-red-500 rounded-full hover:bg-red-600">
                        <Trash2 className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 bg-white bg-opacity-90 rounded text-xs font-medium">4</span>
                  </div>
                </div>

                {/* Add More Button */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg h-32 flex items-center justify-center hover:border-[#255F38] transition-colors cursor-pointer">
                  <div className="text-center">
                    <Plus className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-500">Tambah Foto</p>
                  </div>
                </div>
              </div>

              {/* Photo Stats */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Total foto: 4</span>
                  <span className="text-gray-600">Ukuran total: 2.4 MB</span>
                  <span className="text-gray-600">Format: JPG, PNG</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Status */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Status</h3>
              <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </select>
            </div>

            {/* Bulk Upload */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Bulk Upload</h3>
              <p className="text-sm text-gray-600 mb-4">Upload beberapa foto sekaligus untuk dokumentasi yang lebih lengkap</p>
              
              <div className="space-y-4">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  id="bulk-upload"
                />
                <label 
                  htmlFor="bulk-upload"
                  className="block w-full px-4 py-3 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] cursor-pointer text-center"
                >
                  <Plus className="w-4 h-4 inline mr-2" />
                  Upload Multiple Files
                </label>
                <p className="text-xs text-gray-500 text-center">Max 20 files, 10MB each</p>
              </div>
            </div>

            {/* Photo Settings */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Photo Settings</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Auto Resize
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
                    <option value="original">Original Size</option>
                    <option value="large">Large (1920x1080)</option>
                    <option value="medium">Medium (1280x720)</option>
                    <option value="small">Small (640x480)</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Compression Quality
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="100"
                    defaultValue="85"
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>Smaller</span>
                    <span>Larger</span>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="watermark"
                    className="mr-2"
                  />
                  <label htmlFor="watermark" className="text-sm text-gray-700">
                    Add watermark
                  </label>
                </div>
              </div>
            </div>

            {/* Preview */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Preview</h3>
              <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Preview akan muncul di sini</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}





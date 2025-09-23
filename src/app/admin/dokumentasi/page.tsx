import type { Metadata } from "next"
import { 
  ArrowLeft,
  Save,
  Upload,
  X,
  Plus,
  Image,
  Calendar,
  MapPin,
  Users
} from "lucide-react"

export const metadata: Metadata = {
  title: "Kelola Dokumentasi | Admin Dashboard",
  description: "Kelola dokumentasi acara dan foto",
}

export default function DokumentasiManagement() {
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
              <h1 className="text-3xl font-bold text-gray-900">Kelola Dokumentasi</h1>
              <p className="text-gray-600 mt-1">Upload dan kelola dokumentasi acara</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Tambah Dokumentasi Baru</h2>
              <div className="flex space-x-2">
                <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center">
                  <Save className="w-4 h-4 mr-2" />
                  Simpan Draft
                </button>
                <button className="px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] flex items-center">
                  <Upload className="w-4 h-4 mr-2" />
                  Publish
                </button>
              </div>
            </div>
          </div>

          <form className="p-6 space-y-6">
            {/* Title */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Judul Acara
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                placeholder="Deskripsi acara..."
              />
            </div>

            {/* Event Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-2" />
                Tanggal Acara
              </label>
              <input
                type="date"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
              />
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-2" />
                Lokasi
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                placeholder="Lokasi acara..."
              />
            </div>

            {/* Participants */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="w-4 h-4 inline mr-2" />
                Jumlah Peserta
              </label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                placeholder="0"
              />
            </div>

            {/* Photo Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Image className="w-4 h-4 inline mr-2" />
                Upload Foto
              </label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                <div className="text-center mb-4">
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Upload foto atau drag & drop</p>
                  <button type="button" className="text-[#255F38] hover:text-[#1F7D53] font-medium">
                    Pilih File
                  </button>
                </div>
                
                {/* Photo Preview Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=200&h=150&fit=crop" 
                      alt="Preview" 
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=200&h=150&fit=crop" 
                      alt="Preview" 
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=200&h=150&fit=crop" 
                      alt="Preview" 
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                  <div className="relative group">
                    <img 
                      src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&h=150&fit=crop" 
                      alt="Preview" 
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <X className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Bulk Upload */}
            <div className="bg-gray-50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Multiple Files</h3>
              <p className="text-gray-600 mb-4">Upload beberapa foto sekaligus untuk dokumentasi yang lebih lengkap</p>
              <div className="flex items-center space-x-4">
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  className="hidden"
                  id="bulk-upload"
                />
                <label 
                  htmlFor="bulk-upload"
                  className="px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] cursor-pointer flex items-center"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Upload Multiple Files
                </label>
                <span className="text-sm text-gray-500">Max 10 files, 5MB each</span>
              </div>
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


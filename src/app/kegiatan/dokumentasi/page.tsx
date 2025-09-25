"use client"

import Link from "next/link"
import { 
  Camera, 
  Search, 
  Filter,
  Calendar,
  MapPin,
  Users,
  Heart,
  Eye,
  Download,
  Share2
} from "lucide-react"
import { useDokumentasi } from "@/hooks/useDokumentasi"
import KegiatanNavigation from "@/components/KegiatanNavigation"

export default function DokumentasiPage() {
  const { dokumentasi, loading: dokumentasiLoading, error: dokumentasiError } = useDokumentasi()

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Dokumentasi Acara</h1>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Koleksi foto dan dokumentasi dari berbagai kegiatan yang telah dilaksanakan
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <KegiatanNavigation />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari dokumentasi..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
              <option>Semua Acara</option>
              <option>Seminar</option>
              <option>Workshop</option>
              <option>Bakti Sosial</option>
              <option>Pameran</option>
              <option>Pelatihan</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
              <option>Semua Tahun</option>
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
            <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>
        </div>

        {/* Dokumentasi Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dokumentasiLoading ? (
            <div className="col-span-full text-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#255F38] mx-auto"></div>
              <p className="mt-2 text-gray-600">Memuat dokumentasi...</p>
            </div>
          ) : dokumentasiError ? (
            <div className="col-span-full text-center py-8">
              <p className="text-red-600">Error: {dokumentasiError}</p>
            </div>
          ) : dokumentasi.length === 0 ? (
            <div className="col-span-full text-center py-8">
              <p className="text-gray-600">Belum ada dokumentasi yang tersedia</p>
            </div>
          ) : (
            dokumentasi.map((dokumentasiItem) => (
              <div key={dokumentasiItem.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Photo Grid */}
                <div className="grid grid-cols-2 gap-1 h-64">
                  {dokumentasiItem.photos.slice(0, 4).map((photo, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={photo} 
                        alt={`${dokumentasiItem.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {index === 3 && dokumentasiItem.photos.length > 4 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">+{dokumentasiItem.photos.length - 4}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dokumentasiItem.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{new Date(dokumentasiItem.event_date).toLocaleDateString('id-ID')}</span>
                    {dokumentasiItem.location && (
                      <>
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{dokumentasiItem.location}</span>
                      </>
                    )}
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{dokumentasiItem.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {dokumentasiItem.participants} peserta
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {dokumentasiItem.likes} likes
                      </span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            Muat Lebih Banyak
          </button>
        </div>
      </div>
    </div>
  )
}

"use client"

import Link from "next/link"
import { 
  ArrowLeft,
  BookOpen, 
  Search, 
  Filter,
  Clock,
  User,
  Calendar,
  Heart,
  Eye,
  Tag
} from "lucide-react"
import { useJurnal } from "@/hooks/useJurnal"
import KegiatanNavigation from "@/components/KegiatanNavigation"

export default function JurnalPage() {
  const { jurnal, loading: jurnalLoading, error: jurnalError } = useJurnal()

  // Debug logging
  console.log('Jurnal data:', { jurnal, loading: jurnalLoading, error: jurnalError })

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <Link href="/kegiatan" className="mr-4 p-2 hover:bg-white/10 rounded-lg transition-colors">
              <ArrowLeft className="w-6 h-6" />
            </Link>
            <div>
              <h1 className="text-5xl font-bold">Jurnal Kegiatan</h1>
              <p className="text-xl text-green-100 mt-2">
                Refleksi, evaluasi, dan pembelajaran dari setiap kegiatan yang telah dilaksanakan
              </p>
            </div>
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
                placeholder="Cari jurnal..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
              <option>Semua Kategori</option>
              <option>Kegiatan Sosial</option>
              <option>Pelatihan</option>
              <option>Teknologi</option>
              <option>Pendidikan</option>
            </select>
            <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>
        </div>

               {/* Debug Section */}
               <div className="mb-8 p-4 bg-blue-50 rounded-lg">
                 <h3 className="font-semibold text-blue-900 mb-2">Debug Info:</h3>
                 <p className="text-sm text-blue-800">
                   <strong>Loading:</strong> {jurnalLoading ? 'Yes' : 'No'} | 
                   <strong> Error:</strong> {jurnalError || 'None'} | 
                   <strong> Count:</strong> {jurnal.length} entries
                 </p>
                 {jurnal.length > 0 && (
                   <details className="mt-2">
                     <summary className="text-sm text-blue-800 cursor-pointer">Show raw data</summary>
                     <pre className="text-xs text-blue-700 mt-2 bg-white p-2 rounded overflow-auto max-h-32">
                       {JSON.stringify(jurnal, null, 2)}
                     </pre>
                   </details>
                 )}
               </div>

               {/* Jurnal Cards */}
               <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                 {jurnalLoading ? (
                   <div className="col-span-2 text-center py-8">
                     <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#255F38] mx-auto"></div>
                     <p className="mt-2 text-gray-600">Memuat jurnal...</p>
                   </div>
                 ) : jurnalError ? (
                   <div className="col-span-2 text-center py-8">
                     <p className="text-red-600">Error: {jurnalError}</p>
                   </div>
                 ) : jurnal.length === 0 ? (
                   <div className="col-span-2 text-center py-8">
                     <p className="text-gray-600">Belum ada jurnal yang tersedia</p>
                   </div>
                 ) : (
            jurnal.map((jurnalItem) => (
              <div key={jurnalItem.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="bg-[#255F38]/10 text-[#255F38] px-3 py-1 rounded-full text-sm font-medium">
                      {jurnalItem.category}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {jurnalItem.read_time}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{jurnalItem.title}</h3>

                {/* Author and Date */}
                <div className="flex items-center mb-4">
                  <User className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-600 mr-4">{jurnalItem.author}</span>
                  <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                  <span className="text-gray-600">{new Date(jurnalItem.created_at).toLocaleDateString('id-ID')}</span>
                </div>

                {/* Content Preview */}
                <p className="text-gray-600 mb-6 leading-relaxed">{jurnalItem.excerpt || jurnalItem.content}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {jurnalItem.tags && jurnalItem.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center text-sm text-gray-600">
                      <Heart className="w-4 h-4 mr-1" />
                      {jurnalItem.likes}
                    </span>
                    <span className="flex items-center text-sm text-gray-600">
                      <Eye className="w-4 h-4 mr-1" />
                      {jurnalItem.comments}
                    </span>
                  </div>
                  <Link 
                    href={`/blog/${jurnalItem.id}`}
                    className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1F7D53] transition-colors"
                  >
                    Baca Selengkapnya
                  </Link>
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

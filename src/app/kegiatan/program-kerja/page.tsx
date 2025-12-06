"use client"

import Link from "next/link"
import { 
  Users, 
  Search, 
  Filter,
  Calendar,
  Target,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle,
  BarChart3
} from "lucide-react"
import KegiatanNavigation from "@/components/KegiatanNavigation"

// Mock data - replace with actual data fetching
const programKerjaData = [
  {
    id: 1,
    nama: "Divisi Pimpinan",
    koordinator: "Ahmad Rizki",
    anggota: 2,
    program: [
      {
        nama: "Rapat Koordinasi Bulanan",
        target: "Evaluasi dan perencanaan kegiatan",
        timeline: "Setiap akhir bulan",
        status: "Berjalan",
        progress: 75
      },
      {
        nama: "Pengembangan Visi Misi",
        target: "Update visi misi organisasi",
        timeline: "Januari - Maret 2024",
        status: "Selesai",
        progress: 100
      },
      {
        nama: "Pelatihan Kepemimpinan",
        target: "Meningkatkan kapasitas kepemimpinan",
        timeline: "April - Juni 2024",
        status: "Akan Dimulai",
        progress: 0
      }
    ]
  },
  {
    id: 2,
    nama: "Divisi Program",
    koordinator: "Budi Santoso",
    anggota: 3,
    program: [
      {
        nama: "Program Bakti Sosial",
        target: "4 kegiatan bakti sosial per tahun",
        timeline: "Maret, Juni, September, Desember",
        status: "Berjalan",
        progress: 60
      },
      {
        nama: "Program Edukasi",
        target: "8 seminar dan workshop",
        timeline: "Setiap bulan",
        status: "Berjalan",
        progress: 80
      },
      {
        nama: "Program Kreativitas",
        target: "Pameran karya siswa",
        timeline: "Desember 2024",
        status: "Perencanaan",
        progress: 0
      }
    ]
  },
  {
    id: 3,
    nama: "Divisi Humas",
    koordinator: "Dewi Kartika",
    anggota: 2,
    program: [
      {
        nama: "Media Sosial Management",
        target: "Update konten harian",
        timeline: "Setiap hari",
        status: "Berjalan",
        progress: 90
      },
      {
        nama: "Publikasi Kegiatan",
        target: "Dokumentasi semua kegiatan",
        timeline: "Ongoing",
        status: "Berjalan",
        progress: 70
      },
      {
        nama: "Kerjasama Eksternal",
        target: "5 kerjasama dengan organisasi lain",
        timeline: "Tahun 2024",
        status: "Perencanaan",
        progress: 0
      }
    ]
  },
  {
    id: 4,
    nama: "Divisi Teknologi",
    koordinator: "Rizki Pratama",
    anggota: 2,
    program: [
      {
        nama: "Digitalisasi Sistem",
        target: "Sistem manajemen digital",
        timeline: "Januari - Juni 2024",
        status: "Berjalan",
        progress: 85
      },
      {
        nama: "Website Development",
        target: "Website organisasi",
        timeline: "Februari - April 2024",
        status: "Selesai",
        progress: 100
      },
      {
        nama: "Pelatihan Teknologi",
        target: "Pelatihan untuk anggota",
        timeline: "Mei - Agustus 2024",
        status: "Akan Dimulai",
        progress: 0
      }
    ]
  }
]

export default function ProgramKerjaPage() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Selesai':
        return <CheckCircle className="w-4 h-4 text-green-600" />
      case 'Berjalan':
        return <TrendingUp className="w-4 h-4 text-blue-600" />
      case 'Akan Dimulai':
        return <Clock className="w-4 h-4 text-yellow-600" />
      case 'Perencanaan':
        return <AlertCircle className="w-4 h-4 text-gray-600" />
      default:
        return <Clock className="w-4 h-4 text-gray-600" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Selesai':
        return 'bg-green-100 text-green-800'
      case 'Berjalan':
        return 'bg-blue-100 text-blue-800'
      case 'Akan Dimulai':
        return 'bg-yellow-100 text-yellow-800'
      case 'Perencanaan':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Program Kerja</h1>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Program kerja dan target pencapaian dari setiap divisi dalam organisasi
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
                placeholder="Cari program kerja..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
              <option>Semua Divisi</option>
              <option>Divisi Pimpinan</option>
              <option>Divisi Program</option>
              <option>Divisi Humas</option>
              <option>Divisi Teknologi</option>
            </select>
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
              <option>Semua Status</option>
              <option>Selesai</option>
              <option>Berjalan</option>
              <option>Akan Dimulai</option>
              <option>Perencanaan</option>
            </select>
            <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Divisi</p>
                <p className="text-2xl font-bold text-gray-900">4</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Program Selesai</p>
                <p className="text-2xl font-bold text-gray-900">3</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-yellow-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-yellow-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Sedang Berjalan</p>
                <p className="text-2xl font-bold text-gray-900">6</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Rata-rata Progress</p>
                <p className="text-2xl font-bold text-gray-900">68%</p>
              </div>
            </div>
          </div>
        </div>

        {/* Program Kerja Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programKerjaData.map((divisi) => (
            <div key={divisi.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{divisi.nama}</h3>
                  <p className="text-gray-600">Koordinator: {divisi.koordinator}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-[#255F38]">{divisi.anggota}</div>
                  <div className="text-sm text-gray-600">Anggota</div>
                </div>
              </div>

              {/* Program List */}
              <div className="space-y-4">
                {divisi.program.map((program, index) => (
                  <div key={index} className="border-l-4 border-[#255F38] pl-4 py-2">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{program.nama}</h4>
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(program.status)}
                        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(program.status)}`}>
                          {program.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-1">{program.target}</p>
                    <p className="text-xs text-gray-500 mb-2">{program.timeline}</p>
                    
                    {/* Progress Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-[#255F38] h-2 rounded-full transition-all duration-300" 
                        style={{width: `${program.progress}%`}}
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Progress</span>
                      <span>{program.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Progress Summary */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">Progress Divisi</span>
                  <span className="font-semibold text-[#255F38]">
                    {Math.round(divisi.program.reduce((acc, prog) => acc + prog.progress, 0) / divisi.program.length)}%
                  </span>
                </div>
                <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-[#255F38] h-2 rounded-full transition-all duration-300" 
                    style={{width: `${Math.round(divisi.program.reduce((acc, prog) => acc + prog.progress, 0) / divisi.program.length)}%`}}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

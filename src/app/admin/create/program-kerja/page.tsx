import type { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowLeft,
  Save,
  Plus,
  X,
  Users,
  Target,
  Calendar,
  TrendingUp,
  CheckCircle,
  Clock,
  Edit,
  Trash2
} from "lucide-react"

export const metadata: Metadata = {
  title: "Create Program Kerja | Admin Dashboard",
  description: "Create new work program for organization",
}

export default function CreateProgramKerjaPage() {
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
                <h1 className="text-3xl font-bold text-gray-900">Create Program Kerja</h1>
                <p className="text-gray-600 mt-1">Buat program kerja baru untuk divisi</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                Preview
              </button>
              <button className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 flex items-center">
                <Save className="w-4 h-4 mr-2" />
                Save Draft
              </button>
              <button className="px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Create Program
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
            {/* Division Information */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">Informasi Divisi</h2>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Divisi *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                      placeholder="Contoh: Divisi Lorem"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Users className="w-4 h-4 inline mr-2" />
                      Koordinator *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                      placeholder="Nama koordinator"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Jumlah Anggota
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                    placeholder="0"
                  />
                </div>
              </div>
            </div>

            {/* Program Items */}
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Program Kerja</h2>
                <button className="px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] flex items-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Tambah Program
                </button>
              </div>

              {/* Add Program Form */}
              <div className="mb-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-medium text-gray-900 mb-4">Tambah Program Baru</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Program *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                      placeholder="Nama program..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Status
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
                      <option value="perencanaan">Perencanaan</option>
                      <option value="akan_dimulai">Akan Dimulai</option>
                      <option value="berjalan">Berjalan</option>
                      <option value="selesai">Selesai</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Target className="w-4 h-4 inline mr-1" />
                      Target *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                      placeholder="Target program..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      <Calendar className="w-4 h-4 inline mr-1" />
                      Timeline *
                    </label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                      placeholder="Timeline program..."
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <button className="px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] flex items-center">
                    <Plus className="w-4 h-4 mr-2" />
                    Tambah Program
                  </button>
                </div>
              </div>

              {/* Existing Programs */}
              <div className="space-y-4">
                <div className="border-l-4 border-[#255F38] pl-4 py-3 bg-gray-50 rounded-r-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Lorem Ipsum Coordination</h4>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        Berjalan
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="w-3 h-3" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                  <p className="text-xs text-gray-500 mb-2">Timeline: Setiap akhir bulan</p>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold text-[#255F38]">75%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#255F38] h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-3 bg-gray-50 rounded-r-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Ipsum Dolor Development</h4>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                        Selesai
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="w-3 h-3" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Sed do eiusmod tempor incididunt ut labore et dolore</p>
                  <p className="text-xs text-gray-500 mb-2">Timeline: Januari - Maret 2024</p>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold text-green-600">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4 py-3 bg-gray-50 rounded-r-lg">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Dolor Sit Training</h4>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                        Akan Dimulai
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Edit className="w-3 h-3" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Ut enim ad minim veniam quis nostrud exercitation</p>
                  <p className="text-xs text-gray-500 mb-2">Timeline: April - Juni 2024</p>
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-semibold text-yellow-600">0%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '0%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Division Stats */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Statistik Divisi</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Program</span>
                  <span className="font-semibold text-gray-900">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Program Berjalan</span>
                  <span className="font-semibold text-blue-600">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Program Selesai</span>
                  <span className="font-semibold text-green-600">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Program Akan Dimulai</span>
                  <span className="font-semibold text-yellow-600">1</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Progress Rata-rata</span>
                  <span className="font-semibold text-[#255F38]">58%</span>
                </div>
              </div>
            </div>

            {/* Status Legend */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Status Legend</h3>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gray-300 rounded mr-3"></div>
                  <span className="text-sm text-gray-700">Perencanaan</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-yellow-500 rounded mr-3"></div>
                  <span className="text-sm text-gray-700">Akan Dimulai</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 rounded mr-3"></div>
                  <span className="text-sm text-gray-700">Berjalan</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 rounded mr-3"></div>
                  <span className="text-sm text-gray-700">Selesai</span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              
              <div className="space-y-3">
                <button className="w-full px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] flex items-center justify-center">
                  <Plus className="w-4 h-4 mr-2" />
                  Tambah Program
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Divisi
                </button>
                <button className="w-full px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View Analytics
                </button>
              </div>
            </div>

            {/* Progress Overview */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Progress Overview</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Overall Progress</span>
                    <span className="font-semibold text-[#255F38]">58%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#255F38] h-2 rounded-full" style={{width: '58%'}}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">This Month</span>
                    <span className="font-semibold text-blue-600">25%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


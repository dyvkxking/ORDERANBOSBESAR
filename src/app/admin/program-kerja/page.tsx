import type { Metadata } from "next"
import { 
  ArrowLeft,
  Save,
  Plus,
  X,
  Users,
  Target,
  Calendar,
  TrendingUp,
  CheckCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Kelola Program Kerja | Admin Dashboard",
  description: "Kelola program kerja dan divisi organisasi",
}

export default function ProgramKerjaManagement() {
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
              <h1 className="text-3xl font-bold text-gray-900">Kelola Program Kerja</h1>
              <p className="text-gray-600 mt-1">Kelola divisi dan program kerja organisasi</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add New Division */}
        <div className="bg-white rounded-lg shadow mb-8">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">Tambah Divisi Baru</h2>
          </div>
          
          <form className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Divisi
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                  placeholder="Contoh: Divisi Lorem"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <Users className="w-4 h-4 inline mr-2" />
                  Koordinator
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                placeholder="0"
              />
            </div>
            
            <div className="flex justify-end">
              <button className="px-6 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] flex items-center">
                <Plus className="w-4 h-4 mr-2" />
                Tambah Divisi
              </button>
            </div>
          </form>
        </div>

        {/* Existing Divisions */}
        <div className="space-y-6">
          {/* Division 1 */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Divisi Lorem</h3>
                  <p className="text-gray-600">Koordinator: Lorem Ipsum • 2 Anggota</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                    <TrendingUp className="w-3 h-3 inline mr-1" />
                    75% Progress
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              {/* Add Program Item */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Tambah Program Baru</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nama Program
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
                      Target
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
                      Timeline
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
              
              {/* Program Items */}
              <div className="space-y-4">
                <div className="border-l-4 border-[#255F38] pl-4 py-2">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Lorem Ipsum Coordination</h4>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        Berjalan
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Lorem ipsum dolor sit amet consectetur adipiscing elit</p>
                  <p className="text-xs text-gray-500">Timeline: Setiap akhir bulan</p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-[#255F38]">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#255F38] h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-green-500 pl-4 py-2">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Ipsum Dolor Development</h4>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-green-100 text-green-800">
                        Selesai
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Sed do eiusmod tempor incididunt ut labore et dolore</p>
                  <p className="text-xs text-gray-500">Timeline: Januari - Maret 2024</p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-green-600">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '100%'}}></div>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4 py-2">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Dolor Sit Training</h4>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                        Akan Dimulai
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Ut enim ad minim veniam quis nostrud exercitation</p>
                  <p className="text-xs text-gray-500">Timeline: April - Juni 2024</p>
                  <div className="mt-2">
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
          </div>

          {/* Division 2 */}
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Divisi Ipsum</h3>
                  <p className="text-gray-600">Koordinator: Dolor Sit • 3 Anggota</p>
                </div>
                <div className="flex space-x-2">
                  <button className="px-3 py-1 text-sm bg-blue-100 text-blue-800 rounded-full">
                    <TrendingUp className="w-3 h-3 inline mr-1" />
                    60% Progress
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              {/* Program Items for Division 2 */}
              <div className="space-y-4">
                <div className="border-l-4 border-[#255F38] pl-4 py-2">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-gray-900">Amet Consectetur Program</h4>
                    <div className="flex items-center space-x-2">
                      <span className="px-2 py-1 rounded text-xs font-medium bg-blue-100 text-blue-800">
                        Berjalan
                      </span>
                      <button className="text-gray-400 hover:text-gray-600">
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-1">Duis aute irure dolor in reprehenderit in voluptate</p>
                  <p className="text-xs text-gray-500">Timeline: Maret, Juni, September, Desember</p>
                  <div className="mt-2">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-gray-600">Progress</span>
                      <span className="font-semibold text-[#255F38]">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-[#255F38] h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
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


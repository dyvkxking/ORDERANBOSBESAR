import type { Metadata } from "next"
import Link from "next/link"
import { 
  BookOpen, 
  Camera, 
  Users, 
  Settings,
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  Save,
  X,
  FileText,
  UserCheck,
  BarChart3
} from "lucide-react"

export const metadata: Metadata = {
  title: "Admin Dashboard | Lorem Ipsum",
  description: "Admin dashboard untuk mengelola konten website",
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-gray-600 mt-1">Kelola konten website Lorem Ipsum</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/admin/create" className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1F7D53] transition-colors">
                <Plus className="w-4 h-4 inline mr-2" />
                Tambah Konten
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <Link href="/admin" className="py-4 px-1 border-b-2 border-[#255F38] text-[#255F38] font-medium">
              <BarChart3 className="w-5 h-5 inline mr-2" />
              Dashboard
            </Link>
        <Link href="/admin/create-post" className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium">
          <Plus className="w-5 h-5 inline mr-2" />
          Create Post
        </Link>
        <Link href="/admin/manage-post" className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium">
          <Edit className="w-5 h-5 inline mr-2" />
          Manage Post
        </Link>
        <Link href="/admin/create" className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium">
          <Plus className="w-5 h-5 inline mr-2" />
          Create
        </Link>
        <Link href="/admin/manage" className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium">
          <Edit className="w-5 h-5 inline mr-2" />
          Manage
        </Link>
            <Link href="/admin/settings" className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium">
              <Settings className="w-5 h-5 inline mr-2" />
              Settings
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Jurnal</p>
                <p className="text-2xl font-bold text-gray-900">12</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Camera className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Dokumentasi</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Blog Posts</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Program Kerja</p>
                <p className="text-2xl font-bold text-gray-900">15</p>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link href="/admin/create-post" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow group border-2 border-indigo-200">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-indigo-100 rounded-lg group-hover:bg-indigo-200 transition-colors">
                <Plus className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Create Post</h3>
                <p className="text-sm text-gray-600">Branched post creation</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">All types</span>
              <Plus className="w-4 h-4 text-gray-400" />
            </div>
          </Link>

          <Link href="/admin/manage-post" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow group border-2 border-teal-200">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-teal-100 rounded-lg group-hover:bg-teal-200 transition-colors">
                <Edit className="w-6 h-6 text-teal-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Manage Post</h3>
                <p className="text-sm text-gray-600">Branched post management</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">All posts</span>
              <Edit className="w-4 h-4 text-gray-400" />
            </div>
          </Link>

          <Link href="/admin/create/blog" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-200 transition-colors">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Create Blogs</h3>
                <p className="text-sm text-gray-600">Write new blog posts</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">24 posts</span>
              <Plus className="w-4 h-4 text-gray-400" />
            </div>
          </Link>

          <Link href="/admin/create/jurnal" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Create Journals</h3>
                <p className="text-sm text-gray-600">Write journal entries</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">12 entries</span>
              <Plus className="w-4 h-4 text-gray-400" />
            </div>
          </Link>

          <Link href="/admin/create/dokumentasi" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-green-100 rounded-lg group-hover:bg-green-200 transition-colors">
                <Camera className="w-6 h-6 text-green-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Add Photo Documentation</h3>
                <p className="text-sm text-gray-600">Upload event photos</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">8 albums</span>
              <Plus className="w-4 h-4 text-gray-400" />
            </div>
          </Link>

          <Link href="/admin/create/program-kerja" className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow group">
            <div className="flex items-center mb-4">
              <div className="p-3 bg-purple-100 rounded-lg group-hover:bg-purple-200 transition-colors">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-semibold text-gray-900">Edit Proker</h3>
                <p className="text-sm text-gray-600">Manage work programs</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">15 programs</span>
              <Plus className="w-4 h-4 text-gray-400" />
            </div>
          </Link>
        </div>

        {/* Management Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Pembelajaran dari Kegiatan Bakti Sosial 2024</p>
                    <p className="text-sm text-gray-600">Jurnal • Published 2 hours ago</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Published</span>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <Camera className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Seminar Nasional Pendidikan 2024</p>
                    <p className="text-sm text-gray-600">Dokumentasi • Published 1 day ago</p>
                  </div>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Published</span>
                </div>
                
                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-5 h-5 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">Divisi Pimpinan Program Update</p>
                    <p className="text-sm text-gray-600">Program Kerja • Updated 3 days ago</p>
                  </div>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Updated</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900">Quick Management</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <Link href="/admin/jurnal" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <BookOpen className="w-5 h-5 text-blue-600 mr-4" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">Manage Journals</h3>
                    <p className="text-sm text-gray-600">Edit, delete, or publish journal entries</p>
                  </div>
                  <Edit className="w-4 h-4 text-gray-400" />
                </Link>

                <Link href="/admin/dokumentasi" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Camera className="w-5 h-5 text-green-600 mr-4" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">Manage Photo Documentation</h3>
                    <p className="text-sm text-gray-600">Organize and manage event photos</p>
                  </div>
                  <Edit className="w-4 h-4 text-gray-400" />
                </Link>

                <Link href="/admin/program-kerja" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <Users className="w-5 h-5 text-purple-600 mr-4" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">Manage Program Kerja</h3>
                    <p className="text-sm text-gray-600">Update work programs and progress</p>
                  </div>
                  <Edit className="w-4 h-4 text-gray-400" />
                </Link>

                <Link href="/admin/members" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <UserCheck className="w-5 h-5 text-orange-600 mr-4" />
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900">Manage Members</h3>
                    <p className="text-sm text-gray-600">Manage team members and roles</p>
                  </div>
                  <Edit className="w-4 h-4 text-gray-400" />
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

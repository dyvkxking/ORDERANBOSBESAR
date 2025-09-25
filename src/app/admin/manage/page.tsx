import type { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowLeft,
  BookOpen, 
  Camera, 
  Users, 
  FileText,
  UserCheck,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  MoreHorizontal
} from "lucide-react"

export const metadata: Metadata = {
  title: "Manage Content | Admin Dashboard",
  description: "Manage all content types in the admin panel",
}

const manageOptions = [
  {
    id: "blogs",
    title: "Manage Blogs",
    description: "Edit, delete, or publish blog posts",
    icon: FileText,
    href: "/admin/blogs",
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-600",
    count: 24,
    recentActivity: "Getting Started with Next.js 15",
    lastUpdated: "2 hours ago"
  },
  {
    id: "journals",
    title: "Manage Journals", 
    description: "Edit, delete, or publish journal entries",
    icon: BookOpen,
    href: "/admin/jurnal",
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    count: 12,
    recentActivity: "Pembelajaran dari Kegiatan Bakti Sosial 2024",
    lastUpdated: "2 hours ago"
  },
  {
    id: "documentation",
    title: "Manage Photo Documentation",
    description: "Organize and manage event photos",
    icon: Camera,
    href: "/admin/dokumentasi",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    count: 8,
    recentActivity: "Seminar Nasional Pendidikan 2024",
    lastUpdated: "1 day ago"
  },
  {
    id: "members",
    title: "Manage Members",
    description: "Manage team members and roles",
    icon: UserCheck,
    href: "/admin/members",
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
    count: 15,
    recentActivity: "New member added: Ahmad Rizki",
    lastUpdated: "3 days ago"
  },
  {
    id: "proker",
    title: "Manage Proker",
    description: "Update work programs and progress",
    icon: Users,
    href: "/admin/program-kerja",
    color: "bg-indigo-500",
    hoverColor: "hover:bg-indigo-600",
    count: 15,
    recentActivity: "Divisi Pimpinan Program Update",
    lastUpdated: "3 days ago"
  }
]

export default function ManagePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-6">
            <Link href="/admin" className="mr-4 p-2 hover:bg-gray-100 rounded-lg">
              <ArrowLeft className="w-5 h-5 text-gray-600" />
            </Link>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Manage Content</h1>
              <p className="text-gray-600 mt-1">Manage all your content types and data</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search content..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>
        </div>

        {/* Management Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {manageOptions.map((option) => {
            const Icon = option.icon
            return (
              <Link
                key={option.id}
                href={option.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-3 ${option.color} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-gray-700">
                          {option.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {option.count} items
                        </p>
                      </div>
                    </div>
                    <MoreHorizontal className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 text-sm">
                    {option.description}
                  </p>

                  {/* Recent Activity */}
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <p className="text-xs text-gray-500 mb-1">Recent Activity</p>
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {option.recentActivity}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {option.lastUpdated}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <span className="text-sm text-gray-500">Click to manage</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <FileText className="w-6 h-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Blogs</p>
                <p className="text-2xl font-bold text-gray-900">24</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 rounded-lg">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Journals</p>
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
                <p className="text-sm font-medium text-gray-600">Photo Albums</p>
                <p className="text-2xl font-bold text-gray-900">8</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Team Members</p>
                <p className="text-2xl font-bold text-gray-900">15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


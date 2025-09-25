import type { Metadata } from "next"
import Link from "next/link"
import { 
  ArrowLeft,
  BookOpen,
  Camera,
  Users,
  FileText,
  Plus,
  Sparkles
} from "lucide-react"

export const metadata: Metadata = {
  title: "Create Content | Admin Dashboard",
  description: "Create new content for the website",
}

const createOptions = [
  {
    id: "blog",
    title: "Create Blogs",
    description: "Write new blog posts with categories and tags",
    icon: FileText,
    href: "/admin/create/blog",
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-600",
    features: [
      "Rich text editor",
      "Blog categories",
      "Tag system",
      "Content scheduling"
    ]
  },
  {
    id: "jurnal",
    title: "Create Journals",
    description: "Write journal entries with rich text editor",
    icon: BookOpen,
    href: "/admin/create/jurnal",
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    features: [
      "Rich text editor",
      "Category & tags",
      "Featured image",
      "SEO optimization"
    ]
  },
  {
    id: "dokumentasi",
    title: "Add Photo Documentation",
    description: "Upload event photos and documentation",
    icon: Camera,
    href: "/admin/create/dokumentasi",
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    features: [
      "Multiple photo upload",
      "Event details",
      "Photo gallery",
      "Bulk upload"
    ]
  },
  {
    id: "proker",
    title: "Edit Proker",
    description: "Manage work programs and progress",
    icon: Users,
    href: "/admin/create/program-kerja",
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
    features: [
      "Divisi management",
      "Program tracking",
      "Progress monitoring",
      "Timeline planning"
    ]
  }
]

export default function CreatePage() {
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
              <h1 className="text-3xl font-bold text-gray-900">Create Content</h1>
              <p className="text-gray-600 mt-1">Pilih jenis konten yang ingin Anda buat</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
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
              <div className="p-2 bg-purple-100 rounded-lg">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Program Kerja</p>
                <p className="text-2xl font-bold text-gray-900">15</p>
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
        </div>

        {/* Create Options */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Pilih Jenis Konten</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {createOptions.map((option) => {
              const Icon = option.icon
              return (
                <Link
                  key={option.id}
                  href={option.href}
                  className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="p-8">
                    {/* Header */}
                    <div className="flex items-center mb-6">
                      <div className={`p-4 ${option.color} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700">
                          {option.title}
                        </h3>
                        <p className="text-gray-600 text-sm">
                          {option.description}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-700 mb-3">Fitur:</h4>
                      <ul className="space-y-2">
                        {option.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Klik untuk mulai membuat</span>
                      <div className={`px-4 py-2 ${option.color} text-white rounded-lg ${option.hoverColor} transition-colors flex items-center`}>
                        <Plus className="w-4 h-4 mr-2" />
                        <span className="font-medium">Create</span>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h3>
          
          <div className="space-y-4">
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <BookOpen className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Lorem Ipsum Dolor Sit Amet</p>
                <p className="text-sm text-gray-600">Jurnal • Published 2 hours ago</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Published</span>
            </div>
            
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <Camera className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Lorem Ipsum Event 2024</p>
                <p className="text-sm text-gray-600">Dokumentasi • Published 1 day ago</p>
              </div>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">Published</span>
            </div>
            
            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                <Users className="w-5 h-5 text-purple-600" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-gray-900">Lorem Ipsum Coordination</p>
                <p className="text-sm text-gray-600">Program Kerja • Updated 3 days ago</p>
              </div>
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Updated</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




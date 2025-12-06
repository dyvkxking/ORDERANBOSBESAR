"use client"

import Link from "next/link"
import { useState } from "react"
import { 
  ArrowLeft,
  BookOpen, 
  Camera, 
  Users, 
  FileText,
  Edit,
  Trash2,
  Eye,
  Search,
  Filter,
  Grid,
  List,
  MoreHorizontal,
  Calendar,
  Tag,
  User,
  Clock,
  Heart,
  MessageCircle,
  Download,
  Share2,
  Archive,
  Star,
  AlertCircle
} from "lucide-react"

const postTypes = [
  {
    id: "blog",
    title: "Blog Posts",
    description: "Manage articles, tutorials, and news posts",
    icon: FileText,
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    borderColor: "border-orange-200",
    count: 24,
    recentCount: 8
  },
  {
    id: "jurnal",
    title: "Journal Entries",
    description: "Manage reflective journal entries and reports",
    icon: BookOpen,
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    count: 12,
    recentCount: 3
  },
  {
    id: "dokumentasi",
    title: "Photo Documentation",
    description: "Manage event photos and media galleries",
    icon: Camera,
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    borderColor: "border-green-200",
    count: 8,
    recentCount: 2
  },
  {
    id: "program-kerja",
    title: "Program Work",
    description: "Manage work programs and project plans",
    icon: Users,
    color: "bg-purple-500",
    hoverColor: "hover:bg-purple-600",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    borderColor: "border-purple-200",
    count: 15,
    recentCount: 4
  }
]

// Mock data for demonstration
const mockPosts = {
  blog: [
    {
      id: "1",
      title: "Getting Started with Next.js 15",
      author: "John Doe",
      category: "Technology",
      status: "published",
      publishedAt: "2024-03-15",
      views: 1250,
      likes: 45,
      comments: 12,
      featured: true
    },
    {
      id: "2",
      title: "The Future of Web Development",
      author: "Jane Smith",
      category: "Technology",
      status: "published",
      publishedAt: "2024-03-10",
      views: 980,
      likes: 32,
      comments: 8,
      featured: false
    },
    {
      id: "3",
      title: "CSS Grid vs Flexbox: When to Use Which",
      author: "John Doe",
      category: "Design",
      status: "draft",
      publishedAt: null,
      views: 0,
      likes: 0,
      comments: 0,
      featured: false
    }
  ],
  jurnal: [
    {
      id: "1",
      title: "Pembelajaran dari Kegiatan Bakti Sosial 2024",
      author: "Ahmad Rizki",
      category: "Kegiatan Sosial",
      status: "published",
      publishedAt: "2024-03-15",
      views: 450,
      likes: 25,
      comments: 8,
      featured: true
    },
    {
      id: "2",
      title: "Evaluasi Program Pelatihan Kepemimpinan",
      author: "Dewi Kartika",
      category: "Pelatihan",
      status: "published",
      publishedAt: "2024-03-12",
      views: 320,
      likes: 18,
      comments: 5,
      featured: false
    }
  ],
  dokumentasi: [
    {
      id: "1",
      title: "Seminar Nasional Pendidikan 2024",
      author: "Admin",
      category: "Seminar",
      status: "published",
      publishedAt: "2024-03-15",
      views: 680,
      likes: 45,
      comments: 12,
      featured: true
    },
    {
      id: "2",
      title: "Workshop Kreativitas dan Inovasi",
      author: "Admin",
      category: "Workshop",
      status: "published",
      publishedAt: "2024-03-10",
      views: 420,
      likes: 28,
      comments: 6,
      featured: false
    }
  ],
  program-kerja: [
    {
      id: "1",
      title: "Divisi Pimpinan Program Update",
      author: "Ahmad Rizki",
      category: "Management",
      status: "active",
      publishedAt: "2024-03-15",
      views: 150,
      likes: 12,
      comments: 3,
      featured: false
    },
    {
      id: "2",
      title: "Digitalisasi Sistem Organisasi",
      author: "Rizki Pratama",
      category: "Technology",
      status: "active",
      publishedAt: "2024-03-12",
      views: 200,
      likes: 15,
      comments: 4,
      featured: true
    }
  ]
}

export default function ManagePostPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [categoryFilter, setCategoryFilter] = useState('all')

  const filteredTypes = postTypes.filter(type =>
    type.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    type.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published':
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'draft':
        return 'bg-yellow-100 text-yellow-800'
      case 'archived':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published':
      case 'active':
        return <Eye className="w-4 h-4" />
      case 'draft':
        return <Edit className="w-4 h-4" />
      case 'archived':
        return <Archive className="w-4 h-4" />
      default:
        return <AlertCircle className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-6">
            <div className="flex items-center">
              <Link href="/admin" className="mr-4 p-2 hover:bg-gray-100 rounded-lg">
                <ArrowLeft className="w-5 h-5 text-gray-600" />
              </Link>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Manage Posts</h1>
                <p className="text-gray-600 mt-1">Manage all your content across different types</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg ${viewMode === 'grid' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg ${viewMode === 'list' ? 'bg-gray-100' : 'hover:bg-gray-100'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select 
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="published">Published</option>
                <option value="draft">Draft</option>
                <option value="archived">Archived</option>
              </select>
              <select 
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
              >
                <option value="all">All Categories</option>
                <option value="Technology">Technology</option>
                <option value="Design">Design</option>
                <option value="Management">Management</option>
              </select>
              <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {!selectedType ? (
          <>
            {/* Post Type Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Content Management</h2>
              <p className="text-gray-600">Select a content type to manage your posts</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {postTypes.map((type) => {
                const Icon = type.icon
                return (
                  <div
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className="cursor-pointer bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-6"
                  >
                    <div className="flex items-center">
                      <div className={`p-3 ${type.color} rounded-lg mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-600">{type.title}</p>
                        <p className="text-2xl font-bold text-gray-900">{type.count}</p>
                        <p className="text-xs text-gray-500">{type.recentCount} this month</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Content Type Cards */}
            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'}`}>
              {filteredTypes.map((type) => {
                const Icon = type.icon
                return (
                  <div
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className="group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-gray-200 p-8"
                  >
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className={`p-4 ${type.color} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700">
                            {type.title}
                          </h3>
                          <p className="text-gray-600">{type.description}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{type.count}</div>
                        <div className="text-sm text-gray-500">posts</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {type.recentCount} this month
                        </span>
                      </div>
                      <div className="flex items-center text-[#255F38] font-medium group-hover:text-[#1F7D53]">
                        Manage Posts
                        <Edit className="w-4 h-4 ml-2" />
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <>
            {/* Selected Type Management */}
            {(() => {
              const type = postTypes.find(t => t.id === selectedType)
              if (!type) return null
              
              const Icon = type.icon
              const posts = mockPosts[selectedType as keyof typeof mockPosts] || []
              
              return (
                <div>
                  <div className="flex items-center mb-6">
                    <button
                      onClick={() => setSelectedType(null)}
                      className="mr-4 p-2 hover:bg-gray-100 rounded-lg"
                    >
                      <ArrowLeft className="w-5 h-5 text-gray-600" />
                    </button>
                    <div className={`p-4 ${type.color} rounded-xl mr-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{type.title}</h2>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>

                  {/* Posts Table/Grid */}
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-gray-900">Posts ({posts.length})</h3>
                        <Link
                          href={`/admin/create/${type.id}`}
                          className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1F7D53] transition-colors flex items-center"
                        >
                          <Edit className="w-4 h-4 mr-2" />
                          Create New
                        </Link>
                      </div>
                    </div>

                    {viewMode === 'list' ? (
                      /* List View */
                      <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Author
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Category
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Published
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Stats
                              </th>
                              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            {posts.map((post) => (
                              <tr key={post.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                  <div className="flex items-center">
                                    {post.featured && <Star className="w-4 h-4 text-yellow-500 mr-2" />}
                                    <div>
                                      <div className="text-sm font-medium text-gray-900 max-w-xs truncate">
                                        {post.title}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <User className="w-4 h-4 text-gray-400 mr-2" />
                                    <span className="text-sm text-gray-900">{post.author}</span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                    {post.category}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(post.status)}`}>
                                    {post.status}
                                  </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  {post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Not published'}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                  <div className="flex space-x-4">
                                    <span className="flex items-center">
                                      <Eye className="w-4 h-4 mr-1" />
                                      {post.views}
                                    </span>
                                    <span className="flex items-center">
                                      <Heart className="w-4 h-4 mr-1" />
                                      {post.likes}
                                    </span>
                                    <span className="flex items-center">
                                      <MessageCircle className="w-4 h-4 mr-1" />
                                      {post.comments}
                                    </span>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                  <div className="flex space-x-2">
                                    <button className="text-blue-600 hover:text-blue-900 p-1 rounded">
                                      <Eye className="w-4 h-4" />
                                    </button>
                                    <button className="text-indigo-600 hover:text-indigo-900 p-1 rounded">
                                      <Edit className="w-4 h-4" />
                                    </button>
                                    <button className="text-red-600 hover:text-red-900 p-1 rounded">
                                      <Trash2 className="w-4 h-4" />
                                    </button>
                                    <button className="text-gray-400 hover:text-gray-600 p-1 rounded">
                                      <MoreHorizontal className="w-4 h-4" />
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      /* Grid View */
                      <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                          {posts.map((post) => (
                            <div key={post.id} className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow">
                              <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                  <div className="flex items-center">
                                    {post.featured && <Star className="w-4 h-4 text-yellow-500 mr-2" />}
                                    <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(post.status)}`}>
                                      {post.status}
                                    </span>
                                  </div>
                                  <button className="text-gray-400 hover:text-gray-600">
                                    <MoreHorizontal className="w-4 h-4" />
                                  </button>
                                </div>

                                <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                  {post.title}
                                </h3>

                                <div className="flex items-center text-sm text-gray-600 mb-3">
                                  <User className="w-4 h-4 mr-2" />
                                  <span className="mr-4">{post.author}</span>
                                  <Calendar className="w-4 h-4 mr-2" />
                                  <span>{post.publishedAt ? new Date(post.publishedAt).toLocaleDateString() : 'Draft'}</span>
                                </div>

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                  <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">
                                    {post.category}
                                  </span>
                                </div>

                                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                  <div className="flex space-x-4">
                                    <span className="flex items-center">
                                      <Eye className="w-4 h-4 mr-1" />
                                      {post.views}
                                    </span>
                                    <span className="flex items-center">
                                      <Heart className="w-4 h-4 mr-1" />
                                      {post.likes}
                                    </span>
                                    <span className="flex items-center">
                                      <MessageCircle className="w-4 h-4 mr-1" />
                                      {post.comments}
                                    </span>
                                  </div>
                                </div>

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
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })()}
          </>
        )}
      </div>
    </div>
  )
}

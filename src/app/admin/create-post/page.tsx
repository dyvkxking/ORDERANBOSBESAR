"use client"

import Link from "next/link"
import { useState } from "react"
import { 
  ArrowLeft,
  BookOpen, 
  Camera, 
  Users, 
  FileText,
  Plus,
  Sparkles,
  ChevronRight,
  Search,
  Filter,
  Grid,
  List
} from "lucide-react"

const postTypes = [
  {
    id: "blog",
    title: "Blog Post",
    description: "Write articles, tutorials, and news posts",
    icon: FileText,
    color: "bg-orange-500",
    hoverColor: "hover:bg-orange-600",
    bgColor: "bg-orange-50",
    textColor: "text-orange-700",
    borderColor: "border-orange-200",
    features: [
      "Rich text editor with image support",
      "SEO optimization tools",
      "Category and tag management",
      "Scheduled publishing",
      "Social media integration"
    ],
    templates: [
      { name: "Article", description: "Standard blog article format" },
      { name: "Tutorial", description: "Step-by-step guide format" },
      { name: "News", description: "News and announcement format" },
      { name: "Review", description: "Product or service review format" }
    ]
  },
  {
    id: "jurnal",
    title: "Journal Entry",
    description: "Create reflective journal entries and reports",
    icon: BookOpen,
    color: "bg-blue-500",
    hoverColor: "hover:bg-blue-600",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    borderColor: "border-blue-200",
    features: [
      "Rich text editor with media support",
      "Activity categorization",
      "Learning outcomes tracking",
      "Reflection prompts",
      "Progress documentation"
    ],
    templates: [
      { name: "Activity Report", description: "Document completed activities" },
      { name: "Learning Journal", description: "Reflect on learning experiences" },
      { name: "Project Update", description: "Update on project progress" },
      { name: "Meeting Notes", description: "Document meeting outcomes" }
    ]
  },
  {
    id: "dokumentasi",
    title: "Photo Documentation",
    description: "Upload and organize event photos and media",
    icon: Camera,
    color: "bg-green-500",
    hoverColor: "hover:bg-green-600",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    borderColor: "border-green-200",
    features: [
      "Bulk photo upload",
      "Automatic image optimization",
      "Event categorization",
      "Photo gallery creation",
      "Metadata management"
    ],
    templates: [
      { name: "Event Gallery", description: "Document events with photos" },
      { name: "Workshop Photos", description: "Capture workshop activities" },
      { name: "Meeting Documentation", description: "Document meeting sessions" },
      { name: "Project Progress", description: "Visual project updates" }
    ]
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
    features: [
      "Project timeline management",
      "Progress tracking",
      "Team collaboration tools",
      "Milestone setting",
      "Resource allocation"
    ],
    templates: [
      { name: "Project Plan", description: "Create new project plans" },
      { name: "Task Assignment", description: "Assign tasks to team members" },
      { name: "Progress Report", description: "Update project progress" },
      { name: "Meeting Agenda", description: "Plan meeting agendas" }
    ]
  }
]

export default function CreatePostPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTypes = postTypes.filter(type =>
    type.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    type.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

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
                <h1 className="text-3xl font-bold text-gray-900">Create Post</h1>
                <p className="text-gray-600 mt-1">Choose a content type to create new posts</p>
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
                  placeholder="Search content types..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent">
                <option>All Categories</option>
                <option>Content Creation</option>
                <option>Documentation</option>
                <option>Management</option>
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
            {/* Content Type Selection */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Choose Content Type</h2>
              <p className="text-gray-600">Select the type of content you want to create</p>
            </div>

            <div className={`grid gap-6 ${viewMode === 'grid' ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-2' : 'grid-cols-1'}`}>
              {filteredTypes.map((type) => {
                const Icon = type.icon
                return (
                  <div
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`group cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border-2 border-transparent hover:border-gray-200 ${
                      viewMode === 'list' ? 'p-6 flex items-center' : 'p-8'
                    }`}
                  >
                    {viewMode === 'grid' ? (
                      <>
                        {/* Grid View */}
                        <div className="flex items-center mb-6">
                          <div className={`p-4 ${type.color} rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300`}>
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700">
                              {type.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                              {type.description}
                            </p>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-700 mb-3">Features:</h4>
                          <ul className="space-y-2">
                            {type.features.map((feature, index) => (
                              <li key={index} className="flex items-center text-sm text-gray-600">
                                <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Templates */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-700 mb-3">Templates:</h4>
                          <div className="flex flex-wrap gap-2">
                            {type.templates.map((template, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                {template.name}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action */}
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">Click to create</span>
                          <div className={`px-4 py-2 ${type.color} text-white rounded-lg ${type.hoverColor} transition-colors flex items-center`}>
                            <Plus className="w-4 h-4 mr-2" />
                            <span className="font-medium">Create</span>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* List View */}
                        <div className={`p-4 ${type.color} rounded-xl mr-6 group-hover:scale-110 transition-transform duration-300`}>
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 group-hover:text-gray-700 mb-2">
                            {type.title}
                          </h3>
                          <p className="text-gray-600 mb-4">{type.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {type.templates.slice(0, 3).map((template, index) => (
                              <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                {template.name}
                              </span>
                            ))}
                            {type.templates.length > 3 && (
                              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                +{type.templates.length - 3} more
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <ChevronRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </>
                    )}
                  </div>
                )
              })}
            </div>
          </>
        ) : (
          <>
            {/* Selected Type Details */}
            {(() => {
              const type = postTypes.find(t => t.id === selectedType)
              if (!type) return null
              
              const Icon = type.icon
              return (
                <div className="bg-white rounded-xl shadow-lg p-8">
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

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Features</h3>
                      <ul className="space-y-3">
                        {type.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <Sparkles className="w-5 h-5 text-yellow-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Templates */}
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Templates</h3>
                      <div className="space-y-3">
                        {type.templates.map((template, index) => (
                          <div key={index} className={`p-4 ${type.bgColor} rounded-lg border ${type.borderColor}`}>
                            <h4 className={`font-medium ${type.textColor} mb-1`}>{template.name}</h4>
                            <p className="text-sm text-gray-600">{template.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      href={`/admin/create/${type.id}`}
                      className={`px-6 py-3 ${type.color} text-white rounded-lg ${type.hoverColor} transition-colors flex items-center`}
                    >
                      <Plus className="w-5 h-5 mr-2" />
                      Create New {type.title}
                    </Link>
                    <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Use Template
                    </button>
                    <button className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                      Import Content
                    </button>
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

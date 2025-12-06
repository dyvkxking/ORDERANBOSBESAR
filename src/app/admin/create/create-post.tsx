"use client"

import Link from "next/link"
import { useState } from "react"
import { ArrowLeft, Plus } from "lucide-react"

const dropdownOptions = [
  { id: 'blog', label: 'Post' },
  { id: 'dokumentasi', label: 'Documentation Photo' },
  { id: 'program-kerja', label: 'Proker' },
  { id: 'jurnal', label: 'Jurnal' }
]

export default function CreatePostPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null)

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
                <h1 className="text-3xl font-bold text-gray-900">Create</h1>
                <p className="text-gray-600 mt-1">Select a content type to create new entries</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown for content type selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <label htmlFor="content-type" className="block text-lg font-medium text-gray-700 mb-2">Choose Content Type</label>
          <select
            id="content-type"
            value={selectedType || ''}
            onChange={e => setSelectedType(e.target.value)}
            className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
          >
            <option value="">Select...</option>
            {dropdownOptions.map(option => (
              <option key={option.id} value={option.id}>{option.label}</option>
            ))}
          </select>
        </div>

        {/* Show details for selected type */}
        {selectedType && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {dropdownOptions.find(opt => opt.id === selectedType)?.label}
            </h2>
            <Link
              href={`/admin/create/${selectedType}`}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center"
            >
              <Plus className="w-5 h-5 mr-2" />
              Create New {dropdownOptions.find(opt => opt.id === selectedType)?.label}
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

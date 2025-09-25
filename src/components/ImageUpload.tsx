'use client'

import { useState, useRef } from 'react'
import { Upload, X, Image as ImageIcon, Loader2, AlertCircle, CheckCircle } from 'lucide-react'

interface ImageUploadProps {
  value?: string
  onChange: (url: string) => void
  onRemove?: () => void
  className?: string
}

export default function ImageUpload({ 
  value, 
  onChange, 
  onRemove,
  className = ""
}: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [preview, setPreview] = useState<string | null>(value || null)
  const [uploadError, setUploadError] = useState<string | null>(null)
  const [uploadSuccess, setUploadSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    // Reset states
    setUploadError(null)
    setUploadSuccess(false)

    // Validate file type
    if (!file.type.startsWith('image/')) {
      setUploadError('Please select an image file (JPEG, PNG, GIF, WebP)')
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setUploadError('File size must be less than 5MB')
      return
    }

    setIsUploading(true)

    try {
      // Create preview
      const previewUrl = URL.createObjectURL(file)
      setPreview(previewUrl)

      // Upload to Supabase Storage via API
      const formData = new FormData()
      formData.append('file', file)

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Upload failed')
      }

      if (result.success) {
        onChange(result.url)
        setUploadSuccess(true)
        // Clear success message after 3 seconds
        setTimeout(() => setUploadSuccess(false), 3000)
      } else {
        throw new Error('Upload failed')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      setUploadError(error instanceof Error ? error.message : 'Upload failed. Please try again.')
      setPreview(null)
    } finally {
      setIsUploading(false)
    }
  }

  const handleRemove = () => {
    if (preview) {
      URL.revokeObjectURL(preview)
    }
    setPreview(null)
    setUploadError(null)
    setUploadSuccess(false)
    onChange('')
    onRemove?.()
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleClick = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className={`image-upload ${className}`}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      {preview ? (
        <div className="relative group">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-48 object-cover rounded-lg border border-gray-300 transition-transform group-hover:scale-105"
          />
          <button
            type="button"
            onClick={handleRemove}
            className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100"
            disabled={isUploading}
            title="Remove image"
          >
            <X className="w-4 h-4" />
          </button>
          {isUploading && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
              <div className="text-center text-white">
                <Loader2 className="w-8 h-8 animate-spin mx-auto mb-2" />
                <p className="text-sm">Uploading...</p>
              </div>
            </div>
          )}
          {uploadSuccess && (
            <div className="absolute top-2 left-2 bg-green-500 text-white rounded-full p-1 animate-pulse">
              <CheckCircle className="w-4 h-4" />
            </div>
          )}
          <div className="absolute bottom-2 left-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
            Click to replace
          </div>
        </div>
      ) : (
        <div
          onClick={handleClick}
          className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[#255F38] hover:bg-green-50 transition-all cursor-pointer group"
        >
          {isUploading ? (
            <div className="flex flex-col items-center">
              <Loader2 className="w-8 h-8 text-[#255F38] animate-spin mb-2" />
              <p className="text-sm text-gray-600 font-medium">Uploading image...</p>
              <p className="text-xs text-gray-500">Please wait</p>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <div className="p-4 bg-gray-100 rounded-full mb-3 group-hover:bg-[#255F38] group-hover:text-white transition-colors">
                <Upload className="w-8 h-8 text-gray-400 group-hover:text-white" />
              </div>
              <p className="text-sm text-gray-600 mb-1 font-medium">Click to upload featured image</p>
              <p className="text-xs text-gray-500">PNG, JPG, GIF, WebP up to 5MB</p>
              <p className="text-xs text-gray-400 mt-1">Recommended: 800x400px</p>
            </div>
          )}
        </div>
      )}

      {/* Error Message */}
      {uploadError && (
        <div className="mt-2 flex items-center text-red-600 text-sm">
          <AlertCircle className="w-4 h-4 mr-2" />
          {uploadError}
        </div>
      )}

      {/* Success Message */}
      {uploadSuccess && (
        <div className="mt-2 flex items-center text-green-600 text-sm">
          <CheckCircle className="w-4 h-4 mr-2" />
          Image uploaded successfully!
        </div>
      )}
    </div>
  )
}

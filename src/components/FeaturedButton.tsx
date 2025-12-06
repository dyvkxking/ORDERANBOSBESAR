'use client'

import { useState } from 'react'
import { Star } from "lucide-react"
import Toast from './Toast'

interface FeaturedButtonProps {
  postId: string
  postTitle: string
  isFeatured: boolean
}

export default function FeaturedButton({ postId, postTitle, isFeatured }: FeaturedButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [toast, setToast] = useState<{
    message: string
    type: 'success' | 'error'
    isVisible: boolean
  }>({
    message: '',
    type: 'success',
    isVisible: false
  })

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type, isVisible: true })
  }

  const handleToggleFeatured = async () => {
    setIsLoading(true)
    
    try {
      const response = await fetch(`/api/posts/${postId}/featured`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ featured: !isFeatured })
      })
      
      if (response.ok) {
        const action = !isFeatured ? 'featured' : 'unfeatured'
        showToast(`Post ${action} successfully!`, 'success')
        // Small delay before reload to show the toast
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      } else {
        const errorData = await response.json()
        showToast(errorData.error || 'Failed to update featured status', 'error')
      }
    } catch (error) {
      console.error('Error toggling featured status:', error)
      showToast('Failed to update featured status', 'error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <button
        type="button"
        className={`p-1 transition-colors ${
          isFeatured 
            ? 'text-yellow-500 hover:text-yellow-600' 
            : 'text-gray-400 hover:text-yellow-500'
        } ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
        title={isFeatured ? 'Remove from featured' : 'Mark as featured'}
        onClick={handleToggleFeatured}
        disabled={isLoading}
      >
        <Star className={`w-4 h-4 ${isFeatured ? 'fill-current' : ''}`} />
      </button>

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />
    </>
  )
}

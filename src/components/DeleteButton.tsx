'use client'

import { useState } from 'react'
import { Trash2 } from "lucide-react"
import DeleteModal from './DeleteModal'
import Toast from './Toast'

interface DeleteButtonProps {
  postId: string
  postTitle: string
}

export default function DeleteButton({ postId, postTitle }: DeleteButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)
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

  const handleDelete = async () => {
    setIsLoading(true)
    
    try {
      const response = await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      })
      
      if (response.ok) {
        showToast('Post deleted successfully!', 'success')
        // Small delay before reload to show the toast
        setTimeout(() => {
          window.location.reload()
        }, 1000)
      } else {
        const errorData = await response.json()
        showToast(errorData.error || 'Failed to delete post', 'error')
      }
    } catch (error) {
      console.error('Error deleting post:', error)
      showToast('Failed to delete post', 'error')
    } finally {
      setIsLoading(false)
      setIsModalOpen(false)
    }
  }

  return (
    <>
      <button
        type="button"
        className="text-red-500 hover:text-red-600 p-1 transition-colors"
        title="Delete post"
        onClick={() => setIsModalOpen(true)}
      >
        <Trash2 className="w-4 h-4" />
      </button>

      <DeleteModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
        postTitle={postTitle}
        isLoading={isLoading}
      />

      <Toast
        message={toast.message}
        type={toast.type}
        isVisible={toast.isVisible}
        onClose={() => setToast(prev => ({ ...prev, isVisible: false }))}
      />
    </>
  )
}

'use client'

import React, { useRef, useState, useCallback, useEffect } from 'react'
import { 
  Bold, 
  Italic, 
  Underline, 
  Type, 
  List, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  Quote, 
  Code, 
  Link as LinkIcon, 
  Image as ImageIcon, 
  Undo, 
  Redo, 
  X 
} from 'lucide-react'

interface SafeRichTextEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
  className?: string
}

export default function SafeRichTextEditor({ 
  content, 
  onChange, 
  placeholder = "Start writing...", 
  className = "" 
}: SafeRichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [imageAlignment, setImageAlignment] = useState<'left' | 'center' | 'right'>('center')
  const [isUpdating, setIsUpdating] = useState(false)

  // Update content state
  const updateContent = useCallback(() => {
    if (editorRef.current) {
      try {
        onChange(editorRef.current.innerHTML)
      } catch (error) {
        console.warn('Failed to update content:', error)
      }
    }
  }, [onChange])

  // Handle input changes
  const handleInput = useCallback((e: React.FormEvent<HTMLDivElement>) => {
    if (!isUpdating) {
      updateContent()
    }
  }, [updateContent, isUpdating])

  // Handle key events
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    // Handle Ctrl+B for bold
    if (e.ctrlKey && e.key === 'b') {
      e.preventDefault()
      insertFormatting('bold')
    }
    // Handle Ctrl+I for italic
    if (e.ctrlKey && e.key === 'i') {
      e.preventDefault()
      insertFormatting('italic')
    }
    // Handle Ctrl+U for underline
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault()
      insertFormatting('underline')
    }
    // Disable Ctrl+V paste functionality
    if (e.ctrlKey && e.key === 'v') {
      e.preventDefault()
      // Do nothing - paste is disabled
    }
  }, [])

  // Safe formatting insertion using document.execCommand
  const insertFormatting = useCallback((format: string) => {
    if (!editorRef.current) return
    
    try {
      editorRef.current.focus()
      
      // Use document.execCommand for safe insertion
      switch (format) {
        case 'bold':
          document.execCommand('bold', false)
          break
        case 'italic':
          document.execCommand('italic', false)
          break
        case 'underline':
          document.execCommand('underline', false)
          break
        case 'h1':
          document.execCommand('formatBlock', false, 'h1')
          break
        case 'h2':
          document.execCommand('formatBlock', false, 'h2')
          break
        case 'h3':
          document.execCommand('formatBlock', false, 'h3')
          break
        case 'blockquote':
          document.execCommand('formatBlock', false, 'blockquote')
          break
        case 'code':
          document.execCommand('formatBlock', false, 'pre')
          break
        case 'ul':
          document.execCommand('insertUnorderedList', false)
          break
        case 'ol':
          document.execCommand('insertOrderedList', false)
          break
        case 'link':
          const url = prompt('Enter URL:')
          if (url) {
            document.execCommand('createLink', false, url)
          }
          break
        default:
          return
      }
      
      updateContent()
    } catch (error) {
      console.warn('Failed to insert formatting:', error)
    }
  }, [updateContent])

  // Safe image insertion using document.execCommand
  const insertImage = useCallback((src: string, alignment: 'left' | 'center' | 'right' = 'center') => {
    if (!editorRef.current) return
    
    try {
      editorRef.current.focus()
      
      // Create image HTML with alignment styles
      let imageHtml = ''
      switch (alignment) {
        case 'left':
          imageHtml = `<img src="${src}" style="max-width: 100%; height: auto; float: left; margin: 10px 15px 10px 0; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); cursor: pointer;" />`
          break
        case 'right':
          imageHtml = `<img src="${src}" style="max-width: 100%; height: auto; float: right; margin: 10px 0 10px 15px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); cursor: pointer;" />`
          break
        case 'center':
          imageHtml = `<img src="${src}" style="max-width: 100%; height: auto; display: block; margin: 10px auto; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); cursor: pointer;" />`
          break
      }
      
      // Use document.execCommand to insert HTML
      document.execCommand('insertHTML', false, imageHtml)
      
      // Update content state
      updateContent()
      
      // Attach event listeners after a brief delay
      setTimeout(() => {
        attachImageEventListeners()
      }, 50)
      
    } catch (error) {
      console.error('Failed to insert image:', error)
    }
  }, [updateContent])

  // Attach event listeners to all images
  const attachImageEventListeners = useCallback(() => {
    if (!editorRef.current) return
    
    try {
      const images = editorRef.current.querySelectorAll('img')
      images.forEach(img => {
        // Only add listeners if they don't already have them
        if (!img.hasAttribute('data-listener-attached')) {
          img.addEventListener('click', handleImageClick)
          img.addEventListener('dblclick', handleImageDoubleClick)
          img.setAttribute('data-listener-attached', 'true')
        }
      })
    } catch (error) {
      console.warn('Failed to attach image event listeners:', error)
    }
  }, [])

  // Handle image click for selection
  const handleImageClick = useCallback((e: Event) => {
    try {
      const img = e.target as HTMLImageElement
      // Simple selection without DOM manipulation
      img.style.border = '2px solid #255F38'
      setTimeout(() => {
        img.style.border = 'none'
      }, 1000)
    } catch (error) {
      console.warn('Failed to select image:', error)
    }
  }, [])

  // Handle image double-click for alignment change
  const handleImageDoubleClick = useCallback((e: Event) => {
    try {
      const img = e.target as HTMLImageElement
      const currentAlignment = img.style.float || (img.style.margin === '10px auto' ? 'center' : 'center')
      let newAlignment: 'left' | 'center' | 'right'
      
      switch (currentAlignment) {
        case 'left':
          newAlignment = 'center'
          break
        case 'center':
          newAlignment = 'right'
          break
        case 'right':
          newAlignment = 'left'
          break
        default:
          newAlignment = 'center'
      }

      // Apply new alignment
      switch (newAlignment) {
        case 'left':
          img.style.float = 'left'
          img.style.marginRight = '15px'
          img.style.marginLeft = '0'
          break
        case 'right':
          img.style.float = 'right'
          img.style.marginLeft = '15px'
          img.style.marginRight = '0'
          break
        case 'center':
          img.style.float = 'none'
          img.style.margin = '10px auto'
          img.style.display = 'block'
          break
      }
      
      updateContent()
    } catch (error) {
      console.warn('Failed to change image alignment:', error)
    }
  }, [updateContent])

  // Handle image button click
  const handleImageButtonClick = useCallback(() => {
    setShowImageModal(true)
  }, [])

  // Handle image URL submission
  const handleImageSubmit = useCallback(() => {
    if (imageUrl.trim()) {
      setImagePreview(imageUrl.trim())
    }
  }, [imageUrl])

  // Handle insert previewed image
  const handleInsertPreviewedImage = useCallback(() => {
    if (imagePreview) {
      insertImage(imagePreview, imageAlignment)
      setShowImageModal(false)
      setImagePreview(null)
      setImageUrl('')
    }
  }, [imagePreview, imageAlignment, insertImage])

  // Handle clear preview
  const handleClearPreview = useCallback(() => {
    setImagePreview(null)
    setUploadedFile(null)
    setImageUrl('')
    setImageAlignment('center')
  }, [])

  // Handle close modal
  const handleCloseModal = useCallback(() => {
    setShowImageModal(false)
    handleClearPreview()
  }, [handleClearPreview])

  // Handle file upload
  const handleFileUpload = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string
        setImagePreview(dataUrl)
        setUploadedFile(file)
      }
      reader.readAsDataURL(file)
    }
  }, [])

  // Initialize event listeners on mount and content change
  useEffect(() => {
    if (editorRef.current) {
      // Add event listeners to existing images
      attachImageEventListeners()
    }

    // Cleanup function
    return () => {
      if (editorRef.current) {
        try {
          const images = editorRef.current.querySelectorAll('img')
          images.forEach(img => {
            img.removeEventListener('click', handleImageClick)
            img.removeEventListener('dblclick', handleImageDoubleClick)
            img.removeAttribute('data-listener-attached')
          })
        } catch (error) {
          console.warn('Failed to cleanup image event listeners:', error)
        }
      }
    }
  }, [content, attachImageEventListeners, handleImageClick, handleImageDoubleClick])

  // Show placeholder when content is empty
  const showPlaceholder = !content || content.trim() === '' || content === '<p></p>' || content === '<div></div>'

  return (
    <div className={`border border-gray-300 rounded-lg ${className}`}>
      {/* Toolbar */}
      <div className="border-b border-gray-300 p-3 flex flex-wrap gap-1 bg-gray-50">
        {/* Text formatting */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => insertFormatting('bold')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Bold (Ctrl+B)"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertFormatting('italic')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Italic (Ctrl+I)"
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertFormatting('underline')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Underline (Ctrl+U)"
          >
            <Underline className="w-4 h-4" />
          </button>
        </div>

        <div className="border-l border-gray-300 mx-2"></div>

        {/* Headings */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => insertFormatting('h1')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Heading 1"
          >
            <Type className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertFormatting('h2')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Heading 2"
          >
            <Type className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertFormatting('h3')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Heading 3"
          >
            <Type className="w-4 h-4" />
          </button>
        </div>

        <div className="border-l border-gray-300 mx-2"></div>

        {/* Lists */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => insertFormatting('ul')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Bullet List"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertFormatting('ol')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Numbered List"
          >
            <List className="w-4 h-4" />
          </button>
        </div>

        <div className="border-l border-gray-300 mx-2"></div>

        {/* Alignment */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => insertFormatting('left')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Align Left"
          >
            <AlignLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertFormatting('center')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Align Center"
          >
            <AlignCenter className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertFormatting('right')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Align Right"
          >
            <AlignRight className="w-4 h-4" />
          </button>
        </div>

        <div className="border-l border-gray-300 mx-2"></div>

        {/* Special formatting */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => insertFormatting('blockquote')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Quote"
          >
            <Quote className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertFormatting('code')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Code Block"
          >
            <Code className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertFormatting('link')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Insert Link"
          >
            <LinkIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleImageButtonClick}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Insert Image"
          >
            <ImageIcon className="w-4 h-4" />
          </button>
        </div>

        <div className="border-l border-gray-300 mx-2"></div>

        {/* Undo/Redo */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => insertFormatting('undo')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Undo (Ctrl+Z)"
          >
            <Undo className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => insertFormatting('redo')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Redo (Ctrl+Y)"
          >
            <Redo className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editor Container */}
      <div className="relative">
        {/* Editor */}
        <div
          ref={editorRef}
          contentEditable
          onInput={handleInput}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`min-h-[400px] p-4 focus:outline-none prose prose-sm max-w-none ${
            isFocused ? 'ring-2 ring-[#255F38] ring-opacity-50' : ''
          }`}
          style={{
            minHeight: '400px',
            lineHeight: '1.6'
          }}
          dangerouslySetInnerHTML={{ __html: content || '' }}
        />
        
        {/* Placeholder */}
        {showPlaceholder && !isFocused && !content && (
          <div className="absolute top-4 left-4 text-gray-400 pointer-events-none">
            {placeholder}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Insert Image</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Image URL Input */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Image URL
              </label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="Enter image URL..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38]"
              />
              <button
                onClick={handleImageSubmit}
                className="mt-2 px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] transition-colors"
              >
                Preview URL
              </button>
            </div>

            {/* File Upload */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Or Upload File
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#255F38]"
              />
            </div>

            {/* Image Preview */}
            {imagePreview && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preview
                </label>
                <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="max-w-full h-auto max-h-48 mx-auto rounded"
                  />
                </div>

                {/* Alignment Options */}
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Alignment
                  </label>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setImageAlignment('left')}
                      className={`px-3 py-1 rounded text-sm ${
                        imageAlignment === 'left'
                          ? 'bg-[#255F38] text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Left
                    </button>
                    <button
                      onClick={() => setImageAlignment('center')}
                      className={`px-3 py-1 rounded text-sm ${
                        imageAlignment === 'center'
                          ? 'bg-[#255F38] text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Center
                    </button>
                    <button
                      onClick={() => setImageAlignment('right')}
                      className={`px-3 py-1 rounded text-sm ${
                        imageAlignment === 'right'
                          ? 'bg-[#255F38] text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      }`}
                    >
                      Right
                    </button>
                  </div>
                </div>

                {/* Insert Button */}
                <button
                  onClick={handleInsertPreviewedImage}
                  className="mt-4 w-full px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] transition-colors"
                >
                  Insert Image
                </button>
              </div>
            )}

            {/* Clear Preview Button */}
            {imagePreview && (
              <button
                onClick={handleClearPreview}
                className="w-full px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors"
              >
                Clear Preview
              </button>
            )}
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-300 text-xs text-gray-600">
        💡 <strong>Tip:</strong> You can use the image button to insert from URL or upload files. Choose image alignment (left, center, right) before inserting. Double-click existing images to cycle through alignments. Use keyboard shortcuts: Ctrl+B (Bold), Ctrl+I (Italic), Ctrl+U (Underline). Paste functionality is disabled to prevent errors.
      </div>

      {/* Custom styles for editor content */}
      <style jsx global>{`
        .prose h1 {
          font-size: 2rem;
          font-weight: bold;
          margin: 1rem 0;
        }
        .prose h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0.875rem 0;
        }
        .prose h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin: 0.75rem 0;
        }
        .prose blockquote {
          border-left: 4px solid #255F38;
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
          background-color: #f9f9f9;
          padding: 1rem;
        }
        .prose pre {
          background-color: #f4f4f4;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          font-family: monospace;
        }
        .prose ul, .prose ol {
          margin: 1rem 0;
          padding-left: 2rem;
        }
        .prose li {
          margin: 0.5rem 0;
        }
        .prose a {
          color: #255F38;
          text-decoration: underline;
        }
        .prose img {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        .prose img[style*="float: left"] {
          float: left;
          margin-right: 15px;
          margin-left: 0;
        }
        .prose img[style*="float: right"] {
          float: right;
          margin-left: 15px;
          margin-right: 0;
        }
        .prose img[style*="margin: 10px auto"] {
          display: block;
          margin: 10px auto;
        }
      `}</style>
    </div>
  )
}

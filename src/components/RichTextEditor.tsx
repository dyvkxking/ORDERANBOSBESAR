"use client"

import { useState, useRef, useCallback, useEffect } from 'react'
import { 
  Bold, 
  Italic, 
  Underline, 
  Link as LinkIcon, 
  List, 
  ListOrdered, 
  Heading1, 
  Heading2, 
  Heading3, 
  Image as ImageIcon,
  Type,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Quote,
  Code,
  Undo,
  Redo
} from 'lucide-react'

interface RichTextEditorProps {
  content: string
  onChange: (content: string) => void
  placeholder?: string
  className?: string
}

export default function RichTextEditor({ 
  content, 
  onChange, 
  placeholder = "Write your content here...",
  className = ""
}: RichTextEditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [imageUrl, setImageUrl] = useState('')
  const [activeFormats, setActiveFormats] = useState<Set<string>>(new Set())

  // Update content state
  const updateContent = useCallback(() => {
    if (editorRef.current) {
      onChange(editorRef.current.innerHTML)
    }
  }, [onChange])

  // Handle input changes
  const handleInput = useCallback((e: React.FormEvent<HTMLDivElement>) => {
    updateContent()
    updateActiveFormats()
  }, [updateContent])

  // Update active formats based on current selection
  const updateActiveFormats = useCallback(() => {
    if (!editorRef.current) return
    
    const selection = window.getSelection()
    if (!selection || selection.rangeCount === 0) return

    const range = selection.getRangeAt(0)
    const formats = new Set<string>()

    // Check for bold
    if (document.queryCommandState('bold')) {
      formats.add('bold')
    }

    // Check for italic
    if (document.queryCommandState('italic')) {
      formats.add('italic')
    }

    // Check for underline
    if (document.queryCommandState('underline')) {
      formats.add('underline')
    }

    // Check for heading levels
    const container = range.commonAncestorContainer
    let element = container.nodeType === Node.TEXT_NODE ? container.parentElement : container as Element
    
    while (element && element !== editorRef.current) {
      if (element.tagName === 'H1') {
        formats.add('h1')
        break
      } else if (element.tagName === 'H2') {
        formats.add('h2')
        break
      } else if (element.tagName === 'H3') {
        formats.add('h3')
        break
      } else if (element.tagName === 'BLOCKQUOTE') {
        formats.add('blockquote')
        break
      } else if (element.tagName === 'PRE') {
        formats.add('code')
        break
      }
      element = element.parentElement
    }

    // Check for list items
    if (element) {
      if (element.tagName === 'UL' || element.closest('ul')) {
        formats.add('ul')
      } else if (element.tagName === 'OL' || element.closest('ol')) {
        formats.add('ol')
      }
    }

    // Check for text alignment
    if (element) {
      const computedStyle = window.getComputedStyle(element)
      const textAlign = computedStyle.textAlign
      if (textAlign === 'center') {
        formats.add('center')
      } else if (textAlign === 'right') {
        formats.add('right')
      } else {
        formats.add('left')
      }
    }

    setActiveFormats(formats)
  }, [])

  // Modern command execution using Selection API
  const execCommand = useCallback((command: string, value?: string) => {
    if (!editorRef.current) return
    
    editorRef.current.focus()
    
    try {
      // Use execCommand for basic formatting
      if (document.queryCommandSupported && document.queryCommandSupported(command)) {
        const success = document.execCommand(command, false, value)
        if (success) {
          updateContent()
          updateActiveFormats()
        }
      } else {
        // Fallback for unsupported commands
        console.warn(`Command ${command} not supported, using fallback`)
      }
    } catch (error) {
      console.error('Error executing command:', error)
    }
  }, [updateContent, updateActiveFormats])

  // Enhanced command execution with better support
  const execCommandEnhanced = useCallback((command: string, value?: string) => {
    if (!editorRef.current) return
    
    editorRef.current.focus()
    
    try {
      // Force selection if none exists
      const selection = window.getSelection()
      if (!selection || selection.rangeCount === 0) {
        const range = document.createRange()
        range.selectNodeContents(editorRef.current)
        selection?.removeAllRanges()
        selection?.addRange(range)
      }

      // Execute command
      const success = document.execCommand(command, false, value)
      
      if (success) {
        updateContent()
        updateActiveFormats()
      } else {
        console.warn(`Command ${command} failed`)
      }
    } catch (error) {
      console.error('Error executing command:', error)
    }
  }, [updateContent, updateActiveFormats])

  // Handle key events for better functionality
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLDivElement>) => {
    // Handle Ctrl+B for bold
    if (e.ctrlKey && e.key === 'b') {
      e.preventDefault()
      execCommand('bold')
    }
    // Handle Ctrl+I for italic
    if (e.ctrlKey && e.key === 'i') {
      e.preventDefault()
      execCommand('italic')
    }
    // Handle Ctrl+U for underline
    if (e.ctrlKey && e.key === 'u') {
      e.preventDefault()
      execCommand('underline')
    }
  }, [execCommand])

  // Handle paste events for images
  const handlePaste = useCallback((e: ClipboardEvent) => {
    e.preventDefault()
    
    const items = e.clipboardData?.items
    if (!items) return

    for (let i = 0; i < items.length; i++) {
      const item = items[i]
      
      if (item.type.indexOf('image') !== -1) {
        const file = item.getAsFile()
        if (file) {
          // Convert file to data URL
          const reader = new FileReader()
          reader.onload = (event) => {
            const dataUrl = event.target?.result as string
            insertImage(dataUrl)
          }
          reader.readAsDataURL(file)
        }
      } else if (item.type === 'text/plain') {
        // Handle text paste
        const text = e.clipboardData?.getData('text/plain')
        if (text) {
          document.execCommand('insertText', false, text)
        }
      }
    }
  }, [])

  // Insert image into editor
  const insertImage = (src: string) => {
    if (!editorRef.current) return
    
    const img = document.createElement('img')
    img.src = src
    img.style.maxWidth = '100%'
    img.style.height = 'auto'
    img.style.display = 'block'
    img.style.margin = '10px 0'
    img.style.borderRadius = '8px'
    img.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)'
    img.style.cursor = 'pointer'
    
    // Add click handler to select image
    img.addEventListener('click', () => {
      const selection = window.getSelection()
      if (selection) {
        selection.removeAllRanges()
        const range = document.createRange()
        range.selectNode(img)
        selection.addRange(range)
      }
    })
    
    // Insert image at cursor position
    const selection = window.getSelection()
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0)
      range.deleteContents()
      range.insertNode(img)
      
      // Move cursor after image
      range.setStartAfter(img)
      range.collapse(true)
      selection.removeAllRanges()
      selection.addRange(range)
    } else {
      // If no selection, append to end
      editorRef.current.appendChild(img)
    }
    
    // Update content
    updateContent()
  }

  // Handle image button click
  const handleImageClick = () => {
    setShowImageModal(true)
  }

  // Handle image URL submission
  const handleImageSubmit = () => {
    if (imageUrl.trim()) {
      insertImage(imageUrl.trim())
      setImageUrl('')
      setShowImageModal(false)
    }
  }

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const dataUrl = event.target?.result as string
        insertImage(dataUrl)
      }
      reader.readAsDataURL(file)
    }
  }

  // Set up paste event listener
  useEffect(() => {
    const editor = editorRef.current
    if (editor) {
      editor.addEventListener('paste', handlePaste)
      return () => {
        editor.removeEventListener('paste', handlePaste)
      }
    }
  }, [handlePaste])

  // Set initial content
  useEffect(() => {
    if (editorRef.current) {
      const currentContent = editorRef.current.innerHTML
      if (content !== currentContent) {
        editorRef.current.innerHTML = content || ''
      }
    }
  }, [content])

  // Initialize content on mount
  useEffect(() => {
    if (editorRef.current) {
      if (content) {
        editorRef.current.innerHTML = content
      } else {
        editorRef.current.innerHTML = ''
      }
    }
  }, [])

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
            onClick={() => execCommandEnhanced('bold')}
            className={`p-2 hover:bg-gray-200 rounded transition-colors ${
              activeFormats.has('bold') ? 'bg-blue-100 text-blue-600' : ''
            }`}
            title="Bold (Ctrl+B)"
          >
            <Bold className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => execCommandEnhanced('italic')}
            className={`p-2 hover:bg-gray-200 rounded transition-colors ${
              activeFormats.has('italic') ? 'bg-blue-100 text-blue-600' : ''
            }`}
            title="Italic (Ctrl+I)"
          >
            <Italic className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => execCommandEnhanced('underline')}
            className={`p-2 hover:bg-gray-200 rounded transition-colors ${
              activeFormats.has('underline') ? 'bg-blue-100 text-blue-600' : ''
            }`}
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
            onClick={() => execCommandEnhanced('formatBlock', 'h1')}
            className={`p-2 hover:bg-gray-200 rounded transition-colors ${
              activeFormats.has('h1') ? 'bg-green-100 text-green-600' : ''
            }`}
            title="Heading 1"
          >
            <Heading1 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => execCommandEnhanced('formatBlock', 'h2')}
            className={`p-2 hover:bg-gray-200 rounded transition-colors ${
              activeFormats.has('h2') ? 'bg-green-100 text-green-600' : ''
            }`}
            title="Heading 2"
          >
            <Heading2 className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => execCommandEnhanced('formatBlock', 'h3')}
            className={`p-2 hover:bg-gray-200 rounded transition-colors ${
              activeFormats.has('h3') ? 'bg-green-100 text-green-600' : ''
            }`}
            title="Heading 3"
          >
            <Heading3 className="w-4 h-4" />
          </button>
        </div>

        <div className="border-l border-gray-300 mx-2"></div>

        {/* Lists */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => execCommandEnhanced('insertUnorderedList')}
            className={`p-2 hover:bg-gray-200 rounded transition-colors ${
              activeFormats.has('ul') ? 'bg-purple-100 text-purple-600' : ''
            }`}
            title="Bullet List"
          >
            <List className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => execCommandEnhanced('insertOrderedList')}
            className={`p-2 hover:bg-gray-200 rounded transition-colors ${
              activeFormats.has('ol') ? 'bg-purple-100 text-purple-600' : ''
            }`}
            title="Numbered List"
          >
            <ListOrdered className="w-4 h-4" />
          </button>
        </div>

        <div className="border-l border-gray-300 mx-2"></div>

        {/* Alignment */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => execCommandEnhanced('justifyLeft')}
            className={`p-2 hover:bg-gray-200 rounded transition-colors ${
              activeFormats.has('left') ? 'bg-orange-100 text-orange-600' : ''
            }`}
            title="Align Left"
          >
            <AlignLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => execCommandEnhanced('justifyCenter')}
            className={`p-2 hover:bg-gray-200 rounded transition-colors ${
              activeFormats.has('center') ? 'bg-orange-100 text-orange-600' : ''
            }`}
            title="Align Center"
          >
            <AlignCenter className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => execCommandEnhanced('justifyRight')}
            className={`p-2 hover:bg-gray-200 rounded transition-colors ${
              activeFormats.has('right') ? 'bg-orange-100 text-orange-600' : ''
            }`}
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
            onClick={() => execCommandEnhanced('formatBlock', 'blockquote')}
            className={`p-2 hover:bg-gray-200 rounded transition-colors ${
              activeFormats.has('blockquote') ? 'bg-yellow-100 text-yellow-600' : ''
            }`}
            title="Quote"
          >
            <Quote className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => execCommandEnhanced('formatBlock', 'pre')}
            className={`p-2 hover:bg-gray-200 rounded transition-colors ${
              activeFormats.has('code') ? 'bg-gray-100 text-gray-600' : ''
            }`}
            title="Code Block"
          >
            <Code className="w-4 h-4" />
          </button>
        </div>

        <div className="border-l border-gray-300 mx-2"></div>

        {/* Links and Images */}
        <div className="flex gap-1">
          <button
            type="button"
            onClick={() => {
              const url = prompt('Enter URL:')
              if (url) execCommandEnhanced('createLink', url)
            }}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Insert Link"
          >
            <LinkIcon className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={handleImageClick}
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
            onClick={() => execCommandEnhanced('undo')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Undo (Ctrl+Z)"
          >
            <Undo className="w-4 h-4" />
          </button>
          <button
            type="button"
            onClick={() => execCommandEnhanced('redo')}
            className="p-2 hover:bg-gray-200 rounded transition-colors"
            title="Redo (Ctrl+Y)"
          >
            <Redo className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        onKeyDown={handleKeyDown}
        onFocus={() => {
          setIsFocused(true)
          updateActiveFormats()
        }}
        onBlur={() => setIsFocused(false)}
        onSelectionChange={updateActiveFormats}
        className={`min-h-[400px] p-4 focus:outline-none relative prose prose-sm max-w-none ${
          isFocused ? 'ring-2 ring-[#255F38] ring-opacity-50' : ''
        }`}
        style={{ 
          minHeight: '400px',
          lineHeight: '1.6'
        }}
        suppressContentEditableWarning={true}
      >
        {showPlaceholder && (
          <div className="absolute top-4 left-4 text-gray-400 pointer-events-none">
            {placeholder}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-96 max-w-full mx-4">
            <h3 className="text-lg font-semibold mb-4">Insert Image</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Image URL
                </label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Or upload file
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={() => setShowImageModal(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleImageSubmit}
                className="px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53]"
              >
                Insert Image
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instructions */}
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-300 text-xs text-gray-600">
        💡 <strong>Tip:</strong> You can paste images directly from your clipboard (Ctrl+V) or use the image button to insert from URL or upload files. Use keyboard shortcuts: Ctrl+B (Bold), Ctrl+I (Italic), Ctrl+U (Underline), Ctrl+Z (Undo), Ctrl+Y (Redo).
      </div>

      {/* Custom styles for editor content */}
      <style jsx global>{`
        .prose h1 {
          font-size: 2rem;
          font-weight: bold;
          margin: 1.5rem 0 1rem 0;
          color: #1a1a1a;
          line-height: 1.2;
        }
        .prose h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 1.25rem 0 0.75rem 0;
          color: #1a1a1a;
          line-height: 1.3;
        }
        .prose h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin: 1rem 0 0.5rem 0;
          color: #1a1a1a;
          line-height: 1.4;
        }
        .prose p {
          margin: 0.75rem 0;
          line-height: 1.6;
        }
        .prose ul, .prose ol {
          margin: 0.75rem 0;
          padding-left: 1.5rem;
        }
        .prose li {
          margin: 0.25rem 0;
        }
        .prose blockquote {
          border-left: 4px solid #255F38;
          padding-left: 1rem;
          margin: 1rem 0;
          font-style: italic;
          color: #666;
        }
        .prose pre {
          background-color: #f5f5f5;
          padding: 1rem;
          border-radius: 0.5rem;
          overflow-x: auto;
          margin: 1rem 0;
          font-family: 'Courier New', monospace;
        }
        .prose code {
          background-color: #f5f5f5;
          padding: 0.125rem 0.25rem;
          border-radius: 0.25rem;
          font-family: 'Courier New', monospace;
          font-size: 0.875rem;
        }
        .prose a {
          color: #255F38;
          text-decoration: underline;
        }
        .prose a:hover {
          color: #1F7D53;
        }
        .prose img {
          max-width: 100%;
          height: auto;
          border-radius: 0.5rem;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          margin: 1rem 0;
        }
        .prose strong {
          font-weight: bold;
        }
        .prose em {
          font-style: italic;
        }
        .prose u {
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}
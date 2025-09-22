'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  Quote, 
  Link, 
  Type, 
  AlignLeft, 
  AlignCenter, 
  AlignRight,
  Code,
  Undo,
  Redo
} from 'lucide-react'

interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  className?: string
}

export default function RichTextEditor({ 
  value, 
  onChange, 
  placeholder = "Write your content here...",
  className = ""
}: RichTextEditorProps) {
  const [isFocused, setIsFocused] = useState(false)
  const editorRef = useRef<HTMLDivElement>(null)

  const executeCommand = (command: string, value?: string) => {
    try {
      document.execCommand(command, false, value)
      editorRef.current?.focus()
      updateContent()
    } catch (error) {
      console.error('Error executing command:', command, error)
    }
  }

  const updateContent = () => {
    if (editorRef.current) {
      const content = editorRef.current.innerHTML
      // Only update if content actually changed to prevent infinite loops
      if (content !== value) {
        onChange(content)
      }
    }
  }

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault()
    const text = e.clipboardData.getData('text/plain')
    try {
      document.execCommand('insertText', false, text)
      updateContent()
    } catch (error) {
      console.error('Error pasting text:', error)
      // Fallback: insert text manually
      if (editorRef.current) {
        const selection = window.getSelection()
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0)
          range.deleteContents()
          range.insertNode(document.createTextNode(text))
          range.collapse(false)
          selection.removeAllRanges()
          selection.addRange(range)
          updateContent()
        }
      }
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Tab') {
      e.preventDefault()
      executeCommand('indent')
    }
  }

  const insertLink = () => {
    const url = prompt('Enter URL:')
    if (url) {
      executeCommand('createLink', url)
    }
  }

  const insertCode = () => {
    executeCommand('formatBlock', 'pre')
  }

  const insertQuote = () => {
    executeCommand('formatBlock', 'blockquote')
  }

  const insertHeading = (level: number) => {
    executeCommand('formatBlock', `h${level}`)
  }

  const insertParagraph = () => {
    executeCommand('formatBlock', 'p')
  }

  const undo = () => {
    executeCommand('undo')
  }

  const redo = () => {
    executeCommand('redo')
  }

  const clearFormatting = () => {
    executeCommand('removeFormat')
  }

  useEffect(() => {
    if (editorRef.current) {
      // Only update if the content is actually different
      if (value !== editorRef.current.innerHTML) {
        const selection = window.getSelection()
        const range = selection?.getRangeAt(0)
        const startOffset = range?.startOffset || 0
        const endOffset = range?.endOffset || 0
        const isFocused = document.activeElement === editorRef.current
        
        // Store the current selection before updating
        const currentSelection = isFocused ? {
          startOffset,
          endOffset,
          range
        } : null
        
        editorRef.current.innerHTML = value || ''
        
        // Only restore cursor position if the editor was focused and we had a valid selection
        if (isFocused && selection && currentSelection) {
          try {
            const newRange = document.createRange()
            const textNode = editorRef.current.firstChild
            if (textNode && textNode.textContent) {
              const maxOffset = textNode.textContent.length
              newRange.setStart(textNode, Math.min(currentSelection.startOffset, maxOffset))
              newRange.setEnd(textNode, Math.min(currentSelection.endOffset, maxOffset))
              selection.removeAllRanges()
              selection.addRange(newRange)
            } else {
              // Fallback: place cursor at end
              newRange.selectNodeContents(editorRef.current)
              newRange.collapse(false)
              selection.removeAllRanges()
              selection.addRange(newRange)
            }
          } catch (e) {
            // Fallback: place cursor at end
            const newRange = document.createRange()
            newRange.selectNodeContents(editorRef.current)
            newRange.collapse(false)
            selection.removeAllRanges()
            selection.addRange(newRange)
          }
        }
      }
    }
  }, [value])

  return (
    <div className={`rich-text-editor border border-[#d1d5db] rounded-lg ${className}`}>
      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-1 p-2 border-b border-[#d1d5db] bg-[#e5e5e5] rounded-t-lg">
        {/* Undo/Redo */}
        <button
          type="button"
          onClick={undo}
          className="p-2 hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#666666]"
          title="Undo"
        >
          <Undo className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={redo}
          className="p-2 hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#666666]"
          title="Redo"
        >
          <Redo className="w-4 h-4" />
        </button>
        
        <div className="w-px h-6 bg-[#d1d5db] mx-1" />
        
        {/* Text Formatting */}
        <button
          type="button"
          onClick={() => executeCommand('bold')}
          className="p-2 hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#666666]"
          title="Bold"
        >
          <Bold className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => executeCommand('italic')}
          className="p-2 hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#666666]"
          title="Italic"
        >
          <Italic className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => executeCommand('underline')}
          className="p-2 hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#666666]"
          title="Underline"
        >
          <Underline className="w-4 h-4" />
        </button>
        
        <div className="w-px h-6 bg-[#d1d5db] mx-1" />
        
        {/* Headings */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => insertHeading(1)}
            className="px-3 py-1 text-sm font-bold hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#255F38] border border-[#255F38]"
            title="Heading 1"
          >
            H1
          </button>
          <button
            type="button"
            onClick={() => insertHeading(2)}
            className="px-3 py-1 text-sm font-bold hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#255F38] border border-[#255F38]"
            title="Heading 2"
          >
            H2
          </button>
          <button
            type="button"
            onClick={() => insertHeading(3)}
            className="px-3 py-1 text-sm font-bold hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#255F38] border border-[#255F38]"
            title="Heading 3"
          >
            H3
          </button>
          <button
            type="button"
            onClick={insertParagraph}
            className="px-3 py-1 text-sm hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#666666] border border-[#d1d5db]"
            title="Paragraph"
          >
            P
          </button>
        </div>
        
        <div className="w-px h-6 bg-[#d1d5db] mx-1" />
        
        {/* Lists */}
        <button
          type="button"
          onClick={() => executeCommand('insertUnorderedList')}
          className="p-2 hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#666666] border border-transparent hover:border-[#255F38]"
          title="Bullet List"
        >
          <List className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => executeCommand('insertOrderedList')}
          className="p-2 hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#666666] border border-transparent hover:border-[#255F38]"
          title="Numbered List"
        >
          <ListOrdered className="w-4 h-4" />
        </button>
        
        <div className="w-px h-6 bg-[#d1d5db] mx-1" />
        
        {/* Special Formatting */}
        <button
          type="button"
          onClick={insertQuote}
          className="p-2 hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#666666]"
          title="Quote"
        >
          <Quote className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={insertCode}
          className="p-2 hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#666666]"
          title="Code Block"
        >
          <Code className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={insertLink}
          className="p-2 hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#666666]"
          title="Insert Link"
        >
          <Link className="w-4 h-4" />
        </button>
        
        <div className="w-px h-6 bg-[#d1d5db] mx-1" />
        
        {/* Alignment */}
        <button
          type="button"
          onClick={() => executeCommand('justifyLeft')}
          className="p-2 hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#666666]"
          title="Align Left"
        >
          <AlignLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => executeCommand('justifyCenter')}
          className="p-2 hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#666666]"
          title="Align Center"
        >
          <AlignCenter className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => executeCommand('justifyRight')}
          className="p-2 hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#666666]"
          title="Align Right"
        >
          <AlignRight className="w-4 h-4" />
        </button>
        
        <div className="w-px h-6 bg-[#d1d5db] mx-1" />
        
        {/* Clear Formatting */}
        <button
          type="button"
          onClick={clearFormatting}
          className="p-2 hover:bg-[#255F38] hover:text-white rounded transition-colors text-[#666666]"
          title="Clear Formatting"
        >
          <Type className="w-4 h-4" />
        </button>
      </div>
      
      {/* Editor */}
      <div
        ref={editorRef}
        contentEditable
        onInput={updateContent}
        onPaste={handlePaste}
        onKeyDown={handleKeyDown}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`min-h-[200px] p-4 focus:outline-none bg-white text-[#1a1a1a] ${
          isFocused ? 'ring-2 ring-[#255F38]' : ''
        }`}
        style={{ minHeight: '200px' }}
        data-placeholder={placeholder}
      />
      
      <style jsx global>{`
        .rich-text-editor [contenteditable]:empty:before {
          content: attr(data-placeholder);
          color: #666666;
          font-style: italic;
        }
        .rich-text-editor [contenteditable] {
          outline: none;
        }
        .rich-text-editor [contenteditable] h1 {
          font-size: 1.875rem;
          font-weight: bold;
          margin: 0.5rem 0;
        }
        .rich-text-editor [contenteditable] h2 {
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0.5rem 0;
        }
        .rich-text-editor [contenteditable] h3 {
          font-size: 1.25rem;
          font-weight: bold;
          margin: 0.5rem 0;
        }
        .rich-text-editor [contenteditable] p {
          margin: 0.5rem 0;
        }
        .rich-text-editor [contenteditable] ul, .rich-text-editor [contenteditable] ol {
          margin: 0.5rem 0;
          padding-left: 1.5rem;
        }
        .rich-text-editor [contenteditable] blockquote {
          border-left: 4px solid #255F38;
          padding-left: 1rem;
          margin: 0.5rem 0;
          font-style: italic;
          color: #666666;
        }
        .rich-text-editor [contenteditable] pre {
          background-color: #f3f4f6;
          padding: 1rem;
          border-radius: 0.375rem;
          margin: 0.5rem 0;
          font-family: monospace;
          color: #1a1a1a;
        }
        .rich-text-editor [contenteditable] a {
          color: #255F38;
          text-decoration: underline;
        }
      `}</style>
    </div>
  )
}

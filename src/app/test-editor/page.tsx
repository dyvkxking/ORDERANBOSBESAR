"use client"

import { useState } from 'react'
import RichTextEditor from '@/components/RichTextEditor'

export default function TestEditorPage() {
  const [content, setContent] = useState('')

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Rich Text Editor Test</h1>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Editor</h2>
            <RichTextEditor
              content={content}
              onChange={setContent}
              placeholder="Test the editor here... Try typing, formatting, and pasting images!"
              className="min-h-[400px]"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Content Preview</h3>
              <div className="p-4 bg-gray-100 rounded-lg min-h-[200px]">
                {content ? (
                  <div dangerouslySetInnerHTML={{ __html: content }} />
                ) : (
                  <p className="text-gray-500 italic">No content yet...</p>
                )}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-2">Raw HTML</h3>
              <pre className="p-4 bg-gray-100 rounded-lg min-h-[200px] text-xs overflow-auto">
                {content || 'No content yet...'}
              </pre>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">Test Instructions:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li>1. Type some text in the editor</li>
              <li>2. Use the toolbar buttons to format text (bold, italic, etc.)</li>
              <li>3. Try keyboard shortcuts: Ctrl+B (bold), Ctrl+I (italic), Ctrl+U (underline)</li>
              <li>4. Copy an image from anywhere and paste it (Ctrl+V)</li>
              <li>5. Use the image button to upload a file or add from URL</li>
              <li>6. Check the preview and raw HTML output below</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}


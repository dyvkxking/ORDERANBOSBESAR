"use client"

import { useState } from 'react'
import RichTextEditor from '@/components/RichTextEditor'

export default function DemoEditorPage() {
  const [content, setContent] = useState('')

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Rich Text Editor Demo</h1>
          <p className="text-gray-600 mb-8">
            This demo shows the image pasting functionality. Try copying an image from anywhere and pasting it here (Ctrl+V)!
          </p>
          
          <RichTextEditor
            content={content}
            onChange={setContent}
            placeholder="Start writing your content here... Try pasting an image from your clipboard!"
            className="min-h-[600px]"
          />
          
          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold text-gray-900 mb-2">Features:</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>✅ <strong>Image Pasting:</strong> Copy any image and paste it directly (Ctrl+V)</li>
              <li>✅ <strong>Image Upload:</strong> Click the image button to upload files or add from URL</li>
              <li>✅ <strong>Rich Text:</strong> Bold, italic, headings, lists, alignment, and more</li>
              <li>✅ <strong>Auto-styling:</strong> Images are automatically styled and responsive</li>
              <li>✅ <strong>Undo/Redo:</strong> Full undo and redo support</li>
            </ul>
          </div>
          
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-2">How to test image pasting:</h3>
            <ol className="text-sm text-blue-800 space-y-1">
              <li>1. Find any image online (right-click → Copy image)</li>
              <li>2. Click in the editor above</li>
              <li>3. Press Ctrl+V (or Cmd+V on Mac)</li>
              <li>4. The image should appear automatically!</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  )
}


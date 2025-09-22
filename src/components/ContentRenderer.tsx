'use client'

interface ContentRendererProps {
  content: string
  className?: string
}

export default function ContentRenderer({ content, className = "" }: ContentRendererProps) {
  return (
    <div 
      className={`prose prose-lg max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

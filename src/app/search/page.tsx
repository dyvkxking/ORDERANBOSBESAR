import { Suspense } from 'react'
import { searchPosts } from '@/lib/supabase/queries'
import BlogCard from '@/components/BlogCard'
import { Search, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface SearchPageProps {
  searchParams: {
    q?: string
  }
}

function SearchResults({ query }: { query: string }) {
  return (
    <Suspense fallback={<SearchLoadingSkeleton />}>
      <SearchContent query={query} />
    </Suspense>
  )
}

async function SearchContent({ query }: { query: string }) {
  const posts = await searchPosts(query)

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-8 h-8 mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold">
                Lorem Ipsum
              </h1>
            </div>
            <p className="text-lg text-[#a7f3d0]">
              Lorem ipsum dolor sit amet consectetur adipiscing elit
            </p>
            <p className="text-sm text-[#a7f3d0] mt-2">
              Sed do eiusmod tempor incididunt ut labore et dolore magna
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back to Blog */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center text-[#255F38] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Results */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-[#255F38] mb-6">
              <Search className="w-16 h-16 mx-auto" />
            </div>
            <h3 className="text-2xl font-semibold text-[#1F7D53] mb-4">
              Lorem Ipsum Dolor
            </h3>
            <p className="text-[#255F38] mb-8 max-w-md mx-auto">
              Sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore.
            </p>
            <div className="space-y-4">
              <p className="text-[#255F38] text-sm">Lorem Ipsum:</p>
              <ul className="text-[#255F38] text-sm space-y-1">
                <li>• Dolor sit amet consectetur adipiscing</li>
                <li>• Elit sed do eiusmod tempor</li>
                <li>• Incididunt ut labore et dolore</li>
                <li>• Magna aliqua ut enim ad minim</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function SearchLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Search className="w-8 h-8 mr-3" />
              <h1 className="text-3xl md:text-4xl font-bold">
                Lorem Ipsum
              </h1>
            </div>
            <div className="h-6 bg-blue-500/20 rounded animate-pulse max-w-md mx-auto"></div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="h-4 w-32 bg-[#1F7D53] rounded animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-[#27391C] rounded-lg overflow-hidden border border-gray-700">
              <div className="h-48 bg-[#1F7D53] animate-pulse"></div>
              <div className="p-6">
                <div className="h-4 bg-[#1F7D53] rounded animate-pulse mb-3"></div>
                <div className="h-3 bg-[#1F7D53] rounded animate-pulse mb-2"></div>
                <div className="h-3 bg-[#1F7D53] rounded animate-pulse w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function SearchPage({ searchParams }: SearchPageProps) {
  const query = searchParams.q || ''

  if (!query) {
    return (
      <div className="min-h-screen bg-[#18230F] flex items-center justify-center">
        <div className="text-center">
          <Search className="w-16 h-16 text-[#255F38] mx-auto mb-4" />
          <h1 className="text-2xl font-semibold text-[#1F7D53] mb-2">
            No search query provided
          </h1>
          <p className="text-[#255F38] mb-8">
            Please enter a search term to find posts.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-4 py-2 bg-[#255F38] text-white rounded-lg hover:bg-[#1F7D53] transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </div>
      </div>
    )
  }

  return <SearchResults query={query} />
}

import { getPosts } from '@/lib/supabase/queries'
import BlogCard from '@/components/BlogCard'
import { Calendar, Tag } from 'lucide-react'

export default async function BlogPage() {
  const posts = await getPosts()
  const featuredPost = posts.find(post => post.featured)
  const regularPosts = posts.filter(post => !post.featured)

  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Lorem Ipsum
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Dolor sit amet consectetur adipiscing elit sed do eiusmod
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8 flex items-center">
              <Tag className="w-8 h-8 text-[#1F7D53] mr-3" />
              Ut Labore Et
            </h2>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#d1d5db]">
              <BlogCard post={featuredPost} featured={true} />
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-3xl font-bold text-[#1a1a1a] mb-8 flex items-center">
            <Calendar className="w-8 h-8 text-[#255F38] mr-3" />
            Dolore Magna
          </h2>
          
          {regularPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-[#255F38] mb-4">
                <Calendar className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-[#1F7D53] mb-2">
                Ullamco Laboris
              </h3>
              <p className="text-[#255F38]">
                Nisi ut aliquip ex ea commodo consequat!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

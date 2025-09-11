import HeroSection from '@/components/HeroSection'
import SimpleBigBlogCards from '@/components/SimpleBigBlogCards'
import BlogRecommendationCards from '@/components/BlogRecommendationCards'
import { getPosts } from '@/lib/supabase/queries'

export default async function Home() {
  try {
    // Fetch all posts
    const allPosts = await getPosts()
    
    // Filter featured posts (first 3)
    const featuredPosts = allPosts.slice(0, 3)
    
    // Get latest posts (first 6)
    const latestPosts = allPosts.slice(0, 6)

    return (
      <div className="min-h-screen bg-white">
        <HeroSection />
        
        <SimpleBigBlogCards posts={featuredPosts} />
        
        <BlogRecommendationCards 
          posts={latestPosts} 
          title="Latest Articles"
          description="Stay updated with our newest blog posts"
        />
      </div>
    )
  } catch (error) {
    console.error('Error in Home component:', error)
    return (
      <div className="min-h-screen bg-white">
        <HeroSection />
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Error Loading Content</h2>
          <p className="text-gray-600">Please try refreshing the page.</p>
        </div>
      </div>
    )
  }
}

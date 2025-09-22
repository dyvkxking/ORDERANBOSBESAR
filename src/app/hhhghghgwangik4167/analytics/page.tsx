import type { Metadata } from "next"
import { getPosts } from "@/lib/supabase/queries"
import { 
  TrendingUp, 
  Eye, 
  Calendar, 
  BarChart3, 
  Users, 
  FileText,
  Clock,
  Star
} from "lucide-react"

export const metadata: Metadata = {
  title: "Analytics | Admin | Blog Website",
  description: "View blog performance analytics and metrics",
}

export default async function AnalyticsPage() {
  const posts = await getPosts()
  
  // Calculate analytics data
  const totalPosts = posts.length
  const publishedPosts = posts.filter(p => p.published).length
  const draftPosts = posts.filter(p => !p.published).length
  const featuredPosts = posts.filter(p => p.featured).length
  
  // Calculate average posts per month (simplified)
  const currentMonth = new Date().getMonth()
  const currentYear = new Date().getFullYear()
  const thisMonthPosts = posts.filter(p => {
    if (!p.published_at) return false
    const postDate = new Date(p.published_at)
    return postDate.getMonth() === currentMonth && postDate.getFullYear() === currentYear
  }).length
  
  // Recent activity (last 5 posts)
  const recentPosts = posts
    .filter(p => p.published)
    .sort((a, b) => new Date(b.published_at || 0).getTime() - new Date(a.published_at || 0).getTime())
    .slice(0, 5)

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-[#1a1a1a]">Analytics</h1>
        <p className="text-[#666666] mt-2">Track your blog performance and engagement</p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow p-6 border border-[#d1d5db]">
          <div className="flex items-center">
            <div className="p-3 bg-[#255F38]/20 rounded-lg mr-4">
              <FileText className="w-6 h-6 text-[#255F38]" />
            </div>
            <div>
              <p className="text-sm text-[#666666]">Total Posts</p>
              <p className="text-3xl font-bold text-[#1a1a1a]">{totalPosts}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-[#d1d5db]">
          <div className="flex items-center">
            <div className="p-3 bg-green-500/20 rounded-lg mr-4">
              <Eye className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <p className="text-sm text-[#666666]">Published</p>
              <p className="text-3xl font-bold text-[#1a1a1a]">{publishedPosts}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-[#d1d5db]">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-500/20 rounded-lg mr-4">
              <Clock className="w-6 h-6 text-yellow-500" />
            </div>
            <div>
              <p className="text-sm text-[#666666]">Drafts</p>
              <p className="text-3xl font-bold text-[#1a1a1a]">{draftPosts}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6 border border-[#d1d5db]">
          <div className="flex items-center">
            <div className="p-3 bg-purple-500/20 rounded-lg mr-4">
              <Star className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-sm text-[#666666]">Featured</p>
              <p className="text-3xl font-bold text-[#1a1a1a]">{featuredPosts}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Publishing Activity */}
        <div className="bg-white rounded-lg shadow border border-[#d1d5db]">
          <div className="p-6 border-b border-[#d1d5db]">
            <h2 className="text-xl font-semibold text-[#1a1a1a]">Publishing Activity</h2>
            <p className="text-[#666666] text-sm mt-1">Content creation overview</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-[#666666]">This Month</span>
                <span className="text-2xl font-bold text-[#1a1a1a]">{thisMonthPosts}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#666666]">Publishing Rate</span>
                <span className="text-lg font-semibold text-[#255F38]">
                  {publishedPosts > 0 ? Math.round((publishedPosts / totalPosts) * 100) : 0}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#666666]">Draft Rate</span>
                <span className="text-lg font-semibold text-yellow-500">
                  {draftPosts > 0 ? Math.round((draftPosts / totalPosts) * 100) : 0}%
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Status */}
        <div className="bg-white rounded-lg shadow border border-[#d1d5db]">
          <div className="p-6 border-b border-[#d1d5db]">
            <h2 className="text-xl font-semibold text-[#1a1a1a]">Content Status</h2>
            <p className="text-[#666666] text-sm mt-1">Distribution of your content</p>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-[#666666]">Published</span>
                </div>
                <span className="font-semibold text-[#1a1a1a]">{publishedPosts}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></div>
                  <span className="text-[#666666]">Drafts</span>
                </div>
                <span className="font-semibold text-[#1a1a1a]">{draftPosts}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-[#666666]">Featured</span>
                </div>
                <span className="font-semibold text-[#1a1a1a]">{featuredPosts}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow border border-[#d1d5db]">
        <div className="p-6 border-b border-[#d1d5db]">
          <h2 className="text-xl font-semibold text-[#1a1a1a]">Recent Activity</h2>
          <p className="text-[#666666] text-sm mt-1">Latest published posts</p>
        </div>
        <div className="divide-y divide-[#d1d5db]">
          {recentPosts.length === 0 ? (
            <div className="p-6 text-center">
              <p className="text-[#666666]">No published posts yet</p>
            </div>
          ) : (
            recentPosts.map((post) => (
              <div key={post.id} className="p-6 hover:bg-[#f3f4f6] transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-[#1a1a1a] mb-1">
                      {post.title}
                    </h3>
                    <p className="text-[#666666] text-sm mb-2">
                      {post.excerpt && post.excerpt.length > 100 
                        ? `${post.excerpt.substring(0, 100)}...` 
                        : post.excerpt || 'No excerpt'}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-[#666666]">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {post.published_at ? new Date(post.published_at).toLocaleDateString() : 'Not published'}
                      </span>
                      {post.featured && (
                        <span className="flex items-center text-purple-500">
                          <Star className="w-4 h-4 mr-1" />
                          Featured
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Quick Insights */}
      <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] rounded-lg p-8 text-white">
        <h2 className="text-2xl font-bold mb-4">Quick Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{totalPosts}</div>
            <div className="text-[#a7f3d0]">Total Articles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{publishedPosts}</div>
            <div className="text-[#a7f3d0]">Published</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">{featuredPosts}</div>
            <div className="text-[#a7f3d0]">Featured</div>
          </div>
        </div>
      </div>
    </div>
  )
}

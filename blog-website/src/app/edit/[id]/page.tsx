import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogForm from "@/components/BlogForm"
import { getPostById } from "@/lib/supabase/queries"

interface EditBlogPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: EditBlogPageProps): Promise<Metadata> {
  const post = await getPostById(params.id)
  
  if (!post) {
    return {
      title: "Post Not Found | Blog Website",
    }
  }

  return {
    title: `Edit ${post.title} | Blog Website`,
    description: `Edit the blog post: ${post.title}`,
  }
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const post = await getPostById(params.id)

  if (!post) {
    notFound()
  }

  const initialData = {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt || '',
    content: post.content || '',
    featured_image_url: post.featured_image_url || '',
    author_id: post.author.id,
    featured: post.featured,
    published: post.published,
    published_at: post.published_at ? new Date(post.published_at).toISOString().slice(0, 16) : '',
    category_ids: post.categories.map(cat => cat.id)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BlogForm mode="edit" initialData={initialData} />
    </div>
  )
}

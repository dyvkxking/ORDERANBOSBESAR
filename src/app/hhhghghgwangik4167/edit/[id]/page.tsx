import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogForm from "@/components/BlogForm"
import { getPostById } from "@/lib/supabase/queries"

interface EditBlogPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: EditBlogPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const post = await getPostById(resolvedParams.id)
  
  if (!post) {
    return {
      title: "Post Not Found | Admin | Blog Website",
    }
  }

  return {
    title: `Edit "${post.title}" | Admin | Blog Website`,
    description: `Edit blog post: ${post.title}`,
  }
}

export default async function EditBlogPage({ params }: EditBlogPageProps) {
  const resolvedParams = await params
  const post = await getPostById(resolvedParams.id)
  
  if (!post) {
    notFound()
  }

  const initialData = {
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    content: post.content,
    featured_image_url: post.featured_image_url,
    author_id: post.author_id,
    featured: post.featured,
    published: post.published,
    published_at: post.published_at ? new Date(post.published_at).toISOString().slice(0, 16) : '',
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a]">Edit Post</h1>
        <p className="text-[#666666] mt-2">Edit and update your blog post</p>
      </div>
      <BlogForm mode="edit" initialData={initialData} />
    </div>
  )
}

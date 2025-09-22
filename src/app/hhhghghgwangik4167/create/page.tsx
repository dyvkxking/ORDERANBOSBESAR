import type { Metadata } from "next"
import BlogForm from "@/components/BlogForm"

export const metadata: Metadata = {
  title: "Create Blog Post | Admin | Blog Website",
  description: "Create a new blog post for the website",
}

export default function CreateBlogPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1a1a1a]">Create New Post</h1>
        <p className="text-[#666666] mt-2">Write and publish a new blog post</p>
      </div>
      <BlogForm mode="create" />
    </div>
  )
}

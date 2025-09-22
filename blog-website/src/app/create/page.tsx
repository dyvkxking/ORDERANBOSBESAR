import type { Metadata } from "next"
import BlogForm from "@/components/BlogForm"

export const metadata: Metadata = {
  title: "Create Blog Post | Blog Website",
  description: "Create a new blog post for the website",
}

export default function CreateBlogPage() {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <BlogForm mode="create" />
    </div>
  )
}

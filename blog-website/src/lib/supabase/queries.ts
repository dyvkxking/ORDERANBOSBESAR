import { supabase } from './client'
import { PostWithDetails, Author, Category } from '@/types/supabase'

// Get all published posts with author and categories
export async function getPosts(): Promise<PostWithDetails[]> {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:author_id (
        id,
        name,
        slug,
        bio,
        image_url,
        twitter_url,
        linkedin_url,
        github_url,
        website_url
      ),
      categories:post_categories (
        category:category_id (
          id,
          title,
          slug,
          description,
          color
        )
      )
    `)
    .eq('published', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error)
    return []
  }

  // Transform the data to match our interface
  return data?.map(post => ({
    ...post,
    categories: post.categories?.map((pc: any) => pc.category) || []
  })) || []
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<PostWithDetails | null> {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:author_id (
        id,
        name,
        slug,
        bio,
        image_url,
        twitter_url,
        linkedin_url,
        github_url,
        website_url
      ),
      categories:post_categories (
        category:category_id (
          id,
          title,
          slug,
          description,
          color
        )
      )
    `)
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) {
    console.error('Error fetching post:', error)
    return null
  }

  if (!data) return null

  return {
    ...data,
    categories: data.categories?.map((pc: any) => pc.category) || []
  }
}

// Get all authors
export async function getAuthors(): Promise<Author[]> {
  const { data, error } = await supabase
    .from('authors')
    .select('*')
    .order('name')

  if (error) {
    console.error('Error fetching authors:', error)
    return []
  }

  return data || []
}

// Get all categories
export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('title')

  if (error) {
    console.error('Error fetching categories:', error)
    return []
  }

  return data || []
}

// Get featured posts
export async function getFeaturedPosts(): Promise<PostWithDetails[]> {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:author_id (
        id,
        name,
        slug,
        bio,
        image_url,
        twitter_url,
        linkedin_url,
        github_url,
        website_url
      ),
      categories:post_categories (
        category:category_id (
          id,
          title,
          slug,
          description,
          color
        )
      )
    `)
    .eq('published', true)
    .eq('featured', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching featured posts:', error)
    return []
  }

  return data?.map(post => ({
    ...post,
    categories: post.categories?.map((pc: any) => pc.category) || []
  })) || []
}

// Get posts by category
export async function getPostsByCategory(categorySlug: string): Promise<PostWithDetails[]> {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      author:author_id (
        id,
        name,
        slug,
        bio,
        image_url,
        twitter_url,
        linkedin_url,
        github_url,
        website_url
      ),
      categories:post_categories (
        category:category_id (
          id,
          title,
          slug,
          description,
          color
        )
      )
    `)
    .eq('published', true)
    .eq('categories.category.slug', categorySlug)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts by category:', error)
    return []
  }

  return data?.map(post => ({
    ...post,
    categories: post.categories?.map((pc: any) => pc.category) || []
  })) || []
}


import { supabase } from './client'
import { PostWithDetails } from '@/types/supabase'

// Get all published posts
export async function getPosts(): Promise<PostWithDetails[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error)
    return []
  }

  return data || []
}

// Get a single post by slug
export async function getPostBySlug(slug: string): Promise<PostWithDetails | null> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .eq('published', true)
    .single()

  if (error) {
    console.error('Error fetching post:', error)
    return null
  }

  return data
}


// Get featured posts
export async function getFeaturedPosts(): Promise<PostWithDetails[]> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .eq('featured', true)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error fetching featured posts:', error)
    return []
  }

  return data || []
}


// Create a new blog post
export async function createPost(postData: {
  title: string
  slug: string
  excerpt?: string
  content?: string
  featured_image_url?: string
  featured?: boolean
  published?: boolean
  published_at?: string
}): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    const { data: post, error: postError } = await supabase
      .from('posts')
      .insert({
        title: postData.title,
        slug: postData.slug,
        excerpt: postData.excerpt,
        content: postData.content,
        featured_image_url: postData.featured_image_url,
        featured: postData.featured || false,
        published: postData.published || false,
        published_at: postData.published ? (postData.published_at || new Date().toISOString()) : null
      })
      .select()
      .single()

    if (postError) {
      console.error('Error creating post:', postError)
      return { success: false, error: postError.message }
    }

    return { success: true, data: post }
  } catch (error) {
    console.error('Unexpected error creating post:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

// Update an existing blog post
export async function updatePost(postId: string, postData: {
  title?: string
  slug?: string
  excerpt?: string
  content?: string
  featured_image_url?: string
  featured?: boolean
  published?: boolean
  published_at?: string
}): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    const { data: post, error: postError } = await supabase
      .from('posts')
      .update({
        title: postData.title,
        slug: postData.slug,
        excerpt: postData.excerpt,
        content: postData.content,
        featured_image_url: postData.featured_image_url,
        featured: postData.featured,
        published: postData.published,
        published_at: postData.published ? (postData.published_at || new Date().toISOString()) : null
      })
      .eq('id', postId)
      .select()
      .single()

    if (postError) {
      console.error('Error updating post:', postError)
      return { success: false, error: postError.message }
    }

    return { success: true, data: post }
  } catch (error) {
    console.error('Unexpected error updating post:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

// Delete a blog post
export async function deletePost(postId: string): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('id', postId)

    if (error) {
      console.error('Error deleting post:', error)
      return { success: false, error: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error('Unexpected error deleting post:', error)
    return { success: false, error: 'An unexpected error occurred' }
  }
}

// Get a single post by ID (for editing)
export async function getPostById(postId: string): Promise<PostWithDetails | null> {
  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('id', postId)
    .single()

  if (error) {
    console.error('Error fetching post:', error)
    return null
  }

  return data
}

// Search posts by title, excerpt, and content
export async function searchPosts(query: string): Promise<PostWithDetails[]> {
  if (!query.trim()) {
    return []
  }

  const { data, error } = await supabase
    .from('posts')
    .select('*')
    .eq('published', true)
    .or(`title.ilike.%${query}%,excerpt.ilike.%${query}%,content.ilike.%${query}%`)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error searching posts:', error)
    return []
  }

  return data || []
}


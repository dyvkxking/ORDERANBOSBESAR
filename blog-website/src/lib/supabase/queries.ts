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
  category_ids?: string[]
}): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    // First, create the post
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

    // If categories are provided, link them to the post
    if (postData.category_ids && postData.category_ids.length > 0) {
      const categoryLinks = postData.category_ids.map(categoryId => ({
        post_id: post.id,
        category_id: categoryId
      }))

      const { error: categoryError } = await supabase
        .from('post_categories')
        .insert(categoryLinks)

      if (categoryError) {
        console.error('Error linking categories:', categoryError)
        return { success: false, error: categoryError.message }
      }
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
  category_ids?: string[]
}): Promise<{ success: boolean; data?: any; error?: string }> {
  try {
    // Update the post
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

    // If categories are provided, update the category links
    if (postData.category_ids !== undefined) {
      // First, delete existing category links
      const { error: deleteError } = await supabase
        .from('post_categories')
        .delete()
        .eq('post_id', postId)

      if (deleteError) {
        console.error('Error deleting existing categories:', deleteError)
        return { success: false, error: deleteError.message }
      }

      // Then, add new category links
      if (postData.category_ids.length > 0) {
        const categoryLinks = postData.category_ids.map(categoryId => ({
          post_id: postId,
          category_id: categoryId
        }))

        const { error: categoryError } = await supabase
          .from('post_categories')
          .insert(categoryLinks)

        if (categoryError) {
          console.error('Error linking categories:', categoryError)
          return { success: false, error: categoryError.message }
        }
      }
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
    .eq('id', postId)
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

// Search posts by title, excerpt, and content
export async function searchPosts(query: string): Promise<PostWithDetails[]> {
  if (!query.trim()) {
    return []
  }

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
    .or(`title.ilike.%${query}%,excerpt.ilike.%${query}%,content.ilike.%${query}%`)
    .order('published_at', { ascending: false })

  if (error) {
    console.error('Error searching posts:', error)
    return []
  }

  return data?.map(post => ({
    ...post,
    categories: post.categories?.map((pc: any) => pc.category) || []
  })) || []
}


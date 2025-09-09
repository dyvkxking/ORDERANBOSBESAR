export interface Database {
  public: {
    Tables: {
      authors: {
        Row: {
          id: string
          name: string
          slug: string
          bio: string | null
          image_url: string | null
          twitter_url: string | null
          linkedin_url: string | null
          github_url: string | null
          website_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          bio?: string | null
          image_url?: string | null
          twitter_url?: string | null
          linkedin_url?: string | null
          github_url?: string | null
          website_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          bio?: string | null
          image_url?: string | null
          twitter_url?: string | null
          linkedin_url?: string | null
          github_url?: string | null
          website_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      categories: {
        Row: {
          id: string
          title: string
          slug: string
          description: string | null
          color: string
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          description?: string | null
          color: string
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          description?: string | null
          color?: string
          created_at?: string
          updated_at?: string
        }
      }
      posts: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string | null
          featured_image_url: string | null
          author_id: string
          featured: boolean
          published: boolean
          published_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          excerpt?: string | null
          content?: string | null
          featured_image_url?: string | null
          author_id: string
          featured?: boolean
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          excerpt?: string | null
          content?: string | null
          featured_image_url?: string | null
          author_id?: string
          featured?: boolean
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      post_categories: {
        Row: {
          id: string
          post_id: string
          category_id: string
          created_at: string
        }
        Insert: {
          id?: string
          post_id: string
          category_id: string
          created_at?: string
        }
        Update: {
          id?: string
          post_id?: string
          category_id?: string
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}

export type Author = Database['public']['Tables']['authors']['Row']
export type Category = Database['public']['Tables']['categories']['Row']
export type Post = Database['public']['Tables']['posts']['Row']
export type PostCategory = Database['public']['Tables']['post_categories']['Row']

export interface PostWithDetails extends Post {
  author: Author
  categories: Category[]
}

export interface AuthorWithPosts extends Author {
  posts: Post[]
}


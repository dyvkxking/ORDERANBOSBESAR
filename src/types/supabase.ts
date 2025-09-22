export interface Database {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string
          title: string
          slug: string
          excerpt: string | null
          content: string | null
          featured_image_url: string | null
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
          featured?: boolean
          published?: boolean
          published_at?: string | null
          created_at?: string
          updated_at?: string
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

export type Post = Database['public']['Tables']['posts']['Row']

export interface Author {
  id: string
  name: string
  email: string
  avatar_url?: string
  bio?: string
  created_at: string
  updated_at: string
}

export interface PostWithDetails extends Post {
  author?: Author
}


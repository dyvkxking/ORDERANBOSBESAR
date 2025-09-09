export interface Author {
  _id: string
  name: string
  slug: {
    current: string
  }
  image?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  bio?: any[]
  socialLinks?: {
    twitter?: string
    linkedin?: string
    github?: string
    website?: string
  }
}

export interface Category {
  _id: string
  title: string
  slug: {
    current: string
  }
  description?: string
  color: string
}

export interface Post {
  _id: string
  title: string
  slug: {
    current: string
  }
  excerpt?: string
  content?: any[]
  featuredImage?: {
    asset: {
      _ref: string
    }
    alt?: string
  }
  author?: Author
  categories?: Category[]
  publishedAt: string
  featured?: boolean
}

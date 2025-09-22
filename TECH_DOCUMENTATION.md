# Blog Website - Technical Documentation

## Overview
A modern, full-stack blog website built with Next.js 15, featuring a headless CMS (Sanity), database management (Supabase), and a rich content management system. The application provides both public-facing blog functionality and administrative features for content creators.

## Technology Stack

### Frontend Framework
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type safety and development experience

### Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Headless UI** - Accessible UI components

### Content Management
- **Sanity CMS** - Headless content management system
  - `@sanity/client` - Sanity client library
  - `@sanity/image-url` - Image URL builder
  - `@sanity/vision` - Query tool
  - `next-sanity` - Next.js integration
  - `@portabletext/react` - Rich text rendering

### Database & Backend
- **Supabase** - PostgreSQL database with real-time features
  - `@supabase/supabase-js` - Supabase client
  - `@supabase/ssr` - Server-side rendering support

### Rich Text Editing
- **Quill 2.0.3** - Rich text editor
- **React Quill 2.0.0** - React wrapper for Quill

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Turbopack** - Fast bundler (development)

## Project Structure

```
blog-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── about/             # About page
│   │   ├── blog/              # Blog listing and individual posts
│   │   │   └── [slug]/        # Dynamic blog post pages
│   │   ├── contact/           # Contact page
│   │   ├── create/            # Create new blog post
│   │   ├── edit/              # Edit existing posts
│   │   │   └── [id]/          # Dynamic edit pages
│   │   ├── manage/            # Admin dashboard for post management
│   │   ├── layout.tsx         # Root layout component
│   │   ├── page.tsx           # Homepage
│   │   └── globals.css        # Global styles
│   ├── components/            # Reusable React components
│   │   ├── BigBlogCards.tsx   # Large blog card component
│   │   ├── BlogCard.tsx       # Standard blog card
│   │   ├── BlogForm.tsx       # Blog creation/editing form
│   │   ├── BlogRecommendationCards.tsx # Blog recommendations
│   │   ├── ContentRenderer.tsx # Rich text content renderer
│   │   ├── Footer.tsx         # Site footer
│   │   ├── HeroSection.tsx    # Homepage hero section
│   │   ├── ImageUpload.tsx    # Image upload component
│   │   ├── Navigation.tsx     # Site navigation
│   │   ├── RichTextEditor.tsx # Rich text editor component
│   │   └── SimpleBigBlogCards.tsx # Simplified blog cards
│   ├── lib/                   # Utility libraries
│   │   ├── supabase/          # Supabase configuration and queries
│   │   │   ├── client.ts      # Supabase client setup
│   │   │   ├── queries.ts     # Database query functions
│   │   │   └── server.ts      # Server-side Supabase client
│   │   └── sanity/            # Sanity CMS integration
│   │       ├── client.ts      # Sanity client setup
│   │       └── image.ts       # Image URL utilities
│   └── types/                 # TypeScript type definitions
│       ├── blog.ts            # Blog-related types
│       └── supabase.ts        # Supabase database types
├── sanity/                    # Sanity CMS configuration
│   ├── lib/
│   │   └── client.ts          # Sanity client configuration
│   └── schemas/               # Content schemas
│       ├── author.ts          # Author schema
│       ├── category.ts        # Category schema
│       ├── post.ts            # Blog post schema
│       └── index.ts           # Schema exports
├── public/                    # Static assets
├── package.json               # Dependencies and scripts
├── next.config.ts             # Next.js configuration
├── sanity.config.ts           # Sanity CMS configuration
├── tsconfig.json              # TypeScript configuration
└── supabase-schema.sql        # Database schema
```

## Pages & Features

### Public Pages

#### 1. Homepage (`/`)
- **Hero Section** - Eye-catching landing area with call-to-action
- **Featured Posts** - Showcases top 3 blog posts
- **Latest Articles** - Displays 6 most recent posts
- **Responsive Design** - Mobile-first approach

#### 2. Blog Listing (`/blog`)
- **Featured Post** - Highlights a single featured article
- **Post Grid** - Responsive grid layout for all posts
- **Category Filtering** - Filter posts by categories
- **Search Functionality** - Search through blog posts
- **Pagination** - Load more posts as needed

#### 3. Individual Blog Post (`/blog/[slug]`)
- **Full Article View** - Complete blog post content
- **Rich Text Rendering** - Supports formatted content from Sanity
- **Author Bio** - Author information and social links
- **Reading Time** - Estimated reading duration
- **Social Sharing** - Share buttons for social media
- **Related Posts** - Suggestions for similar content

#### 4. About Page (`/about`)
- **Mission Statement** - Company/blog purpose
- **Values Section** - Core principles and beliefs
- **Technology Stack** - Technical information
- **Call-to-Action** - Links to other sections

#### 5. Contact Page (`/contact`)
- **Contact Form** - Multi-field contact form
- **Contact Information** - Email, phone, address
- **FAQ Section** - Frequently asked questions
- **Office Hours** - Business hours information

### Administrative Pages

#### 6. Create Post (`/create`)
- **Rich Text Editor** - Full-featured content editor
- **Image Upload** - Featured image selection
- **Category Selection** - Multi-category assignment
- **SEO Fields** - Title, slug, excerpt, meta description
- **Publishing Options** - Draft/published status
- **Preview Mode** - Live preview of content

#### 7. Edit Post (`/edit/[id]`)
- **Pre-populated Form** - Loads existing post data
- **Version History** - Track changes over time
- **Save Draft** - Save work in progress
- **Publish/Unpublish** - Toggle publication status

#### 8. Manage Posts (`/manage`)
- **Post Dashboard** - Table view of all posts
- **Bulk Actions** - Select multiple posts for actions
- **Quick Edit** - Inline editing capabilities
- **Status Management** - Filter by published/draft status
- **Search & Filter** - Find specific posts quickly
- **Delete Posts** - Remove posts with confirmation

## Key Components

### Content Management
- **BlogForm** - Universal form for creating/editing posts
- **RichTextEditor** - Quill-based rich text editor
- **ImageUpload** - Drag-and-drop image upload
- **ContentRenderer** - Renders Sanity portable text

### Display Components
- **BlogCard** - Standard post preview card
- **BigBlogCards** - Large featured post cards
- **SimpleBigBlogCards** - Simplified large cards
- **BlogRecommendationCards** - Related posts section

### Layout Components
- **Navigation** - Site header with mobile menu
- **Footer** - Site footer with links and info
- **HeroSection** - Landing page hero area

## Database Schema

### Core Tables
- **posts** - Blog post content and metadata
- **authors** - Author information and profiles
- **categories** - Post categorization
- **post_categories** - Many-to-many relationship

### Key Fields
- **Posts**: title, slug, content, excerpt, featured_image_url, published, featured, published_at
- **Authors**: name, email, bio, image_url, social_links
- **Categories**: title, slug, description, color

## API Integration

### Supabase Queries
- `getPosts()` - Fetch all published posts
- `getPostBySlug()` - Get single post by URL slug
- `getPostById()` - Get post by database ID
- `createPost()` - Create new blog post
- `updatePost()` - Update existing post
- `deletePost()` - Remove post from database

### Sanity CMS
- Content schemas for posts, authors, and categories
- Image optimization and CDN delivery
- Real-time content updates
- Version control and content history

## Development Scripts

```bash
# Development
npm run dev              # Start development server with Turbopack
npm run build           # Build for production
npm run start           # Start production server

# Sanity CMS
npm run sanity:dev      # Start Sanity Studio
npm run sanity:build    # Build Sanity Studio
npm run sanity:deploy   # Deploy Sanity Studio

# Code Quality
npm run lint            # Run ESLint
```

## Environment Variables

Required environment variables:
- `NEXT_PUBLIC_SANITY_PROJECT_ID` - Sanity project identifier
- `NEXT_PUBLIC_SANITY_DATASET` - Sanity dataset name
- `NEXT_PUBLIC_SUPABASE_URL` - Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY` - Supabase service role key (server-side)

## Performance Features

- **Next.js App Router** - Optimized routing and rendering
- **Turbopack** - Fast development builds
- **Image Optimization** - Next.js Image component with lazy loading
- **Static Generation** - Pre-rendered pages for better performance
- **CDN Integration** - Sanity CDN for image delivery
- **Responsive Images** - Multiple image sizes for different devices

## Security Features

- **Server-Side Rendering** - Secure data fetching
- **Type Safety** - TypeScript prevents runtime errors
- **Input Validation** - Form validation and sanitization
- **CSRF Protection** - Built-in Next.js protection
- **Environment Variables** - Secure configuration management

## Deployment Considerations

- **Vercel** - Recommended hosting platform
- **Sanity Hosting** - CMS hosted on Sanity's infrastructure
- **Supabase Cloud** - Database hosted on Supabase
- **Environment Configuration** - Proper environment variable setup
- **Build Optimization** - Production build optimizations

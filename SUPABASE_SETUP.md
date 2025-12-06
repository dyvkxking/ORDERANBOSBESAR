# Supabase Setup Guide

This guide will help you set up Supabase as your database and CMS for the blog website.

## 🚀 Quick Start

### 1. Create Supabase Project

1. Go to [supabase.com](https://supabase.com) and create an account
2. Click "New Project"
3. Choose your organization
4. Enter project details:
   - **Name**: `blog-website` (or your preferred name)
   - **Database Password**: Create a strong password
   - **Region**: Choose the closest region to your users
5. Click "Create new project"

### 2. Get Project Credentials

1. Go to your project dashboard
2. Navigate to **Settings** → **API**
3. Copy the following values:
   - **Project URL** (e.g., `https://your-project-id.supabase.co`)
   - **Project API Key** (anon/public key)

### 3. Update Environment Variables

Update your `.env.local` file with your Supabase credentials:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

### 4. Set Up Database Schema

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Copy and paste the contents of `supabase-schema.sql` into the editor
4. Click **Run** to execute the schema

This will create:
- `authors` table for blog authors
- `categories` table for post categories
- `posts` table for blog posts
- `post_categories` junction table for many-to-many relationships
- Sample data for testing

### 5. Configure Row Level Security (RLS)

The schema includes RLS policies for public read access. If you need to modify permissions:

1. Go to **Authentication** → **Policies**
2. Review and adjust policies as needed

## 📊 Database Schema

### Authors Table
```sql
- id (UUID, Primary Key)
- name (VARCHAR)
- slug (VARCHAR, Unique)
- bio (TEXT)
- image_url (TEXT)
- twitter_url (TEXT)
- linkedin_url (TEXT)
- github_url (TEXT)
- website_url (TEXT)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### Categories Table
```sql
- id (UUID, Primary Key)
- title (VARCHAR)
- slug (VARCHAR, Unique)
- description (TEXT)
- color (VARCHAR)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### Posts Table
```sql
- id (UUID, Primary Key)
- title (VARCHAR)
- slug (VARCHAR, Unique)
- excerpt (TEXT)
- content (TEXT)
- featured_image_url (TEXT)
- author_id (UUID, Foreign Key)
- featured (BOOLEAN)
- published (BOOLEAN)
- published_at (TIMESTAMP)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
```

### Post Categories Junction Table
```sql
- id (UUID, Primary Key)
- post_id (UUID, Foreign Key)
- category_id (UUID, Foreign Key)
- created_at (TIMESTAMP)
```

## 🛠️ Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

### Database Queries

The project includes pre-built query functions in `src/lib/supabase/queries.ts`:

- `getPosts()` - Get all published posts with author and categories
- `getPostBySlug(slug)` - Get a single post by slug
- `getAuthors()` - Get all authors
- `getCategories()` - Get all categories
- `getFeaturedPosts()` - Get featured posts
- `getPostsByCategory(categorySlug)` - Get posts by category

## 📝 Content Management

### Adding Content via Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to **Table Editor**
3. Select the table you want to edit:
   - **Authors**: Add new authors
   - **Categories**: Add new categories
   - **Posts**: Add new blog posts
   - **Post Categories**: Link posts to categories

### Adding Content via API

You can also add content programmatically using the Supabase client:

```typescript
import { supabase } from '@/lib/supabase/client'

// Add a new post
const { data, error } = await supabase
  .from('posts')
  .insert({
    title: 'My New Post',
    slug: 'my-new-post',
    excerpt: 'This is a great post',
    content: '# My New Post\n\nThis is the content...',
    author_id: 'author-uuid',
    published: true,
    published_at: new Date().toISOString()
  })
```

## 🔐 Authentication (Optional)

If you want to add authentication for content management:

1. Go to **Authentication** → **Settings**
2. Configure your preferred authentication providers
3. Set up user roles and permissions
4. Update RLS policies to restrict write access

## 🚀 Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Deploy

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Customization

### Adding New Fields

1. Update the database schema in Supabase
2. Update the TypeScript types in `src/types/supabase.ts`
3. Update the query functions in `src/lib/supabase/queries.ts`
4. Update the components to display the new fields

### Styling

- Modify Tailwind classes in components
- Update the color scheme in `tailwind.config.js`
- Add custom CSS in `src/app/globals.css`

## 📚 Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 🤝 Support

If you encounter any issues:

1. Check the Supabase project logs
2. Verify your environment variables
3. Ensure the database schema is properly set up
4. Check the browser console for errors

## 🎉 You're All Set!

Your blog website is now configured with Supabase as the backend. You can start adding content and customizing the design to match your needs.


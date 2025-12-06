# Environment Setup Instructions

## Required: Create .env.local file

Create a `.env.local` file in the root directory (`blog-website/`) with the following content:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Optional: Sanity Configuration (if you want to use Sanity CMS)
# NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
# NEXT_PUBLIC_SANITY_DATASET=production
# SANITY_API_TOKEN=your_api_token_here
```

## How to get Supabase credentials:

1. Go to [supabase.com](https://supabase.com) and create an account
2. Create a new project
3. Go to Settings → API
4. Copy your Project URL and anon/public key
5. Replace the placeholder values in your `.env.local` file

## Database Setup:

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `supabase-schema.sql` into the editor
4. Click "Run" to execute the schema

This will create all necessary tables and sample data for your blog.


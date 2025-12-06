# Supabase Storage Setup for Image Uploads

This guide will help you set up Supabase Storage to enable image uploads in your blog creation page.

## Prerequisites

1. A Supabase project (if you don't have one, create one at [supabase.com](https://supabase.com))
2. Your Supabase project URL and API keys

## Step 1: Get Your Supabase Keys

1. Go to your Supabase project dashboard
2. Navigate to **Settings** > **API**
3. Copy the following values:
   - **Project URL** (for `NEXT_PUBLIC_SUPABASE_URL`)
   - **anon public** key (for `NEXT_PUBLIC_SUPABASE_ANON_KEY`)
   - **service_role** key (for `SUPABASE_SERVICE_ROLE_KEY`)

## Step 2: Update Environment Variables

Update your `.env.local` file with the actual values:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key_here

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Sanity Configuration (optional)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here
```

## Step 3: Create Storage Bucket

1. In your Supabase dashboard, go to **Storage**
2. Click **Create a new bucket**
3. Set the following:
   - **Name**: `blog-images`
   - **Public**: ✅ (checked) - This allows public access to uploaded images
   - **File size limit**: 5MB (or your preferred limit)
   - **Allowed MIME types**: `image/*` (or specific types like `image/jpeg,image/png,image/gif`)

## Step 4: Set Up Storage Policies (Optional but Recommended)

For better security, you can set up Row Level Security (RLS) policies:

1. Go to **Storage** > **Policies**
2. Click **New Policy** for the `blog-images` bucket
3. Create policies for:
   - **INSERT**: Allow authenticated users to upload
   - **SELECT**: Allow public access to view images
   - **UPDATE**: Allow authenticated users to update their own files
   - **DELETE**: Allow authenticated users to delete their own files

Example policy for public access (SELECT):
```sql
CREATE POLICY "Public Access" ON storage.objects
FOR SELECT USING (bucket_id = 'blog-images');
```

## Step 5: Test the Upload

1. Start your development server: `npm run dev`
2. Go to `/hhhghghgwangik4167/create`
3. Try uploading an image in the "Featured Image" section
4. The image should upload to Supabase Storage and display a preview

## Troubleshooting

### Common Issues:

1. **"Failed to upload file" error**:
   - Check that your `SUPABASE_SERVICE_ROLE_KEY` is correct
   - Ensure the `blog-images` bucket exists and is public

2. **"File must be an image" error**:
   - Check that you're uploading a valid image file (jpg, png, gif, etc.)

3. **"File size must be less than 5MB" error**:
   - The file is too large. Compress the image or increase the size limit

4. **CORS errors**:
   - Make sure your Supabase project allows requests from your domain
   - Check the CORS settings in your Supabase project

### File Size Limits:

- Default limit: 5MB per file
- To change: Update the validation in `src/components/ImageUpload.tsx` and `src/app/api/upload/route.ts`

### Supported File Types:

- JPEG (.jpg, .jpeg)
- PNG (.png)
- GIF (.gif)
- WebP (.webp)
- SVG (.svg)

## Security Notes

- The service role key has full access to your Supabase project
- Keep it secure and never commit it to version control
- Consider using RLS policies for production environments
- Monitor your storage usage in the Supabase dashboard

## Next Steps

Once set up, you can:
- Upload images from the blog creation page
- View uploaded images in your blog posts
- Manage images through the Supabase Storage dashboard
- Implement image optimization if needed

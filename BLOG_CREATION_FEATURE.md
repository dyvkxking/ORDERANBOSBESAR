# Blog Creation Feature

This document describes the blog creation and management feature that has been added to the blog website.

## Features

### 1. Blog Creation Form (`/create`)
- **Rich Text Editor**: Custom-built WYSIWYG editor with comprehensive formatting options
  - Text formatting: Bold, italic, underline
  - Headings: H1, H2, H3, and paragraph styles
  - Lists: Bulleted and numbered lists
  - Special formatting: Blockquotes, code blocks, links
  - Text alignment: Left, center, right
  - Undo/Redo functionality
  - Clear formatting option
- **Image Upload**: Drag-and-drop image upload with preview and validation
- **Author Selection**: Choose from existing authors
- **Category Management**: Select multiple categories for posts
- **Publishing Options**: Draft/publish status, featured post toggle, publish date
- **Auto-generated Slugs**: Automatic URL-friendly slug generation from title

### 2. Blog Management (`/manage`)
- **Post Overview**: Table view of all blog posts with status indicators
- **Quick Actions**: View, edit, and delete posts
- **Status Management**: See published/draft status and featured posts
- **Category Display**: Visual category tags for each post

### 3. Blog Editing (`/edit/[id]`)
- **Pre-populated Form**: Edit existing posts with all data loaded
- **Same Features**: All creation features available for editing

## Technical Implementation

### Database Operations
- **Create Posts**: `createPost()` function with category linking
- **Update Posts**: `updatePost()` function with category management
- **Delete Posts**: `deletePost()` function with cascade deletion
- **Fetch Posts**: `getPostById()` for editing, `getPosts()` for management

### Components
- **BlogForm**: Main form component for create/edit operations
- **RichTextEditor**: ReactQuill-based rich text editor
- **ImageUpload**: File upload component with preview and validation
- **Navigation**: Updated with Create Post and Manage links

### Form Features
- **Validation**: Required fields, file type/size validation
- **Auto-save**: Slug auto-generation from title
- **Preview**: Image preview before upload
- **Error Handling**: User-friendly error messages
- **Loading States**: Visual feedback during operations

## Usage

### Creating a New Post
1. Navigate to `/create` or click "Create Post" in navigation
2. Fill in the title (slug auto-generates)
3. Write content using the rich text editor
4. Upload a featured image (optional)
5. Select an author and categories
6. Choose publishing options
7. Click "Create Post"

### Managing Posts
1. Navigate to `/manage` or click "Manage" in navigation
2. View all posts in a table format
3. Use action buttons to view, edit, or delete posts
4. See post status, categories, and publication dates

### Editing Posts
1. Click the edit button on any post in the management page
2. Modify any field using the same form as creation
3. Click "Update Post" to save changes

## Database Schema

The feature uses the existing Supabase schema:
- `posts` table for blog post data
- `authors` table for author information
- `categories` table for post categories
- `post_categories` junction table for many-to-many relationships

## Future Enhancements

- **Real Image Upload**: Integrate with Supabase Storage or Cloudinary
- **Draft Auto-save**: Save drafts automatically
- **Post Preview**: Live preview of posts before publishing
- **Bulk Operations**: Select multiple posts for bulk actions
- **Advanced Editor**: More rich text features like tables, code blocks
- **SEO Tools**: Meta descriptions, social media previews
- **Analytics**: Post view counts and engagement metrics

## Dependencies Added

- **Custom Rich Text Editor**: Built-in HTML5 contentEditable-based editor with full React 19 compatibility
- **No external dependencies**: Uses native browser APIs for maximum compatibility

## Environment Variables Required

Make sure these are set in your `.env.local`:
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

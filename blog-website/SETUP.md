# Blog Website Setup Guide

This is a modern blog website built with Next.js 15, Sanity CMS, and Tailwind CSS.

## 🚀 Quick Start

### 1. Environment Setup

Create a `.env.local` file in the root directory with the following variables:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token_here

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 2. Sanity CMS Setup

1. **Create a Sanity Project:**
   - Go to [sanity.io](https://sanity.io)
   - Create a new project
   - Note down your Project ID and Dataset name

2. **Install Sanity CLI:**
   ```bash
   npm install -g @sanity/cli
   ```

3. **Initialize Sanity Studio:**
   ```bash
   npx sanity init
   ```
   - Choose your project
   - Select "Blog" template or use the existing schemas

4. **Deploy Sanity Studio:**
   ```bash
   npx sanity deploy
   ```

5. **Get API Token:**
   - Go to your Sanity project dashboard
   - Navigate to API settings
   - Create a new token with Editor permissions

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your blog website.

## 📁 Project Structure

```
blog-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── blog/              # Blog pages
│   │   │   ├── page.tsx       # Blog listing page
│   │   │   └── [slug]/        # Dynamic blog post pages
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   ├── components/            # React components
│   │   ├── BlogCard.tsx       # Blog post card component
│   │   └── Navigation.tsx     # Navigation component
│   ├── sanity/               # Sanity CMS configuration
│   │   ├── lib/
│   │   │   ├── client.ts      # Sanity client configuration
│   │   │   └── image.ts       # Image URL builder
│   │   └── schemas/           # Content schemas
│   │       ├── post.ts        # Blog post schema
│   │       ├── author.ts      # Author schema
│   │       ├── category.ts    # Category schema
│   │       └── index.ts       # Schema exports
│   └── types/                 # TypeScript type definitions
│       └── blog.ts            # Blog-related types
├── sanity.config.ts           # Sanity configuration
└── package.json
```

## 🎨 Features

- **Modern Design**: Clean, responsive design with Tailwind CSS
- **App Router**: Next.js 15 with App Router for optimal performance
- **CMS Integration**: Sanity CMS for content management
- **TypeScript**: Full TypeScript support for type safety
- **SEO Optimized**: Meta tags and Open Graph support
- **Image Optimization**: Next.js Image component with Sanity image optimization
- **Rich Content**: Support for rich text, images, and code blocks
- **Categories**: Organize posts with categories and tags
- **Author Profiles**: Detailed author information and social links

## 📝 Content Management

### Creating Content

1. **Access Sanity Studio:**
   - Visit your deployed Sanity Studio URL
   - Or run locally: `npx sanity start`

2. **Create Authors:**
   - Go to "Authors" section
   - Add author name, bio, image, and social links

3. **Create Categories:**
   - Go to "Categories" section
   - Add category title, description, and color

4. **Create Blog Posts:**
   - Go to "Blog Posts" section
   - Add title, slug, content, featured image
   - Select author and categories
   - Set publish date and featured status

### Content Schema

- **Posts**: Title, slug, excerpt, content, featured image, author, categories, publish date
- **Authors**: Name, slug, image, bio, social links
- **Categories**: Title, slug, description, color

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect Repository:**
   - Push your code to GitHub
   - Connect your repository to Vercel

2. **Environment Variables:**
   - Add all environment variables in Vercel dashboard

3. **Deploy:**
   - Vercel will automatically deploy on every push

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Customization

- **Styling**: Modify Tailwind classes in components
- **Content**: Update Sanity schemas for different content types
- **Layout**: Modify components in `src/components/`
- **Pages**: Add new pages in `src/app/`

## 📚 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **CMS**: Supabase (with optional Sanity integration)
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image
- **Content**: Markdown/HTML

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

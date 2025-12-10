# Comprehensive Documentation: Pages, Components, and Features

## Table of Contents
1. [Project Overview](#project-overview)
2. [Pages Structure](#pages-structure)
   - [Main Pages](#main-pages)
   - [Admin Pages](#admin-pages)
   - [Blog Pages](#blog-pages)
   - [Kegiatan Pages](#kegiatan-pages)
   - [Utility Pages](#utility-pages)
3. [Components](#components)
   - [Navigation Components](#navigation-components)
   - [Content Components](#content-components)
   - [UI Components](#ui-components)
   - [Admin Components](#admin-components)
4. [Features](#features)
   - [Core Features](#core-features)
   - [Admin Features](#admin-features)
   - [Content Management Features](#content-management-features)
5. [Technical Details](#technical-details)

## Project Overview

This is a comprehensive Next.js blog website with admin dashboard functionality. The application includes:
- Public-facing blog with various content types
- Admin dashboard for content management
- Rich text editing capabilities
- Multiple content types (blogs, journals, documentation, work programs)
- Responsive design with modern UI

## Pages Structure

### Main Pages

#### 1. Home Page (`src/app/page.tsx`)
- **Description**: Main landing page with hero section, vision/mission, and team members
- **Features**:
  - Hero section with gradient background and scroll indicator
  - Vision and mission cards with icons
  - Team members section with zigzag layout
  - Responsive design with mobile-friendly layout
- **Components Used**: Navigation, Footer

#### 2. About Page (`src/app/about/page.tsx`)
- **Description**: Contact and about information page
- **Features**:
  - Contact information cards (Instagram, WhatsApp, TikTok, Email, Address)
  - Contact form with validation
  - Operating hours display
  - Location map section
  - Call-to-action section
- **Components Used**: Navigation, Footer

#### 3. Blog Page (`src/app/blog/page.tsx`)
- **Description**: Main blog listing page
- **Features**:
  - Hero section with blog title
  - Featured post display
  - Regular posts grid (3 columns on desktop)
  - Empty state handling
  - Responsive card layout
- **Components Used**: Navigation, Footer, BlogCard

#### 4. Contact Page (`src/app/contact/page.tsx`)
- **Description**: Contact page with form and information
- **Features**:
  - Contact information cards
  - Contact form with multiple fields
  - Google Maps integration
  - Quick contact information
- **Components Used**: Navigation, Footer, GoogleMapsEmbed

### Admin Pages

#### 1. Admin Dashboard (`src/app/admin/page.tsx`)
- **Description**: Main admin dashboard
- **Features**:
  - Stats cards (Journals, Documentation, Blog Posts, Program Kerja)
  - Quick action cards for content creation
  - Recent activity feed
  - Quick management links
  - Navigation tabs
- **Components Used**: Navigation, Footer

#### 2. Create Content Page (`src/app/admin/create/page.tsx`)
- **Description**: Content creation selection page
- **Features**:
  - Quick stats overview
  - Content type selection cards
  - Feature lists for each content type
  - Recent activity feed
- **Components Used**: Navigation, Footer

#### 3. Blog Creation Pages
- **Create Blog Page** (`src/app/admin/create/blog/page.tsx`)
  - Rich text editor integration
  - Blog post form with title, content, categories
  - Image upload functionality
- **Create Post Page** (`src/app/admin/create-post/page.tsx`)
  - Branched post creation interface
  - Multiple post type support

#### 4. Management Pages
- **Manage Post** (`src/app/admin/manage-post/page.tsx`)
  - Post listing with filtering
  - Edit/delete functionality
  - Bulk actions
- **Blog Management** (`src/app/admin/manage-post/blog/page.tsx`)
  - Blog-specific management
  - Featured post toggling
- **Blog Edit** (`src/app/admin/manage-post/blog/edit/[id]/page.tsx`)
  - Individual blog post editing
  - Content preview
  - Publish/unpublish controls

### Blog Pages

#### 1. Blog Detail Page (`src/app/blog/[slug]/page.tsx`)
- **Description**: Individual blog post page
- **Features**:
  - Blog post content rendering
  - Author information
  - Publication date
  - Related posts section
  - Comments section

#### 2. Blog Categories Pages
- Various category-specific blog pages

### Kegiatan Pages

#### 1. Kegiatan Main Page (`src/app/kegiatan/page.tsx`)
- **Description**: Activities overview page
- **Features**:
  - Activity listings
  - Category filtering
  - Search functionality

#### 2. Kegiatan Sub-pages
- **Dokumentasi** (`src/app/kegiatan/dokumentasi/page.tsx`)
  - Photo documentation display
  - Event galleries
- **Jurnal** (`src/app/kegiatan/jurnal/page.tsx`)
  - Journal entries listing
- **Program Kerja** (`src/app/kegiatan/program-kerja/page.tsx`)
  - Work program management

### Utility Pages

#### 1. Search Page (`src/app/search/page.tsx`)
- **Description**: Search results page
- **Features**:
  - Search query display
  - Results filtering
  - Pagination

#### 2. Edit Pages (`src/app/edit/[id]/page.tsx`)
- **Description**: Content editing interface
- **Features**:
  - Rich text editor
  - Content preview
  - Save/publish controls

## Components

### Navigation Components

#### 1. Navigation (`src/components/Navigation.tsx`)
- **Description**: Main navigation bar
- **Features**:
  - Responsive design (mobile/desktop)
  - Logo and brand name
  - Navigation links (Home, Blog, Kegiatan, Layanan, Contact)
  - Mobile menu toggle
  - Search bar integration
  - Sticky positioning
- **Props**:
  - None (self-contained)

#### 2. SearchBar (`src/components/SearchBar.tsx`)
- **Description**: Search functionality component
- **Features**:
  - Real-time search suggestions
  - Clear button
  - Keyboard navigation (Escape to close)
  - Mobile-friendly design
  - Route navigation on submit
- **Props**:
  - `className`: Optional CSS classes
  - `placeholder`: Search input placeholder text

#### 3. KegiatanNavigation (`src/components/KegiatanNavigation.tsx`)
- **Description**: Kegiatan-specific navigation
- **Features**:
  - Kegiatan category links
  - Active state highlighting
  - Responsive layout

### Content Components

#### 1. BlogCard (`src/components/BlogCard.tsx`)
- **Description**: Blog post card component
- **Features**:
  - Featured image display
  - Post title and excerpt
  - Publication date
  - Reading time indicator
  - Hover effects
  - Responsive layout
  - Featured post variant
- **Props**:
  - `post`: Post data object
  - `featured`: Boolean for featured layout

#### 2. RichTextEditor (`src/components/RichTextEditor.tsx`)
- **Description**: Advanced rich text editor
- **Features**:
  - Comprehensive toolbar (bold, italic, underline, headings, lists, alignment, etc.)
  - Image insertion (URL, upload, paste)
  - Link creation
  - Code blocks and quotes
  - Keyboard shortcuts (Ctrl+B, Ctrl+I, Ctrl+U, etc.)
  - Active format highlighting
  - Placeholder text
  - Custom styling for editor content
  - Image modal for URL/upload
  - Paste event handling for images
  - Undo/Redo functionality
- **Props**:
  - `content`: Initial content (HTML string)
  - `onChange`: Callback for content changes
  - `placeholder`: Placeholder text
  - `className`: Optional CSS classes

#### 3. Footer (`src/components/Footer.tsx`)
- **Description**: Website footer
- **Features**:
  - Logo and brand information
  - Navigation links
  - Social media icons
  - Newsletter subscription
  - Responsive grid layout
- **Props**: None

#### 4. GoogleMapsEmbed (`src/components/GoogleMapsEmbed.tsx`)
- **Description**: Google Maps integration
- **Features**:
  - Map embedding
  - Address display
  - Location link
- **Props**:
  - `mapsUrl`: Google Maps URL
  - `address`: Location address
  - `city`: City name

### UI Components

#### 1. HeroSection (`src/components/HeroSection.tsx`)
- **Description**: Reusable hero section
- **Features**:
  - Gradient background
  - Title and subtitle
  - Call-to-action buttons
  - Responsive design

#### 2. ContentRenderer (`src/components/ContentRenderer.tsx`)
- **Description**: Content rendering component
- **Features**:
  - HTML content rendering
  - Sanitization
  - Responsive layout

#### 3. ImageUpload (`src/components/ImageUpload.tsx`)
- **Description**: Image upload component
- **Features**:
  - File selection
  - Preview functionality
  - Upload progress
  - Error handling

### Admin Components

#### 1. BlogForm (`src/components/BlogForm.tsx`)
- **Description**: Blog creation/editing form
- **Features**:
  - Title and content fields
  - Category selection
  - Featured image upload
  - Publish controls
  - Validation

#### 2. DeleteButton (`src/components/DeleteButton.tsx`)
- **Description**: Delete action button
- **Features**:
  - Confirmation dialog
  - Delete functionality
  - Loading state

#### 3. DeleteModal (`src/components/DeleteModal.tsx`)
- **Description**: Delete confirmation modal
- **Features**:
  - Confirmation message
  - Cancel/Confirm buttons
  - Animation

#### 4. FeaturedButton (`src/components/FeaturedButton.tsx`)
- **Description**: Featured post toggle
- **Features**:
  - Toggle functionality
  - Visual state indication
  - API integration

## Features

### Core Features

#### 1. Content Management System
- **Description**: Comprehensive CMS functionality
- **Capabilities**:
  - Multiple content types (blogs, journals, documentation, work programs)
  - Rich text editing
  - Media management
  - Category and tag system
  - Publishing workflow

#### 2. User Interface
- **Description**: Modern, responsive UI
- **Capabilities**:
  - Mobile-first design
  - Accessible components
  - Consistent styling
  - Animation and transitions
  - Dark/light mode support

#### 3. Navigation
- **Description**: Intuitive navigation system
- **Capabilities**:
  - Main navigation bar
  - Breadcrumbs
  - Search functionality
  - Mobile menu
  - Active state indicators

### Admin Features

#### 1. Dashboard
- **Description**: Admin dashboard interface
- **Capabilities**:
  - Content statistics
  - Quick actions
  - Recent activity feed
  - Management links
  - Responsive layout

#### 2. Content Creation
- **Description**: Content creation workflow
- **Capabilities**:
  - Multiple content type selection
  - Rich text editor integration
  - Media upload
  - Category and tag management
  - Preview functionality

#### 3. Content Management
- **Description**: Content management tools
- **Capabilities**:
  - List view with filtering
  - Bulk actions
  - Edit/delete functionality
  - Publish/unpublish controls
  - Featured content management

### Content Management Features

#### 1. Rich Text Editing
- **Description**: Advanced content editing
- **Capabilities**:
  - Formatting tools (bold, italic, headings, etc.)
  - Media insertion
  - Link creation
  - Code blocks
  - Keyboard shortcuts
  - Paste handling

#### 2. Media Management
- **Description**: Media handling capabilities
- **Capabilities**:
  - Image upload (URL, file, paste)
  - Image resizing
  - Gallery management
  - Media organization

#### 3. Search and Filtering
- **Description**: Content discovery tools
- **Capabilities**:
  - Full-text search
  - Category filtering
  - Tag filtering
  - Date range filtering
  - Advanced search operators

## Technical Details

### Technology Stack
- **Framework**: Next.js 14+
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Database**: Supabase (PostgreSQL)
- **CMS**: Sanity (for some content)
- **State Management**: React Context + Hooks
- **Form Handling**: React Hook Form
- **Rich Text Editing**: Custom implementation with execCommand

### File Structure
```
src/
├── app/                  # Pages and routing
│   ├── admin/            # Admin pages
│   ├── blog/             # Blog pages
│   ├── kegiatan/         # Activities pages
│   └── ...               # Other pages
├── components/           # Reusable components
│   ├── ui/               # UI primitives
│   └── ...               # Feature components
├── lib/                  # Utilities and services
├── sanity/              # Sanity CMS integration
└── types/                # TypeScript types
```

### Key Dependencies
- `next`: Next.js framework
- `react`: React library
- `lucide-react`: Icon library
- `@supabase/supabase-js`: Supabase client
- `@sanity/client`: Sanity CMS client
- `next/font`: Font optimization
- `react-dom`: React DOM

### Performance Optimizations
- Image optimization with Next.js Image component
- Code splitting and lazy loading
- Server-side rendering for SEO
- Static generation where possible
- Efficient state management

### Accessibility Features
- Semantic HTML
- Keyboard navigation support
- ARIA attributes
- Focus management
- Color contrast compliance
- Screen reader support

### Internationalization
- Indonesian language support
- Date/time localization
- Currency formatting (IDR)
- Localized content

This comprehensive documentation provides a complete overview of all pages, components, and features in the application, serving as a reference for developers, designers, and content managers.
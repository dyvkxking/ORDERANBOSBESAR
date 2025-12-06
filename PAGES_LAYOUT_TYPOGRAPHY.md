# Pages, Layout, and Typography Documentation

## Table of Contents
1. [Overview](#overview)
2. [Layout Structure](#layout-structure)
3. [Typography System](#typography-system)
4. [Color Palette](#color-palette)
5. [Page Directory](#page-directory)
6. [Component Architecture](#component-architecture)

---

## Overview

This Next.js application is a blog/content management system with the following key features:
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS with custom theme
- **Typography**: Nunito Sans (primary) and Fira Code (monospace)
- **State Management**: Supabase for backend/database
- **Content Management**: Sanity CMS integration

---

## Layout Structure

### Root Layout (`src/app/layout.tsx`)

**Fonts:**
```typescript
- Nunito Sans: Primary font with weights 300-900
- Fira Code: Monospace font with weights 300-700
```

**Structure:**
```
<html>
  <body>
    <Navigation />
    {children}  // Page content
    <Footer />
  </body>
</html>
```

**Features:**
- Sticky navigation bar
- Global footer on all pages
- Antialiased font rendering
- Gradient background on body

---

## Typography System

### Font Families

#### Nunito Sans (Primary)
- **Variable**: `--font-nunito-sans`
- **Usage**: Body text, headings, UI elements
- **Weights Available**: 300, 400, 500, 600, 700, 800, 900
- **Features**: ligatures enabled, kerning enabled, antialiased

#### Fira Code (Monospace)
- **Variable**: `--font-fira-code`
- **Usage**: Code blocks, inline code, technical content
- **Weights Available**: 300, 400, 500, 600, 700

### Typography Scale

#### Headings (`.prose` context)
```css
h1: 2.5rem (40px) / font-weight: 800 / line-height: 1.1
h2: 2rem (32px) / font-weight: 700 / line-height: 1.2
h3: 1.5rem (24px) / font-weight: 600 / line-height: 1.3
```

#### Body Text
```css
p: 1.125rem (18px) / line-height: 1.75
li: 1.125rem (18px) / line-height: 1.7
```

#### Code
```css
code: 0.875rem (14px) / font-family: Fira Code
pre: 0.875rem (14px) / font-family: Fira Code
```

### Font Features
- **Feature Settings**: `rlig` 1, `calt` 1 (enabled on all text)
- **Letter Spacing**: 
  - Headings: -0.01em to -0.02em
  - Body: 0em
- **Text Rendering**: optimizeLegibility (all text)
- **Font Smoothing**: antialiased (all elements)

### Typography Classes

Available in Tailwind:
- `font-display`: Display font (Nunito Sans)
- `font-sans`: Sans-serif font (Nunito Sans)
- `font-mono`: Monospace font (Fira Code)

---

## Color Palette

### CSS Variables
```css
--background: #F2F2F2 (light gray)
--foreground: #1a1a1a (near black)
--card: #ffffff (white)
--card-foreground: #1a1a1a
--primary: #255F38 (dark green)
--primary-foreground: #ffffff (white)
--secondary: #1F7D53 (medium green)
--secondary-foreground: #ffffff (white)
--muted: #e5e5e5 (light gray)
--muted-foreground: #666666 (medium gray)
--accent: #1F7D53 (medium green)
--accent-foreground: #ffffff (white)
--destructive: #ef4444 (red)
--destructive-foreground: #ffffff (white)
--border: #d1d5db (light gray)
--input: #ffffff (white)
--ring: #255F38 (dark green)
```

### Usage Patterns
- **Primary Action**: `#255F38` (dark green)
- **Hover State**: `#1F7D53` (medium green)
- **Background**: `#F2F2F2` (light gray)
- **Text**: `#1a1a1a` (near black)
- **Muted Text**: `#666666` (medium gray)
- **Border**: `#d1d5db` (light gray)

---

## Page Directory

### Public Pages

#### 1. Home Page (`/`)
- **Path**: `src/app/page.tsx`
- **Layout**: Hero section + Visi/Misi + Team section
- **Features**:
  - Full-viewport hero with gradient background
  - Visi & Misi cards
  - Team member cards in zigzag layout
  - Scroll indicator

#### 2. Blog List (`/blog`)
- **Path**: `src/app/blog/page.tsx`
- **Layout**: Featured post + Grid of regular posts
- **Features**:
  - Featured post section with large card
  - 3-column grid for regular posts
  - Hero section with gradient background

#### 3. Blog Detail (`/blog/[slug]`)
- **Path**: `src/app/blog/[slug]/page.tsx`
- **Layout**: Article content with rich text
- **Features**:
  - Full article rendering with `.prose` class
  - Related posts
  - Reading time indicator

#### 4. About Page (`/about`)
- **Path**: `src/app/about/page.tsx`
- **Layout**: Content about the organization
- **Status**: Implemented

#### 5. Contact Page (`/contact`)
- **Path**: `src/app/contact/page.tsx`
- **Layout**: Contact form + Social links + Map
- **Features**:
  - Contact information cards
  - Google Maps embed
  - Contact form with validation
  - Social media links

#### 6. Services/Layanan (`/layanan`)
- **Path**: `src/app/layanan/page.tsx`
- **Layout**: Services grid + Why choose us + Call to action
- **Features**:
  - Hero section for OSIS services
  - 6 student-focused service cards:
    - Konseling Siswa (Student Counseling)
    - Literasi & Pustaka (Literacy & Library)
    - Tutor Sebaya (Peer Tutoring)
    - Program Prestasi (Achievement Program)
    - Kepemimpinan (Leadership)
    - Sosial & Bela Negara (Social & Civic Programs)
  - "Why Choose OSIS MTs" section with 4 key points
  - Call-to-action linking to Contact and Activities pages
  - Responsive 3-column grid layout
  - All services are free for students

#### 7. Kegiatan (Activities)
- **Path**: `src/app/kegiatan/page.tsx`
- **Layout**: Jurnal (Journal) activities
- **Subpages**:
  - `/kegiatan/jurnal` - Journal entries
  - `/kegiatan/dokumentasi` - Documentation
  - `/kegiatan/program-kerja` - Work programs

#### 8. Search Page (`/search`)
- **Path**: `src/app/search/page.tsx`
- **Layout**: Search results with filters

---

### Admin Pages (`/admin`)

#### Admin Dashboard (`/admin`)
- **Path**: `src/app/admin/page.tsx`
- **Layout**: Tabbed navigation + Stats cards
- **Features**:
  - Statistics cards (Jurnal, Dokumentasi, Blog, Program Kerja)
  - Quick action cards
  - Recent activity feed
  - Tab navigation: Dashboard, Create, Manage Post, Manage, Settings

#### Admin Create Pages
- **Blog**: `src/app/admin/create/blog/page.tsx`
- **Jurnal**: `src/app/admin/create/jurnal/page.tsx`
- **Dokumentasi**: `src/app/admin/create/dokumentasi/page.tsx`
- **Program Kerja**: `src/app/admin/create/program-kerja/page.tsx`

#### Admin Manage Pages
- **Manage Post**: `src/app/admin/manage-post/page.tsx`
  - **Edit Blog**: `src/app/admin/manage-post/blog/edit/[id]/page.tsx`
- **Members**: `src/app/admin/members/page.tsx`
- **Settings**: `src/app/admin/page.tsx` (Settings tab)

---

### Alternative Admin (`/hhhghghgwangik4167`)

This is a specialized admin interface with sidebar navigation.

#### Layout (`/hhhghghgwangik4167`)
- **Path**: `src/app/hhhghghgwangik4167/layout.tsx`
- **Layout**: Sidebar navigation + main content area
- **Features**:
  - Left sidebar with collapsible menus
  - Dashboard, Create, Manage Posts, Edit Posts options
  - "Back to Site" link

#### Dashboard (`/hhhghghgwangik4167`)
- **Path**: `src/app/hhhghghgwangik4167/page.tsx`

#### Create Pages
- **Blog**: `src/app/hhhghghgwangik4167/create/blog/page.tsx`
- **Jurnal**: `src/app/hhhghghgwangik4167/create/jurnal/page.tsx`
- **Dokumentasi**: `src/app/hhhghghgwangik4167/create/dokumentasi/page.tsx`
- **Program Kerja**: `src/app/hhhghghgwangik4167/create/program-kerja/page.tsx`

#### Edit Pages
- **Edit** (`/hhhghghgwangik4167/edit`): Lists all posts for editing
- **Edit by ID** (`/hhhghghgwangik4167/edit/[id]/page.tsx`): Single post editing interface

#### Manage (`/hhhghghgwangik4167/manage`)
- **Path**: `src/app/hhhghghgwangik4167/manage/page.tsx`

---

### Other Pages

#### Edit (`/edit/[id]`)
- **Path**: `src/app/edit/[id]/page.tsx`
- **Purpose**: Frontend editing interface for posts

#### Demo & Test Pages
- `/demo-editor` - Editor demonstration
- `/test-editor` - Editor testing
- `/create` - Placeholder for creation functionality

---

## Component Architecture

### Navigation Components

#### 1. Navigation (`Navigation.tsx`)
- **Location**: `src/components/Navigation.tsx`
- **Style**: Sticky navigation with backdrop blur
- **Features**:
  - Desktop navigation: Logo, Menu items, Search bar
  - Mobile navigation: Hamburger menu, Collapsible menu
  - Links: Home, Blog, Kegiatan, Layanan, Contact
  - Search bar component integrated

#### 2. KegiatanNavigation (`KegiatanNavigation.tsx`)
- **Location**: `src/components/KegiatanNavigation.tsx`
- **Purpose**: Tab navigation for Kegiatan section
- **Links**: Jurnal, Dokumentasi, Program Kerja

#### 3. Footer (`Footer.tsx`)
- **Location**: `src/components/Footer.tsx`
- **Layout**: 3-column grid (Logo, Menu, Social)
- **Features**:
  - Logo with image
  - Menu links
  - Social media icons
  - Newsletter subscription form

### Content Components

#### Blog Components
- **BlogCard**: Individual blog post card
- **BigBlogCards**: Large featured blog cards
- **BlogRecommendationCards**: Related/recommended posts
- **SimpleBigBlogCards**: Simplified large cards

#### Form Components
- **BlogForm**: Blog creation/editing form
- **RichTextEditor**: Rich text editing component
- **SafeRichTextEditor**: Safer version of rich text editor
- **ImageUpload**: Image upload component

#### UI Components
- **SearchBar**: Search functionality
- **ContentRenderer**: Renders markdown/content
- **DeleteButton**: Delete action button
- **DeleteModal**: Confirmation modal
- **FeaturedButton**: Toggle featured status
- **Toast**: Notification system
- **GoogleMapsEmbed**: Google Maps integration
- **HeroSection**: Reusable hero section

---

## Layout Patterns

### Page Layout Structure

```
<Navigation /> (Sticky)
  <Page Content>
    <Hero Section> (optional)
    <Main Content>
    <Additional Sections> (optional)
  </Page Content>
<Footer />
```

### Hero Section Pattern
```jsx
<div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] text-white py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Content */}
  </div>
</div>
```

### Container Pattern
```jsx
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  {/* Content */}
</div>
```

### Card Pattern
```jsx
<div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
  {/* Content */}
</div>
```

---

## Typography in Prose

### Prose Styling (`.prose`)

Used for rich content like blog posts, articles:

```css
.prose h1 {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1.1;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.prose h2 {
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.2;
  margin-top: 2rem;
  margin-bottom: 1rem;
  letter-spacing: -0.015em;
}

.prose h3 {
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.3;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
}

.prose p {
  font-size: 1.125rem;
  line-height: 1.75;
  margin-top: 1rem;
  margin-bottom: 1.25rem;
}

.prose a {
  color: #255F38;
  text-decoration: underline;
  font-weight: 500;
  text-underline-offset: 2px;
}

.prose code {
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 0.375rem;
  font-family: Fira Code;
  font-size: 0.875rem;
}

.prose blockquote {
  border-left: 4px solid #255F38;
  padding-left: 1.25rem;
  margin: 2rem 0;
  font-style: italic;
  color: #666666;
}
```

---

## Responsive Design

### Breakpoints (Tailwind)
- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px

### Responsive Patterns
```jsx
// Mobile-first approach
className="text-base md:text-lg lg:text-xl"

// Grid layouts
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Flexbox layouts
className="flex-col md:flex-row"
```

---

## Utility Classes

### Spacing
- **Padding**: `p-{size}` (e.g., `p-4`, `p-8`, `px-6`, `py-2`)
- **Margin**: `m-{size}` (e.g., `mb-4`, `mt-8`)
- **Gap**: `gap-{size}` (e.g., `gap-4`, `gap-8`)

### Borders & Radius
- **Border**: `border`, `border-t`, `border-2`
- **Radius**: `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-full`

### Shadows
- **Shadow**: `shadow`, `shadow-lg`, `shadow-xl`, `shadow-2xl`

### Transitions
- **Hover**: `hover:shadow-xl`, `hover:bg-[#1F7D53]`
- **Transition**: `transition-colors`, `transition-shadow`, `transition-all`

### Backgrounds
- **Gradient**: `bg-gradient-to-r from-[#255F38] to-[#1F7D53]`
- **Background color**: `bg-white`, `bg-gray-50`, `bg-[#255F38]`

---

## API Routes

### REST API Endpoints

#### Posts
- **GET/POST**: `/api/posts/[id]/route.ts`
- **Featured**: `/api/posts/[id]/featured/route.ts`

#### Jurnal
- **GET/POST**: `/api/jurnal/route.ts`
- **GET/PUT/DELETE**: `/api/jurnal/[id]/route.ts`

#### Dokumentasi
- **GET/POST**: `/api/dokumentasi/route.ts`
- **GET/PUT/DELETE**: `/api/dokumentasi/[id]/route.ts`

#### Program Kerja
- **GET/POST**: `/api/program-kerja/route.ts`
- **GET/PUT/DELETE**: `/api/program-kerja/[id]/route.ts`

#### Upload
- **POST**: `/api/upload/route.ts`

---

## File Structure Summary

```
src/app/
├── layout.tsx           # Root layout
├── page.tsx             # Home page
├── globals.css          # Global styles
├── about/               # About page
├── blog/                # Blog pages
│   ├── page.tsx         # Blog list
│   └── [slug]/         # Blog detail
├── contact/             # Contact page
├── layanan/             # Services page
├── kegiatan/            # Activities pages
│   ├── page.tsx         # Main activities
│   ├── jurnal/          # Journal
│   ├── dokumentasi/     # Documentation
│   └── program-kerja/   # Work programs
├── search/              # Search page
├── admin/               # Admin interface
│   ├── page.tsx         # Dashboard
│   ├── create/          # Create pages
│   ├── manage-post/     # Manage posts
│   └── members/         # Members
├── hhhghghgwangik4167/  # Alternative admin
│   ├── layout.tsx       # Sidebar layout
│   ├── page.tsx         # Dashboard
│   ├── create/          # Create pages
│   ├── edit/            # Edit pages
│   └── manage/          # Manage page
└── api/                 # API routes
    ├── posts/
    ├── jurnal/
    ├── dokumentasi/
    ├── program-kerja/
    └── upload/

src/components/
├── Navigation.tsx
├── Footer.tsx
├── BlogCard.tsx
├── BigBlogCards.tsx
├── BlogForm.tsx
├── RichTextEditor.tsx
└── ... other components

src/lib/
├── supabase/            # Supabase client & queries
└── sanity/              # Sanity client
```

---

## Design System Summary

### Primary Colors
- **Dark Green**: `#255F38` - Primary actions, links
- **Medium Green**: `#1F7D53` - Hover states, accents

### Text Colors
- **Foreground**: `#1a1a1a` - Primary text
- **Muted**: `#666666` - Secondary text
- **White**: `#ffffff` - Text on dark backgrounds

### Background Colors
- **Page Background**: `#F2F2F2`
- **Card Background**: `#ffffff`
- **Gradient**: `from-[#255F38] to-[#1F7D53]`

### Border Radius
- **Small**: `0.375rem` (rounded-md)
- **Medium**: `0.5rem` (rounded-lg)
- **Large**: `1rem` (rounded-xl)
- **Extra Large**: `1.5rem` (rounded-2xl)
- **Full**: `50%` (rounded-full)

### Shadows
- **Small**: `shadow`
- **Medium**: `shadow-lg`
- **Large**: `shadow-xl`
- **Extra Large**: `shadow-2xl`

---

## Key Features

1. **Responsive Design**: Mobile-first approach with breakpoints
2. **Accessibility**: Semantic HTML, proper heading hierarchy
3. **Performance**: Next.js App Router, optimized images
4. **Typography**: Beautiful fonts with ligatures and kerning
5. **Color System**: Consistent green theme throughout
6. **Component Reusability**: Modular component architecture
7. **State Management**: Supabase for backend/database
8. **Content Management**: Sanity CMS integration
9. **Admin Interface**: Dual admin interfaces for flexibility
10. **SEO**: Metadata management for all pages

---

## Notes

- All pages follow consistent layout patterns
- Typography system uses CSS variables for theming
- Color palette is defined in `globals.css` as CSS variables
- Components are highly reusable and modular
- Admin interfaces provide different entry points for content management
- API routes follow REST conventions
- Both server and client components are used appropriately

---

**Last Updated**: Current as of project structure analysis


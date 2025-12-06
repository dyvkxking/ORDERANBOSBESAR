# Relume Prompts - OSIS Website Redesign

## Brand Guidelines
- **Colors:** Primary `#255F38`, Secondary `#1F7D53`
- **Font:** Roboto (300, 400, 500, 700, 900)
- **Style:** Modern, clean, glassmorphism, green theme

## Sitemap
```
/ (Home)
/about (About/Contact)
/layanan (Services)
/contact (Contact)
/blog (Blog List)
/blog/[slug] (Blog Detail)
/search (Search)
/kegiatan (Activities Hub)
/kegiatan/program-kerja
/kegiatan/jurnal
/kegiatan/dokumentasi
/admin (Dashboard)
/admin/create/* (Content Creation)
/admin/manage-post/* (Content Management)
```

## Relume Prompts

### 1. Homepage
**Sitemap:** Homepage with hero (gradient bg, "Build The Future Together", stats 100+ Projects/50+ Members/5+ Years, dual CTAs), 4 value cards (Passion/Innovation/Excellence/Quality with gradient icons), vision/mission 2-col cards, team grid (4 members), final CTA.

**Wireframe:** Green gradient hero, animated blobs, center title, subtitle, 2 CTAs, stats bar. 4 cards 2x2 grid with gradient icons. Vision/Mission 2-col (Eye/Target icons). Team 2-col cards (avatar, name, position, contact). Gradient CTA.

### 2. Contact Page
**Sitemap:** Hero, 5 contact cards (Instagram/WhatsApp/TikTok/Email/Address), form (name/email/phone/subject/message), hours table, services, map, CTA.

**Wireframe:** Gradient hero. 3-col contact cards with icons. Two-col: form left (6 fields), info right (hours/services). Map placeholder. CTA bottom.

### 3. Services Page
**Sitemap:** Hero, 6 service cards (Counseling/Literacy/Tutoring/Achievement/Leadership/Social) with 3 features each, "Why Choose Us" (4 benefits), CTA.

**Wireframe:** Gradient hero. 3-col grid, colored icons (blue/green/purple/orange/pink/red), title, desc, 3 checkmarks. 4 benefit cards. Green CTA.

### 4. Blog List
**Sitemap:** Hero, search/filter bar, blog cards (image/title/excerpt/author/date/category/read time), pagination.

**Wireframe:** 3-col grid. Cards: 16:9 image, badge, title (2 lines), excerpt (3 lines), author, date, "Read More". Search/filters. Pagination.

### 5. Blog Detail
**Sitemap:** Breadcrumb, hero (image/title/meta), article (rich text), TOC sidebar, author bio, 3 related posts, back button.

**Wireframe:** Breadcrumb. Full hero image with title overlay, meta bar. Content 800px centered. Sticky TOC sidebar. Green links, styled quotes/code. Author card. 3 related posts.

### 6. Activities Hub
**Sitemap:** Hero, 3 category cards (Program Kerja/Jurnal/Dokumentasi) with counts and "View All", stats, recent grid, CTA.

**Wireframe:** Gradient hero. 3 large cards: icons (calendar/book/camera), title, desc, count, CTA. Stats: 3-4 cards. Recent mixed grid. CTA.

### 7. Program Kerja
**Sitemap:** Hero, filter bar (status/sort), programs grid (title/desc/status badge/date/participants), pagination.

**Wireframe:** Filter bar: search, status (Planned/Ongoing/Completed), sort. 2-3 col grid. Cards: status badge, title, desc, date, count. Color-coded (blue/yellow/green).

### 8. Admin Dashboard
**Sitemap:** Welcome header, 4 stat cards (posts/programs/members/pending), quick actions (create buttons), activity table, shortcuts.

**Wireframe:** Header. 4 stats with icons/numbers/trends. Action grid (5+ create buttons). Activity table (5 rows). Management cards with counts.

### 9. Content Creation
**Sitemap:** Form (title/slug/editor/image/category/tags/date/SEO). Actions: Draft, Publish.

**Wireframe:** Two-col: left (title/slug/WYSIWYG), right (image/category/tags/date/SEO). Sticky header: Draft, Preview, Publish (green).

### 10. Content Management
**Sitemap:** Table (thumb/title/author/category/status/date/actions), filters (status/category/date), search, bulk actions, pagination.

**Wireframe:** Search + filters. Bulk select. Table: thumb, title, author, category, status badge (green/yellow/blue), date, edit/delete. Sortable. Pagination.

## Usage
1. Copy sitemap → Relume Sitemap Generator
2. Copy wireframe → Relume Wireframe Generator  
3. Add tokens: Primary #255F38, Roboto, Radius 0.5rem
4. Export to Figma

## Design System
- **Buttons:** Primary (green), Outline, Ghost
- **Cards:** White, shadow, 0.5rem radius, hover lift
- **Forms:** Green focus rings, labels, validation
- **Badges:** Color-coded (green/yellow/blue/red)
- **Icons:** Lucide React
- **Responsive:** Mobile <768px, Tablet 768-1024px, Desktop >1024px
- **Animations:** 0.3s transitions, hover effects

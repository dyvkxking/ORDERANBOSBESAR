# UI / UX Design Guidelines

This document lists the pages, page layouts, and typography system for the project. Use this as the source of truth for consistent UI and UX across the website and admin panel.

## Table of Contents

- Purpose
- Pages (catalog)
- Page layout patterns
- Common components and behaviors
- Forms & validation patterns
- Modals & overlays
- Accessibility & performance notes
- Typography system
- Spacing, grid & responsive rules
- Color & states (brief)
- Examples & usage

---

## Purpose

Provide a concise, practical design guideline for developers and designers implementing UI in the repository. This covers all page types in the project (public website and admin panel), layout conventions, and a typography system to ensure visual consistency.

## Pages (catalog)

List of pages in the app and short descriptions. Keep this updated as the app evolves.

Public site:

- Home (`/`)
  - Hero, featured posts, category navigation, footer.
- Blog listing (`/blog`)
  - List of blog posts with cards, search bar, filters, and pagination or infinite scroll.
- Blog detail (`/blog/[slug]`)
  - Title, byline, publish date, featured image, content (rich text), related posts.
- About (`/about`)
  - Static content, team, mission.
- Contact (`/contact`)
  - Contact form, map, contact details.
- Layanan / Kegiatan / Kegiatan detail pages (domain-specific)
  - Catalog pages for organization activities.

Admin panel (under `/admin`):

- Admin dashboard (`/admin`)
  - Overview metrics, quick actions.
- Create landing (`/admin/create`)
  - Dropdown navigation for creating content types (Blog, Kegiatan, Dokumentasi, Program Kerja, Jurnal).
- Create Blog (`/admin/create/blog`)
  - Full form with title, author, excerpt, content (rich text), featured image, tags, SEO fields.
- Create Kegiatan / Dokumentasi / Program Kerja / Jurnal
  - Similar forms tailored to the content type.
- Manage content (`/admin/manage`)
  - List of content, filters, bulk actions, publish/unpublish.
- Members / Settings / Upload endpoints
  - Management pages for users and media.

## Page layout patterns

Top-level layout rules apply for both public pages and admin pages.

Global header
- Contains primary navigation, logo, optionally user account menu.
- Sticky at top on desktop.

Main content area
- Centered within a max-width container (see spacing/grid).
- Use clear separation between primary content and sidebars.

Footer
- Contains secondary navigation, copyright, links.

Admin layout specifics
- Left sidebar for admin navigation (collapsible on smaller screens).
- Top-bar inside admin for quick actions (save, preview, publish).
- Main workspace area has a two-column grid: primary form/editor (wide) and a right sidebar (metadata, publish settings).
- Forms use grouped sections and collapsing cards for long forms.

Card & container rules
- Use subtle shadow and rounded corners (8px) for cards.
- Internal padding: 16px - 24px depending on density.

Forms and form sections
- Label top-aligned (above fields) for mobile-first clarity.
- Use consistent input heights (44px) and border-radius (8px).
- Buttons: primary (brand color), secondary (neutral), danger (red) with consistent padding.

## Common components and behaviors

- Buttons: text-transform none, medium weight, visually distinct primary color.
- Inputs: light border, focus ring using brand color (#255F38), smooth transitions.
- Toolbars (editor): compact icon-only buttons with accessible labels.
- Alerts / toasts: top-right for non-modal feedback, persist for 3–5 seconds.

Keyboard shortcuts
- Provide keyboard shortcuts where helpful (e.g., Ctrl/Cmd+B for bold), but ensure they do not block browser defaults for other features.

Image handling
- Support paste from clipboard and upload from file/URL in the editor.
- Use an image modal for preview/insert and simple alignment controls.

## Forms & validation patterns

- Validate on submit and show inline validation messages under the field.
- For long forms, preserve draft state locally (optional) and show unsaved changes indicator.
- Required fields show an asterisk and prevented submission when missing.

## Modals & overlays

- Use full-screen dim overlay with a centered panel (max width 640px for content insertion).
- Close on Escape and clicking the overlay.
- Ensure focus trap inside modal and return focus to the triggering element after close.

## Accessibility & performance notes

- Color contrast: ensure text passes WCAG AA (4.5:1 for normal text).
- Focus states: all interactive elements must have visible focus outlines.
- Semantic markup: use native form controls and headings to improve screen reader navigation.
- Lazy-load heavy assets (e.g., images) and defer non-essential JS.

## Typography system

Purpose: a compact scale that covers headings, body, labels and small / micro text used across the site.

Base assumptions:
- Primary font family: system stack or a chosen web font (e.g., Inter, Poppins, or Roboto). Use a readable sans-serif.
- Font weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold).
- Base font size: 16px (1rem).

Scale (desktop):
- H1: 32px / 2rem / 700 / line-height: 1.2
- H2: 24px / 1.5rem / 600 / line-height: 1.25
- H3: 20px / 1.25rem / 600 / line-height: 1.3
- H4: 18px / 1.125rem / 600 / line-height: 1.3
- Body (regular): 16px / 1rem / 400 / line-height: 1.6
- Small / label: 14px / 0.875rem / 500 / line-height: 1.4
- Micro / caption: 12px / 0.75rem / 400 / line-height: 1.3

Editor content (rich text):
- Paragraph: 18px / 1.125rem recommended for readability in long-form content (configurable per article template).
- Code block: use monospace, 13px, with subtle background and horizontal scroll.
- Blockquote: same size as body, italic or lighter weight, with left border.

Mobile adjustments:
- Scale down headings slightly to fit (H1: 28px, H2: 20px, H3: 18px).
- Keep body at 16px for readability on small screens.

CSS variables suggestion (example):

:root {
  --font-sans: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  --fs-base: 16px;
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;
  --h1: 2rem; /* 32px */
  --h2: 1.5rem; /* 24px */
  --h3: 1.25rem; /* 20px */
  --body: 1rem; /* 16px */
}

Usage examples:

- Page title: H1
- Section title: H2 or H3
- Form label: Small / label
- Meta / byline: Small

## Spacing, grid & responsive rules

Grid
- Use a 12-column grid on large screens, 6-column for medium, single column for mobile.
- Max content width: 1200 - 1400px for large layouts; primary content column around 700 - 900px for reading comfort.

Spacing scale (multiples of 4px):
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- xxl: 48px

Breakpoints
- Mobile: 0 - 639px
- Tablet: 640px - 1023px
- Desktop: 1024px - 1439px
- Wide: 1440px+

Responsive rules
- Sidebar collapses below 1024px into a toggleable drawer.
- Tables / code blocks scroll horizontally on small screens.

## Color & states (brief)

Primary brand: #255F38 (dark green)
- Primary hover: #1F7D53
- Muted / neutral greys for borders and backgrounds: #E5E7EB (tailwind gray-200), #F3F4F6 (gray-100)
- Danger: #E02424 or similar red for destructive actions.

States
- Hover: slight darken or elevated shadow.
- Disabled: 50% opacity and disabled cursor.
- Focus: outline ring with the brand color and accessible contrast.

## Examples & usage

Create blog page
- Title at top (H1).
- Two-column layout: left (2/3) for form fields and editor, right (1/3) for metadata.
- Editor uses the typography rules above and shows a small "Text Editor" badge near the label.

Admin sidebar
- Compact vertical list with icons and text. Active item uses bold and brand color.

Buttons
- Primary: background #255F38, white text, 8px radius, padding 10px 16px.
- Secondary: border variant with transparent background.

---

## Notes & next steps

- Add visual tokens (Figma/Design tokens) for colors, spacing and typography in the design system if you use a design tool.
- Consider adding a companion README for component-level guidelines (buttons, inputs, badges, chips).
- When migrating editor to Quill (or another editor), map Quill classes to the typography tokens to keep article styles consistent.

If you'd like, I can also:
- Generate a companion `DESIGN_TOKENS.json` with the variables above.
- Create a smaller `COMPONENT_GUIDELINES.md` covering buttons, inputs, cards and modals in detail.

---

Document last updated: October 25, 2025

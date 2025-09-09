-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create authors table
CREATE TABLE IF NOT EXISTS authors (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  bio TEXT,
  image_url TEXT,
  twitter_url TEXT,
  linkedin_url TEXT,
  github_url TEXT,
  website_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  description TEXT,
  color VARCHAR(50) NOT NULL DEFAULT 'blue',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create posts table
CREATE TABLE IF NOT EXISTS posts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  featured_image_url TEXT,
  author_id UUID REFERENCES authors(id) ON DELETE CASCADE,
  featured BOOLEAN DEFAULT FALSE,
  published BOOLEAN DEFAULT FALSE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create post_categories junction table
CREATE TABLE IF NOT EXISTS post_categories (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  post_id UUID REFERENCES posts(id) ON DELETE CASCADE,
  category_id UUID REFERENCES categories(id) ON DELETE CASCADE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  UNIQUE(post_id, category_id)
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_posts_published ON posts(published);
CREATE INDEX IF NOT EXISTS idx_posts_featured ON posts(featured);
CREATE INDEX IF NOT EXISTS idx_posts_published_at ON posts(published_at);
CREATE INDEX IF NOT EXISTS idx_posts_slug ON posts(slug);
CREATE INDEX IF NOT EXISTS idx_authors_slug ON authors(slug);
CREATE INDEX IF NOT EXISTS idx_categories_slug ON categories(slug);
CREATE INDEX IF NOT EXISTS idx_post_categories_post_id ON post_categories(post_id);
CREATE INDEX IF NOT EXISTS idx_post_categories_category_id ON post_categories(category_id);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers to automatically update updated_at
CREATE TRIGGER update_authors_updated_at BEFORE UPDATE ON authors
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_posts_updated_at BEFORE UPDATE ON posts
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data
INSERT INTO authors (name, slug, bio, image_url, twitter_url, linkedin_url, github_url, website_url) VALUES
('John Doe', 'john-doe', 'A passionate writer and developer with over 10 years of experience in web development.', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face', 'https://twitter.com/johndoe', 'https://linkedin.com/in/johndoe', 'https://github.com/johndoe', 'https://johndoe.com'),
('Jane Smith', 'jane-smith', 'Tech enthusiast and content creator focused on modern web technologies and best practices.', 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face', 'https://twitter.com/janesmith', 'https://linkedin.com/in/janesmith', 'https://github.com/janesmith', 'https://janesmith.com')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO categories (title, slug, description, color) VALUES
('Technology', 'technology', 'Articles about the latest in technology and software development', 'blue'),
('Web Development', 'web-development', 'Frontend and backend web development topics', 'green'),
('Design', 'design', 'UI/UX design principles and best practices', 'purple'),
('Tutorials', 'tutorials', 'Step-by-step guides and how-to articles', 'red'),
('News', 'news', 'Latest news and updates in the tech world', 'yellow')
ON CONFLICT (slug) DO NOTHING;

INSERT INTO posts (title, slug, excerpt, content, featured_image_url, author_id, featured, published, published_at) VALUES
('Getting Started with Next.js 15', 'getting-started-nextjs-15', 'Learn the fundamentals of Next.js 15 and how to build modern web applications with the latest features.', '# Getting Started with Next.js 15\n\nNext.js 15 brings exciting new features and improvements to the React framework. In this comprehensive guide, we will explore the key features and how to get started with building modern web applications.\n\n## What is Next.js?\n\nNext.js is a React framework that provides production-ready features out of the box. It includes:\n\n- Server-side rendering (SSR)\n- Static site generation (SSG)\n- API routes\n- Built-in CSS support\n- Image optimization\n- And much more!\n\n## Key Features of Next.js 15\n\n### App Router\n\nThe new App Router provides a more intuitive way to structure your application with file-based routing.\n\n### Server Components\n\nServer Components allow you to render components on the server, improving performance and SEO.\n\n## Getting Started\n\nTo create a new Next.js project, run:\n\n```bash\nnpx create-next-app@latest my-app\ncd my-app\nnpm run dev\n```\n\nThis will create a new Next.js project with all the necessary dependencies and configuration.', 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop', (SELECT id FROM authors WHERE slug = 'john-doe'), true, true, NOW()),
('The Future of Web Development', 'future-web-development', 'Exploring the latest trends and technologies shaping the future of web development.', '# The Future of Web Development\n\nWeb development is constantly evolving, and staying up-to-date with the latest trends is crucial for developers. In this article, we explore the technologies and practices that will shape the future of web development.\n\n## Emerging Technologies\n\n### WebAssembly\n\nWebAssembly (WASM) allows you to run high-performance code in the browser, opening up new possibilities for web applications.\n\n### Progressive Web Apps\n\nPWAs provide a native app-like experience in the browser, with features like offline functionality and push notifications.\n\n## Best Practices\n\n- Performance optimization\n- Accessibility\n- Security\n- Mobile-first design\n\n## Conclusion\n\nThe future of web development is bright, with new technologies and practices emerging regularly. Stay curious and keep learning!', 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop', (SELECT id FROM authors WHERE slug = 'jane-smith'), false, true, NOW() - INTERVAL '1 day'),
('CSS Grid vs Flexbox: When to Use Which', 'css-grid-vs-flexbox', 'A comprehensive comparison of CSS Grid and Flexbox to help you choose the right layout method for your projects.', '# CSS Grid vs Flexbox: When to Use Which\n\nBoth CSS Grid and Flexbox are powerful layout tools, but they serve different purposes. Understanding when to use each is key to creating efficient and maintainable layouts.\n\n## CSS Grid\n\nCSS Grid is a two-dimensional layout system that allows you to create complex layouts with rows and columns.\n\n### When to Use Grid:\n- Two-dimensional layouts\n- Complex page structures\n- When you need precise control over both rows and columns\n\n## Flexbox\n\nFlexbox is a one-dimensional layout system that works along a single axis (either row or column).\n\n### When to Use Flexbox:\n- One-dimensional layouts\n- Aligning items within a container\n- Distributing space between items\n\n## Conclusion\n\nBoth Grid and Flexbox are valuable tools. Use Grid for overall page layout and Flexbox for component-level layouts.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop', (SELECT id FROM authors WHERE slug = 'john-doe'), false, true, NOW() - INTERVAL '2 days')
ON CONFLICT (slug) DO NOTHING;

-- Link posts to categories
INSERT INTO post_categories (post_id, category_id) VALUES
((SELECT id FROM posts WHERE slug = 'getting-started-nextjs-15'), (SELECT id FROM categories WHERE slug = 'technology')),
((SELECT id FROM posts WHERE slug = 'getting-started-nextjs-15'), (SELECT id FROM categories WHERE slug = 'web-development')),
((SELECT id FROM posts WHERE slug = 'getting-started-nextjs-15'), (SELECT id FROM categories WHERE slug = 'tutorials')),
((SELECT id FROM posts WHERE slug = 'future-web-development'), (SELECT id FROM categories WHERE slug = 'technology')),
((SELECT id FROM posts WHERE slug = 'future-web-development'), (SELECT id FROM categories WHERE slug = 'news')),
((SELECT id FROM posts WHERE slug = 'css-grid-vs-flexbox'), (SELECT id FROM categories WHERE slug = 'web-development')),
((SELECT id FROM posts WHERE slug = 'css-grid-vs-flexbox'), (SELECT id FROM categories WHERE slug = 'design'))
ON CONFLICT (post_id, category_id) DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE authors ENABLE ROW LEVEL SECURITY;
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE post_categories ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access for authors" ON authors FOR SELECT USING (true);
CREATE POLICY "Public read access for categories" ON categories FOR SELECT USING (true);
CREATE POLICY "Public read access for published posts" ON posts FOR SELECT USING (published = true);
CREATE POLICY "Public read access for post_categories" ON post_categories FOR SELECT USING (true);


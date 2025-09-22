-- Migration script to remove categories from the blog database
-- Run this script in your Supabase SQL editor to remove category functionality

-- Drop the post_categories junction table first (due to foreign key constraints)
DROP TABLE IF EXISTS post_categories CASCADE;

-- Drop the categories table
DROP TABLE IF EXISTS categories CASCADE;

-- Drop any indexes related to categories
DROP INDEX IF EXISTS idx_categories_slug;
DROP INDEX IF EXISTS idx_post_categories_post_id;
DROP INDEX IF EXISTS idx_post_categories_category_id;

-- Drop the trigger for categories table (if it exists)
DROP TRIGGER IF EXISTS update_categories_updated_at ON categories;

-- Note: The posts table remains unchanged as it doesn't have direct category references
-- Only the junction table and categories table are removed

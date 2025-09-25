-- Supabase Schema for Journal, Documentation, and Program Kerja System

-- Enable Row Level Security
ALTER DATABASE postgres SET "app.jwt_secret" TO 'your-jwt-secret';

-- Create jurnal table
CREATE TABLE IF NOT EXISTS jurnal (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  author VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  category VARCHAR(50) NOT NULL,
  tags TEXT[] DEFAULT '{}',
  read_time VARCHAR(20) DEFAULT '5 min read',
  likes INTEGER DEFAULT 0,
  comments INTEGER DEFAULT 0,
  featured_image_url TEXT,
  status VARCHAR(20) DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create dokumentasi table
CREATE TABLE IF NOT EXISTS dokumentasi (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  event_date DATE NOT NULL,
  location VARCHAR(255),
  photos TEXT[] DEFAULT '{}',
  participants INTEGER DEFAULT 0,
  likes INTEGER DEFAULT 0,
  status VARCHAR(20) DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create program_kerja table
CREATE TABLE IF NOT EXISTS program_kerja (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  divisi_id UUID NOT NULL,
  nama_divisi VARCHAR(100) NOT NULL,
  koordinator VARCHAR(100) NOT NULL,
  jumlah_anggota INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create program_items table (for individual programs within each division)
CREATE TABLE IF NOT EXISTS program_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  program_kerja_id UUID REFERENCES program_kerja(id) ON DELETE CASCADE,
  nama_program VARCHAR(255) NOT NULL,
  target TEXT NOT NULL,
  timeline VARCHAR(255) NOT NULL,
  status VARCHAR(20) DEFAULT 'perencanaan' CHECK (status IN ('perencanaan', 'berjalan', 'selesai', 'akan_dimulai')),
  progress_percentage INTEGER DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create admin_users table for authentication
CREATE TABLE IF NOT EXISTS admin_users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  name VARCHAR(100) NOT NULL,
  role VARCHAR(20) DEFAULT 'admin' CHECK (role IN ('admin', 'editor')),
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_jurnal_category ON jurnal(category);
CREATE INDEX IF NOT EXISTS idx_jurnal_status ON jurnal(status);
CREATE INDEX IF NOT EXISTS idx_jurnal_created_at ON jurnal(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_dokumentasi_event_date ON dokumentasi(event_date DESC);
CREATE INDEX IF NOT EXISTS idx_dokumentasi_status ON dokumentasi(status);
CREATE INDEX IF NOT EXISTS idx_program_items_status ON program_items(status);
CREATE INDEX IF NOT EXISTS idx_program_items_program_kerja_id ON program_items(program_kerja_id);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_jurnal_updated_at BEFORE UPDATE ON jurnal FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_dokumentasi_updated_at BEFORE UPDATE ON dokumentasi FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_program_kerja_updated_at BEFORE UPDATE ON program_kerja FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_program_items_updated_at BEFORE UPDATE ON program_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_admin_users_updated_at BEFORE UPDATE ON admin_users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for jurnal
INSERT INTO jurnal (title, author, content, excerpt, category, tags, read_time, likes, comments) VALUES
('Lorem Ipsum Dolor Sit Amet Consectetur Adipiscing', 'Lorem Ipsum', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...', 'Lorem', ARRAY['Lorem', 'Ipsum', 'Dolor'], '5 min read', 24, 8),
('Sed Do Eiusmod Tempor Incididunt Ut Labore', 'Dolor Sit', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...', 'Ipsum', ARRAY['Sed', 'Eiusmod', 'Tempor'], '7 min read', 18, 12),
('Ut Enim Ad Minim Veniam Quis Nostrud', 'Amet Consectetur', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur...', 'Dolor', ARRAY['Minim', 'Veniam', 'Nostrud'], '4 min read', 31, 15),
('Excepteur Sint Occaecat Cupidatat Non Proident', 'Adipiscing Elit', 'Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.', 'Sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis...', 'Sit', ARRAY['Sint', 'Occaecat', 'Cupidatat'], '6 min read', 22, 9);

-- Insert sample data for dokumentasi
INSERT INTO dokumentasi (title, description, event_date, location, photos, participants, likes) VALUES
('Lorem Ipsum Event 2024', 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt', '2024-03-10', 'Lorem Ipsum Venue', ARRAY['https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop'], 80, 45),
('Dolor Sit Amet Seminar', 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim', '2024-02-20', 'Consectetur Adipiscing Hall', ARRAY['https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop'], 200, 67),
('Eiusmod Tempor Workshop', 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut', '2023-11-05', 'Labore Et Dolore Center', ARRAY['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop'], 300, 89),
('Magna Aliqua Exhibition', 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore', '2023-12-15', 'Minim Veniam Gallery', ARRAY['https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop', 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop'], 400, 112);

-- Insert sample data for program_kerja
INSERT INTO program_kerja (nama_divisi, koordinator, jumlah_anggota) VALUES
('Divisi Lorem', 'Lorem Ipsum', 2),
('Divisi Ipsum', 'Dolor Sit', 3),
('Divisi Dolor', 'Amet Consectetur', 2),
('Divisi Sit', 'Adipiscing Elit', 2);

-- Insert sample data for program_items
INSERT INTO program_items (program_kerja_id, nama_program, target, timeline, status, progress_percentage) VALUES
((SELECT id FROM program_kerja WHERE nama_divisi = 'Divisi Lorem' LIMIT 1), 'Lorem Ipsum Coordination', 'Lorem ipsum dolor sit amet consectetur adipiscing elit', 'Setiap akhir bulan', 'berjalan', 75),
((SELECT id FROM program_kerja WHERE nama_divisi = 'Divisi Lorem' LIMIT 1), 'Ipsum Dolor Development', 'Sed do eiusmod tempor incididunt ut labore et dolore', 'Januari - Maret 2024', 'selesai', 100),
((SELECT id FROM program_kerja WHERE nama_divisi = 'Divisi Lorem' LIMIT 1), 'Dolor Sit Training', 'Ut enim ad minim veniam quis nostrud exercitation', 'April - Juni 2024', 'akan_dimulai', 0),
((SELECT id FROM program_kerja WHERE nama_divisi = 'Divisi Ipsum' LIMIT 1), 'Amet Consectetur Program', 'Duis aute irure dolor in reprehenderit in voluptate', 'Maret, Juni, September, Desember', 'berjalan', 60),
((SELECT id FROM program_kerja WHERE nama_divisi = 'Divisi Ipsum' LIMIT 1), 'Adipiscing Elit Education', 'Velit esse cillum dolore eu fugiat nulla pariatur', 'Setiap bulan', 'berjalan', 80),
((SELECT id FROM program_kerja WHERE nama_divisi = 'Divisi Ipsum' LIMIT 1), 'Elit Sed Creativity', 'Excepteur sint occaecat cupidatat non proident', 'Desember 2024', 'perencanaan', 0),
((SELECT id FROM program_kerja WHERE nama_divisi = 'Divisi Dolor' LIMIT 1), 'Sed Do Social Media', 'Sunt in culpa qui officia deserunt mollit anim', 'Setiap hari', 'berjalan', 90),
((SELECT id FROM program_kerja WHERE nama_divisi = 'Divisi Dolor' LIMIT 1), 'Eiusmod Tempor Publication', 'Id est laborum sed ut perspiciatis unde omnis', 'Ongoing', 'berjalan', 70),
((SELECT id FROM program_kerja WHERE nama_divisi = 'Divisi Dolor' LIMIT 1), 'Incididunt Ut External', 'Iste natus error sit voluptatem accusantium', 'Tahun 2024', 'perencanaan', 0),
((SELECT id FROM program_kerja WHERE nama_divisi = 'Divisi Sit' LIMIT 1), 'Labore Et Digitalization', 'Doloremque laudantium totam rem aperiam eaque', 'Januari - Juni 2024', 'berjalan', 85),
((SELECT id FROM program_kerja WHERE nama_divisi = 'Divisi Sit' LIMIT 1), 'Dolore Magna Website', 'Ipsa quae ab illo inventore veritatis et quasi', 'Februari - April 2024', 'selesai', 100),
((SELECT id FROM program_kerja WHERE nama_divisi = 'Divisi Sit' LIMIT 1), 'Aliqua Ut Technology', 'Architecto beatae vitae dicta sunt explicabo', 'Mei - Agustus 2024', 'akan_dimulai', 0);

-- Insert sample admin user (password: admin123)
INSERT INTO admin_users (email, password_hash, name, role) VALUES
('admin@loremipsum.com', '$2a$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin Lorem', 'admin');

-- Enable Row Level Security (RLS)
ALTER TABLE jurnal ENABLE ROW LEVEL SECURITY;
ALTER TABLE dokumentasi ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_kerja ENABLE ROW LEVEL SECURITY;
ALTER TABLE program_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to jurnal" ON jurnal FOR SELECT USING (status = 'published');
CREATE POLICY "Allow public read access to dokumentasi" ON dokumentasi FOR SELECT USING (status = 'published');
CREATE POLICY "Allow public read access to program_kerja" ON program_kerja FOR SELECT USING (true);
CREATE POLICY "Allow public read access to program_items" ON program_items FOR SELECT USING (true);

-- Create policies for admin access
CREATE POLICY "Allow admin full access to jurnal" ON jurnal FOR ALL USING (true);
CREATE POLICY "Allow admin full access to dokumentasi" ON dokumentasi FOR ALL USING (true);
CREATE POLICY "Allow admin full access to program_kerja" ON program_kerja FOR ALL USING (true);
CREATE POLICY "Allow admin full access to program_items" ON program_items FOR ALL USING (true);
CREATE POLICY "Allow admin full access to admin_users" ON admin_users FOR ALL USING (true);





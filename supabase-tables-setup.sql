-- Supabase Tables Setup for Jurnal and Dokumentasi
-- Run this script in your Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

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

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_jurnal_category ON jurnal(category);
CREATE INDEX IF NOT EXISTS idx_jurnal_status ON jurnal(status);
CREATE INDEX IF NOT EXISTS idx_jurnal_created_at ON jurnal(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_dokumentasi_event_date ON dokumentasi(event_date DESC);
CREATE INDEX IF NOT EXISTS idx_dokumentasi_status ON dokumentasi(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_jurnal_updated_at 
  BEFORE UPDATE ON jurnal 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_dokumentasi_updated_at 
  BEFORE UPDATE ON dokumentasi 
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data for jurnal
INSERT INTO jurnal (title, author, content, excerpt, category, tags, read_time, likes, comments, featured_image_url) VALUES
('Pembelajaran dari Kegiatan Bakti Sosial 2024', 'Ahmad Rizki', 
'Kegiatan bakti sosial yang dilaksanakan pada bulan Maret 2024 memberikan banyak pembelajaran berharga bagi seluruh tim. Melalui kegiatan ini, kami belajar tentang pentingnya solidaritas dan gotong royong dalam membangun masyarakat yang lebih baik.

## Latar Belakang Kegiatan

Kegiatan bakti sosial ini dilaksanakan sebagai bentuk kepedulian organisasi terhadap kondisi masyarakat sekitar. Kami memilih lokasi di daerah yang membutuhkan bantuan, khususnya dalam hal kebersihan lingkungan dan pemberian bantuan sembako.

## Proses Pelaksanaan

Kegiatan dimulai pukul 07.00 WIB dengan briefing singkat untuk seluruh relawan. Pembagian tugas dilakukan berdasarkan kemampuan dan keahlian masing-masing peserta. Ada yang bertugas membersihkan lingkungan, ada yang membagikan sembako, dan ada yang melakukan edukasi kesehatan.

## Hasil yang Dicapai

1. **Lingkungan yang Lebih Bersih**: Berhasil membersihkan 3 RT dengan total 150 rumah
2. **Bantuan Sembako**: Membagikan 200 paket sembako kepada keluarga yang membutuhkan
3. **Edukasi Masyarakat**: Memberikan penyuluhan kesehatan kepada 100 warga

## Refleksi dan Pembelajaran

Kegiatan ini memberikan pembelajaran bahwa:
- Solidaritas sosial sangat penting dalam membangun masyarakat
- Kolaborasi antar tim menghasilkan dampak yang lebih besar
- Perencanaan yang matang sangat menentukan keberhasilan kegiatan

## Rencana Kedepan

Berdasarkan pembelajaran dari kegiatan ini, kami berencana untuk:
- Melakukan kegiatan serupa secara rutin setiap 3 bulan
- Mengembangkan program yang lebih berkelanjutan
- Melibatkan lebih banyak relawan dari berbagai kalangan', 
'Kegiatan bakti sosial memberikan pembelajaran berharga tentang solidaritas dan gotong royong dalam membangun masyarakat yang lebih baik.', 
'Kegiatan Sosial', 
ARRAY['bakti sosial', 'solidaritas', 'masyarakat', 'pembelajaran'], 
'8 min read', 45, 12, 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=400&fit=crop'),

('Evaluasi Program Pelatihan Kepemimpinan', 'Dewi Kartika', 
'Program pelatihan kepemimpinan yang dilaksanakan selama 3 bulan memberikan dampak positif terhadap pengembangan kemampuan kepemimpinan peserta. Melalui berbagai metode pembelajaran, peserta mengalami peningkatan signifikan dalam aspek kepemimpinan.

## Metodologi Pelatihan

Program ini menggunakan pendekatan experiential learning dengan kombinasi:
- Workshop interaktif (40%)
- Case study analysis (30%)
- Mentoring session (20%)
- Field project (10%)

## Hasil Evaluasi

Berdasarkan assessment yang dilakukan sebelum dan sesudah pelatihan:

### Aspek Pengetahuan
- Rata-rata peningkatan: 35%
- Topik yang paling dipahami: Strategic thinking
- Topik yang perlu penguatan: Conflict resolution

### Aspek Keterampilan
- Communication skills: +40%
- Decision making: +32%
- Team management: +38%

### Aspek Sikap
- Confidence level: +45%
- Leadership mindset: +42%
- Problem-solving attitude: +35%

## Feedback Peserta

Peserta memberikan feedback positif dengan skor kepuasan rata-rata 4.2/5.0. Beberapa poin yang diapresiasi:
- Materi yang relevan dengan kebutuhan
- Instruktur yang kompeten dan engaging
- Metode pembelajaran yang variatif

## Rekomendasi untuk Program Selanjutnya

1. Menambah durasi mentoring session
2. Mengembangkan case study yang lebih kompleks
3. Menambahkan peer learning component
4. Melakukan follow-up assessment 6 bulan setelah program', 
'Program pelatihan kepemimpinan memberikan dampak positif signifikan terhadap pengembangan kemampuan kepemimpinan peserta.', 
'Pelatihan', 
ARRAY['kepemimpinan', 'pelatihan', 'evaluasi', 'pengembangan'], 
'6 min read', 38, 8, 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop'),

('Inovasi dalam Digitalisasi Sistem Organisasi', 'Rizki Pratama', 
'Proses digitalisasi sistem organisasi yang telah berjalan selama 6 bulan menunjukkan hasil yang menggembirakan. Transformasi digital ini tidak hanya meningkatkan efisiensi operasional, tetapi juga membuka peluang baru untuk pengembangan organisasi.

## Tantangan Awal

Sebelum digitalisasi, organisasi menghadapi beberapa tantangan:
- Proses administrasi yang masih manual
- Koordinasi antar divisi yang kurang efektif
- Dokumentasi yang tersebar dan sulit diakses
- Pelaporan yang memakan waktu lama

## Solusi yang Diterapkan

### 1. Sistem Manajemen Dokumen
- Implementasi cloud storage untuk semua dokumen
- Sistem tagging dan pencarian yang canggih
- Version control untuk tracking perubahan

### 2. Platform Komunikasi Internal
- Chat platform untuk komunikasi real-time
- Video conferencing untuk rapat virtual
- Shared calendar untuk koordinasi jadwal

### 3. Sistem Pelaporan Digital
- Dashboard real-time untuk monitoring kegiatan
- Automated reporting system
- Data visualization untuk analisis

## Hasil yang Dicapai

### Efisiensi Operasional
- Waktu administrasi berkurang 60%
- Koordinasi antar divisi meningkat 45%
- Akurasi data meningkat 80%

### Keterlibatan Anggota
- Partisipasi dalam rapat meningkat 35%
- Response time untuk komunikasi berkurang 70%
- Kepuasan anggota terhadap sistem meningkat 85%

## Tantangan yang Dihadapi

1. **Resistance to Change**: Beberapa anggota membutuhkan waktu adaptasi
2. **Technical Issues**: Infrastruktur yang perlu terus diperbaiki
3. **Training Needs**: Kebutuhan pelatihan berkelanjutan

## Langkah Selanjutnya

- Implementasi AI untuk analisis data
- Pengembangan mobile app
- Integrasi dengan sistem eksternal
- Continuous improvement berdasarkan feedback', 
'Digitalisasi sistem organisasi berhasil meningkatkan efisiensi operasional dan membuka peluang pengembangan baru.', 
'Teknologi', 
ARRAY['digitalisasi', 'inovasi', 'teknologi', 'efisiensi'], 
'7 min read', 52, 15, 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=400&fit=crop'),

('Refleksi Kegiatan Pameran Karya Siswa', 'Budi Santoso', 
'Pameran karya siswa yang dilaksanakan pada bulan Desember 2023 menjadi momen penting dalam menampilkan kreativitas dan bakat siswa. Kegiatan ini tidak hanya menjadi ajang pamer, tetapi juga sarana pembelajaran dan pengembangan diri.

## Persiapan Kegiatan

Persiapan pameran dimulai 3 bulan sebelumnya dengan:
- Seleksi karya siswa dari berbagai bidang
- Pelatihan presentasi untuk siswa
- Persiapan venue dan peralatan
- Promosi dan undangan

## Kategori Karya yang Ditampilkan

### Seni Rupa
- Lukisan dan gambar: 25 karya
- Patung dan kerajinan: 15 karya
- Digital art: 10 karya

### Sains dan Teknologi
- Robotik: 8 proyek
- Aplikasi mobile: 5 proyek
- Website: 3 proyek

### Literasi
- Cerpen dan puisi: 20 karya
- Komik: 12 karya
- Jurnalistik: 8 karya

## Dampak terhadap Siswa

### Peningkatan Kepercayaan Diri
- 90% siswa melaporkan peningkatan confidence
- 85% merasa lebih bangga dengan karya mereka
- 80% termotivasi untuk berkarya lebih baik

### Pengembangan Keterampilan
- Presentasi skills meningkat signifikan
- Kemampuan menjelaskan ide dan konsep
- Networking dengan pengunjung dan juri

## Respon Masyarakat

Pameran dihadiri oleh 500+ pengunjung dengan respon yang sangat positif:
- 95% pengunjung terkesan dengan kualitas karya
- 88% mendukung diadakan kegiatan serupa
- 75% tertarik untuk berkolaborasi

## Pembelajaran untuk Organisasi

1. **Perencanaan yang Matang**: Persiapan yang baik menentukan keberhasilan
2. **Kolaborasi Tim**: Kerjasama antar divisi sangat penting
3. **Komunikasi Efektif**: Promosi dan koordinasi yang baik
4. **Evaluasi Berkelanjutan**: Feedback untuk perbaikan

## Rencana Pengembangan

- Menjadikan pameran sebagai agenda tahunan
- Mengembangkan kompetisi antar sekolah
- Menambah kategori karya baru
- Melibatkan lebih banyak stakeholder', 
'Pameran karya siswa berhasil menampilkan kreativitas siswa dan memberikan dampak positif pada pengembangan diri.', 
'Pendidikan', 
ARRAY['pameran', 'kreativitas', 'siswa', 'pembelajaran'], 
'5 min read', 41, 9, 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=400&fit=crop');

-- Insert sample data for dokumentasi
INSERT INTO dokumentasi (title, description, event_date, location, photos, participants, likes) VALUES
('Seminar Nasional Pendidikan 2024', 'Seminar bertema "Inovasi dalam Pendidikan di Era Digital" yang menghadirkan pembicara dari berbagai universitas ternama dan praktisi pendidikan. Acara ini dihadiri oleh 200+ peserta dari berbagai institusi pendidikan.', 
'2024-03-15', 'Gedung Serbaguna Universitas Indonesia', 
ARRAY[
  'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop'
], 200, 67),

('Workshop Kreativitas dan Inovasi', 'Workshop interaktif yang mengajarkan teknik-teknik kreativitas dan inovasi dalam menyelesaikan masalah. Peserta diajak untuk berpikir out of the box melalui berbagai games dan simulasi.', 
'2024-02-20', 'Ruang Seminar Kreatif Jakarta', 
ARRAY[
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop'
], 150, 89),

('Bakti Sosial Peduli Lingkungan', 'Kegiatan bakti sosial membersihkan pantai dan memberikan edukasi tentang pentingnya menjaga kelestarian lingkungan. Kegiatan ini melibatkan 300+ relawan dari berbagai komunitas.', 
'2024-01-28', 'Pantai Ancol, Jakarta Utara', 
ARRAY[
  'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop'
], 300, 124),

('Pameran Karya Seni dan Teknologi', 'Pameran yang menampilkan karya seni dan teknologi inovatif dari siswa dan mahasiswa. Acara ini menjadi ajang apresiasi dan pembelajaran bagi pengunjung.', 
'2023-12-10', 'Galeri Seni Rupa Jakarta', 
ARRAY[
  'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop'
], 400, 156),

('Pelatihan Kepemimpinan Generasi Muda', 'Program pelatihan intensif selama 3 hari yang bertujuan mengembangkan kemampuan kepemimpinan dan manajemen tim. Diikuti oleh 80+ peserta dari berbagai organisasi pemuda.', 
'2023-11-25', 'Villa Taman Sari, Bogor', 
ARRAY[
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&h=600&fit=crop',
  'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&h=600&fit=crop'
], 80, 73);

-- Enable Row Level Security (RLS)
ALTER TABLE jurnal ENABLE ROW LEVEL SECURITY;
ALTER TABLE dokumentasi ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access to published jurnal" 
  ON jurnal FOR SELECT 
  USING (status = 'published');

CREATE POLICY "Allow public read access to published dokumentasi" 
  ON dokumentasi FOR SELECT 
  USING (status = 'published');

-- Create policies for admin access (you may need to adjust based on your auth setup)
CREATE POLICY "Allow authenticated users to manage jurnal" 
  ON jurnal FOR ALL 
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow authenticated users to manage dokumentasi" 
  ON dokumentasi FOR ALL 
  USING (auth.role() = 'authenticated');

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO anon, authenticated;
GRANT SELECT ON jurnal TO anon, authenticated;
GRANT SELECT ON dokumentasi TO anon, authenticated;
GRANT ALL ON jurnal TO authenticated;
GRANT ALL ON dokumentasi TO authenticated;


# Supabase Setup Guide untuk Journal System

## 1. Setup Supabase Project

### Langkah 1: Buat Project Supabase
1. Buka [Supabase Dashboard](https://supabase.com/dashboard)
2. Klik "New Project"
3. Pilih organization dan isi:
   - Project name: `lorem-ipsum-journal`
   - Database password: (buat password yang kuat)
   - Region: pilih yang terdekat

### Langkah 2: Setup Environment Variables
Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## 2. Import Database Schema

### Langkah 1: Buka SQL Editor
1. Di Supabase Dashboard, klik "SQL Editor"
2. Klik "New Query"

### Langkah 2: Import Schema
1. Copy semua isi dari file `supabase-journal-system.sql`
2. Paste ke SQL Editor
3. Klik "Run" untuk menjalankan script

### Langkah 3: Verifikasi Tables
Pastikan tabel-tabel berikut sudah dibuat:
- `jurnal`
- `dokumentasi`
- `program_kerja`
- `program_items`
- `admin_users`

## 3. Setup Authentication (Opsional)

### Langkah 1: Enable Email Auth
1. Di Supabase Dashboard, klik "Authentication" > "Settings"
2. Enable "Enable email confirmations"
3. Configure email templates sesuai kebutuhan

### Langkah 2: Create Admin User
Script sudah include sample admin user:
- Email: `admin@loremipsum.com`
- Password: `admin123`

## 4. Test API Endpoints

### Test Jurnal API
```bash
# Get all published jurnal
curl http://localhost:3000/api/jurnal

# Get jurnal by category
curl http://localhost:3000/api/jurnal?category=Lorem

# Get specific jurnal
curl http://localhost:3000/api/jurnal/[id]
```

### Test Dokumentasi API
```bash
# Get all dokumentasi
curl http://localhost:3000/api/dokumentasi

# Get specific dokumentasi
curl http://localhost:3000/api/dokumentasi/[id]
```

### Test Program Kerja API
```bash
# Get all program kerja with items
curl http://localhost:3000/api/program-kerja

# Get specific program kerja
curl http://localhost:3000/api/program-kerja/[id]
```

## 5. Admin Dashboard Access

### URL Admin Dashboard
- Main Dashboard: `http://localhost:3000/admin`
- Jurnal Management: `http://localhost:3000/admin/jurnal`
- Dokumentasi Management: `http://localhost:3000/admin/dokumentasi`
- Program Kerja Management: `http://localhost:3000/admin/program-kerja`

## 6. Database Schema Overview

### Tabel `jurnal`
- `id`: UUID Primary Key
- `title`: Judul artikel
- `author`: Nama penulis
- `content`: Konten artikel
- `excerpt`: Ringkasan artikel
- `category`: Kategori (Lorem, Ipsum, Dolor, Sit)
- `tags`: Array of tags
- `read_time`: Estimasi waktu baca
- `likes`: Jumlah likes
- `comments`: Jumlah komentar
- `featured_image_url`: URL gambar utama
- `status`: Status (draft, published, archived)
- `created_at`, `updated_at`: Timestamps

### Tabel `dokumentasi`
- `id`: UUID Primary Key
- `title`: Judul acara
- `description`: Deskripsi acara
- `event_date`: Tanggal acara
- `location`: Lokasi acara
- `photos`: Array of photo URLs
- `participants`: Jumlah peserta
- `likes`: Jumlah likes
- `status`: Status (draft, published, archived)
- `created_at`, `updated_at`: Timestamps

### Tabel `program_kerja`
- `id`: UUID Primary Key
- `nama_divisi`: Nama divisi
- `koordinator`: Nama koordinator
- `jumlah_anggota`: Jumlah anggota divisi
- `created_at`, `updated_at`: Timestamps

### Tabel `program_items`
- `id`: UUID Primary Key
- `program_kerja_id`: Foreign Key ke program_kerja
- `nama_program`: Nama program
- `target`: Target program
- `timeline`: Timeline program
- `status`: Status (perencanaan, berjalan, selesai, akan_dimulai)
- `progress_percentage`: Persentase progress (0-100)
- `created_at`, `updated_at`: Timestamps

## 7. Sample Data

Script sudah include sample data untuk testing:
- 4 artikel jurnal dengan kategori berbeda
- 4 dokumentasi acara dengan foto
- 4 divisi dengan program kerja
- 12 program items dengan status berbeda

## 8. Security Features

### Row Level Security (RLS)
- Public read access untuk konten yang published
- Admin full access untuk semua operasi CRUD
- Secure API endpoints dengan proper error handling

### Data Validation
- Check constraints untuk status values
- Progress percentage validation (0-100)
- Required fields validation

## 9. Next Steps

1. **Customize Content**: Update sample data dengan konten yang sesuai
2. **Add Authentication**: Implement login system untuk admin
3. **File Upload**: Setup file upload untuk images
4. **Search & Filter**: Implement advanced search functionality
5. **Analytics**: Add tracking untuk views, likes, comments

## 10. Troubleshooting

### Common Issues
1. **CORS Error**: Pastikan Supabase URL dan keys sudah benar
2. **Permission Denied**: Check RLS policies dan user permissions
3. **API 500 Error**: Check server logs dan database connection
4. **Missing Data**: Verify sample data sudah ter-import dengan benar

### Debug Commands
```bash
# Check Supabase connection
npm run dev

# Test API endpoints
curl -v http://localhost:3000/api/jurnal

# Check database tables
# Di Supabase Dashboard > Table Editor
```


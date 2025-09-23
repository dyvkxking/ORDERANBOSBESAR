import type { Metadata } from "next"
import { 
  BookOpen, 
  Camera, 
  Users, 
  Calendar, 
  Search, 
  Filter,
  Eye,
  Download,
  Share2,
  Heart,
  MessageCircle,
  Clock,
  MapPin,
  User,
  CheckCircle,
  Star,
  Award,
  Target,
  TrendingUp
} from "lucide-react"

export const metadata: Metadata = {
  title: "Kegiatan | Organisasi Kami",
  description: "Jurnal, dokumentasi acara, dan program kerja organisasi kami",
}

const jurnalData = [
  {
    id: 1,
    title: "Refleksi Kegiatan Bakti Sosial Ramadhan 2024",
    author: "Ahmad Rizki",
    date: "15 Maret 2024",
    category: "Refleksi",
    content: "Kegiatan bakti sosial yang dilaksanakan pada bulan Ramadhan memberikan pengalaman yang sangat berharga bagi seluruh anggota organisasi. Melalui kegiatan ini, kami belajar tentang pentingnya berbagi dan peduli terhadap sesama...",
    readTime: "5 min read",
    likes: 24,
    comments: 8,
    tags: ["Bakti Sosial", "Ramadhan", "Refleksi"]
  },
  {
    id: 2,
    title: "Strategi Pengembangan Program Kerja Tahunan",
    author: "Siti Nurhaliza",
    date: "10 Maret 2024",
    category: "Strategi",
    content: "Dalam merancang program kerja tahunan, diperlukan pendekatan yang sistematis dan terukur. Kami telah mengidentifikasi beberapa area prioritas yang perlu mendapat perhatian khusus...",
    readTime: "7 min read",
    likes: 18,
    comments: 12,
    tags: ["Program Kerja", "Strategi", "Perencanaan"]
  },
  {
    id: 3,
    title: "Evaluasi Kegiatan Seminar Motivasi Belajar",
    author: "Muhammad Fajar",
    date: "25 Februari 2024",
    category: "Evaluasi",
    content: "Seminar motivasi belajar yang diselenggarakan pada tanggal 20 Februari 2024 telah berhasil mencapai target yang ditetapkan. Peserta menunjukkan antusiasme yang tinggi...",
    readTime: "4 min read",
    likes: 31,
    comments: 15,
    tags: ["Seminar", "Motivasi", "Evaluasi"]
  },
  {
    id: 4,
    title: "Inovasi dalam Pengelolaan Event Organisasi",
    author: "Fatimah Azzahra",
    date: "18 Februari 2024",
    category: "Inovasi",
    content: "Pengelolaan event yang efektif memerlukan inovasi dan adaptasi terhadap perkembangan zaman. Kami telah mengimplementasikan beberapa teknologi baru...",
    readTime: "6 min read",
    likes: 22,
    comments: 9,
    tags: ["Event", "Inovasi", "Teknologi"]
  }
]

const dokumentasiData = [
  {
    id: 1,
    title: "Bakti Sosial Ramadhan 2024",
    date: "10 Maret 2024",
    location: "Panti Asuhan Al-Hidayah",
    photos: [
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop"
    ],
    description: "Dokumentasi lengkap kegiatan bakti sosial yang dilaksanakan selama bulan Ramadhan",
    participants: 80,
    likes: 45
  },
  {
    id: 2,
    title: "Seminar Motivasi Belajar",
    date: "20 Februari 2024",
    location: "Aula Utama MTs",
    photos: [
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop"
    ],
    description: "Kumpulan foto dari seminar motivasi belajar yang dihadiri 200 peserta",
    participants: 200,
    likes: 67
  },
  {
    id: 3,
    title: "Pekan Olahraga Antar Kelas",
    date: "5-9 November 2023",
    location: "Lapangan Sekolah",
    photos: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop"
    ],
    description: "Momentum terbaik dari kompetisi olahraga antar kelas",
    participants: 300,
    likes: 89
  },
  {
    id: 4,
    title: "Pameran Karya Siswa",
    date: "15-17 Desember 2023",
    location: "Gedung Utama MTs",
    photos: [
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=400&h=300&fit=crop"
    ],
    description: "Koleksi karya kreatif siswa dalam berbagai bidang seni dan teknologi",
    participants: 400,
    likes: 112
  }
]

const programKerjaData = [
  {
    id: 1,
    nama: "Divisi Pimpinan",
    koordinator: "Ahmad Rizki",
    anggota: 2,
    program: [
      {
        nama: "Rapat Koordinasi Bulanan",
        target: "Evaluasi dan perencanaan kegiatan",
        timeline: "Setiap akhir bulan",
        status: "Berjalan"
      },
      {
        nama: "Pengembangan Visi Misi",
        target: "Update visi misi organisasi",
        timeline: "Januari - Maret 2024",
        status: "Selesai"
      },
      {
        nama: "Pelatihan Kepemimpinan",
        target: "Meningkatkan kapasitas kepemimpinan",
        timeline: "April - Juni 2024",
        status: "Akan Dimulai"
      }
    ]
  },
  {
    id: 2,
    nama: "Divisi Program",
    koordinator: "Budi Santoso",
    anggota: 3,
    program: [
      {
        nama: "Program Bakti Sosial",
        target: "4 kegiatan bakti sosial per tahun",
        timeline: "Maret, Juni, September, Desember",
        status: "Berjalan"
      },
      {
        nama: "Program Edukasi",
        target: "8 seminar dan workshop",
        timeline: "Setiap bulan",
        status: "Berjalan"
      },
      {
        nama: "Program Kreativitas",
        target: "Pameran karya siswa",
        timeline: "Desember 2024",
        status: "Perencanaan"
      }
    ]
  },
  {
    id: 3,
    nama: "Divisi Humas",
    koordinator: "Dewi Kartika",
    anggota: 2,
    program: [
      {
        nama: "Media Sosial Management",
        target: "Update konten harian",
        timeline: "Setiap hari",
        status: "Berjalan"
      },
      {
        nama: "Publikasi Kegiatan",
        target: "Dokumentasi semua kegiatan",
        timeline: "Ongoing",
        status: "Berjalan"
      },
      {
        nama: "Kerjasama Eksternal",
        target: "5 kerjasama dengan organisasi lain",
        timeline: "Tahun 2024",
        status: "Perencanaan"
      }
    ]
  },
  {
    id: 4,
    nama: "Divisi Teknologi",
    koordinator: "Rizki Pratama",
    anggota: 2,
    program: [
      {
        nama: "Digitalisasi Sistem",
        target: "Sistem manajemen digital",
        timeline: "Januari - Juni 2024",
        status: "Berjalan"
      },
      {
        nama: "Website Development",
        target: "Website organisasi",
        timeline: "Februari - April 2024",
        status: "Selesai"
      },
      {
        nama: "Pelatihan Teknologi",
        target: "Pelatihan untuk anggota",
        timeline: "Mei - Agustus 2024",
        status: "Akan Dimulai"
      }
    ]
  }
]

export default function KegiatanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Kegiatan Organisasi</h1>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Jelajahi jurnal kegiatan, dokumentasi acara, dan program kerja divisi organisasi kami
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button className="py-4 px-1 border-b-2 border-[#255F38] text-[#255F38] font-medium">
              <BookOpen className="w-5 h-5 inline mr-2" />
              Jurnal
            </button>
            <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium">
              <Camera className="w-5 h-5 inline mr-2" />
              Dokumentasi
            </button>
            <button className="py-4 px-1 border-b-2 border-transparent text-gray-500 hover:text-gray-700 font-medium">
              <Users className="w-5 h-5 inline mr-2" />
              Program Kerja
            </button>
          </div>
        </div>
      </div>

      {/* Jurnal Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Jurnal Kegiatan</h2>
          <p className="text-xl text-gray-600 max-w-3xl">
            Refleksi, evaluasi, dan pembelajaran dari setiap kegiatan yang telah dilaksanakan
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari jurnal..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </div>
        </div>

        {/* Jurnal Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {jurnalData.map((jurnal) => (
            <div key={jurnal.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <span className="bg-[#255F38]/10 text-[#255F38] px-3 py-1 rounded-full text-sm font-medium">
                    {jurnal.category}
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="w-4 h-4 mr-1" />
                  {jurnal.readTime}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{jurnal.title}</h3>

              {/* Author and Date */}
              <div className="flex items-center mb-4">
                <User className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-gray-600 mr-4">{jurnal.author}</span>
                <Calendar className="w-4 h-4 text-gray-400 mr-2" />
                <span className="text-gray-600">{jurnal.date}</span>
              </div>

              {/* Content Preview */}
              <p className="text-gray-600 mb-6 leading-relaxed">{jurnal.content}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {jurnal.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-sm">
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center text-gray-500 hover:text-red-500">
                    <Heart className="w-4 h-4 mr-1" />
                    {jurnal.likes}
                  </button>
                  <button className="flex items-center text-gray-500 hover:text-blue-500">
                    <MessageCircle className="w-4 h-4 mr-1" />
                    {jurnal.comments}
                  </button>
                </div>
                <button className="bg-[#255F38] text-white px-6 py-2 rounded-lg hover:bg-[#1F7D53] transition-colors">
                  Baca Selengkapnya
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dokumentasi Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dokumentasi Acara Koleksi</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Koleksi foto dan dokumentasi dari berbagai kegiatan yang telah dilaksanakan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dokumentasiData.map((dokumentasi) => (
              <div key={dokumentasi.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                {/* Photo Grid */}
                <div className="grid grid-cols-2 gap-1 h-64">
                  {dokumentasi.photos.slice(0, 4).map((photo, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={photo} 
                        alt={`${dokumentasi.title} ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {index === 3 && dokumentasi.photos.length > 4 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">+{dokumentasi.photos.length - 4}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{dokumentasi.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="mr-4">{dokumentasi.date}</span>
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{dokumentasi.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{dokumentasi.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {dokumentasi.participants} peserta
                      </span>
                      <span className="flex items-center">
                        <Heart className="w-4 h-4 mr-1" />
                        {dokumentasi.likes} likes
                      </span>
                    </div>
                    <button className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1F7D53] transition-colors">
                      Lihat Album
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Program Kerja Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Program Kerja per Grup</h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              Program kerja dan target pencapaian dari setiap divisi dalam organisasi
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programKerjaData.map((divisi) => (
              <div key={divisi.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{divisi.nama}</h3>
                    <p className="text-gray-600">Koordinator: {divisi.koordinator}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-[#255F38]">{divisi.anggota}</div>
                    <div className="text-sm text-gray-600">Anggota</div>
                  </div>
                </div>

                {/* Program List */}
                <div className="space-y-4">
                  {divisi.program.map((program, index) => (
                    <div key={index} className="border-l-4 border-[#255F38] pl-4 py-2">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold text-gray-900">{program.nama}</h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          program.status === 'Selesai' ? 'bg-green-100 text-green-800' :
                          program.status === 'Berjalan' ? 'bg-blue-100 text-blue-800' :
                          program.status === 'Akan Dimulai' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {program.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{program.target}</p>
                      <p className="text-xs text-gray-500">{program.timeline}</p>
                    </div>
                  ))}
                </div>

                {/* Progress Summary */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Progress Divisi</span>
                    <span className="font-semibold text-[#255F38]">75%</span>
                  </div>
                  <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-[#255F38] h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}





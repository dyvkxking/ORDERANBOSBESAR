import type { Metadata } from "next"
import { Calendar, Clock, MapPin, Users, BookOpen, Trophy, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Kegiatan | OSIS MTs",
  description: "Jadwal dan informasi kegiatan OSIS Madrasah Tsanawiyah",
}

const activities = [
  {
    id: 1,
    title: "Pembukaan Tahun Ajaran Baru",
    date: "15 Juli 2024",
    time: "08:00 - 12:00",
    location: "Aula Utama MTs",
    description: "Upacara pembukaan tahun ajaran baru dengan tema 'Membangun Karakter Unggul'",
    type: "Upacara",
    participants: 500,
    status: "Selesai"
  },
  {
    id: 2,
    title: "Lomba Cerdas Cermat Agama",
    date: "25 Agustus 2024",
    time: "09:00 - 15:00",
    location: "Ruang Kelas 7-9",
    description: "Kompetisi pengetahuan agama Islam antar kelas untuk meningkatkan pemahaman keagamaan",
    type: "Kompetisi",
    participants: 150,
    status: "Berlangsung"
  },
  {
    id: 3,
    title: "Bakti Sosial Ramadhan",
    date: "10 Maret 2024",
    time: "07:00 - 17:00",
    location: "Panti Asuhan Al-Hidayah",
    description: "Kegiatan bakti sosial memberikan bantuan kepada panti asuhan dalam rangka bulan Ramadhan",
    type: "Bakti Sosial",
    participants: 80,
    status: "Akan Datang"
  },
  {
    id: 4,
    title: "Pekan Olahraga Antar Kelas",
    date: "5-9 November 2024",
    time: "07:00 - 16:00",
    location: "Lapangan Sekolah",
    description: "Kompetisi olahraga berbagai cabang untuk meningkatkan kebugaran dan sportivitas",
    type: "Olahraga",
    participants: 300,
    status: "Akan Datang"
  },
  {
    id: 5,
    title: "Seminar Motivasi Belajar",
    date: "20 September 2024",
    time: "13:00 - 16:00",
    location: "Aula Utama MTs",
    description: "Seminar dengan pembicara motivator untuk meningkatkan semangat belajar siswa",
    type: "Seminar",
    participants: 200,
    status: "Berlangsung"
  },
  {
    id: 6,
    title: "Pameran Karya Siswa",
    date: "15-17 Desember 2024",
    time: "08:00 - 15:00",
    location: "Gedung Utama MTs",
    description: "Pameran hasil karya kreatif siswa dalam berbagai bidang seni dan teknologi",
    type: "Pameran",
    participants: 400,
    status: "Akan Datang"
  }
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "Selesai":
      return "bg-green-100 text-green-800"
    case "Berlangsung":
      return "bg-blue-100 text-blue-800"
    case "Akan Datang":
      return "bg-yellow-100 text-yellow-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

const getTypeIcon = (type: string) => {
  switch (type) {
    case "Upacara":
      return <Trophy className="w-5 h-5" />
    case "Kompetisi":
      return <Star className="w-5 h-5" />
    case "Bakti Sosial":
      return <Users className="w-5 h-5" />
    case "Olahraga":
      return <Trophy className="w-5 h-5" />
    case "Seminar":
      return <BookOpen className="w-5 h-5" />
    case "Pameran":
      return <Star className="w-5 h-5" />
    default:
      return <Calendar className="w-5 h-5" />
  }
}

export default function KegiatanPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Kegiatan OSIS</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Jadwal dan informasi lengkap kegiatan OSIS Madrasah Tsanawiyah
            </p>
          </div>
        </div>
      </div>

      {/* Activities Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Daftar Kegiatan
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            Berbagai kegiatan yang telah, sedang, dan akan dilaksanakan oleh OSIS MTs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div key={activity.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 bg-[#255F38]/10 rounded-lg">
                      {getTypeIcon(activity.type)}
                    </div>
                    <span className="text-sm font-medium text-[#255F38]">
                      {activity.type}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(activity.status)}`}>
                    {activity.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {activity.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {activity.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2 text-[#255F38]" />
                    <span>{activity.date}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-2 text-[#255F38]" />
                    <span>{activity.time}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2 text-[#255F38]" />
                    <span>{activity.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-2 text-[#255F38]" />
                    <span>{activity.participants} peserta</span>
                  </div>
                </div>

                {/* Action Button */}
                <button className="w-full bg-[#255F38] text-white py-2 px-4 rounded-lg hover:bg-[#1F7D53] transition-colors text-sm font-medium">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ingin Mengikuti Kegiatan?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Daftarkan diri Anda untuk mengikuti berbagai kegiatan OSIS yang menarik dan bermanfaat
            </p>
            <button className="bg-[#255F38] text-white px-8 py-3 rounded-lg hover:bg-[#1F7D53] transition-colors font-medium">
              Daftar Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}




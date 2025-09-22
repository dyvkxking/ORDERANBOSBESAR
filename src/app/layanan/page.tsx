import type { Metadata } from "next"
import { 
  BookOpen, 
  Users, 
  FileText, 
  Calendar, 
  MessageCircle, 
  Shield, 
  Award,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "Layanan | OSIS MTs",
  description: "Berbagai layanan yang disediakan OSIS Madrasah Tsanawiyah untuk siswa",
}

const services = [
  {
    id: 1,
    title: "Konsultasi Akademik",
    description: "Layanan konsultasi untuk membantu siswa dalam mengatasi kesulitan belajar dan meningkatkan prestasi akademik",
    icon: BookOpen,
    features: [
      "Konsultasi mata pelajaran sulit",
      "Tips dan strategi belajar efektif",
      "Bimbingan persiapan ujian",
      "Motivasi dan dukungan belajar"
    ],
    availability: "Senin - Jumat, 13:00 - 15:00",
    contact: "konsultasi@osis-mts.edu"
  },
  {
    id: 2,
    title: "Bimbingan Kepemimpinan",
    description: "Program pengembangan kepemimpinan untuk membentuk karakter pemimpin yang berakhlak mulia",
    icon: Users,
    features: [
      "Pelatihan kepemimpinan dasar",
      "Workshop komunikasi efektif",
      "Pengembangan soft skills",
      "Mentoring personal"
    ],
    availability: "Sabtu, 08:00 - 12:00",
    contact: "kepemimpinan@osis-mts.edu"
  },
  {
    id: 3,
    title: "Layanan Administrasi",
    description: "Bantuan administrasi untuk berbagai keperluan siswa seperti surat keterangan, izin, dan dokumen lainnya",
    icon: FileText,
    features: [
      "Surat keterangan aktif",
      "Surat izin kegiatan",
      "Dokumen persyaratan beasiswa",
      "Legalisasi dokumen"
    ],
    availability: "Senin - Jumat, 08:00 - 16:00",
    contact: "admin@osis-mts.edu"
  },
  {
    id: 4,
    title: "Konseling dan Bimbingan",
    description: "Layanan konseling untuk membantu siswa mengatasi masalah pribadi, sosial, dan akademik",
    icon: MessageCircle,
    features: [
      "Konseling pribadi",
      "Bimbingan sosial",
      "Penyelesaian konflik",
      "Dukungan emosional"
    ],
    availability: "Setiap hari, 09:00 - 17:00",
    contact: "konseling@osis-mts.edu"
  },
  {
    id: 5,
    title: "Program Beasiswa",
    description: "Informasi dan bantuan pendaftaran berbagai program beasiswa untuk siswa berprestasi",
    icon: Award,
    features: [
      "Informasi beasiswa terkini",
      "Bantuan pendaftaran",
      "Persiapan dokumen",
      "Mentoring seleksi"
    ],
    availability: "Senin - Jumat, 10:00 - 14:00",
    contact: "beasiswa@osis-mts.edu"
  },
  {
    id: 6,
    title: "Keamanan dan Perlindungan",
    description: "Layanan keamanan dan perlindungan untuk memastikan lingkungan belajar yang aman dan nyaman",
    icon: Shield,
    features: [
      "Patroli keamanan",
      "Penanganan bullying",
      "Sistem pelaporan insiden",
      "Koordinasi dengan pihak sekolah"
    ],
    availability: "24/7",
    contact: "keamanan@osis-mts.edu"
  }
]

const processes = [
  {
    step: 1,
    title: "Identifikasi Kebutuhan",
    description: "Siswa mengidentifikasi kebutuhan layanan yang diperlukan"
  },
  {
    step: 2,
    title: "Konsultasi Awal",
    description: "Konsultasi dengan petugas OSIS untuk memahami situasi"
  },
  {
    step: 3,
    title: "Penyusunan Rencana",
    description: "Menyusun rencana tindakan yang sesuai dengan kebutuhan"
  },
  {
    step: 4,
    title: "Implementasi Layanan",
    description: "Pelaksanaan layanan sesuai dengan rencana yang telah disusun"
  },
  {
    step: 5,
    title: "Evaluasi dan Tindak Lanjut",
    description: "Evaluasi hasil dan rencana tindak lanjut jika diperlukan"
  }
]

export default function LayananPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Layanan OSIS</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Berbagai layanan yang disediakan OSIS untuk mendukung perkembangan dan kesejahteraan siswa
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Daftar Layanan
          </h2>
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            OSIS menyediakan berbagai layanan untuk mendukung kebutuhan siswa dalam berbagai aspek
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div key={service.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-[#255F38]/10 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-[#255F38]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-900 mb-2">Fitur Layanan:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Availability */}
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <Clock className="w-4 h-4 mr-2 text-[#255F38]" />
                      <span className="font-medium">Jam Layanan:</span>
                    </div>
                    <p className="text-sm text-gray-700">{service.availability}</p>
                  </div>

                  {/* Contact */}
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Kontak:</p>
                    <p className="text-sm text-[#255F38] font-medium">{service.contact}</p>
                  </div>

                  {/* Action Button */}
                  <button className="w-full bg-[#255F38] text-white py-2 px-4 rounded-lg hover:bg-[#1F7D53] transition-colors text-sm font-medium flex items-center justify-center">
                    <span>Ajukan Layanan</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Prosedur Layanan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Berikut adalah langkah-langkah untuk mengakses layanan OSIS
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {processes.map((process, index) => (
                <div key={process.step} className="text-center">
                  <div className="relative">
                    <div className="w-12 h-12 bg-[#255F38] text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">
                      {process.step}
                    </div>
                    {index < processes.length - 1 && (
                      <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gray-300 transform translate-x-4"></div>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {process.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {process.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] rounded-lg p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">
              Butuh Bantuan Lebih Lanjut?
            </h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Tim OSIS siap membantu Anda dengan berbagai kebutuhan. Jangan ragu untuk menghubungi kami.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#255F38] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium">
                Hubungi Kami
              </button>
              <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#255F38] transition-colors font-medium">
                FAQ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}




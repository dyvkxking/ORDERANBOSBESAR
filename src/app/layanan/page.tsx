import type { Metadata } from "next"
import { 
  Construction,
  Clock,
  Rocket,
  Mail,
  Calendar,
  Users,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Heart
} from "lucide-react"

export const metadata: Metadata = {
  title: "Layanan | Lorem Ipsum",
  description: "Halaman layanan sedang dalam tahap pengembangan",
}

export default function LayananPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Construction Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <Construction className="w-12 h-12 text-white animate-pulse" />
              </div>
            </div>
            
            <h1 className="text-5xl font-bold mb-6">Layanan</h1>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-8">
              Halaman layanan sedang dalam tahap pengembangan
            </p>
            
            {/* Status Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-white/20 rounded-full backdrop-blur-sm border border-white/30">
              <Clock className="w-5 h-5 mr-2 animate-spin" />
              <span className="font-medium">Coming Soon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Development Status */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8 text-orange-600" />
            </div>
            
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sedang Dalam Pengembangan
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
              Kami sedang bekerja keras untuk menghadirkan layanan terbaik untuk Anda. 
              Halaman ini akan segera hadir dengan fitur-fitur menarik dan bermanfaat.
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress Pengembangan</span>
                <span>75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] h-3 rounded-full transition-all duration-1000" style={{width: '75%'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Features */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Fitur yang Akan Hadir
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Konsultasi Online</h4>
              <p className="text-sm text-gray-600">Layanan konsultasi langsung dengan tim ahli</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Booking Layanan</h4>
              <p className="text-sm text-gray-600">Sistem pemesanan layanan yang mudah dan praktis</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Tips & Panduan</h4>
              <p className="text-sm text-gray-600">Koleksi tips dan panduan untuk berbagai kebutuhan</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-6 h-6 text-red-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Support 24/7</h4>
              <p className="text-sm text-gray-600">Dukungan pelanggan yang siap membantu kapan saja</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Rating & Review</h4>
              <p className="text-sm text-gray-600">Sistem penilaian untuk meningkatkan kualitas layanan</p>
            </div>
            
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-pink-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Komunitas</h4>
              <p className="text-sm text-gray-600">Bergabung dengan komunitas untuk berbagi pengalaman</p>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Timeline Pengembangan
          </h3>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Analisis Kebutuhan</h4>
                <p className="text-sm text-gray-600">Maret 2024 - Selesai</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                <CheckCircle className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Desain UI/UX</h4>
                <p className="text-sm text-gray-600">April 2024 - Selesai</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Pengembangan Backend</h4>
                <p className="text-sm text-gray-600">Mei 2024 - Sedang Berlangsung</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                <Clock className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Testing & Debugging</h4>
                <p className="text-sm text-gray-600">Juni 2024 - Akan Dimulai</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center mr-4">
                <Clock className="w-5 h-5 text-gray-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Launch & Deployment</h4>
                <p className="text-sm text-gray-600">Juli 2024 - Target Rilis</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact & Notification */}
        <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ingin Mendapatkan Update?
          </h3>
          <p className="text-green-100 mb-6 max-w-2xl mx-auto">
            Daftarkan email Anda untuk mendapatkan notifikasi ketika layanan sudah siap digunakan
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
            />
            <button className="bg-white text-[#255F38] px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center">
              <Mail className="w-4 h-4 mr-2" />
              Daftar
            </button>
          </div>
          
          <p className="text-green-200 text-sm mt-4">
            Kami akan mengirimkan update perkembangan dan notifikasi peluncuran
          </p>
        </div>
      </div>
    </div>
  )
}





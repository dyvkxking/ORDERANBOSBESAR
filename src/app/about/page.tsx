import type { Metadata } from "next"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  MessageCircle,
  Send,
  Clock,
  Users,
  Globe,
  Heart,
  CheckCircle
} from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Organisasi Kami",
  description: "Hubungi kami melalui berbagai platform media sosial dan kontak resmi organisasi",
}

const contactInfo = [
  {
    icon: Instagram,
    title: "Instagram",
    value: "@organisasi_kami",
    link: "https://instagram.com/organisasi_kami",
    color: "hover:bg-pink-600",
    description: "Follow kami untuk update terbaru"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+62 812-3456-7890",
    link: "https://wa.me/6281234567890",
    color: "hover:bg-green-600",
    description: "Chat langsung dengan tim kami"
  },
  {
    icon: Globe,
    title: "TikTok",
    value: "@organisasi_kami",
    link: "https://tiktok.com/@organisasi_kami",
    color: "hover:bg-black",
    description: "Lihat konten kreatif kami"
  },
  {
    icon: Mail,
    title: "Email",
    value: "info@organisasi.com",
    link: "mailto:info@organisasi.com",
    color: "hover:bg-blue-600",
    description: "Kirim email resmi ke kami"
  },
  {
    icon: MapPin,
    title: "Alamat",
    value: "Jl. Pendidikan No. 123, Medan",
    link: "https://maps.google.com/?q=Jl.+Pendidikan+No.+123,+Medan",
    color: "hover:bg-red-600",
    description: "Kunjungi kantor kami"
  }
]

const jamOperasional = [
  {
    hari: "Senin - Jumat",
    jam: "08:00 - 17:00"
  },
  {
    hari: "Sabtu",
    jam: "08:00 - 12:00"
  },
  {
    hari: "Minggu",
    jam: "Libur"
  }
]

const layananKontak = [
  {
    icon: Users,
    title: "Informasi Umum",
    description: "Pertanyaan tentang organisasi dan program"
  },
  {
    icon: Heart,
    title: "Kerjasama",
    description: "Proposal kerjasama dan kolaborasi"
  },
  {
    icon: CheckCircle,
    title: "Dukungan",
    description: "Bantuan teknis dan dukungan"
  }
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Hubungi Kami</h1>
            <p className="text-xl text-green-100 max-w-4xl mx-auto leading-relaxed">
              Kami siap membantu dan menjawab pertanyaan Anda. 
              Pilih cara terbaik untuk menghubungi tim kami.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Informasi Kontak</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hubungi kami melalui berbagai platform yang tersedia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`p-4 bg-[#255F38]/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center ${contact.color} transition-colors`}>
                  <Icon className="w-8 h-8 text-[#255F38]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-lg text-[#255F38] font-medium mb-2">{contact.value}</p>
                <p className="text-sm text-gray-600">{contact.description}</p>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
            <p className="text-gray-600 mb-8">
              Gunakan form di bawah ini untuk mengirim pesan atau pertanyaan kepada tim kami. 
              Kami akan merespons dalam waktu 24 jam.
            </p>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Depan
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent transition-colors"
                    placeholder="Masukkan nama depan"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Belakang
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent transition-colors"
                    placeholder="Masukkan nama belakang"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent transition-colors"
                  placeholder="contoh@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor Telepon
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent transition-colors"
                  placeholder="0812-3456-7890"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subjek
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent transition-colors"
                >
                  <option value="">Pilih subjek</option>
                  <option value="informasi">Informasi Umum</option>
                  <option value="kerjasama">Kerjasama</option>
                  <option value="dukungan">Dukungan Teknis</option>
                  <option value="lainnya">Lainnya</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent transition-colors"
                  placeholder="Tuliskan pesan Anda di sini..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-[#255F38] text-white py-3 px-6 rounded-lg hover:bg-[#1F7D53] transition-colors font-medium flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Informasi Tambahan</h2>
            
            {/* Jam Operasional */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <div className="flex items-center mb-4">
                <Clock className="w-6 h-6 text-[#255F38] mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Jam Operasional</h3>
              </div>
              <div className="space-y-2">
                {jamOperasional.map((jam, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-700">{jam.hari}</span>
                    <span className="text-[#255F38] font-medium">{jam.jam}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Layanan Kontak */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Layanan Kontak</h3>
              <div className="space-y-4">
                {layananKontak.map((layanan, index) => {
                  const Icon = layanan.icon
                  return (
                    <div key={index} className="flex items-start">
                      <Icon className="w-5 h-5 text-[#255F38] mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900">{layanan.title}</h4>
                        <p className="text-sm text-gray-600">{layanan.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-[#255F38]/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontak Cepat</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#255F38] mr-3" />
                  <span className="text-sm text-gray-700">+62 812-3456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#255F38] mr-3" />
                  <span className="text-sm text-gray-700">info@organisasi.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-[#255F38] mr-3" />
                  <span className="text-sm text-gray-700">Jl. Pendidikan No. 123, Medan</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Lokasi Kantor</h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p className="text-lg font-medium">Peta Lokasi Kantor</p>
                <p className="text-sm">Jl. Pendidikan No. 123, Medan</p>
                <a 
                  href="https://maps.google.com/?q=Jl.+Pendidikan+No.+123,+Medan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1F7D53] transition-colors"
                >
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] rounded-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Butuh Bantuan Lebih Lanjut?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Tim kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami 
            melalui platform yang paling nyaman untuk Anda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#255F38] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >
              Chat WhatsApp
            </a>
            <a 
              href="mailto:info@organisasi.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#255F38] transition-colors"
            >
              Kirim Email
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

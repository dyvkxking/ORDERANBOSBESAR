import type { Metadata } from "next"
import { 
  Mail, 
  MapPin, 
  Instagram, 
  MessageCircle,
  Send,
  Globe
} from "lucide-react"
import GoogleMapsEmbed from "@/components/GoogleMapsEmbed"

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
    value: "Malang, Jawa Timur",
    link: "https://maps.google.com/?q=-7.961163991041367,112.6224970519154",
    color: "hover:bg-red-600",
    description: "Kunjungi kantor kami"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            return (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className={`p-3 bg-[#255F38]/10 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center ${contact.color} transition-colors`}>
                  <Icon className="w-6 h-6 text-[#255F38]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{contact.title}</h3>
                <p className="text-sm text-[#255F38] font-medium mb-1">{contact.value}</p>
                <p className="text-xs text-gray-600">{contact.description}</p>
              </a>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kirim Pesan</h2>
            <p className="text-xl text-gray-600">
              Gunakan form di bawah ini untuk mengirim pesan atau pertanyaan kepada tim kami. 
              Kami akan merespons dalam waktu 24 jam.
            </p>
          </div>
          
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

        {/* Map Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Lokasi Kantor</h2>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <GoogleMapsEmbed
              mapsUrl="https://maps.google.com/?q=-7.961163991041367,112.6224970519154"
              address="Malang, Jawa Timur"
              city="Indonesia"
            />
            
            {/* Map Info */}
            <div className="mt-4 flex flex-col sm:flex-row items-center justify-between bg-gray-50 p-4 rounded-lg">
              <div className="flex items-center mb-2 sm:mb-0">
                <MapPin className="w-5 h-5 text-[#255F38] mr-2" />
                <div>
                  <p className="font-medium text-gray-900">Malang, Jawa Timur</p>
                  <p className="text-sm text-gray-600">Indonesia</p>
                </div>
              </div>
              <a 
                href="https://maps.google.com/?q=-7.961163991041367,112.6224970519154"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#255F38] text-white px-4 py-2 rounded-lg hover:bg-[#1F7D53] transition-colors flex items-center"
              >
                <MapPin className="w-4 h-4 mr-2" />
                Buka di Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

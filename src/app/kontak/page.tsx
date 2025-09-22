import type { Metadata } from "next"
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube,
  Send,
  MessageCircle,
  Users,
  Calendar
} from "lucide-react"

export const metadata: Metadata = {
  title: "Kontak | OSIS MTs",
  description: "Informasi kontak dan cara menghubungi OSIS Madrasah Tsanawiyah",
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Alamat",
    details: [
      "Madrasah Tsanawiyah",
      "Jl. Pendidikan No. 123",
      "Kecamatan Cendana, Kota Medan",
      "Sumatera Utara 20111"
    ]
  },
  {
    icon: Phone,
    title: "Telepon",
    details: [
      "Sekretariat OSIS: (061) 123-4567",
      "Kepala Sekolah: (061) 123-4568",
      "Wakil Kepala: (061) 123-4569",
      "Emergency: 0812-3456-7890"
    ]
  },
  {
    icon: Mail,
    title: "Email",
    details: [
      "osis@mts.edu",
      "info@mts.edu",
      "kepsek@mts.edu",
      "admin@mts.edu"
    ]
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    details: [
      "Senin - Jumat: 07:00 - 16:00",
      "Sabtu: 07:00 - 12:00",
      "Minggu: Tutup",
      "Libur Nasional: Tutup"
    ]
  }
]

const socialMedia = [
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/osis-mts",
    color: "hover:bg-blue-600"
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/osis_mts",
    color: "hover:bg-pink-600"
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/osis_mts",
    color: "hover:bg-blue-500"
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/osis-mts",
    color: "hover:bg-red-600"
  }
]

const teamMembers = [
  {
    name: "Ahmad Rizki",
    position: "Ketua OSIS",
    email: "ketua@osis-mts.edu",
    phone: "0812-3456-7891"
  },
  {
    name: "Siti Nurhaliza",
    position: "Wakil Ketua OSIS",
    email: "wakil@osis-mts.edu",
    phone: "0812-3456-7892"
  },
  {
    name: "Muhammad Fajar",
    position: "Sekretaris OSIS",
    email: "sekretaris@osis-mts.edu",
    phone: "0812-3456-7893"
  },
  {
    name: "Fatimah Azzahra",
    position: "Bendahara OSIS",
    email: "bendahara@osis-mts.edu",
    phone: "0812-3456-7894"
  }
]

export default function KontakPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Kontak Kami</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Hubungi OSIS Madrasah Tsanawiyah untuk informasi, bantuan, atau pertanyaan
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="p-3 bg-[#255F38]/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-[#255F38]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
            <p className="text-gray-600 mb-8">
              Gunakan form di bawah ini untuk mengirim pesan atau pertanyaan kepada tim OSIS. 
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
                >
                  <option value="">Pilih subjek</option>
                  <option value="informasi">Informasi Umum</option>
                  <option value="kegiatan">Kegiatan OSIS</option>
                  <option value="layanan">Layanan OSIS</option>
                  <option value="keluhan">Keluhan</option>
                  <option value="saran">Saran</option>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#255F38] focus:border-transparent"
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

          {/* Map and Additional Info */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lokasi Sekolah</h2>
            
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 mb-6 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Peta Lokasi Madrasah Tsanawiyah</p>
                <p className="text-sm">Jl. Pendidikan No. 123, Medan</p>
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-[#255F38]/5 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Kontak Cepat</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-[#255F38] mr-3" />
                  <span className="text-sm text-gray-700">(061) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-[#255F38] mr-3" />
                  <span className="text-sm text-gray-700">osis@mts.edu</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-[#255F38] mr-3" />
                  <span className="text-sm text-gray-700">Senin - Jumat, 07:00 - 16:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Tim OSIS</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-[#255F38]/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#255F38]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-[#255F38] mb-3">{member.position}</p>
                <div className="space-y-1">
                  <p className="text-xs text-gray-600">{member.email}</p>
                  <p className="text-xs text-gray-600">{member.phone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ikuti Kami</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ikuti akun media sosial OSIS untuk mendapatkan informasi terbaru tentang kegiatan dan program
          </p>
          <div className="flex justify-center space-x-4">
            {socialMedia.map((social, index) => {
              const Icon = social.icon
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center ${social.color} text-white transition-colors`}
                >
                  <Icon className="w-6 h-6" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

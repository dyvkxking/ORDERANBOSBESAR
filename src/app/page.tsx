import type { Metadata } from "next"
import { 
  Users, 
  Target, 
  Eye, 
  Heart, 
  Award, 
  BookOpen, 
  Lightbulb,
  Globe,
  Calendar,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  User,
  Mail,
  Phone,
  MapPin
} from "lucide-react"

export const metadata: Metadata = {
  title: "Home | Organisasi Kami",
  description: "Selamat datang di halaman utama organisasi kami. Kenali anggota tim dan visi misi kami.",
}

const anggotaData = [
  {
    id: 1,
    nama: "Ahmad Rizki",
    jabatan: "Ketua Organisasi",
    email: "ahmad.rizki@organisasi.com",
    phone: "0812-3456-7891",
    avatar: "AR",
    divisi: "Pimpinan",
    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt."
  },
  {
    id: 2,
    nama: "Siti Nurhaliza",
    jabatan: "Wakil Ketua",
    email: "siti.nurhaliza@organisasi.com",
    phone: "0812-3456-7892",
    avatar: "SN",
    divisi: "Pimpinan",
    deskripsi: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim."
  },
  {
    id: 3,
    nama: "Muhammad Fajar",
    jabatan: "Sekretaris",
    email: "muhammad.fajar@organisasi.com",
    phone: "0812-3456-7893",
    avatar: "MF",
    divisi: "Administrasi",
    deskripsi: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip."
  },
  {
    id: 4,
    nama: "Fatimah Azzahra",
    jabatan: "Bendahara",
    email: "fatimah.azzahra@organisasi.com",
    phone: "0812-3456-7894",
    avatar: "FA",
    divisi: "Keuangan",
    deskripsi: "Ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate."
  },
  {
    id: 5,
    nama: "Budi Santoso",
    jabatan: "Koordinator Program",
    email: "budi.santoso@organisasi.com",
    phone: "0812-3456-7895",
    avatar: "BS",
    divisi: "Program",
    deskripsi: "Velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat."
  },
  {
    id: 6,
    nama: "Dewi Kartika",
    jabatan: "Koordinator Humas",
    email: "dewi.kartika@organisasi.com",
    phone: "0812-3456-7896",
    avatar: "DK",
    divisi: "Humas",
    deskripsi: "Cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est."
  },
  {
    id: 7,
    nama: "Rizki Pratama",
    jabatan: "Koordinator IT",
    email: "rizki.pratama@organisasi.com",
    phone: "0812-3456-7897",
    avatar: "RP",
    divisi: "Teknologi",
    deskripsi: "Laborum sed ut perspiciatis unde omnis iste natus error sit voluptatem."
  },
  {
    id: 8,
    nama: "Sari Indah",
    jabatan: "Koordinator Event",
    email: "sari.indah@organisasi.com",
    phone: "0812-3456-7898",
    avatar: "SI",
    divisi: "Event",
    deskripsi: "Accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo."
  },
  {
    id: 9,
    nama: "Andi Wijaya",
    jabatan: "Anggota Aktif",
    email: "andi.wijaya@organisasi.com",
    phone: "0812-3456-7899",
    avatar: "AW",
    divisi: "Umum",
    deskripsi: "Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
  },
  {
    id: 10,
    nama: "Maya Sari",
    jabatan: "Anggota Aktif",
    email: "maya.sari@organisasi.com",
    phone: "0812-3456-7900",
    avatar: "MS",
    divisi: "Umum",
    deskripsi: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit."
  },
  {
    id: 11,
    nama: "Dedi Kurniawan",
    jabatan: "Anggota Aktif",
    email: "dedi.kurniawan@organisasi.com",
    phone: "0812-3456-7901",
    avatar: "DK",
    divisi: "Umum",
    deskripsi: "Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
  },
  {
    id: 12,
    nama: "Lina Marlina",
    jabatan: "Anggota Aktif",
    email: "lina.marlina@organisasi.com",
    phone: "0812-3456-7902",
    avatar: "LM",
    divisi: "Umum",
    deskripsi: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet consectetur."
  },
  {
    id: 13,
    nama: "Eko Prasetyo",
    jabatan: "Anggota Aktif",
    email: "eko.prasetyo@organisasi.com",
    phone: "0812-3456-7903",
    avatar: "EP",
    divisi: "Umum",
    deskripsi: "Adipisci velit sed quia non numquam eius modi tempora incidunt ut labore."
  }
]

const visiMisiData = {
  visi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
  misi: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa"
  ]
}

const nilaiOrganisasi = [
  {
    icon: Heart,
    title: "Lorem",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor"
  },
  {
    icon: Users,
    title: "Ipsum",
    description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim"
  },
  {
    icon: Lightbulb,
    title: "Dolor",
    description: "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut"
  },
  {
    icon: Star,
    title: "Sit",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"
  }
]

export default function Home() {
    return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section - Full Viewport */}
      <div className="relative min-h-screen bg-gradient-to-br from-[#255F38] via-[#1F7D53] to-[#255F38] text-white flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 bg-white rounded-full blur-2xl"></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Logo/Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            
                   {/* Main Heading */}
                   <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
                     <span className="block">Lorem Ipsum</span>
                     <span className="block text-green-200">Dolor Sit Amet</span>
                   </h1>
                   
                   {/* Subtitle */}
                   <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed mb-12">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                     Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                   </p>
            
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Visi Misi Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Lorem & Ipsum</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Visi */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Eye className="w-8 h-8 text-[#255F38] mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Visi</h3>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {visiMisiData.visi}
            </p>
          </div>

          {/* Misi */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center mb-6">
              <Target className="w-8 h-8 text-[#255F38] mr-3" />
              <h3 className="text-3xl font-bold text-gray-900">Misi</h3>
            </div>
            <ul className="space-y-4">
              {visiMisiData.misi.map((misi, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#255F38] mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-600 leading-relaxed">{misi}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Nilai Organisasi */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Lorem Ipsum Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nilaiOrganisasi.map((nilai, index) => {
              const Icon = nilai.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  <div className="p-4 bg-[#255F38]/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#255F38]" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{nilai.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{nilai.description}</p>
      </div>
    )
            })}
          </div>
        </div>
      </div>

      {/* Anggota Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Lorem Ipsum Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {anggotaData.map((anggota) => (
              <div key={anggota.id} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                {/* Avatar */}
                <div className="w-20 h-20 bg-gradient-to-r from-[#255F38] to-[#1F7D53] rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-white text-xl font-bold">{anggota.avatar}</span>
                </div>
                
                {/* Divisi Badge */}
                <div className="text-center mb-4">
                  <span className="bg-[#255F38] text-white px-4 py-2 rounded-full text-sm font-medium">
                    {anggota.divisi}
                  </span>
                </div>
                
                {/* Nama dan Jabatan */}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{anggota.nama}</h3>
                  <p className="text-lg text-[#255F38] font-semibold">{anggota.jabatan}</p>
                </div>
                
                {/* Deskripsi */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 text-center">
                  {anggota.deskripsi}
                </p>
                
                {/* Contact Info */}
                <div className="space-y-2">
                  <div className="flex items-center justify-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2 text-[#255F38]" />
                    <span className="text-sm">{anggota.email}</span>
                  </div>
                  <div className="flex items-center justify-center text-gray-600">
                    <Phone className="w-4 h-4 mr-2 text-[#255F38]" />
                    <span className="text-sm">{anggota.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-[#255F38] to-[#1F7D53] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Bergabunglah dengan Kami</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Mari bersama-sama membangun organisasi yang lebih baik dan berkontribusi 
            untuk kemajuan masyarakat
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#255F38] px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Hubungi Kami
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-[#255F38] transition-colors">
              Pelajari Lebih Lanjut
            </button>
          </div>
        </div>
        </div>
      </div>
    )
}

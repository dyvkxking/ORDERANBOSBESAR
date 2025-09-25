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

const anggotaData = [
  {
    id: 1,
    nama: "Lorem Ipsum",
    jabatan: "Ketua Organisasi",
    email: "lorem1@ipsum.com",
    phone: "0812-3456-7891",
    avatar: "LI",
    photo: "/public/osis-logo.svg",
    divisi: "Pimpinan",
    deskripsi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    id: 2,
    nama: "Lorem Ipsum",
    jabatan: "Wakil Ketua",
    email: "lorem2@ipsum.com",
    phone: "0812-3456-7892",
    avatar: "LI",
    photo: "/public/vercel.svg",
    divisi: "Pimpinan",
    deskripsi: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  },
  {
    id: 3,
    nama: "Lorem Ipsum",
    jabatan: "Sekretaris",
    email: "lorem3@ipsum.com",
    phone: "0812-3456-7893",
    avatar: "LI",
    photo: "/public/next.svg",
    divisi: "Administrasi",
    deskripsi: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
  },
  {
    id: 4,
    nama: "Lorem Ipsum",
    jabatan: "Bendahara",
    email: "lorem4@ipsum.com",
    phone: "0812-3456-7894",
    avatar: "LI",
    photo: "/public/globe.svg",
    divisi: "Keuangan",
    deskripsi: "Ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate."
  },
  {
    id: 5,
    nama: "Lorem Ipsum",
    jabatan: "Koordinator Program",
    email: "lorem5@ipsum.com",
    phone: "0812-3456-7895",
    avatar: "LI",
    photo: "/public/window.svg",
    divisi: "Program",
    deskripsi: "Velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat."
  },
  {
    id: 6,
    nama: "Lorem Ipsum",
    jabatan: "Seksi Bidang",
    email: "lorem6@ipsum.com",
    phone: "0812-3456-7896",
    avatar: "LI",
    photo: "/public/file.svg",
    divisi: "Bidang",
    deskripsi: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil."
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

      </div>


      {/* Anggota (Team) Section - Zigzag Layout */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Tim Kami</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kenali anggota tim yang luar biasa di balik organisasi kami.
            </p>
          </div>
          <div className="flex flex-col gap-12">
            {anggotaData.map((anggota, idx) => {
              const isLeft = idx % 2 === 0;
              const isBudiSantoso = anggota.nama === "Budi Santoso";
              return (
                <>
                  <div
                    key={anggota.id}
                    className={`flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} md:justify-between`}
                  >
                    <div className="bg-white rounded-3xl shadow-2xl p-12 flex-1 max-w-3xl border border-gray-100 min-h-[18rem] flex flex-col md:flex-row items-center gap-8">
                      {/* Photo Avatar inside card */}
                      <div className="w-48 h-48 bg-gradient-to-r from-[#255F38] to-[#1F7D53] rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden border-4 border-white mb-6 md:mb-0">
                        {anggota.photo ? (
                          <img
                            src={anggota.photo}
                            alt={anggota.nama}
                            className="object-cover w-full h-full"
                          />
                        ) : (
                          <span className="text-white text-4xl font-bold">{anggota.avatar}</span>
                        )}
                      </div>
                      {/* Info */}
                      <div className="flex-1 flex flex-col justify-center">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-1">{anggota.nama}</h3>
                            <p className="text-lg text-[#255F38] font-semibold">{anggota.jabatan}</p>
                          </div>
                          <span className="bg-[#255F38] text-white px-4 py-2 rounded-full text-sm font-medium mt-2 md:mt-0">
                            {anggota.divisi}
                          </span>
                        </div>
                        <p className="text-gray-600 text-base leading-relaxed mb-6">{anggota.deskripsi}</p>
                        <div className="flex flex-col sm:flex-row gap-4 text-gray-600">
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2 text-[#255F38]" />
                            <span className="text-sm">{anggota.email}</span>
                          </div>
                          <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2 text-[#255F38]" />
                            <span className="text-sm">{anggota.phone}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {isBudiSantoso && (
                    <div className="w-full flex justify-center my-8">
                      <span className="text-2xl font-bold text-[#255F38] bg-green-50 px-8 py-4 rounded-2xl shadow border border-[#1F7D53]/20">Sekbid (Seksi Bidang)</span>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      </div>

      </div>
    )
}

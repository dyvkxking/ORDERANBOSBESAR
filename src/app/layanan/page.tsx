import type { Metadata } from "next"
import { Construction, Clock } from "lucide-react"

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
    </div>
  )
}





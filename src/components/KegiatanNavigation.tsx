"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Camera, Users, Home } from "lucide-react"

export default function KegiatanNavigation() {
  const pathname = usePathname()

  const navItems = [
    {
      href: "/kegiatan/jurnal",
      label: "Kegiatan",
      icon: Home,
      isActive: pathname === "/kegiatan" || pathname === "/kegiatan/jurnal"
    },
    {
      href: "/kegiatan/dokumentasi", 
      label: "Dokumentasi",
      icon: Camera,
      isActive: pathname === "/kegiatan/dokumentasi"
    },
    {
      href: "/kegiatan/program-kerja",
      label: "Program Kerja", 
      icon: Users,
      isActive: pathname === "/kegiatan/program-kerja"
    }
  ]

  return (
    <div className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex space-x-8">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`py-4 px-1 border-b-2 font-medium transition-colors ${
                  item.isActive
                    ? "border-[#255F38] text-[#255F38]"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                }`}
              >
                <Icon className="w-5 h-5 inline mr-2" />
                {item.label}
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}

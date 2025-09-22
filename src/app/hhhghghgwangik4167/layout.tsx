import type { Metadata } from "next"
import Link from "next/link"
import { 
  LayoutDashboard, 
  Plus, 
  Settings, 
  BarChart3,
  LogOut
} from "lucide-react"

export const metadata: Metadata = {
  title: "Admin Dashboard | Blog Website",
  description: "Admin dashboard for managing blog content",
}

function AdminSidebar() {
  const navItems = [
    { href: "/hhhghghgwangik4167", label: "Dashboard", icon: LayoutDashboard },
    { href: "/hhhghghgwangik4167/create", label: "Create Post", icon: Plus },
    { href: "/hhhghghgwangik4167/manage", label: "Manage Posts", icon: Settings },
    { href: "/hhhghghgwangik4167/analytics", label: "Analytics", icon: BarChart3 },
  ]

  return (
    <div className="w-64 bg-white shadow-lg h-full">
      <div className="p-6 border-b border-[#d1d5db]">
        <h2 className="text-xl font-bold text-[#1a1a1a]">Admin Panel</h2>
        <p className="text-sm text-[#666666]">Content Management</p>
      </div>
      
      <nav className="mt-6">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center px-6 py-3 text-[#666666] hover:bg-[#f3f4f6] hover:text-[#1a1a1a] transition-colors group"
            >
              <Icon className="w-5 h-5 mr-3 group-hover:text-[#255F38]" />
              <span className="font-medium">{item.label}</span>
            </Link>
          )
        })}
      </nav>
      
      <div className="absolute bottom-0 w-64 p-6 border-t border-[#d1d5db]">
        <Link
          href="/"
          className="flex items-center text-[#666666] hover:text-[#1a1a1a] transition-colors group"
        >
          <LogOut className="w-5 h-5 mr-3 group-hover:text-[#255F38]" />
          <span className="font-medium">Back to Site</span>
        </Link>
      </div>
    </div>
  )
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#F2F2F2]">
      <div className="flex h-screen">
        <AdminSidebar />
        <main className="flex-1 overflow-y-auto">
          <div className="p-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

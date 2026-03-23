import AdminFooter from "@/src/features/admin/shared/layout/AdminFooter";
import AdminHeader from "@/src/features/admin/shared/layout/AdminHeader";
import AdminSidebar from "@/src/features/admin/shared/layout/AdminSidebar";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-50">

      {/* Sidebar cố định bên trái */}
      <AdminSidebar />

      {/* Main area */}
      <div className="flex flex-col flex-1 min-w-0">

        {/* Header */}
        <AdminHeader />

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>

        {/* Footer */}
        <AdminFooter />

      </div>
    </div>
  )
}
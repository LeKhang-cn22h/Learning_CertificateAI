export default function AdminFooter() {
  return (
    <footer className="h-10 bg-white border-t border-gray-100 px-6 flex items-center justify-between flex-shrink-0">
      <p className="text-xs text-gray-400">
        GotikHub Admin Panel © {new Date().getFullYear()}
      </p>
      <p className="text-xs text-gray-400">v1.0.0</p>
    </footer>
  )
}
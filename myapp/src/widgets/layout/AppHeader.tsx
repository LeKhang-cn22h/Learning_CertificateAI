"use client"
import Link from "next/link"
import { useState, useRef, useEffect } from "react"
import { CiMenuBurger, IoIosCloseCircleOutline,FaSearch } from "@/shared/lib/icons"
import { usePathname } from "next/navigation"
import { useAuth } from "@/features/auth/hooks/useAuth" 

type Props = {
  toggleMenu: () => void
  menu:       boolean
}

const contentLinks = [
  { label: "Business",   href: "/content/business" },
  { label: "Technology", href: "/content/technology" },
  { label: "Creative",   href: "/content/creative" },
]

export default function AppHeader({ toggleMenu, menu }: Props) {
  const { user, logout } = useAuth()  
  const [open, setOpen]               = useState(false)
  const [contentOpen, setContentOpen] = useState(false)
  const searchRef  = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const pathname   = usePathname()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
      if (contentRef.current && !contentRef.current.contains(event.target as Node)) {
        setContentOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const isContentActive = pathname.startsWith("/content")

  return (
    <header className="p-4 bg-black text-white">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button onClick={toggleMenu} className="text-xl">
            {menu ? <IoIosCloseCircleOutline /> : <CiMenuBurger />}
          </button>
          <div className="font-bold text-2xl">
            <Link href="/">GotikHub</Link>
          </div>
        </div>

        <div className="flex gap-4 items-center">

          {/* Search */}
          <div ref={searchRef} className="relative flex items-center">
            <button onClick={() => setOpen(!open)} className="p-2">
              <FaSearch />
            </button>
            <input
              type="text"
              placeholder="Search..."
              className={`absolute right-0 bg-white text-black rounded px-3 py-1 transition-all duration-300
                ${open ? "w-48 opacity-100 ml-2 pointer-events-auto" : "w-0 opacity-0 px-0 pointer-events-none"}
              `}
            />
          </div>

          {/* Content dropdown — giữ nguyên */}
          <div ref={contentRef} className="relative">
            <button
              onClick={() => setContentOpen(!contentOpen)}
              className={`flex items-center gap-1 py-1 transition-colors hover:text-gray-300
                ${isContentActive ? "border-b-2 border-white" : ""}
              `}
            >
              Content
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${contentOpen ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {contentOpen && (
              <div className="absolute top-full right-0 mt-2 w-44 bg-white text-black rounded-xl shadow-xl overflow-hidden z-50">
                {contentLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setContentOpen(false)}
                    className={`block px-4 py-3 text-sm hover:bg-gray-100 transition-colors
                      ${pathname.startsWith(item.href) ? "font-semibold text-blue-600 bg-blue-50" : "text-gray-700"}
                    `}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t border-gray-100">
                  <Link
                    href="/content"
                    onClick={() => setContentOpen(false)}
                    className="block px-4 py-3 text-xs text-gray-500 hover:bg-gray-50 transition-colors"
                  >
                    Browse all content →
                  </Link>
                </div>
              </div>
            )}
          </div>

          <Link href="/">Learning</Link>
          <Link href="/profile">Profile</Link>

          {/* User info + logout */}
          {user && (
            <span className="text-sm text-gray-300">{user.name}</span>
          )}
          <button
            onClick={() => logout()}
            className="text-sm text-gray-300 hover:text-red-400 transition-colors"
          >
            Sign out
          </button>

        </div>
      </div>
    </header>
  )
}
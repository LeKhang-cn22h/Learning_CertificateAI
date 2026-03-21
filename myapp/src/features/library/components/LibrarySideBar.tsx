"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LibrarySideBar() {
  const pathname = usePathname();
  const menus = [
    { label: "In Progress",       href: "/library/inProgress" },
    { label: "Saved",             href: "/library/saved" },
    { label: "My Collections",    href: "/library/collections" },
    { label: "Learning History",  href: "/library/history" },
  ];

  return (
    <aside className="w-56 flex shrink-0">
      <nav className="flex flex-col bg-white p-6 rounded-2xl shadow gap-1">
        {menus.map((item) => {
          const isActive = pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`
                border-l-4 pl-3 py-2 rounded-r-md text-sm font-medium
                transition-all duration-200
                ${isActive
                  ? "border-black text-black bg-gray-50"
                  : "border-transparent text-gray-500 hover:text-black hover:bg-gray-100 hover:border-gray-300"
                }
              `}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
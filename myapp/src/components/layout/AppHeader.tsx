"use client";

import Link from "next/link";
import { FaSearch } from "@/src/components/icons";
import { useState, useRef, useEffect } from "react";

export default function AppHeader() {
  const [open, setOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  // click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="p-4 bg-black text-white">
      <div className="flex justify-between items-center">

        <div className="font-bold text-2xl">
          <Link href="/">GotikHub</Link>
        </div>

        <div className="flex gap-4 items-center">

          {/* Search */}
          <div ref={searchRef} className="relative flex items-center">

            <button
              onClick={() => setOpen(!open)}
              className="p-2"
            >
              <FaSearch />
            </button>

            <input
              type="text"
              placeholder="Search..."
              className={`absolute right-0 bg-white text-black rounded px-3 py-1 transition-all duration-300
                ${open ? "w-48 opacity-100 ml-2" : "w-0 opacity-0 px-0"}
              `}
            />

          </div>

          <Link href="/">Learning</Link>
          <Link href="/profile">Profile</Link>
          <Link href="/language">Language</Link>

        </div>

      </div>
    </header>
  );
}
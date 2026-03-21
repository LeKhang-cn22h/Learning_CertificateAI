"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { SubCategory } from "../data/contentData";

export default function ContentSubNav({ items }: { items: SubCategory[] }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSub = searchParams.get("sub");

  return (
    <div className="border-b border-gray-200 bg-white sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <nav className="flex gap-1 overflow-x-auto scrollbar-hide">
          {items.map((item) => {
            const itemSub = new URL(item.href, "http://x").searchParams.get("sub");
            const isActive = itemSub === null ? !currentSub : currentSub === itemSub;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap px-4 py-3.5 text-sm font-medium border-b-2 transition-colors ${
                  isActive
                    ? "border-black text-black"
                    : "border-transparent text-gray-600 hover:text-black hover:border-gray-300"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
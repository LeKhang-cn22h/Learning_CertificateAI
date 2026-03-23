// src/features/admin/shared/hooks/usePagination.ts
import { useState, useMemo } from "react"

export function usePagination<T>(items: T[], pageSize = 8) {
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(items.length / pageSize)

  // Reset về trang 1 khi items thay đổi (search/filter)
  const pagedItems = useMemo(() => {
    const start = (currentPage - 1) * pageSize
    return items.slice(start, start + pageSize)
  }, [items, currentPage, pageSize])

  function goTo(page: number) {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  function reset() {
    setCurrentPage(1)
  }

  return {
    pagedItems,
    currentPage,
    totalPages,
    totalItems: items.length,
    pageSize,
    goTo,
    reset,
    hasPrev: currentPage > 1,
    hasNext: currentPage < totalPages,
  }
}
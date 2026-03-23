// proxy.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const PUBLIC_ROUTES = ["/login", "/register"]
const ADMIN_ROUTES  = ["/admin"]

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const token = request.cookies.get("certai_access_token")?.value
  const role  = request.cookies.get("certai_role")?.value

  const isPublicRoute = PUBLIC_ROUTES.some(r => pathname.startsWith(r))
  const isAdminRoute  = ADMIN_ROUTES.some(r => pathname.startsWith(r))

  // Chưa đăng nhập + vào route private → redirect login
  if (!isPublicRoute && !token) {
    const loginUrl = new URL("/login", request.url)
    loginUrl.searchParams.set("from", pathname)
    return NextResponse.redirect(loginUrl)
  }

  // Đã đăng nhập + vào login/register → redirect home
  if (isPublicRoute && token) {
    return NextResponse.redirect(new URL("/home", request.url))
  }

  // Vào /admin mà không phải admin → redirect home
  if (isAdminRoute && role !== "admin") {
    return NextResponse.redirect(new URL("/home", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|api/).*)",
  ],
}
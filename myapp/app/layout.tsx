// app/layout.tsx
import type { Metadata } from "next"
import "./globals.css"
import { AuthProvider }  from "@/features/auth/hooks/useAuth"
import LayoutClient from "@/widgets/layout/LayoutClient"

export const metadata: Metadata = {
  title: "GotikHub",
  description: "AI Learning Platform",
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <AuthProvider>
          <LayoutClient>{children}</LayoutClient>
        </AuthProvider>
      </body>
    </html>
  )
}
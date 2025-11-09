import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Douglass Leadership Academy",
  description: "A World-Class Boarding School for Low-Income American Students",
  generator: 'v0.dev',
  icons: {
    icon: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final-dla-logo-uRYlx7KejNcZjiOTEiUe2CnD5JwKfD.png',
    shortcut: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final-dla-logo-uRYlx7KejNcZjiOTEiUe2CnD5JwKfD.png',
    apple: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final-dla-logo-uRYlx7KejNcZjiOTEiUe2CnD5JwKfD.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}

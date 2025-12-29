import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Sweet Memories | Elegant Rooftop Celebrations in Penugonda",
  description:
    "Experience unforgettable rooftop celebrations at Sweet Memories in Penugonda. Premium party venue featuring elegant themes, balloon décor, and personalized experiences for birthdays, anniversaries, and special occasions.",
  keywords:
    "rooftop party venue Penugonda, premium event space, birthday party, anniversary celebration, themed decorations, Andhra Pradesh party venue",
  icons: {
    icon: [
      {
        url: "/images/screenshot-202025-12-27-20105059.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/images/screenshot-202025-12-27-20105059.png",
        media: "(prefers-color-scheme: dark)",
      },
    ],
    apple: "/images/screenshot-202025-12-27-20105059.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

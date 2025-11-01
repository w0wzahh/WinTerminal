import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "w0wzahh - Developer Portfolio",
  description: "Dark portfolio of a programmer",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-mono antialiased">
        {children}
      </body>
    </html>
  )
}

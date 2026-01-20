import type React from "react"
import type { Metadata } from "next"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mihraab Foundation | Islamic Education Seattle",
  description:
    "Mihraab Foundation - Cultivating Sacred Knowledge for Contemporary Lives. Three branches: Scholastic Branch, Youth Branch, and Hifdh Academy.",
  generator: "v0.app",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased text-foreground bg-background">
        {children}
        <Analytics />
        {/* CharityStack Embed */}
        <Script
          id="charitystack-embed"
          src="https://prod-donation-elements-b-donationelementsjsfilesb-1m4f4dl6p6b21.s3.us-east-2.amazonaws.com/bundle.js"
          data-id="M_ErMWEORbU0"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

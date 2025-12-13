"use client"

import Navbar from "@/components/navbar"
import Image from "next/image"
import Link from "next/link"

interface SubpageHeroProps {
  title: string
  backgroundImage?: string
}

export default function SubpageHero({
  title,
  backgroundImage = "/quran-arabic-classroom-learning.jpg",
}: SubpageHeroProps) {
  return (
    <div className="relative w-full min-h-100">
      {/* Background Image */}
      <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />

      <div className="absolute inset-0 bg-linear-to-r from-primary/60 via-primary/70 to-primary/80" />
      
      {/* Announcement Banner */}
      <div className="relative z-50 w-full bg-[oklch(0.75_0.1_47)] text-center py-2 text-sm text-secondary-foreground">
        Upcoming Event: Registration for Hifdh Academy Fall 2025 is now open!
      </div>
      
      {/* Logo and Navbar Header - Matching homepage layout */}
      <div className="relative z-50 flex items-center justify-between px-6 md:px-12 py-1 md:py-2">
        {/* Logo - Left aligned */}
        <Link href="/" className="shrink-0">
          <img
            src="/logos/foundation_white_transparent_bg.png"
            alt="Mihraab Foundation"
            className="h-20 md:h-32 w-auto"
          />
        </Link>

        {/* Navbar - Right aligned */}
        <Navbar />
      </div>

      {/* Page Title - Centered */}
      <div className="relative z-10 flex items-center justify-center min-h-62.5">
        <h1 className="text-5xl md:text-6xl font-serif text-white text-center font-bold">{title}</h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-b from-transparent to-background" />
    </div>
  )
}

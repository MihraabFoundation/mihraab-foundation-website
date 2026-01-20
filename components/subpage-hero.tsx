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
    <div className="relative w-full min-h-[300px] md:min-h-[400px]">
      {/* Background Image */}
      <Image src={backgroundImage || "/placeholder.svg"} alt={title} fill className="object-cover" priority />

      <div className="absolute inset-0 bg-linear-to-r from-primary/60 via-primary/70 to-primary/80" />

      {/* Announcement Banner */}
      <div className="relative z-50 w-full bg-[oklch(0.75_0.1_47)] text-center py-2 text-sm text-secondary-foreground">
        Upcoming Event: Registration for Hifdh Academy Fall 2025 is now open!
      </div>

      {/* Logo and Navbar Header - Matching homepage layout */}
      <div className="relative z-50 flex items-center justify-between px-4 md:px-8 py-1 md:py-2">
        <Link href="/" className="shrink-0">
          <Image
            src="/branding/images/01_Logos/One lined Word Mark/One Line Word Mark White.svg"
            alt="Mihraab Foundation"
            height={32}
            width={180}
            className="h-6 sm:h-7 md:h-8 w-auto transition-all"
          />
        </Link>

        {/* Navbar - Right aligned */}
        <Navbar />
      </div>

      <div className="relative z-10 flex items-center justify-center py-12 md:py-24">
        <h1 className="text-4xl md:text-6xl font-serif text-white text-center font-bold">{title}</h1>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-linear-to-b from-transparent to-background" />
    </div>
  )
}

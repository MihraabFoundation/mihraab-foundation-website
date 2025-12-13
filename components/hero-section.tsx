"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./navbar";

export default function HeroSection() {
  return (
    <div className="relative w-full overflow-hidden">
      <Image
        src="/islamic-mosque-interior-seattle-community.jpg"
        alt="Islamic community"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-linear-to-r from-primary/60 via-primary/70 to-primary/80" />

      {/* Content Container */}
      <div className="relative z-10 w-full min-h-150 flex flex-col">
        {/* Announcement Banner */}
        <div className="w-full bg-[oklch(0.75_0.1_47)] text-center py-2 text-sm text-secondary-foreground">
          Upcoming Event: Registration for Hifdh Academy Fall 2025 is now open!
        </div>
        <div className="flex items-center justify-between px-6 md:px-12 py-1 md:py-2">
          {/* Logo - Left aligned */}
          <Link href="/" className="shrink-0">
            <Image
              src="/logos/foundation_white_transparent_bg.png"
              alt="Mihraab Foundation"
              height={150}
              width={150}
            />
          </Link>

          {/* Navbar - Right aligned */}
          <Navbar />
        </div>

        {/* Hero Content - Centered vertically */}
        <div className="flex-1 flex items-center justify-center px-4 md:px-8 pb-32">
          <div className="max-w-3xl text-center">
            {/* Main Tagline */}
            <h1 className="text-lg md:text-2xl font-serif font-bold text-white mb-6 leading-tight">
              Seek. <span className="text-accent">Learn.</span> Live.
            </h1>

            {/* Subtitle */}
            <h2 className="text-2xl md:text-4xl font-serif text-white/95 mb-8 leading-relaxed">
              Cultivating{" "}
              <span className="text-accent font-bold">Sacred Knowledge</span>{" "}
              for Contemporary Lives
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-white/90 mb-10 leading-relaxed max-w-2xl mx-auto font-light">
              Welcome to Mihraab. Join our vibrant community where traditional
              excellence and authentic scholarship meet modern challenges,
              empowering you to navigate faith and life with wisdom and
              confidence.
            </p>

            {/* CTA Button */}
            <Link href="#branches">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white font-semibold uppercase tracking-wider"
              >
                Explore Our Programs
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,1))",
        }}
      />
    </div>
  );
}

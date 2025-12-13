"use client"
import HeroSection from "@/components/hero-section"
import BranchesSection from "@/components/branches-section"
import EventsCarousel from "@/components/events-carousel"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <EventsCarousel />
      <BranchesSection />
      <Footer />
    </main>
  )
}

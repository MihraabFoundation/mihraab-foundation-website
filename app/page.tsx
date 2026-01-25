"use client"
import HeroSection from "@/components/hero-section"
import MissionBranchesSection from "@/components/mission-branches/mission-branches-section"
import EventsCarousel from "@/components/events-carousel"
import ArticlesSection from "@/components/articles-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <MissionBranchesSection />
      <EventsCarousel />
      <ArticlesSection />
      <Footer />
    </main>
  )
}

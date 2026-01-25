import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Al-Fityan | Mihraab Foundation",
  description: "Islamic youth development program focused on character and leadership",
}

export default function AlFityanPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Al-Fityan" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Al-Fityan is our youth development program focused on building character, leadership, and Islamic values. Content coming soon...
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
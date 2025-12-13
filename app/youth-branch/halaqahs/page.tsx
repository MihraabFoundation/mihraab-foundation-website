import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Halaqahs | Mihraab Foundation",
  description: "Islamic study circles and community gatherings",
}

export default function HalaqahsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Halaqahs" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Join our halaqahs for interactive Islamic learning and community connection. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

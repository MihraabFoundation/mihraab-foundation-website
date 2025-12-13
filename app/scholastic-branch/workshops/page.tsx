import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Workshops | Mihraab Foundation",
  description: "Special workshops and intensive courses",
}

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Workshops" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Discover our special workshops and intensive learning opportunities. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Methodology | Hifdh Academy",
  description: "Our teaching methodology and approach",
}

export default function HifdhMethodologyPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Methodology" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Discover our comprehensive Quranic memorization methodology. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

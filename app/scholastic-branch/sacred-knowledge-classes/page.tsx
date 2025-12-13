import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Sacred Knowledge Classes | Mihraab Foundation",
  description: "Traditional Islamic knowledge classes at Mihraab Foundation",
}

export default function SacredKnowledgeClassesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Sacred Knowledge Classes" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Explore our comprehensive Sacred Knowledge Classes curriculum. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Hifdh Academy | Mihraab Foundation",
  description: "Quranic memorization program at Mihraab Foundation",
}

export default function HifdhAcademyPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Hifdh Academy" />

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our Hifdh Academy is dedicated to Quranic memorization and recitation. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

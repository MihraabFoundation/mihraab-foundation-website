import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Articles | Mihraab Foundation",
  description: "Read articles and insights from Mihraab Foundation scholars",
}

export default function ArticlesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Articles" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Articles coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}


import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Our Purpose | Mihraab Foundation",
  description: "Understanding Mihraab Foundation's mission and purpose",
}

export default function PurposePage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Our Purpose" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Mihraab Foundation is dedicated to cultivating sacred knowledge and making traditional Islamic education
            accessible to the Greater Seattle community. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

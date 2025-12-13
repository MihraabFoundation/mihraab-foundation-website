import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "About Us | Mihraab Foundation",
  description: "Learn about Mihraab Foundation's mission and team",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="About" />

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Mihraab Foundation is dedicated to providing access to traditional Islamic education. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

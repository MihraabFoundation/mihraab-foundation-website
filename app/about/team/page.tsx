import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Our Team | Mihraab Foundation",
  description: "Meet the dedicated team behind Mihraab Foundation",
}

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Our Team" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our team consists of dedicated educators and community leaders committed to Islamic excellence. Content
            coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

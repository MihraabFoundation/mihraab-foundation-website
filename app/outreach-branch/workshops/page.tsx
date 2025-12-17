import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Workshops | Outreach Branch | Mihraab Foundation",
  description: "Join our educational workshops and community programs",
}

export default function WorkshopsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Workshops" />

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our workshops provide opportunities for learning and community engagement. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}


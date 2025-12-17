import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Suhbah | Outreach Branch | Mihraab Foundation",
  description: "Join our Suhbah gatherings for spiritual companionship and community connection",
}

export default function SuhbahPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Suhbah" />

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Suhbah gatherings provide opportunities for spiritual companionship and community connection. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}


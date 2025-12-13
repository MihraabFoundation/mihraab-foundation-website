import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Seminary FAQs | Mihraab Foundation",
  description: "Frequently asked questions about our Seminary program",
}

export default function SeminaryFAQsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Seminary FAQs" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Find answers to common questions about our Seminary program. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

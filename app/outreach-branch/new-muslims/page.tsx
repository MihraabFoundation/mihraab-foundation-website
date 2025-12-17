import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "New Muslims | Outreach Branch | Mihraab Foundation",
  description: "Resources and support for new Muslims and those interested in learning about Islam",
}

export default function NewMuslimsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="New Muslims" />

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            We provide resources, support, and community for new Muslims and those interested in learning about Islam. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}


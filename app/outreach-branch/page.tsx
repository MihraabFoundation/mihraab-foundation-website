import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Outreach Branch | Mihraab Foundation",
  description: "Explore our Outreach Branch programs and community engagement initiatives",
}

export default function OutreachBranchPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Outreach Branch" />

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Welcome to the Outreach Branch of Mihraab Foundation. This section will contain detailed information about
            our community engagement programs and outreach initiatives.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}


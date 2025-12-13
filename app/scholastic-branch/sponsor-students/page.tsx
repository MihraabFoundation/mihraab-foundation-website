import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Sponsor Students | Mihraab Foundation",
  description: "Support students through our sponsorship program",
}

export default function SponsorStudentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Sponsor Students" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Make a meaningful impact by sponsoring a student's education. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Code of Conduct | Hifdh Academy",
  description: "Code of conduct and student expectations",
}

export default function HifdhCodeOfConductPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Code of Conduct" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our community standards and student expectations. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

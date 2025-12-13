import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Financial Aid - Seminary | Mihraab Foundation",
  description: "Financial aid options for Seminary students",
}

export default function FinancialAidSeminaryPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Financial Aid - Seminary" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Learn about financial assistance available for our Seminary programs. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

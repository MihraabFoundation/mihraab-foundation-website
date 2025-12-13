import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Financial Aid - General | Mihraab Foundation",
  description: "General financial aid information and options",
}

export default function FinancialAidGeneralPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Financial Aid - General" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Information about general financial aid and support options. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

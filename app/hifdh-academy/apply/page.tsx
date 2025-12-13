import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Apply | Hifdh Academy",
  description: "Apply to our Hifdh Academy program",
}

export default function HifdhApplyPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Apply" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Learn how to apply to our Hifdh Academy program. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

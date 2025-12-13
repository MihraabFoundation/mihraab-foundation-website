import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Sponsor Hifdh Students | Mihraab Foundation",
  description: "Support Quranic memorization students",
}

export default function SponsorHifdhStudentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Sponsor Hifdh Students" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Help support our Hifdh Academy students on their memorization journey. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

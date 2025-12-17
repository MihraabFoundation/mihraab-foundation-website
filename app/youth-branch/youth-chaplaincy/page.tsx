import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Youth Chaplaincy | Mihraab Foundation",
  description: "Youth chaplaincy services and support for young Muslims",
}

export default function YouthChaplaincyPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Youth Chaplaincy" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our Youth Chaplaincy program provides spiritual guidance, counseling, and support for young Muslims. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}


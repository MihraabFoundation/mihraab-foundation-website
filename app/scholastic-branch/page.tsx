import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Scholastic Branch | Mihraab Foundation",
  description: "Explore our Scholastic Branch programs and offerings",
}

export default function ScholasticBranchPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Scholastic Branch" />

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Welcome to the Scholastic Branch of Mihraab Foundation. This section will contain detailed information about
            our educational programs and offerings.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

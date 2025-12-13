import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Youth Branch | Mihraab Foundation",
  description: "Programs and activities for our youth community",
}

export default function YouthBranchPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Youth Branch" />

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Our Youth Branch provides engaging Islamic education and community activities for young members. Content
            coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

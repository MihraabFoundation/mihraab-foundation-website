import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"

export const metadata = {
  title: "Contact Us | Mihraab Foundation",
  description: "Get in touch with Mihraab Foundation",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Contact Us" />

      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Have questions or want to reach out? We'd love to hear from you. Content coming soon.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

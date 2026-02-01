import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import { GraduationCap, BookOpen } from "lucide-react"

export const metadata = {
  title: "Sponsor Students | Support | Mihraab Foundation",
  description:
    "Sponsor students in our seminary and Hifdh Academy programs to help them pursue traditional Islamic education",
}

export default function SponsorStudentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Sponsor Students" />

      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Brief Intro */}
          <p className="text-center text-foreground/80 max-w-2xl mx-auto mb-16">
            We firmly believe that the pursuit of sacred knowledge should never
            be hindered by financial difficulties. Join us in supporting
            dedicated students of knowledge.
          </p>

          {/* Two Sponsorship Options - Side by Side on Desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Seminary Student Sponsorship */}
            <div className="rounded-2xl border border-primary/10 bg-card overflow-hidden shadow-sm flex flex-col">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-primary">
                    Sponsor a Seminary Student
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  The Mihraab Seminary has served 70+ students yearly since 2016,
                  empowering them to assume influential roles as teachers,
                  Imams, and community leaders. Your sponsorship enables their
                  journey toward knowledge and a successful hereafter,
                  inshā&apos;Allāh.
                </p>
              </div>
              <div className="flex-1 min-h-[380px] p-4 pt-0 bg-secondary/5">
                <div data-entity="EMBED_FORM" data-source="CharityStack" id="e4170c7e-9b68-4d51-95a6-cc8a0aba6932"></div>
              </div>
            </div>

            {/* Hifdh Student Sponsorship */}
            <div className="rounded-2xl border border-primary/10 bg-card overflow-hidden shadow-sm flex flex-col">
              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-serif font-bold text-primary">
                    Sponsor a Hifdh Student
                  </h2>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm mb-3">
                  Allāh ta&apos;āla preserves the Qur&apos;ān through the
                  huffādh. By sponsoring a Hifdh Academy student, every letter
                  they recite—in the program and for life—inshā&apos;Allāh goes
                  to your account.
                </p>
                <p className="text-muted-foreground text-xs italic">
                  &ldquo;Verily, among the good deeds that will join a believer
                  after his death are… charity distributed from his wealth while
                  he was alive and well.&rdquo; — Abū Hurayrah ﷺ
                </p>
              </div>
              <div className="flex-1 min-h-[380px] p-4 pt-0 bg-secondary/5">
                <div data-entity="EMBED_FORM" data-source="CharityStack" id="0c8dfb46-48d2-409c-9485-a378738fd598"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

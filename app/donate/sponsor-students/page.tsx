import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import Link from "next/link"
import { GraduationCap, Users, BookOpen, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Sponsor Students | Support | Mihraab Foundation",
  description: "Sponsor students in our seminary and Hifdh Academy programs to help them pursue traditional Islamic education",
}

export default function SponsorStudentsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Sponsor Students" />

      {/* Intro Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Your sponsorship directly supports students pursuing traditional Islamic education 
              in our seminary and Hifdh Academy programs. Help make quality education accessible 
              to dedicated learners.
            </p>
          </div>

          {/* What Sponsorship Covers */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-secondary/5 rounded-xl p-6 border border-primary/10 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-primary mb-2">Tuition & Fees</h3>
              <p className="text-sm text-muted-foreground">
                Cover educational costs and program fees
              </p>
            </div>

            <div className="bg-secondary/5 rounded-xl p-6 border border-primary/10 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-primary mb-2">Living Expenses</h3>
              <p className="text-sm text-muted-foreground">
                Support housing and daily needs
              </p>
            </div>

            <div className="bg-secondary/5 rounded-xl p-6 border border-primary/10 text-center">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-primary mb-2">Resources</h3>
              <p className="text-sm text-muted-foreground">
                Books, materials, and learning tools
              </p>
            </div>
          </div>

          {/* Sponsorship Options */}
          <div className="bg-background rounded-2xl border border-primary/10 p-8 md:p-10 mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 text-center">
              Sponsorship Options
            </h2>
            
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                  Seminary Student Sponsorship
                </h3>
                <p className="text-muted-foreground mb-4">
                  Support students in our comprehensive seminary program studying traditional Islamic sciences. 
                  Sponsorships help cover tuition, living expenses, and educational resources.
                </p>
                <Link href="/scholastic-branch/sponsor-students">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Learn More About Seminary Sponsorship
                  </Button>
                </Link>
              </div>

              <div className="border-l-4 border-secondary pl-6">
                <h3 className="text-xl font-serif font-semibold text-primary mb-2">
                  Hifdh Academy Student Sponsorship
                </h3>
                <p className="text-muted-foreground mb-4">
                  Help students memorize the Holy Qur'an by sponsoring a Hifdh Academy student. 
                  Your support enables dedicated learners to complete their memorization journey.
                </p>
                <Link href="/hifdh-academy/sponsor-hifdh-students">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Learn More About Hifdh Sponsorship
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Donation Form */}
          <div className="bg-secondary/5 rounded-2xl border border-primary/10 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4 text-center">
              Make a Sponsorship Donation
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Use the form below to make a donation towards student sponsorships.
            </p>
            {/* CharityStack Sponsor Students Embed */}
            <div className="min-h-[400px] border border-primary/10 rounded-lg p-4 bg-background">
              <div id="charitystack-sponsor-students" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


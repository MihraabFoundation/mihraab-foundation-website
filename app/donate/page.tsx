import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import DonationModal from "@/components/donation-modal"
import Link from "next/link"
import { Heart, GraduationCap, HandHeart, Building2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Support Us | Mihraab Foundation",
  description: "Support Mihraab Foundation through donations, sponsorships, financial aid, and our building campaign",
}

export default function DonatePage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Support Mihraab Foundation" />

      {/* Intro Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Your support enables us to continue providing traditional Islamic education, 
            spiritual guidance, and community services. Choose how you'd like to make an impact.
          </p>
        </div>
      </section>

      {/* Building Campaign - Featured Prominently */}
      <section className="py-8 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/donate/building-campaign">
            <div className="bg-gradient-to-br from-primary/15 via-primary/10 to-secondary/15 rounded-3xl border-2 border-primary/40 p-10 md:p-12 hover:border-primary/60 transition-all hover:shadow-2xl relative overflow-hidden group">
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full blur-3xl -ml-24 -mb-24" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs font-semibold text-primary uppercase tracking-wide bg-primary/20 px-4 py-2 rounded-full border border-primary/30">
                    Featured Campaign
                  </span>
                  <span className="text-sm text-primary font-medium">✨ Transform Our Community</span>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-20 h-20 rounded-2xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Building2 className="w-10 h-10 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-2">
                          New Building Campaign
                        </h2>
                        <p className="text-lg text-foreground/90 max-w-2xl">
                          Help us build our new facility to expand our programs and serve more community members. 
                          This transformative project will create a lasting space for traditional Islamic education.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="bg-background/80 backdrop-blur-sm rounded-xl px-6 py-4 border border-primary/20">
                      <div className="text-sm text-muted-foreground mb-1">Support Our Vision</div>
                      <div className="text-2xl font-serif font-bold text-primary mb-2">Learn More →</div>
                      <div className="text-xs text-muted-foreground">Click to see campaign details</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Support Options Grid */}
      <section className="py-8 px-4 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* General Donation */}
            <DonationModal>
              <div className="bg-background rounded-2xl border-2 border-primary/20 p-8 hover:border-primary/40 transition-all hover:shadow-lg cursor-pointer h-full flex flex-col">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Heart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                  General Donation
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Make a one-time or recurring donation to support our general operations and programs. 
                  Choose from standard donation, DAF direct giving, or endowment contributions.
                </p>
                <div className="text-secondary font-medium">
                  Donate Now →
                </div>
              </div>
            </DonationModal>

            {/* Sponsor Students */}
            <Link href="/donate/sponsor-students">
              <div className="bg-background rounded-2xl border border-primary/10 p-8 hover:border-primary/30 transition-all hover:shadow-lg h-full flex flex-col">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <GraduationCap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                  Sponsor Students
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Support students in our seminary and Hifdh Academy programs. Your sponsorship 
                  helps cover tuition, living expenses, and educational resources for dedicated learners.
                </p>
                <div className="text-secondary font-medium">
                  Sponsor Now →
                </div>
              </div>
            </Link>

            {/* Financial Aid */}
            <Link href="/donate/financial-aid">
              <div className="bg-background rounded-2xl border border-primary/10 p-8 hover:border-primary/30 transition-all hover:shadow-lg h-full flex flex-col">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <HandHeart className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">
                  Financial Aid
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow">
                  Apply for financial assistance or contribute to our financial aid fund. We provide 
                  support to students and families who need help accessing our educational programs.
                </p>
                <div className="text-secondary font-medium">
                  Learn More →
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


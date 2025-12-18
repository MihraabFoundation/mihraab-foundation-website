import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import Link from "next/link"
import { FileText, CheckCircle, Users, HandHeart } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Financial Aid | Support | Mihraab Foundation",
  description: "Apply for financial assistance or contribute to our financial aid fund to support students and families",
}

export default function FinancialAidPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Financial Aid" />

      {/* Intro Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Mihraab Foundation is committed to making our educational programs accessible to all. 
              We offer financial assistance to students and families who need support, and welcome 
              contributions to our financial aid fund.
            </p>
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Apply for Financial Aid */}
            <div className="bg-background rounded-2xl border border-primary/10 p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Apply for Financial Aid
              </h2>
              <p className="text-muted-foreground mb-6">
                If you need financial assistance to participate in our programs, we're here to help. 
                Apply for financial aid for seminary programs or general educational support.
              </p>
              
              <div className="space-y-4">
                <Link href="/scholastic-branch/financial-aid-seminary">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Seminary Financial Aid
                  </Button>
                </Link>
                <Link href="/financial-aid-general">
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    General Financial Aid
                  </Button>
                </Link>
              </div>
            </div>

            {/* Support Financial Aid Fund */}
            <div className="bg-secondary/5 rounded-2xl border border-primary/10 p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <HandHeart className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-serif font-bold text-primary mb-4">
                Support Financial Aid Fund
              </h2>
              <p className="text-muted-foreground mb-6">
                Contribute to our financial aid fund to help students and families access our programs. 
                Your donation directly supports those in need.
              </p>
              
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Use the donation form below to contribute to our financial aid fund.
                </p>
              </div>
            </div>
          </div>

          {/* What Financial Aid Covers */}
          <div className="bg-background rounded-2xl border border-primary/10 p-8 md:p-10 mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 text-center">
              What Financial Aid Covers
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Tuition Assistance</h3>
                  <p className="text-sm text-muted-foreground">
                    Partial or full coverage of program tuition and fees
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Educational Materials</h3>
                  <p className="text-sm text-muted-foreground">
                    Books, supplies, and learning resources
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Living Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Assistance with housing and basic living expenses when needed
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Program Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Support to participate in workshops, classes, and special programs
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Donation Form */}
          <div className="bg-secondary/5 rounded-2xl border border-primary/10 p-8 md:p-10">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4 text-center">
              Contribute to Financial Aid Fund
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Help us support students and families by contributing to our financial aid fund.
            </p>
            {/* CharityStack Financial Aid Embed */}
            <div className="min-h-[400px] border border-primary/10 rounded-lg p-4 bg-background">
              <div id="charitystack-financial-aid" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


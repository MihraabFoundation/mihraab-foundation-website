import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import FAQAccordion from "@/components/faq-accordion"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import Image from "next/image"
import { BookOpen, ArrowRight, GraduationCap } from "lucide-react"

export const metadata = {
  title: "Mihraab Seminary | Mihraab Foundation",
  description: "Learn about Mihraab Seminary - our premier Islamic education program",
}

const seminaryFAQs = [
  {
    question: "What is Mihraab Seminary?",
    answer:
      "Mihraab Seminary is our flagship program dedicated to providing traditional Islamic education with a contemporary approach. It combines classical Islamic scholarship with modern pedagogical methods to equip students with comprehensive Islamic knowledge.",
  },
  {
    question: "Who is eligible to enroll?",
    answer:
      "Our seminary program welcomes students of all backgrounds who are committed to learning Islamic sciences. Specific prerequisites may apply depending on the level of study. Please contact our admissions team for detailed eligibility requirements.",
  },
  {
    question: "What is the program duration?",
    answer:
      "The seminary program typically spans multiple years, depending on the curriculum track selected. Students can choose between intensive programs and extended learning schedules based on their personal circumstances.",
  },
  {
    question: "Is financial aid available?",
    answer:
      "Yes, we offer various financial aid options to support our students. This includes scholarships, payment plans, and sponsorship opportunities. Visit our Financial Aid - Seminary page for more information.",
  },
  {
    question: "Are there online learning options?",
    answer:
      "We offer both in-person and online learning options to accommodate students with different schedules and preferences. Our hybrid approach ensures accessibility while maintaining the quality of instruction.",
  },
]

export default function SeminaryPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Mihraab Seminary" />

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 italic">
            Fresh Framework, Unwavering Excellence…
          </p>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-4xl mx-auto">
            In 2016 we embarked on a new initiative to raise the standard of disseminating sacred knowledge in the
            Greater-Seattle area, by introducing the Essentials of Islam Course, providing a formal structure to study
            Islam. After a decade of inspiring communities and organizations across the Pacific-Northwest, that vision
            has now evolved into Mihraab Seminary, a renewed framework that builds on the same foundation of rigor and
            integrity while preparing for a fuller roadmap of sacred learning to come.
          </p>
        </div>

        {/* Image Section */}
        <div className="mb-16">
          <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden">
            <Image
              src="/islamic-scholar-lecture-seminar-audience.jpg"
              alt="Mihraab Seminary students in class"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent" />
          </div>
        </div>

        {/* Core Curriculum Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Core Curriculum</h2>
          </div>
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              At Mihraab Seminary, our Core Curriculum is the standard of knowledge expected from the community,
              especially members engaged as leaders of their MSA's, local youth groups, Islamic school teachers, and
              boards of masajid and other Islamic organizations.
            </p>
            <p>
              Beyond preparing those in these roles, this curriculum is also designed to serve as a launching point for
              students who wish to continue their Islamic Studies journey with us or in seminaries across the country
              and world. We strongly believe that any student who completes the entire certificate program at a
              proficient level may enter into the intermediary studies in any of these institutes.
            </p>
          </div>
        </div>

        {/* Curriculum Overview Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">Curriculum Overview</h2>
            </div>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Two Levels · Real Foundations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Islamic Studies Track */}
            <div className="space-y-8">
              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Level One</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Fiqh 101 (Ibaadah)</h4>
                      <p className="text-sm text-muted-foreground">Islamic jurisprudence covering acts of worship</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Sirah/Muslim History 101</h4>
                      <p className="text-sm text-muted-foreground">Prophetic biography and early Islamic history</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Aqidah 101</h4>
                      <p className="text-sm text-muted-foreground">Foundations of Islamic theology and belief</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-primary/5 rounded-xl p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Level Two</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Fiqh 201 (Business/Family Law)</h4>
                      <p className="text-sm text-muted-foreground">Advanced jurisprudence covering transactions and family matters</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Hadith 201</h4>
                      <p className="text-sm text-muted-foreground">Advanced study of Prophetic traditions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Aqidah 201</h4>
                      <p className="text-sm text-muted-foreground">Advanced theological studies and contemporary issues</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Arabic Studies Track */}
            <div className="space-y-8">
              <div className="bg-secondary/5 rounded-xl p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Arabic Level One</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Nahw (Grammar) 101</h4>
                      <p className="text-sm text-muted-foreground">Fundamentals of Arabic grammar and syntax</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Sarf (Morphology) 101</h4>
                      <p className="text-sm text-muted-foreground">Study of word formation and root patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Application/Lab 101</h4>
                      <p className="text-sm text-muted-foreground">Practical application of grammar and morphology</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-secondary/5 rounded-xl p-6">
                <h3 className="text-2xl font-serif font-bold text-primary mb-6">Arabic Level Two</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Nahw (Grammar) 201</h4>
                      <p className="text-sm text-muted-foreground">Advanced Arabic grammar and complex structures</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Sarf (Morphology) 201</h4>
                      <p className="text-sm text-muted-foreground">Advanced morphological analysis and patterns</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">Application/Lab 201</h4>
                      <p className="text-sm text-muted-foreground">Advanced practical application and text analysis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 mb-16 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
            Ready to Begin Your Journey?
          </h3>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Explore our course catalog and roadmap, then register for the active quarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="/scholastic-branch/seminary/curriculum">
              <Button size="lg" variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8">
                <BookOpen className="w-5 h-5 mr-2" />
                View Course Catalog
              </Button>
            </Link>
            <Link href="/scholastic-branch/seminary/register">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold px-8">
                Register Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <FAQAccordion items={seminaryFAQs} />
      </section>

      <Footer />
    </main>
  )
}

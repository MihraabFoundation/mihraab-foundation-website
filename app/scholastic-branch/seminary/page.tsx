import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import FAQAccordion from "@/components/faq-accordion"

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
        <div className="space-y-8">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Mihraab Seminary is our flagship program dedicated to traditional Islamic education. Content coming soon.
          </p>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <FAQAccordion items={seminaryFAQs} />

      <Footer />
    </main>
  )
}

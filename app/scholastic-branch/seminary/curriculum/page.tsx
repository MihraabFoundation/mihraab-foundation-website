import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { BookOpen, Calendar, Clock, ArrowLeft, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Course Catalog | Mihraab Seminary",
  description: "Explore the complete curriculum and roadmap for Mihraab Seminary",
}

// Sample course data - structure for a multi-year program
const curriculum = {
  year1: {
    fall: [
      {
        id: "QUR101",
        title: "Qur'anic Arabic I",
        description: "Introduction to Arabic grammar and vocabulary with focus on understanding the Qur'an.",
        credits: 3,
        hours: "3 hours/week",
      },
      {
        id: "AQD101",
        title: "Aqidah (Theology) I",
        description: "Foundations of Islamic belief, covering the six articles of faith and core theological principles.",
        credits: 3,
        hours: "3 hours/week",
      },
      {
        id: "FQH101",
        title: "Fiqh (Jurisprudence) I",
        description: "Introduction to Islamic law, covering purification, prayer, and basic legal methodology.",
        credits: 3,
        hours: "3 hours/week",
      },
    ],
    winter: [
      {
        id: "QUR102",
        title: "Qur'anic Arabic II",
        description: "Continued study of Arabic grammar with emphasis on Qur'anic texts and classical literature.",
        credits: 3,
        hours: "3 hours/week",
      },
      {
        id: "HAD101",
        title: "Hadith Studies I",
        description: "Introduction to the science of Hadith, covering authentication, classification, and major collections.",
        credits: 3,
        hours: "3 hours/week",
      },
      {
        id: "FQH102",
        title: "Fiqh (Jurisprudence) II",
        description: "Continuation of Fiqh I, covering fasting, zakah, and hajj.",
        credits: 3,
        hours: "3 hours/week",
      },
    ],
    spring: [
      {
        id: "QUR103",
        title: "Qur'anic Arabic III",
        description: "Advanced Arabic grammar and rhetoric, with focus on tafsir methodology.",
        credits: 3,
        hours: "3 hours/week",
      },
      {
        id: "TFS101",
        title: "Tafsir (Qur'anic Exegesis) I",
        description: "Introduction to Qur'anic interpretation, covering major themes and selected surahs.",
        credits: 3,
        hours: "3 hours/week",
      },
      {
        id: "SIR101",
        title: "Sirah (Prophetic Biography) I",
        description: "Life of the Prophet Muhammad (peace be upon him) from birth to the Hijrah.",
        credits: 3,
        hours: "3 hours/week",
      },
    ],
  },
  year2: {
    fall: [
      {
        id: "AQD201",
        title: "Aqidah (Theology) II",
        description: "Advanced theological studies covering contemporary issues and schools of thought.",
        credits: 3,
        hours: "3 hours/week",
      },
      {
        id: "FQH201",
        title: "Fiqh (Jurisprudence) III",
        description: "Advanced fiqh covering marriage, divorce, business transactions, and inheritance.",
        credits: 3,
        hours: "3 hours/week",
      },
      {
        id: "HAD201",
        title: "Hadith Studies II",
        description: "In-depth study of major Hadith collections and application of Hadith in legal reasoning.",
        credits: 3,
        hours: "3 hours/week",
      },
    ],
    winter: [
      {
        id: "TFS201",
        title: "Tafsir (Qur'anic Exegesis) II",
        description: "Advanced tafsir covering complete surahs and thematic interpretation.",
        credits: 3,
        hours: "3 hours/week",
      },
      {
        id: "SIR201",
        title: "Sirah (Prophetic Biography) II",
        description: "Life of the Prophet from Hijrah to the end of his mission.",
        credits: 3,
        hours: "3 hours/week",
      },
      {
        id: "USL201",
        title: "Usul al-Fiqh (Legal Theory)",
        description: "Principles of Islamic jurisprudence and legal methodology.",
        credits: 3,
        hours: "3 hours/week",
      },
    ],
    spring: [
      {
        id: "ADB201",
        title: "Adab (Islamic Ethics & Character)",
        description: "Study of Islamic ethics, character development, and spiritual refinement.",
        credits: 3,
        hours: "3 hours/week",
      },
      {
        id: "TAR201",
        title: "Tarikh (Islamic History)",
        description: "Survey of Islamic history from the Rightly Guided Caliphs to the modern era.",
        credits: 3,
        hours: "3 hours/week",
      },
      {
        id: "CAP201",
        title: "Capstone Project",
        description: "Independent research project demonstrating mastery of core curriculum.",
        credits: 3,
        hours: "3 hours/week",
      },
    ],
  },
}

export default function CurriculumPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Course Catalog & Curriculum" />

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Introduction */}
        <div className="text-center mb-16">
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto mb-8">
            Our comprehensive curriculum is designed to provide a solid foundation in Islamic sciences. The program spans
            two years with three quarters per year, totaling six quarters of intensive study.
          </p>
          <Link href="/scholastic-branch/seminary/register">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold">
              Register Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>

        {/* Multi-Year Roadmap */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
            Program Roadmap
          </h2>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            <div className="space-y-16">
              {/* Year 1 */}
              <div className="relative">
                <div className="flex gap-8">
                  <div className="shrink-0">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center border-4 border-background shadow-lg">
                      <span className="text-2xl md:text-3xl font-bold text-primary-foreground">1</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">Year 1: Foundation</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {Object.entries(curriculum.year1).map(([quarter, courses]) => (
                        <div key={quarter} className="bg-background border border-border rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-4">
                            <Calendar className="w-5 h-5 text-secondary" />
                            <h4 className="font-serif font-bold text-primary capitalize">{quarter}</h4>
                          </div>
                          <div className="space-y-3">
                            {courses.map((course) => (
                              <div key={course.id} className="pb-3 border-b border-border last:border-0">
                                <div className="text-xs font-semibold text-secondary mb-1">{course.id}</div>
                                <h5 className="font-semibold text-foreground mb-1">{course.title}</h5>
                                <p className="text-sm text-muted-foreground">{course.description}</p>
                                <div className="flex items-center gap-4 mt-2 text-xs text-foreground/60">
                                  <span>{course.credits} credits</span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {course.hours}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Year 2 */}
              <div className="relative">
                <div className="flex gap-8">
                  <div className="shrink-0">
                    <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center border-4 border-background shadow-lg">
                      <span className="text-2xl md:text-3xl font-bold text-primary-foreground">2</span>
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">Year 2: Advanced Studies</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {Object.entries(curriculum.year2).map(([quarter, courses]) => (
                        <div key={quarter} className="bg-background border border-border rounded-lg p-4">
                          <div className="flex items-center gap-2 mb-4">
                            <Calendar className="w-5 h-5 text-secondary" />
                            <h4 className="font-serif font-bold text-primary capitalize">{quarter}</h4>
                          </div>
                          <div className="space-y-3">
                            {courses.map((course) => (
                              <div key={course.id} className="pb-3 border-b border-border last:border-0">
                                <div className="text-xs font-semibold text-secondary mb-1">{course.id}</div>
                                <h5 className="font-semibold text-foreground mb-1">{course.title}</h5>
                                <p className="text-sm text-muted-foreground">{course.description}</p>
                                <div className="flex items-center gap-4 mt-2 text-xs text-foreground/60">
                                  <span>{course.credits} credits</span>
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {course.hours}
                                  </span>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Program Completion */}
        <div className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
            Certificate of Completion
          </h3>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8">
            Upon successful completion of all six quarters, students will receive a certificate demonstrating their
            mastery of the core curriculum. This certificate prepares students for advanced studies at seminaries
            worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/scholastic-branch/seminary">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Seminary
              </Button>
            </Link>
            <Link href="/scholastic-branch/seminary/register">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Register Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

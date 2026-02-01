import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import ApplyButton from "@/components/hifdh-apply-button"
import Link from "next/link"
import { BookOpen, Users, MapPin, Clock, DollarSign, FileText, GraduationCap, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Hifdh Academy | Mihraab Foundation",
  description: "Learn about our Hifdh Academy methodology, instructors, schedule, and how to apply",
}

export default function HifdhAcademyPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Hifdh Academy" />

      {/* Introduction Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-8">
              The Noble Qur'ān is the Heart of Islām
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed text-left">
              <p>
                Its daily recitation is key to our spiritual development and yet we find more and more that much
                of our community lacks the tools necessary to truly appreciate the Qur'ān. For this reason, Mihraab
                Foundation has a priority to raise the fluency of the Qur'ān amongst the community.
              </p>
              <p>
                Thus, we have carefully and methodically developed a <span className="font-semibold text-primary">Tahfīdh al Qur'ān Hifdh Academy</span>.
                Through the Hifdh Academy we aim to establish huffādh who not only serve the community and ummah,
                but also be torchbearers who carry the light of Qur'ān to the next generation as well as make its
                recitation more accessible to the larger community. <span className="italic">Success and acceptance is from Allāh ta'āla.</span>
              </p>
              <p>
                Our program concentrates on memorizing the Qur'ān with correct tajwīd and also a strong emphasis on
                maintaining what has already been memorized. Students are encouraged to work rigorously in order to
                preserve the previous lessons as they progress through new memorization. Mihraab Foundation also places
                a high priority on <span className="font-semibold text-primary">tarbiyyah</span>, which is to nurture students in their overall
                manners, morals, and ethical values, preparing them for leadership in the Muslim community.
              </p>
            </div>
          </div>

          {/* Timeline Highlight */}
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b from-primary via-secondary to-primary/20" />
            <div className="pl-8 py-6">
              <Badge variant="outline" className="mb-2 border-primary text-primary text-sm px-3 py-1">
                Completion Timeline
              </Badge>
              <p className="text-2xl font-serif font-bold text-primary">
                Parents can expect students to finish memorization of the Qur'ān in approximately <span className="text-secondary">4 years</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology Section - Timeline Style */}
      <section className="py-20 px-4 md:px-8 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              Our Methodology
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              A structured, step-by-step approach ensuring retention and excellence
            </p>
          </div>

          {/* Timeline Steps */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-12 top-0 bottom-0 w-0.5 bg-primary/20 hidden md:block" />

            <div className="space-y-12">
              {/* Step 1 */}
              <div className="relative flex gap-8">
                <div className="shrink-0">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center border-4 border-background shadow-lg">
                    <span className="text-2xl md:text-3xl font-bold text-primary-foreground">1</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-serif font-bold text-primary">
                      Previously Memorized Juz (Amukhta)
                    </h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    The students first recite a previously memorized juz (up to two previously memorized juz).
                    They are required to recite the entire juz sufficiently. If the previously memorized juz was
                    not recited sufficiently, they will not be allowed to recite their new lesson for that day and
                    will have to review and repeat the previously memorized juz again.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex gap-8">
                <div className="shrink-0">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center border-4 border-background shadow-lg">
                    <span className="text-2xl md:text-3xl font-bold text-primary-foreground">2</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-serif font-bold text-primary">
                      Current Juz (Sabaq Para)
                    </h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    After reciting their revision with limited mistakes, the students will then revise and recite
                    their current juz. Again, they are required to recite the entire current juz sufficiently. If
                    the current juz was not recited sufficiently, they will not be allowed to recite their new lesson
                    for that day and will have to review and repeat their current juz.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex gap-8">
                <div className="shrink-0">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center border-4 border-background shadow-lg">
                    <span className="text-2xl md:text-3xl font-bold text-primary-foreground">3</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-serif font-bold text-primary">
                      New Lesson (Sabaq)
                    </h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    If both previously memorized juz and current juz are recited with limited mistakes, the student
                    will then have earned the opportunity to recite their new lesson. <span className="font-semibold text-foreground">No memorization mistakes,
                      hesitations or Tajwīd mistakes are allowed in the new lesson.</span>
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="relative flex gap-8">
                <div className="shrink-0">
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center border-4 border-background shadow-lg">
                    <span className="text-2xl md:text-3xl font-bold text-primary-foreground">4</span>
                  </div>
                </div>
                <div className="flex-1 pt-2">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-2xl font-serif font-bold text-primary">
                      Nāzirah (Recitation)
                    </h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed text-lg">
                    Before memorizing a new portion, students must first read it under the supervision of the instructor
                    to ensure proper recitation and Tajwīd. This ensures that students memorize the new portion correctly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Methodology Explanation */}
          <div className="mt-16 pt-8 border-t-2 border-primary/20">
            <div className="flex items-start gap-4">
              <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div className="space-y-4">
                <p className="text-foreground/90 leading-relaxed text-lg">
                  These rules are to ensure that our students retain what has previously been memorized properly, and to
                  ensure that their new lessons have the best potential to be retained in the strongest way possible. A weak
                  sabaq or new lesson will lead to a weak current juz' which will in turn lead to an overall weak memorization
                  of the Qur'ān.
                </p>
                <p className="text-foreground/90 leading-relaxed text-lg font-medium">
                  This is why it is important that the previously memorized juz', current juz' and new lesson are recited
                  fluently, and with full confidence.
                </p>
              </div>
            </div>
          </div>

          {/* Islamic Studies */}
          <div className="mt-12">
            <Separator className="mb-8" />
            <div className="flex items-center gap-4 mb-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <h3 className="text-2xl font-serif font-bold text-primary">
                Islamic Studies
              </h3>
            </div>
            <p className="text-foreground/80 leading-relaxed text-lg pl-12">
              Students will also be taught lessons from various Islamic sciences, including fiqh, hadith, adab, and du'a.
            </p>
          </div>
        </div>
      </section>

      {/* Program Details - Different Layout */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
            Program Details
          </h2>

          {/* Instructors - Compact Grid Style */}
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-serif font-bold text-primary">
                Instructors
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-9">
              <div className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1.5" />
                <div>
                  <p className="text-lg font-semibold text-foreground">Qāri Osman Shareef</p>
                  <p className="text-sm text-muted-foreground">Director/Instructor</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1.5" />
                <div>
                  <p className="text-lg font-semibold text-foreground">Mawlāna Ahmad Ali</p>
                  <p className="text-sm text-muted-foreground">Instructor</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1.5" />
                <div>
                  <p className="text-lg font-semibold text-foreground">Shaykh Umar Holdridge</p>
                  <p className="text-sm text-muted-foreground">Instructor</p>
                </div>
              </div>
            </div>
          </div>

          <Separator className="my-8" />

          {/* Location, Schedule, Tuition - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Location */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-serif font-bold text-primary">
                  Location
                </h3>
              </div>
              <div className="space-y-1 pl-9">
                <p className="font-semibold text-foreground">Masjid Umar al Farooq</p>
                <p className="text-muted-foreground">5507 238th St. SW</p>
                <p className="text-muted-foreground">Mountlake Terrace, WA 98043</p>
              </div>
            </div>

            {/* Schedule */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-serif font-bold text-primary">
                  Schedule
                </h3>
              </div>
              <div className="space-y-2 pl-9">
                <p className="text-muted-foreground">New Year Starting August 2024</p>
                <p className="text-2xl font-bold text-primary">8:00am - 2:30pm</p>
              </div>
            </div>

            {/* Tuition */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-serif font-bold text-primary">
                  Tuition
                </h3>
              </div>
              <div className="space-y-2 pl-9">
                <p className="font-semibold text-foreground text-lg">$375/month</p>
                <p className="text-muted-foreground text-sm">OR</p>
                <p className="font-semibold text-foreground text-lg">$4,500/year</p>
                <Separator className="my-3" />
                <p className="text-sm text-muted-foreground">
                  Financial Aid available to those who apply and qualify
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Apply and Code of Conduct Section */}
      <section className="py-20 px-4 md:px-8 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Ready to Begin Your Hifdh Journey?
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Join our Hifdh Academy and embark on the noble path of memorizing the Holy Qur'ān.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <ApplyButton />

              <Link href="/hifdh-academy/code-of-conduct.pdf" target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 text-lg"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Code of Conduct (PDF)
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import { BookOpen } from "lucide-react"
import { Halaqah } from "@/models/Halaqah"
import HalaqahCard from "@/components/halaqah-card"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Sacred Knowledge Classes | Mihraab Foundation",
  description: "Join our traditional Islamic knowledge classes and study circles across the Greater Seattle area",
}

const classes: Halaqah[] = [
  {
    name: "Faith and Materialism",
    day: "Thursday",
    time: "3:30 PM - 4:30 PM",
    conductor: "Shaykh Umair Ahmad",
    flyer: "/placeholder.svg",
    location: {
      name: "University of Washington (Smith Hall Room 305)",
      address: "305 Smith Hall, University of Washington, Seattle, WA 98195",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172158.29556188564!2d-122.4821472!3d47.6131742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1702838400000!5m2!1sen!2sus",
    },
  },
  {
    name: "Reformation of Character",
    day: "Wednesday",
    time: "After Isha",
    conductor: "Shaykh Qasim Hatem",
    flyer: "/placeholder.svg",
    location: {
      name: "Islamic Center of Eastside",
      address: "14230 NE 21st St, Bellevue, WA 98007",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172158.29556188564!2d-122.4821472!3d47.6131742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1702838400000!5m2!1sen!2sus",
    },
  },
]

export default function SacredKnowledgeClassesPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Sacred Knowledge Classes" />

      {/* Intro Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Traditional Islamic Knowledge
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Join our Sacred Knowledge Classes for in-depth study of traditional Islamic sciences.
              We offer comprehensive courses across various disciplines, each led by
              our resident scholars.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">{classes.length}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Active Classes</div>
            </div>
            <Separator orientation="vertical" className="h-12" />
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">2+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Locations</div>
            </div>
            <Separator orientation="vertical" className="h-12" />
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">Weekly</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Sessions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes List */}
      <section className="py-8 px-4 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {classes.map((classItem, index) => (
              <HalaqahCard key={index} halaqah={classItem} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

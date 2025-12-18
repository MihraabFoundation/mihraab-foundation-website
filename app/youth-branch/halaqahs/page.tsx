import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import { BookOpen } from "lucide-react"
import { Halaqah } from "@/models/Halaqah"
import HalaqahCard from "@/components/halaqah-card"
import { Separator } from "@/components/ui/separator"

export const metadata = {
  title: "Halaqahs | Mihraab Foundation",
  description: "Join our Islamic study circles and community gatherings across the Greater Seattle area",
}

const halaqahs: Halaqah[] = [
  {
    name: "Guys Halaqah (Ages 13+)",
    day: "Wednesday",
    time: "7:30 PM",
    conductor: "Mawlāna Ahmad Ali",
    flyer: "/halaqahs/north-seattle-flyer.jpg",
    location: {
      name: "Masjid Umar al-Farooq",
      address: "5507 238th St SW, Mountlake Terrace, WA 98043",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172158.29556188564!2d-122.4821472!3d47.6131742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1702838400000!5m2!1sen!2sus",
    },
  },
  {
    name: "Girls Halaqah (Ages 13-18)",
    day: "Saturday",
    time: "10:30 AM - 12:45 PM",
    conductor: "Sister Safa Aynoor",
    flyer: "/halaqahs/south-seattle-flyer.jpg",
    location: {
      name: "Islamic Center of Redmond (ICOR)",
      address: "18080 NE 68th St, Redmond, WA 98052",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172158.29556188564!2d-122.4821472!3d47.6131742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1702838400000!5m2!1sen!2sus",
    },
  },
  {
    name: "Girls Halaqah (Ages 13-18)",
    day: "Sunday",
    time: "1:30 PM - 3:00 PM",
    conductor: "Sister Sarah Khan",
    flyer: "/halaqahs/eastside-flyer.jpg",
    location: {
      name: "Masjid Umar al-Farooq",
      address: "5507 238th St SW, Mountlake Terrace, WA 98043",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172158.29556188564!2d-122.4821472!3d47.6131742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1702838400000!5m2!1sen!2sus",
    },
  },
]

export default function HalaqahsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Halaqahs" />

      {/* Intro Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <BookOpen className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Join Our Study Circles
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Join our halaqahs for interactive Islamic learning and community connection.
              We conduct regular study circles across the Greater Seattle area, each led by
              our resident scholars.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">{halaqahs.length}</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Active Halaqahs</div>
            </div>
            <Separator orientation="vertical" className="h-12" />
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-1">3+</div>
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

      {/* Halaqahs List */}
      <section className="py-8 px-4 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12">
            {halaqahs.map((halaqah, index) => (
              <HalaqahCard key={index} halaqah={halaqah} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

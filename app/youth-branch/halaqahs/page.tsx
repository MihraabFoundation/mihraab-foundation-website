import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import Image from "next/image"
import { Calendar, Clock, User, MapPin } from "lucide-react"

export const metadata = {
  title: "Halaqahs | Mihraab Foundation",
  description: "Join our Islamic study circles and community gatherings across the Greater Seattle area",
}

interface Halaqah {
  name: string
  day: string
  time: string
  conductor: string
  flyer: string
  location: {
    name: string
    address: string
    mapEmbedUrl: string
  }
}

const halaqahs: Halaqah[] = [
  {
    name: "Guys Halaqah (Ages 13+)",
    day: "Wednesday",
    time: "7:30 PM",
    conductor: "Mawlāna Ahmad Ali",
    flyer: "/halaqahs/north-seattle-flyer.jpg", // Placeholder - update with actual flyer path
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
    flyer: "/halaqahs/south-seattle-flyer.jpg", // Placeholder - update with actual flyer path
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
    flyer: "/halaqahs/eastside-flyer.jpg", // Placeholder - update with actual flyer path
    location: {
      name: "Masjid Umar al-Farooq",
      address: "5507 238th St SW, Mountlake Terrace, WA 98043",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172158.29556188564!2d-122.4821472!3d47.6131742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1702838400000!5m2!1sen!2sus",
    },
  },
]

function HalaqahCard({ halaqah, index }: { halaqah: Halaqah; index: number }) {
  const isImageLeft = index % 2 === 0

  return (
    <div className="bg-background rounded-2xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
      <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        {/* Flyer Image */}
        <div className="relative w-full md:w-1/2 h-64 md:min-h-[500px] bg-secondary/10">
          <Image
            src={halaqah.flyer}
            alt={`${halaqah.name} flyer`}
            fill
            className="object-cover"
          />
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
            {halaqah.name}
          </h3>

          {/* Details Grid */}
          <div className="space-y-4 mb-6 flex-grow">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Day</p>
                <p className="text-lg text-foreground font-medium">{halaqah.day}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Time</p>
                <p className="text-lg text-foreground font-medium">{halaqah.time}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Conducted By</p>
                <p className="text-lg text-foreground font-medium">{halaqah.conductor}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Location</p>
                <p className="text-lg text-foreground font-medium">{halaqah.location.name}</p>
                <p className="text-sm text-muted-foreground mt-1">{halaqah.location.address}</p>
              </div>
            </div>
          </div>

          {/* Google Map */}
          <div className="mt-6 rounded-lg overflow-hidden border border-primary/10">
            <iframe
              src={halaqah.location.mapEmbedUrl}
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${halaqah.name} Location`}
              className="w-full"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function HalaqahsPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Halaqahs" />

      {/* Intro Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-foreground/80 leading-relaxed">
            Join our halaqahs for interactive Islamic learning and community connection. 
            We conduct regular study circles across the Greater Seattle area, each led by 
            our resident scholars.
          </p>
        </div>
      </section>

      {/* Halaqahs List */}
      <section className="py-8 px-4 md:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-8">
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

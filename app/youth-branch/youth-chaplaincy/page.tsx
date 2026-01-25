import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import ChaplainRequestForm from "@/components/chaplain-request-form"
import { Separator } from "@/components/ui/separator"
import { Clock, Mail, Phone, MapPin } from "lucide-react"

export const metadata = {
  title: "Youth Chaplaincy | Mihraab Foundation",
  description: "Youth chaplaincy services and support for young Muslims",
}

export default function YouthChaplaincyPage() {

  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Youth Chaplaincy" />

      {/* Introduction Section */}
      <section className="py-20 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            Our Youth Chaplaincy program provides spiritual guidance, counseling, and support for young Muslims. 
            Our chaplains are here to help navigate life's challenges with wisdom, compassion, and Islamic principles.
          </p>
        </div>

        {/* Request Chaplain & Office Hours - Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Request Chaplain Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Request a Chaplain
              </h2>
              <p className="text-lg text-foreground/80">
                Fill out the form below to request a meeting with one of our youth chaplains. We'll get back to you as soon as possible.
              </p>
            </div>
            <ChaplainRequestForm />
          </div>

          {/* Office Hours Section */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
                Office Hours
              </h2>
              <p className="text-lg text-foreground/80">
                Our youth chaplains are available during the following hours. Walk-ins are welcome, but appointments are recommended.
              </p>
            </div>

            <div className="bg-secondary/5 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary mb-3">Regular Hours</h3>
                    <div className="space-y-2 text-foreground/80">
                      <p><span className="font-semibold">Monday - Thursday:</span> 3:00 PM - 7:00 PM</p>
                      <p><span className="font-semibold">Friday:</span> 2:00 PM - 6:00 PM</p>
                      <p><span className="font-semibold">Saturday:</span> 10:00 AM - 2:00 PM</p>
                      <p><span className="font-semibold">Sunday:</span> Closed</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary mb-3">Location</h3>
                    <p className="text-foreground/80">
                      Masjid Umar al Farooq<br />
                      5507 238th St. SW<br />
                      Mountlake Terrace, WA 98043
                    </p>
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-xl font-serif font-bold text-primary">Contact Information</h3>
                  <div className="flex flex-col gap-4 text-foreground/80">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-secondary shrink-0" />
                      <a href="mailto:youth@mihraab.com" className="hover:text-primary transition-colors">
                        youth@mihraab.com
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-secondary shrink-0" />
                      <a href="tel:+12061234567" className="hover:text-primary transition-colors">
                        (206) 123-4567
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


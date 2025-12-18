import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import { Mail, MapPin, Clock, ArrowRight, ExternalLink } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export const metadata = {
  title: "Contact Us | Mihraab Foundation",
  description: "Get in touch with Mihraab Foundation - visit our campus, email us, or reach out for donations and financial inquiries",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Contact Us" />

      {/* Main Content */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Intro Text */}
          <div className="text-center mb-16">
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              We'd love to hear from you. Whether you have questions about our programs, 
              want to visit our campus, or need assistance with donations, please don't hesitate to reach out.
            </p>
          </div>

          {/* Contact Methods - List Style */}
          <div className="space-y-8 mb-16">
            {/* General Inquiries */}
            <div className="flex items-start gap-6 pb-8 border-b border-primary/10">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-serif font-bold text-primary">
                    General Inquiries
                  </h3>
                  <Badge variant="outline" className="border-primary text-primary">
                    Primary Contact
                  </Badge>
                </div>
                <p className="text-muted-foreground mb-4">
                  For questions about our programs, classes, events, or any general information.
                </p>
                <a 
                  href="mailto:info@mihraab.com" 
                  className="text-xl text-secondary font-semibold hover:underline inline-flex items-center gap-2"
                >
                  info@mihraab.com
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Financial/Donations */}
            <div className="flex items-start gap-6 pb-8 border-b border-primary/10">
              <div className="w-14 h-14 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <Mail className="w-7 h-7 text-secondary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-2xl font-serif font-bold text-primary">
                    Financial & Donations
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  For questions about donations, zakat, sponsorships, or financial matters.
                </p>
                <a 
                  href="mailto:accounting@mihraab.com" 
                  className="text-xl text-secondary font-semibold hover:underline inline-flex items-center gap-2"
                >
                  accounting@mihraab.com
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Campus Location Section */}
          <div className="bg-background rounded-2xl border border-primary/10 overflow-hidden shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Address Info */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
                  Visit Our Campus
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Address</p>
                      <p className="text-muted-foreground">
                        123 Example Street<br />
                        Seattle, WA 98101
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Office Hours</p>
                      <p className="text-muted-foreground">
                        Monday – Friday: 9:00 AM – 5:00 PM<br />
                        Saturday – Sunday: By appointment
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Phone</p>
                      <a 
                        href="tel:+12065551234" 
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        (206) 555-1234
                      </a>
                    </div>
                  </div> */}
                </div>

                <a 
                  href="https://www.google.com/maps/search/?api=1&query=123+Example+Street+Seattle+WA+98101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-8 text-secondary font-medium hover:underline"
                >
                  Get Directions →
                </a>
              </div>

              {/* Google Map Embed */}
              <div className="h-80 lg:h-auto lg:min-h-[400px] bg-secondary/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d172158.29556188564!2d-122.4821472!3d47.6131742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490102c93e83355%3A0x102565466944d59a!2sSeattle%2C%20WA!5e0!3m2!1sen!2sus!4v1702838400000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: "320px" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mihraab Foundation Location"
                  className="transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

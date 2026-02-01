import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import { Mail, MapPin, Clock, DollarSign } from "lucide-react"

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

          {/* Contact Methods - Cards */}
          <div className="space-y-8 mb-16">
            {/* General Inquiries - Form */}
            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary">
                    General Inquiries
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Programs, classes, events, or general information
                  </p>
                </div>
              </div>
              <ContactForm />
            </div>

            {/* Financial & Donations Card */}
            <div className="rounded-2xl border border-primary/10 bg-card p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                  <DollarSign className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-primary">
                    Financial & Donations
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Donations, zakat, sponsorships, or financial matters
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">
                For questions about donations, zakat, sponsorships, or financial matters, please email us directly.
              </p>
              <a
                href="mailto:accounting@mihraab.com"
                className="text-lg text-secondary font-semibold hover:underline inline-flex items-center gap-2"
              >
                accounting@mihraab.com
              </a>
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
                        19221 36th Ave W<br />
                        Lynnwood, WA 98036
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">Email</p>
                      <a
                        href="mailto:info@mihraab.com"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        info@mihraab.com
                      </a>
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
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=19221+36th+Ave+W,+Lynnwood,+WA+98036"
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
                  src="https://www.google.com/maps?q=19221+36th+Ave+W,+Lynnwood,+WA+98036&z=16&output=embed"
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

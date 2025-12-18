import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import { Building2, Target, Users, BookOpen, Heart, Play } from "lucide-react"
import Image from "next/image"

export const metadata = {
  title: "New Building Campaign | Support | Mihraab Foundation",
  description: "Support our new building campaign to expand programs and serve more community members",
}

export default function BuildingCampaignPage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="New Building Campaign" />

      {/* Intro Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide bg-primary/10 px-4 py-2 rounded-full">
                Featured Campaign
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              A Place to Serve
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              By the grace of Allah and through your continued support, we have officially secured a leased facility, 
              our very first physical space as an organization. This marks a foundational step forward in our mission 
              to serve, teach, and nurture our community with sincerity, excellence, and rootedness in sacred tradition.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              While this facility is not yet ready to open, it represents something deeply meaningful: a home that will 
              soon, insha'Allah, host learning, worship, mentorship, and community building for generations to come. 
              It is the beginning of a long-term vision, one that transforms intention into presence and service.
            </p>
          </div>
        </div>
      </section>

      {/* Executive Director Video Section */}
      <section className="py-12 px-4 md:px-8 bg-secondary/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
              A Message from Our Executive Director
            </h2>
            <p className="text-muted-foreground">
              Watch as Shaykh Umair Ahmad shares our vision and shows you the space that will become our new home.
            </p>
          </div>
          
          {/* Video Container */}
          <div className="relative aspect-video bg-background rounded-2xl border-2 border-primary/20 overflow-hidden shadow-lg">
            {/* Placeholder for video - replace with actual video embed */}
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
                  <Play className="w-10 h-10 text-primary ml-1" />
                </div>
                <p className="text-muted-foreground">
                  Video will be embedded here
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {/* Add your video embed code here */}
                  {/* Example: <iframe src="..." /> or <video> tag */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-background rounded-2xl border border-primary/10 p-8 md:p-10 mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6 text-center">
              Our Vision
            </h2>
            
            <div className="space-y-6 text-foreground/80 leading-relaxed">
              <p>
                Over the coming weeks, we will be preparing the space, finalizing timelines, and sharing ways the 
                community can support this launch, whether through duʾa, volunteering, or contributing toward the 
                work still ahead.
              </p>
              <p className="text-lg font-medium text-primary italic">
                We ask you to keep this effort in your prayers, that Allah places barakah in this space, accepts 
                it as a means of benefit for the ummah, and allows it to be a source of guidance, solace, and growth.
              </p>
            </div>
          </div>

          {/* Impact Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center bg-secondary/5 rounded-xl p-6 border border-primary/10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-primary mb-2">Community Hub</h3>
              <p className="text-sm text-muted-foreground">
                A welcoming space for gatherings and events
              </p>
            </div>

            <div className="text-center bg-secondary/5 rounded-xl p-6 border border-primary/10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-primary mb-2">Learning Spaces</h3>
              <p className="text-sm text-muted-foreground">
                Modern classrooms and learning environments
              </p>
            </div>

            <div className="text-center bg-secondary/5 rounded-xl p-6 border border-primary/10">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-serif font-semibold text-primary mb-2">Spiritual Growth</h3>
              <p className="text-sm text-muted-foreground">
                A place for worship and spiritual development
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Forms Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-4">
              Support Our Building Campaign
            </h2>
            <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Your contribution helps us prepare this space to serve our community. Choose how you'd like to support:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Renovation Fund */}
            <div className="bg-background rounded-2xl border-2 border-primary/20 p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Renovation Fund
              </h3>
              <p className="text-muted-foreground mb-6">
                Support the renovation and preparation of our new facility. Your contribution helps us transform 
                this space into a welcoming home for learning, worship, and community.
              </p>
              {/* CharityStack Renovation Fund Embed */}
              <div className="min-h-[400px] border border-primary/10 rounded-lg p-4 bg-secondary/5">
                <div data-entity="EMBED_FORM" data-source="CharityStack" id="a15b5747-213c-4c07-97bb-465599cf4e0b"></div>
              </div>
            </div>

            {/* Classroom Fund */}
            <div className="bg-background rounded-2xl border-2 border-primary/20 p-8">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-4">
                Classroom Fund
              </h3>
              <p className="text-muted-foreground mb-6">
                Help us equip our classrooms and learning spaces. Your support enables us to create optimal 
                environments for traditional Islamic education and student success.
              </p>
              {/* CharityStack Classroom Fund Embed */}
              <div className="min-h-[400px] border border-primary/10 rounded-lg p-4 bg-secondary/5">
                <div data-entity="EMBED_FORM" data-source="CharityStack" id="4a8a0eb2-cb02-4129-9dff-353a230a3513"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

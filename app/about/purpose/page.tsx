import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import { BookOpen, Heart, MessageCircle } from "lucide-react"

export const metadata = {
  title: "Our Purpose | Mihraab Foundation",
  description: "Understanding Mihraab Foundation's mission and purpose - Traditional Scholarship, Modern Context",
}

export default function PurposePage() {
  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Our Purpose" />

      {/* Tagline Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-serif text-primary italic tracking-wide">
            "Traditional Scholarship, Modern Context"
          </p>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary/5">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
            About Us
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Mihraab Foundation is a non-profit Islamic organization dedicated to serving the Greater Seattle area. 
              It primarily seeks to provide a reliable and accessible platform to actively engage and educate Muslims. 
              Mihraab Foundation exists to meet the Islamic needs of the local communities while complementing and 
              collaborating with existing Islamic institutions. Although a non-profit with religious roots, it is 
              committed to being non-exclusive and for the overall benefit of the local communities within its scope 
              and purpose.
            </p>
          </div>
          
          {/* Quote */}
          <blockquote className="mt-10 border-l-4 border-secondary pl-6 py-4">
            <p className="text-xl md:text-2xl font-serif text-foreground/90 italic">
              "Come as you are to Islam as it is."
            </p>
            <cite className="block mt-3 text-sm text-muted-foreground font-medium">
              – Imam Zaid Shakir
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Our Purpose Section */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-8 text-center">
            Our Purpose
          </h2>
          <div className="space-y-6">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Mihraab Foundation was established by American Muslims who understand the diverse needs and daily 
              struggles of individuals as well as the communal support structure necessary to live a harmonious 
              and productive life as a religious and often ethnic minority in America.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              The organization was built upon the premise of addressing the underserved, yet growing needs and 
              segments of the local communities through a familiar and holistic approach. These range from the 
              growing number of converts to Islam and disenfranchised Muslims to the widening disconnect between 
              the American-born youth and the first-generation immigrant parents.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              Creating an accessible and reliable foundation for traditional Islamic knowledge without physical 
              or linguistic barriers for Muslims is an idea whose time has come.
            </p>
          </div>
          
          {/* Quote */}
          <blockquote className="mt-10 border-l-4 border-secondary pl-6 py-4">
            <p className="text-xl md:text-2xl font-serif text-foreground/90 italic">
              "Our ultimate aim is to have people love God and God love the people."
            </p>
            <cite className="block mt-3 text-sm text-muted-foreground font-medium">
              – Habib Abu Bakr Al-Attaas
            </cite>
          </blockquote>
        </div>
      </section>

      {/* Our Objectives Section */}
      <section className="py-16 px-4 md:px-8 bg-secondary/5">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 text-center">
            Our Objectives
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Mihraab Foundation has three objectives at its core:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Education */}
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-primary/10 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#e6e7de] flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                Education
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The acquisition and implementation of traditional, sacred knowledge.
              </p>
            </div>

            {/* Spiritual Cultivation */}
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-primary/10 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#e6e7de] flex items-center justify-center">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                Spiritual Cultivation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The acknowledgement and encouragement of purification of the soul.
              </p>
            </div>

            {/* Outreach */}
            <div className="bg-background rounded-2xl p-8 shadow-sm border border-primary/10 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#e6e7de] flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-serif font-semibold text-primary mb-4">
                Outreach
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                The constructive engagement and dialogue with members of other faiths and beliefs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Name Section */}
      <section className="py-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary text-center">
            Our Name
          </h2>
          
          {/* Mihraab Logo Display */}
          <div className="text-center mb-6">
            <div className="h-40 md:h-44 overflow-hidden mx-auto w-fit">
              <img 
                src="/logos/mihraab_olive_transparent_bg.png" 
                alt="Mihraab" 
                className="h-80 md:h-88 w-auto -mt-22 md:-mt-26"
              />
            </div>
            <p className="text-base text-muted-foreground italic -mt-16">
              /mih·raab/ — The Prayer Niche
            </p>
          </div>

          {/* Definition */}
          <div className="bg-secondary/5 rounded-2xl p-6 md:p-8 mb-10">
            <p className="text-base md:text-lg text-foreground/80 leading-relaxed text-center">
              A <span className="text-secondary font-bold">mihraab</span> is a prayer niche, where the Imam physically orients himself before the congregation 
              in prayer. It is also a place the Sahaba (Companions) loved most; as it was at the mihraab that 
              they enjoyed the intimate companionship of the Prophet <span className="text-muted-foreground text-sm">(may God's peace and blessing be upon him)</span>.
            </p>
          </div>

          {/* Three Meanings */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6 rounded-2xl border border-primary/10 bg-secondary/5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🧭</span>
              </div>
              <h3 className="font-serif font-semibold text-primary mb-2">Physical Direction</h3>
              <p className="text-sm text-muted-foreground">
                The physical direction of prayer
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl border border-primary/10 bg-secondary/5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="font-serif font-semibold text-primary mb-2">Spiritual Orientation</h3>
              <p className="text-sm text-muted-foreground">
                The inclination of the heart
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl border border-primary/10 bg-secondary/5 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-2xl">🤲</span>
              </div>
              <h3 className="font-serif font-semibold text-primary mb-2">Intimate Solace</h3>
              <p className="text-sm text-muted-foreground">
                The closest place to our Lord
              </p>
            </div>
          </div>

          {/* Aspiration Statement */}
          <p className="text-lg text-foreground/80 leading-relaxed">
            Mihraab Foundation aspires to embody this place of true prosperity and companionship, 
            where hearts are connected to their Creator and His beloved messenger in this life and the next.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}

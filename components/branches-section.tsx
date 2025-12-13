import type React from "react"
import { BookOpen, Users, BookMarked } from "lucide-react"

interface Branch {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  details: string[]
}

const branches: Branch[] = [
  {
    id: "scholastic",
    title: "Scholastic Branch",
    description: "Traditional Islamic education grounded in classical scholarship and contemporary relevance.",
    icon: <BookOpen className="w-12 h-12 text-accent" />,
    details: ["Full curriculum", "Expert faculty", "Certificate programs"],
  },
  {
    id: "youth",
    title: "Youth Branch",
    description: "Engaging programs designed for young Muslims to strengthen their faith and community bonds.",
    icon: <Users className="w-12 h-12 text-accent" />,
    details: ["Youth groups", "Mentorship", "Community events"],
  },
  {
    id: "hifdh",
    title: "Hifdh Academy",
    description: "Dedicated program for memorizing the Quran with professional guidance and support.",
    icon: <BookMarked className="w-12 h-12 text-accent" />,
    details: ["Quran memorization", "Tajweed training", "Progress tracking"],
  },
]

export default function BranchesSection() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Our Three Branches</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive Islamic education across all ages and levels, serving the Greater Seattle community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-linear-to-b from-primary/12 via-primary/8 to-background border-t-4 border-primary"
            >
              <div className="h-2 bg-primary" />

              <div className="p-8 flex flex-col h-full">
                <div className="mb-4">{branch.icon}</div>

                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{branch.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{branch.description}</p>

                <div className="space-y-3 mb-6">
                  {branch.details.map((detail, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      <span className="text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all mt-auto"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import type React from "react"
import { BookOpen, Users, HandHeart } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

interface BranchNode {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

const branches: BranchNode[] = [
  {
    id: "scholastic",
    title: "Scholastic",
    description:
      "Advancing Islamic knowledge through structured learning and scholarship.",
    icon: <BookOpen className="w-12 h-12 text-primary" />,
  },
  {
    id: "youth",
    title: "Youth",
    description:
      "Nurturing confident Muslim youth through mentorship and leadership.",
    icon: <Users className="w-12 h-12 text-primary" />,
  },
  {
    id: "outreach",
    title: "Outreach",
    description:
      "Serving the broader community through service and engagement.",
    icon: <HandHeart className="w-12 h-12 text-primary" />,
  },
]

export default function MissionBranchesSection() {
  return (
    <section className="py-18 px-4 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-20">
          Distinct paths, united by one mission of faith, growth, and service.
        </p>

        {/* Diagram Wrapper */}
        <div className="relative flex flex-col items-center">
          {/* Top Node */}
          <div className="relative z-20 mb-20">
            <div className="w-48 h-30 rounded-3xl bg-[#e6e7de] border border-primary/30 flex flex-col items-center justify-center">
              <Image
                src="/logos/logo_white_transparent_bg.png"
                alt="Mihraab Foundation"
                width={96}
                height={96}
              />
              <span className="text-sm tracking-widest font-semibold text-primary">
                BRANCHES
              </span>
            </div>
          </div>  

          {/* Branch Nodes */}
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 w-full">
            {branches.map((branch) => (
              <motion.div
                key={branch.id}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full bg-[#e6e7de] border border-primary/30 flex items-center justify-center">
                    {branch.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-semibold text-primary mb-3">
                  {branch.title}
                </h3>
                <p className="text-muted-foreground max-w-xs">
                  {branch.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

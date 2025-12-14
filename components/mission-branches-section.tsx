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
    icon: <BookOpen className="w-12 h-12 text-secondary" />,
  },
  {
    id: "youth",
    title: "Youth",
    description:
      "Nurturing confident Muslim youth through mentorship and leadership.",
    icon: <Users className="w-12 h-12 text-secondary" />,
  },
  {
    id: "outreach",
    title: "Outreach",
    description:
      "Serving the broader community through service and engagement.",
    icon: <HandHeart className="w-12 h-12 text-secondary" />,
  },
]

export default function MissionBranchesSection() {
  return (
    <section className="py-24 md:py-32 px-4 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto text-center relative">
        {/* Header */}
        <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-24">
          Distinct paths, united by one mission of faith, growth, and service.
        </p>

        {/* Diagram Wrapper */}
        <div className="relative flex flex-col items-center">
          {/* Top Node */}
          <div className="relative z-20 mb-24">
            <div className="w-48 h-32 rounded-3xl bg-linear-to-b from-primary/20 via-primary/10 to-background border border-primary/30 flex flex-col items-center justify-center">
              <Image
                src="/logos/logo_white_transparent_bg.png"
                alt="Mihraab Foundation"
                width={100}
                height={100}
                className="opacity-90"
              />
              <span className="text-sm tracking-widest font-semibold text-primary">
                BRANCHES
              </span>
            </div>
          </div>

          {/* SVG Connector Lines */}
          <svg
            className="absolute top-37.5 left-1/2 -translate-x-1/2 w-[90%] h-48 z-10"
            viewBox="0 0 1000 300"
            fill="none"
            preserveAspectRatio="none"
          >
            <motion.path
              d="M500 0 V120"
              // stroke="red"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.path
              d="M200 160 H800"
              // stroke="red"
              strokeWidth="2.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            />
          </svg>

          {/* Branch Nodes */}
          <div className="relative z-20 grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 w-full">
            {branches.map((branch) => (
              <motion.div
                key={branch.id}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="flex flex-col items-center text-center"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 rounded-full bg-linear-to-b from-primary/20 via-primary/10 to-background border border-primary/30 flex items-center justify-center transition-all duration-300 hover:shadow-[0_0_50px_hsl(var(--primary)/0.25)]">
                    {branch.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-semibold text-foreground mb-3">
                  {branch.title}
                </h3>
                <p className="text-muted-foreground max-w-xs leading-relaxed">
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

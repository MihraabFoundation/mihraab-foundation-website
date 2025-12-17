"use client"

import { useState } from "react"
import Image from "next/image"

interface Scholar {
  name: string
  title: string
  image: string
  bio?: string
}

interface ScholarsCarouselProps {
  scholars: Scholar[]
}

export default function ScholarsCarousel({ scholars }: ScholarsCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeScholar = scholars[activeIndex]

  return (
    <div className="max-w-6xl mx-auto">
      {/* Main Content */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-12">
        {/* Image */}
        <div className="w-56 md:w-72 flex-shrink-0">
          <div className="relative">            
            <div className="relative w-56 md:w-72 h-72 md:h-88 overflow-hidden">
              <Image
                src={activeScholar.image}
                alt={activeScholar.name}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">
            {activeScholar.name}
          </h3>
          <p className="text-base text-muted-foreground mb-4">
            {activeScholar.title}
          </p>
          {activeScholar.bio && (
            <p className="text-sm text-foreground/80 leading-relaxed whitespace-pre-line">
              {activeScholar.bio}
            </p>
          )}
        </div>
      </div>

      {/* Dot Navigation */}
      <div className="flex justify-center gap-3">
        {scholars.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-foreground scale-110"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`View scholar ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}


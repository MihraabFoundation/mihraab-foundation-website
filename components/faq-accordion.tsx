"use client"

import { useState } from "react"
import { Plus, X } from "lucide-react"

interface FAQItem {
  question: string
  answer: string
}

interface FAQAccordionProps {
  title?: string
  items: FAQItem[]
}

export default function FAQAccordion({ title = "Frequently Asked Questions", items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 px-4 md:px-8 max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-12 md:gap-16">
        {/* Title Section */}
        <div className="md:w-1/3 flex-shrink-0">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-secondary">{title}</h2>
        </div>

        {/* FAQ Items */}
        <div className="md:w-2/3 space-y-4">
          {items.map((item, index) => (
            <div key={index} className="border-b border-primary/20 pb-4 last:border-b-0">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-start justify-between gap-4 py-4 hover:text-primary transition-colors group cursor-pointer"
              >
                <span className="text-lg font-serif font-semibold text-foreground text-left group-hover:text-primary transition-colors">
                  {item.question}
                </span>
                <div className="flex-shrink-0 mt-1">
                  {openIndex === index ? (
                    <X size={24} className="text-primary" />
                  ) : (
                    <Plus size={24} className="text-foreground group-hover:text-primary transition-colors" />
                  )}
                </div>
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="pb-4 text-secondary leading-relaxed animate-in fade-in duration-200">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

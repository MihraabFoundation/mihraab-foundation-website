"use client"

import Link from "next/link"
import { Calendar, ArrowRight, BookOpen } from "lucide-react"
import { Article } from "@/models/Article"

// Sample articles data - in a real app, this would come from a CMS or database
const recentArticles: Article[] = [
  {
    id: 1,
    title: "The Importance of Seeking Sacred Knowledge",
    excerpt:
      "An exploration of the Islamic tradition of seeking knowledge and its significance in contemporary times.",
    content: "Full article content would go here...",
    author: "Mihraab Foundation",
    publishDate: "2025-01-20",
    image: "/quran-arabic-classroom-learning.jpg",
    category: "Education",
  },
  {
    id: 2,
    title: "Understanding the Prophetic Tradition",
    excerpt:
      "A comprehensive guide to understanding Hadith and the Sunnah, their role in Islamic jurisprudence.",
    content: "Full article content would go here...",
    author: "Mihraab Foundation",
    publishDate: "2025-01-15",
    image: "/islamic-scholar-lecture-seminar-audience.jpg",
    category: "Scholarship",
  },
  {
    id: 3,
    title: "The Path of Spiritual Development",
    excerpt:
      "Exploring the journey of spiritual growth in Islam, from the basics of faith to deeper dimensions.",
    content: "Full article content would go here...",
    author: "Mihraab Foundation",
    publishDate: "2025-01-10",
    image: "/islamic-youth-community-gathering-celebration.jpg",
    category: "Spirituality",
  },
]

export default function ArticlesSection() {
  return (
    <section className="py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <BookOpen className="w-5 h-5 text-secondary" />
              <span className="text-sm font-semibold uppercase tracking-wider text-secondary">Recent Articles</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">Knowledge & Insights</h2>
          </div>
          <Link
            href="/scholastic-branch/articles"
            className="text-sm font-medium text-primary hover:text-accent transition-colors flex items-center gap-1"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Articles List - Minimal Design */}
        <div className="space-y-0 divide-y divide-border">
          {recentArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/scholastic-branch/articles/${article.id}`}
              className="block group py-6 hover:bg-primary/5 transition-colors"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Image - Small, on the side */}
                {article.image && (
                  <div className="relative w-full md:w-32 h-32 shrink-0 rounded-lg overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    {article.category && (
                      <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                        {article.category}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(article.publishDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <h3 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-3">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-primary font-medium">
                    <span>Read article</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

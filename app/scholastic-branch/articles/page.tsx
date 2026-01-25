import SubpageHero from "@/components/subpage-hero"
import Footer from "@/components/footer"
import Link from "next/link"
import { Calendar, User, ArrowRight } from "lucide-react"
import { Article } from "@/models/Article"

export const metadata = {
  title: "Articles | Mihraab Foundation",
  description: "Read our latest articles on Islamic knowledge and scholarship",
}

// Sample articles data - in a real app, this would come from a CMS or database
const articles: Article[] = [
  {
    id: 1,
    title: "The Importance of Seeking Sacred Knowledge",
    excerpt:
      "An exploration of the Islamic tradition of seeking knowledge and its significance in contemporary times. This article delves into the spiritual and practical benefits of pursuing Islamic education.",
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
      "A comprehensive guide to understanding Hadith and the Sunnah, their role in Islamic jurisprudence, and how they guide our daily lives as Muslims.",
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
      "Exploring the journey of spiritual growth in Islam, from the basics of faith to the deeper dimensions of tasawwuf and inner purification.",
    content: "Full article content would go here...",
    author: "Mihraab Foundation",
    publishDate: "2025-01-10",
    image: "/islamic-youth-community-gathering-celebration.jpg",
    category: "Spirituality",
  },
  {
    id: 4,
    title: "The Role of Community in Islamic Life",
    excerpt:
      "Understanding the importance of community (ummah) in Islam and how it shapes our spiritual and social development.",
    content: "Full article content would go here...",
    author: "Mihraab Foundation",
    publishDate: "2025-01-05",
    image: "/quran-arabic-classroom-learning.jpg",
    category: "Community",
  },
  {
    id: 5,
    title: "Contemporary Applications of Islamic Law",
    excerpt:
      "A discussion on how Islamic jurisprudence adapts to modern challenges while maintaining its core principles and values.",
    content: "Full article content would go here...",
    author: "Mihraab Foundation",
    publishDate: "2024-12-28",
    image: "/islamic-scholar-lecture-seminar-audience.jpg",
    category: "Scholarship",
  },
  {
    id: 6,
    title: "The Art of Memorization in Islamic Education",
    excerpt:
      "Exploring traditional methods of memorization and their continued relevance in modern Islamic education.",
    content: "Full article content would go here...",
    author: "Mihraab Foundation",
    publishDate: "2024-12-20",
    image: "/islamic-academy-quran-memorization-class.jpg",
    category: "Education",
  },
]

export default function ArticlesPage() {
  // Group articles by category for a unique layout
  const featuredArticle = articles[0]
  const otherArticles = articles.slice(1)

  return (
    <main className="min-h-screen bg-background">
      <SubpageHero title="Articles" />

      {/* Content Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-8">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Explore our collection of articles on Islamic knowledge, scholarship, and contemporary issues. Our scholars
              and educators share insights to help deepen your understanding of the faith.
            </p>
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <Link
            href={`/scholastic-branch/articles/${featuredArticle.id}`}
            className="block group cursor-pointer"
          >
            <div className="relative rounded-2xl overflow-hidden bg-linear-to-br from-primary/5 to-primary/10 border border-primary/10 hover:border-primary/30 transition-all duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                {featuredArticle.image && (
                  <div className="relative h-64 md:h-auto min-h-[300px]">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-transparent" />
                  </div>
                )}

                {/* Content */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  {featuredArticle.category && (
                    <span className="inline-block text-xs font-semibold uppercase tracking-wider text-accent mb-3">
                      {featuredArticle.category}
                    </span>
                  )}
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground mb-6 line-clamp-3">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-6 text-sm text-foreground/70 mb-6">
                    <div className="flex items-center gap-2">
                      <User size={16} className="text-secondary" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-secondary" />
                      <span>
                        {new Date(featuredArticle.publishDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                    <span>Read Article</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* All Articles - Magazine Style Layout */}
        <div>
          <h3 className="text-2xl font-serif font-bold text-primary mb-8">All Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article) => (
              <Link
                key={article.id}
                href={`/scholastic-branch/articles/${article.id}`}
                className="group block"
              >
                <div className="h-full flex flex-col">
                  {/* Image */}
                  {article.image && (
                    <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent" />
                      {article.category && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                            {article.category}
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex-1">
                    <h4 className="text-xl font-serif font-bold text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2">
                      {article.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-foreground/60 mb-4">
                      <div className="flex items-center gap-2">
                        <User size={14} className="text-secondary" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-secondary" />
                        <span>
                          {new Date(article.publishDate).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                      <span>Read more</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

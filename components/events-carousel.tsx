"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Calendar, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

interface Event {
  id: number
  title: string
  description: string
  date: string
  time: string
  location: string
  image: string
  isFeatured?: boolean
}

const events: Event[] = [
  {
    id: 1,
    title: "Quranic Arabic Workshop",
    description:
      "Learn the fundamentals of Quranic Arabic with our expert instructors. Perfect for beginners and intermediate students.",
    date: "December 15, 2024",
    time: "7:00 PM - 9:00 PM",
    location: "Seattle Main Campus",
    image: "/quran-arabic-classroom-learning.jpg",
    isFeatured: true,
  },
  {
    id: 2,
    title: "Youth Community Gathering",
    description: "Monthly gathering for our youth branch members. Join us for discussions, games, and fellowship.",
    date: "December 22, 2024",
    time: "3:00 PM - 6:00 PM",
    location: "Community Center",
    image: "/islamic-youth-community-gathering-celebration.jpg",
  },
  {
    id: 3,
    title: "Hifdh Academy Orientation",
    description:
      "Interested in joining our Hifdh Academy? Attend this orientation to learn about the program structure and requirements.",
    date: "December 28, 2024",
    time: "5:00 PM - 7:00 PM",
    location: "Academy Building",
    image: "/islamic-academy-quran-memorization-class.jpg",
  },
  {
    id: 4,
    title: "Islamic Scholars Lecture Series",
    description: "Renowned Islamic scholar lecture on contemporary Islamic thought and teachings for modern life.",
    date: "January 5, 2025",
    time: "6:30 PM - 8:30 PM",
    location: "Main Auditorium",
    image: "/islamic-scholar-lecture-seminar-audience.jpg",
  },
]

export default function EventsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % events.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + events.length) % events.length)
  }

  const getVisibleEvents = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(events[(currentIndex + i) % events.length])
    }
    return visible
  }

  return (
    <section className="py-18 px-4 md:px-8 bg-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-primary mb-4">Upcoming Events</h2>
          <p className="text-lg text-muted-foreground">Join us for enriching educational and community events</p>
        </div>

        {/* Carousel - Hidden on mobile */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Events Grid */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {getVisibleEvents().map((event) => (
                <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden bg-muted">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    {event.isFeatured && (
                      <div className="absolute top-3 right-3 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <CardHeader className="pb-2">
                    <h3 className="text-lg font-serif font-bold text-primary line-clamp-2">{event.title}</h3>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col gap-3">
                    <p className="text-sm text-muted-foreground line-clamp-2">{event.description}</p>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-foreground">
                        <Calendar size={16} className="text-accent shrink-0" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <Clock size={16} className="text-accent shrink-0" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2 text-foreground">
                        <MapPin size={16} className="text-accent shrink-0" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-auto bg-primary hover:bg-primary/90 text-white">Register</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="rounded-full border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                <ChevronLeft size={24} />
              </Button>

              {/* Dots */}
              <div className="flex gap-2">
                {events.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? "bg-primary w-8" : "bg-border"
                      }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="rounded-full border-primary text-primary hover:bg-primary/10 bg-transparent"
              >
                <ChevronRight size={24} />
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Events - Stack vertically */}
        <div className="md:hidden space-y-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden">
              <div className="relative h-40 overflow-hidden bg-muted">
                <img src={event.image || "/placeholder.svg"} alt={event.title} className="w-full h-full object-cover" />
                {event.isFeatured && (
                  <div className="absolute top-3 right-3 bg-accent text-white px-3 py-1 rounded-full text-xs font-semibold">
                    Featured
                  </div>
                )}
              </div>

              <CardHeader className="pb-2">
                <h3 className="text-lg font-serif font-bold text-primary">{event.title}</h3>
              </CardHeader>

              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">{event.description}</p>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2 text-foreground">
                    <Calendar size={16} className="text-accent" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <Clock size={16} className="text-accent" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-foreground">
                    <MapPin size={16} className="text-accent" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <Button className="w-full bg-primary hover:bg-primary/90 text-white">Register</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

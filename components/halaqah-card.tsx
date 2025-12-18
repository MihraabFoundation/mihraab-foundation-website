import { Halaqah } from "@/models/Halaqah"
import Image from "next/image"
import { Calendar, Clock, User, MapPin } from "lucide-react"

export default function HalaqahCard({ halaqah, index }: { halaqah: Halaqah; index: number }) {
    const isImageLeft = index % 2 === 0
  
    return (
      <div className="bg-background rounded-2xl border border-primary/10 overflow-hidden shadow-sm hover:shadow-md transition-all">
        <div className={`flex flex-col ${isImageLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          {/* Flyer Image */}
          <div className="relative w-full md:w-1/2 h-64 md:min-h-[500px] bg-secondary/10">
            <Image
              src={halaqah.flyer}
              alt={`${halaqah.name} flyer`}
              fill
              className="object-cover"
            />
          </div>
  
          {/* Content */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col">
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-6">
              {halaqah.name}
            </h3>
  
            {/* Details Grid */}
            <div className="space-y-4 mb-6 flex-grow">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Day</p>
                  <p className="text-lg text-foreground font-medium">{halaqah.day}</p>
                </div>
              </div>
  
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Time</p>
                  <p className="text-lg text-foreground font-medium">{halaqah.time}</p>
                </div>
              </div>
  
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Conducted By</p>
                  <p className="text-lg text-foreground font-medium">{halaqah.conductor}</p>
                </div>
              </div>
  
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Location</p>
                  <p className="text-lg text-foreground font-medium">{halaqah.location.name}</p>
                  <p className="text-sm text-muted-foreground mt-1">{halaqah.location.address}</p>
                </div>
              </div>
            </div>
  
            {/* Google Map */}
            <div className="mt-6 rounded-lg overflow-hidden border border-primary/10">
              <iframe
                src={halaqah.location.mapEmbedUrl}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${halaqah.name} Location`}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
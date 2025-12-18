"use client"
import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-[oklch(0.55_0.08_103)] to-[oklch(0.35_0.07_103)]" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.2) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 text-primary-foreground">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-4">
            <div className="md:col-span-1 flex flex-col justify-start">
              <img
                src="/logos/caption_white_transparent_bg.png"
                alt="Mihraab Foundation"
                className="w-full max-w-[200px] md:max-w-[180px] h-auto opacity-100"
              />
            </div>

            {/* Scholastic Column */}
            <div>
              <h3 className="font-serif text-sm font-semibold mb-4 uppercase tracking-wide">Scholastic Branch</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/scholastic-branch/seminary" className="opacity-80 hover:opacity-100 transition-opacity">
                    Mihraab Seminary
                  </Link>
                </li>
                <li>
                  <Link
                    href="/scholastic-branch/sacred-knowledge-classes"
                    className="opacity-80 hover:opacity-100 transition-opacity"
                  >
                    Sacred Knowledge Classes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Youth Column */}
            <div>
              <h3 className="font-serif text-sm font-semibold mb-4 uppercase tracking-wide">Youth Branch</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/youth-branch/halaqahs" className="opacity-80 hover:opacity-100 transition-opacity">
                    Halaqahs
                  </Link>
                </li>
                <li>
                  <Link href="/youth-branch/futuwwa" className="opacity-80 hover:opacity-100 transition-opacity">
                    Futuwwa
                  </Link>
                </li>
                <li>
                  <Link href="/youth-branch/youth-chaplaincy" className="opacity-80 hover:opacity-100 transition-opacity">
                    Youth Chaplaincy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Outreach Branch Column */}
            <div>
              <h3 className="font-serif text-sm font-semibold mb-4 uppercase tracking-wide">Outreach Branch</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/outreach-branch/workshops" className="opacity-80 hover:opacity-100 transition-opacity">
                    Workshops
                  </Link>
                </li>
                <li>
                  <Link href="/outreach-branch/suhbah" className="opacity-80 hover:opacity-100 transition-opacity">
                    Suhbah
                  </Link>
                </li>
                <li>
                  <Link href="/outreach-branch/new-muslims" className="opacity-80 hover:opacity-100 transition-opacity">
                    New Muslims
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hifdh Academy Column */}
            <div>
              <h3 className="font-serif text-sm font-semibold mb-4 uppercase tracking-wide">Hifdh Academy</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/hifdh-academy" className="opacity-80 hover:opacity-100 transition-opacity">
                    Hifdh Academy
                  </Link>
                </li>
              </ul>
            </div>

            {/* About Column */}
            <div>
              <h3 className="font-serif text-sm font-semibold mb-4 uppercase tracking-wide">About</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about/purpose" className="opacity-80 hover:opacity-100 transition-opacity">
                    Purpose
                  </Link>
                </li>
                <li>
                  <Link href="/about/team" className="opacity-80 hover:opacity-100 transition-opacity">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="/about/contact" className="opacity-80 hover:opacity-100 transition-opacity">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center gap-6 py-8">
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="opacity-80 hover:opacity-100 transition-opacity" aria-label="YouTube">
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          <div className="text-center space-y-4 py-8 border-t border-white/20">
            {/* Contact Information */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-sm opacity-90">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>Greater Seattle, WA</span>
              </div>              
              <div className="hidden md:block text-white/30">|</div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 shrink-0" />
                <a href="mailto:info@mihraab.com" className="hover:opacity-100 transition-opacity">
                  info@mihraab.com
                </a>
              </div>
            </div>

            {/* Copyright */}
            <div className="text-xs opacity-70 pt-4">
              <p>© {currentYear} Mihraab Foundation. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


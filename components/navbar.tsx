"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavItem {
  label: string
  href?: string
  submenu?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  {
    label: "Scholastic Branch",
    submenu: [
      { label: "Mihraab Seminary", href: "/scholastic-branch/seminary" },
      { label: "Sacred Knowledge Classes", href: "/scholastic-branch/sacred-knowledge-classes" },
      { label: "Workshops", href: "/scholastic-branch/workshops" },
    ],
  },
  {
    label: "Youth Branch",
    submenu: [
      { label: "Halaqahs", href: "/youth-branch/halaqahs" },
      { label: "Futuwwa", href: "/youth-branch/futuwwa" },
      { label: "Youth Chaplaincy", href: "/youth-branch/youth-chaplaincy" },
    ],
  },
  {
    label: "Outreach Branch",
    submenu: [
      { label: "Workshops", href: "/outreach-branch/workshops" },
      { label: "Suhbah", href: "/outreach-branch/suhbah" },
      { label: "New Muslims", href: "/outreach-branch/new-muslims" },
    ],
  },
  {
    label: "Hifdh Academy",
    submenu: [
      { label: "Methodology", href: "/hifdh-academy/methodology" },
    ],
  },
  {
    label: "About",
    submenu: [
      { label: "Purpose", href: "/about/purpose" },
      { label: "Team", href: "/about/team" },
      { label: "Contact", href: "/about/contact" },
    ],
  },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <nav className="relative z-50">
      {/* Mobile Menu Button */}
      <div className="md:hidden absolute top-4 right-4">
        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-3 px-8">
        {navItems.map((item) => (
          <div key={item.label} className="relative group">
            <button className="text-white font-medium text-xs uppercase tracking-wide px-2 py-1 hover:bg-white/10 rounded transition-colors">
              {item.label}
            </button>

            {item.submenu && (
              <div className="absolute top-full left-0 mt-0 bg-primary text-primary-foreground rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 min-w-48 shadow-lg z-50 pointer-events-auto">
                {item.submenu.map((subitem) => (
                  <Link
                    key={subitem.label}
                    href={subitem.href}
                    className="block px-4 py-2 text-sm hover:bg-primary/80 transition-colors"
                  >
                    {subitem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <Link href="/donate">
          <Button className="bg-accent hover:bg-accent/90 text-white font-semibold uppercase tracking-wider px-4">
            Support
          </Button>
        </Link>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-16 right-0 left-0 bg-primary text-primary-foreground shadow-lg z-40">
          <div className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <button
                  onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                  className="w-full text-left font-medium text-sm uppercase tracking-wide px-3 py-2 hover:bg-primary/80 rounded transition-colors"
                >
                  {item.label}
                </button>

                {/* Mobile Dropdown */}
                {item.submenu && openDropdown === item.label && (
                  <div className="bg-primary/80 rounded ml-4 mt-1">
                    {item.submenu.map((subitem) => (
                      <Link
                        key={subitem.label}
                        href={subitem.href}
                        className="block px-4 py-2 text-sm hover:bg-primary/60 transition-colors border-l-2 border-primary-foreground/30"
                      >
                        {subitem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            <Link href="/donate" className="w-full mt-4">
              <Button className="w-full bg-accent hover:bg-accent/90 text-white font-semibold uppercase tracking-wider">
                Support
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { navLinks } from "@/lib/site"
import { ApplyLink } from "@/components/preapproval-button"

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-navy/10 bg-[color:var(--paper)]/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
          <Link href="/" className="flex items-center" aria-label="Velocity Home Loans - Home">
            <Image src="/velocity-logo.png" alt="Velocity Home Loans Logo" width={97} height={40} priority />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] font-medium text-navy/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <ApplyLink className="text-[15px] font-medium">Apply Now</ApplyLink>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <nav id="mobile-menu" className="md:hidden py-4 border-t border-navy/10" aria-label="Mobile navigation">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium px-3 py-2 rounded-md hover:bg-navy/5"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-3 pt-2">
                <ApplyLink className="w-full">Apply Now</ApplyLink>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

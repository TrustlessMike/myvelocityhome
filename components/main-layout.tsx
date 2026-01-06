"use client"

import { useState, useEffect, ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Script from "next/script"
import { LandingPage } from "@/components/landing-page"
import { MortgageCalculator } from "@/components/mortgage-calculator"
import { CompanyInfo } from "@/components/company-info"
import { BottomBanner } from "@/components/bottom-banner"
import { EqualHousingBadge } from "@/components/equal-housing-badge"
import { APPLICATION_URL } from "@/lib/constants"
import { generateMortgageBrokerSchema, generateReviewSchema, generatePersonSchema } from "@/components/structured-data"
import { ApplyNowPopup } from "@/components/apply-now-popup"
import { VideoBackground } from "@/components/video-background"
import { PreapprovalButton } from "@/components/preapproval-button"

export function MainLayout({ children }: { children: ReactNode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Generate structured data
  const mortgageBrokerSchema = generateMortgageBrokerSchema()
  const reviewSchema = generateReviewSchema()
  const personSchema = generatePersonSchema()

  return (
    <div className="flex min-h-screen flex-col">
      {/* Structured Data */}
      <Script
        id="structured-data-mortgage-broker"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(mortgageBrokerSchema) }}
      />
      <Script
        id="structured-data-reviews"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <Script
        id="structured-data-person"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Header - Simplified */}
      <motion.header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white"
        }`}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <div className="container mx-auto px-4">
          {/* Main Navigation */}
          <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
            <div className="flex items-center">
              <Link href="/" className="flex items-center" aria-label="Velocity Home Loans - Home">
                <Image
                  src="/velocity-logo.png"
                  alt="Velocity Home Loans Logo"
                  width={150}
                  height={50}
                  className="h-10 w-auto"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#team-section" className="text-base font-medium hover:text-primary transition-colors">
                Our Team
              </a>
              <a href="/calculator" className="text-base font-medium hover:text-primary transition-colors">
                Calculator
              </a>
              <a
                href={APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium hover:text-primary transition-colors"
              >
                Contact
              </a>
              <PreapprovalButton className="text-base font-medium hover:text-primary transition-colors">
                Apply Now
              </PreapprovalButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </nav>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.nav
                id="mobile-menu"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden py-4 border-t overflow-hidden"
                aria-label="Mobile navigation"
              >
                <div className="flex flex-col space-y-4">
                  <a
                    href="#team-section"
                    className="text-base font-medium px-4 py-2 hover:bg-slate-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Our Team
                  </a>
                  <a
                    href="/calculator"
                    className="text-base font-medium px-4 py-2 hover:bg-slate-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Calculator
                  </a>
                  <a
                    href={APPLICATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium px-4 py-2 hover:bg-slate-100 rounded-md"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </a>
                  <a
                    href={APPLICATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-medium px-4 py-2 hover:bg-slate-100 rounded-md"
                    onClick={() => {
                      setMobileMenuOpen(false);
                    }}
                  >
                    Apply Now
                  </a>
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <main className="flex-1 pb-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Image
                  src="/velocity-logo.png"
                  alt="Velocity Home Loans Logo"
                  width={150}
                  height={50}
                  className="h-10 w-auto bg-white p-1 rounded"
                />
              </div>
              <p className="text-slate-400 mb-4">Fast, reliable mortgage solutions with the velocity you need.</p>
              <div className="text-sm text-slate-400">
                <p>NMLS #{CompanyInfo.nmls}</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#team-section" className="text-slate-400 hover:text-white">
                    Our Team
                  </a>
                </li>
                <li>
                  <a href="#about-us-section" className="text-slate-400 hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href={APPLICATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 hover:text-white"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-slate-400">
                    <span className="sr-only">Phone:</span> {CompanyInfo.phone}
                  </span>
                </li>
                <li className="flex items-start">
                  <a href="mailto:sam@myvelocitymortgage.com" className="text-slate-400 hover:text-white">
                    <span className="sr-only">Email:</span> sam@myvelocitymortgage.com
                  </a>
                </li>
                <li className="flex items-start">
                  <address className="text-slate-400 not-italic">
                    <span className="sr-only">Address:</span>
                    {CompanyInfo.address}
                    <br />
                    {CompanyInfo.city}, {CompanyInfo.state} {CompanyInfo.zip}
                  </address>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
            <div className="flex items-center justify-center gap-2 mb-2">
              <EqualHousingBadge size="sm" variant="light" />
              <span>Equal Housing Opportunity</span>
            </div>
            <p>
              © {new Date().getFullYear()} {CompanyInfo.name}. All rights reserved. NMLS #{CompanyInfo.nmls}
            </p>
            <p className="mt-2 text-sm">
              <Link href="/privacy-policy" className="hover:text-white">
                Privacy Policy
              </Link>{" "}
              |
              <Link href="/terms-of-use" className="hover:text-white ml-2">
                Terms of Use
              </Link>{" "}
              |
              <Link href="/sitemap.xml" className="hover:text-white ml-2">
                Sitemap
              </Link>
            </p>
          </div>
        </div>
      </footer>

      {/* Bottom Banner */}
      <BottomBanner applicationUrl={APPLICATION_URL} />
      {/* Apply Now Popup */}
      <ApplyNowPopup />
    </div>
  )
}

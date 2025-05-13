"use client"

import { useState, useEffect } from "react"
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

export function MainLayout() {
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Velocity%20Home%20Loans%20Google%20Logo-vEDhFyrYPWMaPW0Z0IputoBM61v3d5.png"
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
              <a href="#calculator-section" className="text-base font-medium hover:text-primary transition-colors">
                Calculator
              </a>
              <PreapprovalButton className="text-base font-medium hover:text-primary transition-colors">
                Apply Now
              </PreapprovalButton>
              <a
                href={APPLICATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium hover:text-primary transition-colors"
              >
                Contact
              </a>
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
                    href="#calculator-section"
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
                    Apply Now
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
                </div>
              </motion.nav>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      <main className="flex-1 pb-16">
        {/* Hero Video Section */}
        <div className="relative">
          <VideoBackground
            src="https://2cpb0aywln35qejo.public.blob.vercel-storage.com/8263308-uhd_3840_2160_24fps-X3glsAmZJJ6IRNOF4TVcmDfyIDQPmz-QDsXsGq4Z4DIvQJ4HMEG3ioMpQ6FV6.mp4"
            priority={true}
            height="80vh"
            className="w-full"
            overlayClassName="bg-black/50"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6"
            >
              <h2 className="text-2xl md:text-3xl font-medium mb-2">Velocity Home Loans</h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Fast-Track Your Home Loan</h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl"
            >
              Competitive rates, personalized service, and a streamlined process to help you achieve your homeownership
              dreams.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <PreapprovalButton size="lg" className="bg-white text-primary hover:bg-blue-50">
                  Get Pre-Approved
                </PreapprovalButton>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
            >
              {[
                { icon: <CheckCircle className="h-5 w-5" />, text: "Competitive Rates" },
                { icon: <CheckCircle className="h-5 w-5" />, text: "Fast Pre-Approvals" },
                { icon: <CheckCircle className="h-5 w-5" />, text: "Personalized Service" },
              ].map((item, i) => (
                <motion.div key={i} variants={fadeIn} className="flex items-center justify-center space-x-2">
                  <div className="text-white">{item.icon}</div>
                  <span>{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-8">
          {/* Home Section */}
          <div className="mb-16">
            <LandingPage applicationUrl={APPLICATION_URL} />
          </div>

          {/* Calculator Section */}
          <div id="calculator-section" className="pt-8 mt-8 border-t">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Mortgage Calculator</h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Use our calculator to estimate your monthly mortgage payments and explore different loan scenarios.
              </p>
            </div>
            <MortgageCalculator />
          </div>
        </div>
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Velocity%20Home%20Loans%20Google%20Logo-vEDhFyrYPWMaPW0Z0IputoBM61v3d5.png"
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
              <h3 className="text-lg font-semibold mb-4">Loan Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Conventional Loans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    FHA Loans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    VA Loans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Jumbo Loans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Refinancing
                  </Link>
                </li>
              </ul>
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
                  <Link href="#" className="text-slate-400 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-slate-400 hover:text-white">
                    News
                  </Link>
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
                  <span className="text-slate-400">
                    <span className="sr-only">Email:</span> {CompanyInfo.email}
                  </span>
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

// Animation variants
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

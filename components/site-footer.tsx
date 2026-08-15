import Link from "next/link"
import Image from "next/image"
import { CompanyInfo, areaPages, fullAddress, loanProducts } from "@/lib/site"
import { EqualHousingBadge } from "@/components/equal-housing-badge"

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Image
              src="/velocity-logo.png"
              alt="Velocity Home Loans Logo"
              width={97}
              height={40}
              className="bg-white p-1 rounded mb-4"
            />
            <p className="text-white/70 mb-4 text-sm leading-relaxed">
              Licensed mortgage broker in Michigan and Florida. Brighton-based loan officers, wholesale rates, named
              people on the other end of the phone.
            </p>
            <p className="text-sm text-white/60">
              NMLS #{CompanyInfo.nmls} ·{" "}
              <a href={CompanyInfo.nmlsUrl} className="underline hover:text-white" target="_blank" rel="noopener noreferrer">
                NMLS Consumer Access
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase mb-4 text-white/90">Company</h3>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/calculator" className="hover:text-white">
                  Calculator
                </Link>
              </li>
              <li>
                <Link href="/apply-now" className="hover:text-white">
                  Schedule a consult
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase mb-4 text-white/90">Loan options</h3>
            <ul className="space-y-2 text-white/70">
              {loanProducts.map((loan) => (
                <li key={loan.slug}>
                  <Link href={loan.href} className="hover:text-white">
                    {loan.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-semibold tracking-wide uppercase mt-8 mb-4 text-white/90">Areas</h3>
            <ul className="space-y-2 text-white/70">
              {areaPages.map((area) => (
                <li key={area.slug}>
                  <Link href={area.href} className="hover:text-white">
                    {area.heading.replace("Mortgage help in ", "").replace("Licensed ", "")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide uppercase mb-4 text-white/90">Contact</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>
                <a href={CompanyInfo.phoneHref} className="hover:text-white">
                  {CompanyInfo.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${CompanyInfo.email}`} className="hover:text-white">
                  {CompanyInfo.email}
                </a>
              </li>
              <li>
                <address className="not-italic">{fullAddress()}</address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-white/60 text-sm">
          <div className="flex items-center justify-center gap-2 mb-3">
            <EqualHousingBadge size="sm" variant="light" />
            <span>Equal Housing Opportunity</span>
          </div>
          <p>
            © {new Date().getFullYear()} {CompanyInfo.legalName}. All rights reserved. NMLS #{CompanyInfo.nmls}.
          </p>
          <p className="mt-3 max-w-3xl mx-auto leading-relaxed">
            Velocity Home Loans is a licensed mortgage broker, not a lender. Loan terms, rates, and availability depend
            on credit, property, and underwriting. This site is not an offer to extend credit.
          </p>
          <p className="mt-4">
            <Link href="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <span className="mx-2">|</span>
            <Link href="/terms-of-use" className="hover:text-white">
              Terms of Use
            </Link>
            <span className="mx-2">|</span>
            <Link href="/sitemap.xml" className="hover:text-white">
              Sitemap
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

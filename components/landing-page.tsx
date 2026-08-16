"use client"

import { Calculator, CheckCircle, DollarSign, Shield, Star } from "lucide-react"
import { MeetTheTeam } from "@/components/meet-the-team"
import Link from "next/link"
import { ApplyLink } from "@/components/preapproval-button"
import { CompanyInfo, homeFaqs, loanProducts } from "@/lib/site"

const testimonials = [
  {
    review:
      "Sam and his team went above and beyond every step of the way. And I do mean EVERY STEP. We found a great home in a hot market area and had just 2 days to get pre-approved so we could make an offer. Sam's team turned it around in nearly 24 hours!",
    name: "Chantal and Mike S.",
    location: "Brighton, MI",
    date: "March 2025",
  },
  {
    review:
      "Sam was amazing to work with! He was very responsive and made the process of buying our first home so easy. He was able to get us a great rate and was always available to answer any questions we had.",
    name: "First-time homebuyer",
    location: "Michigan",
    date: "February 2025",
  },
  {
    review:
      "As a real estate agent, I confidently refer my clients to Sam and his team. They consistently deliver exceptional service and competitive rates, making the transaction smooth for everyone involved.",
    name: "Realtor partner",
    location: "Michigan",
    date: "November 2024",
  },
]

export function LandingPage() {
  return (
    <div>
      <section
        id="about-us-section"
        className="py-16 md:py-24 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">A Brighton broker, not a call center</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Licensed in Michigan and Florida. Named loan officers. Wholesale rate sheets instead of one bank.
            </p>
          </div>

          <div className="mb-12 max-w-4xl mx-auto space-y-4 text-lg text-slate-600">
            <p>
              Velocity Home Loans is a licensed mortgage broker. We shop wholesale lenders so you are not stuck with a
              single retail rate. That is how we compete on price and overlays without putting you through a national
              phone tree.
            </p>
            <p>
              We follow Equal Credit Opportunity and federal fair-lending rules. Confirm the company on{" "}
              <a
                href={CompanyInfo.nmlsUrl}
                className="text-primary underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                NMLS Consumer Access
              </a>
              , NMLS #{CompanyInfo.nmls}.
            </p>
          </div>

          <div className="card-grid-3">
            {[
              {
                icon: <DollarSign className="h-10 w-10 text-primary" />,
                title: "Wholesale pricing",
                description: "We compare multiple lender overlays and credits before you apply.",
              },
              {
                icon: <Shield className="h-10 w-10 text-primary" />,
                title: "Named officers",
                description: "Sam, Christa, or Robert works the file. Direct phone and NMLS number on the card.",
              },
              {
                icon: <Calculator className="h-10 w-10 text-primary" />,
                title: "Fast pre-approvals",
                description: "Two-day turnarounds happen here. That is a normal Brighton offer-deadline request.",
              },
            ].map((feature) => (
              <div key={feature.title} className="velocity-card equal-height">
                <div className="velocity-card-content text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-slate-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Loan options</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Read the program first. Apply second. Each page says who it is for and when another option is cheaper.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {loanProducts.map((loan) => (
              <div key={loan.slug} className="velocity-card equal-height">
                <div className="velocity-card-content flex flex-col h-full">
                  <h3 className="text-xl font-bold mb-2">{loan.shortTitle}</h3>
                  <p className="text-slate-600 mb-4 text-sm">{loan.description}</p>
                  <ul className="space-y-2 mb-6 flex-grow">
                    {loan.features.map((feature) => (
                      <li key={feature} className="flex items-start text-sm">
                        <CheckCircle className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={loan.href}
                    className="mt-auto inline-flex items-center justify-center w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90"
                  >
                    Learn more about {loan.shortTitle}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="team-section">
        <MeetTheTeam />
      </section>

      <section className="py-16 md:py-24 bg-paper/70">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start with a 30-minute consult</h2>
          <p className="text-lg text-slate-600 mb-8">
            Call {CompanyInfo.phone} or come to {CompanyInfo.address} in {CompanyInfo.city}. Saturday 9am–1pm ET if the
            workweek is impossible.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={CompanyInfo.phoneHref}
              className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5"
            >
              Call a loan officer
            </a>
            <ApplyLink>Get Pre-Approved</ApplyLink>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary"
            >
              Send a message
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client reviews</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              111 reviews on Zillow. The quotes below are from that file, not invented ads.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="velocity-card equal-height">
                <div className="velocity-card-content flex flex-col h-full">
                  <div className="flex mb-4">
                    <span className="sr-only">5 out of 5 stars</span>
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="h-5 w-5 text-brass fill-brass" aria-hidden="true" />
                    ))}
                  </div>
                  <p className="text-slate-600 mb-4 text-sm flex-grow">{testimonial.review}</p>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-slate-500">
                      {testimonial.location} · {testimonial.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href={CompanyInfo.zillowUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary hover:underline"
            >
              View all {CompanyInfo.reviewCount} reviews on Zillow
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-paper/70">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Questions before you apply</h2>
          <div className="space-y-8">
            {homeFaqs.map((faq) => (
              <div key={faq.q}>
                <h3 className="text-xl font-semibold mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-lg">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

import { HomeHero } from "@/components/home-hero"
import { LandingPage } from "@/components/landing-page"
import { JsonLd, faqSchema } from "@/components/json-ld"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Velocity Home Loans | Brighton MI Mortgage Broker",
  description:
    "Brighton-based mortgage broker licensed in Michigan and Florida. Shop wholesale rates, get a fast pre-approval, and work with a named loan officer. NMLS #2706011.",
  path: "/",
  keywords:
    "Brighton mortgage broker, Michigan home loans, Florida mortgage, FHA VA conventional jumbo refinance",
  absoluteTitle: true,
})

const homeFaqs = [
  {
    q: "Is Velocity Home Loans a lender or a broker?",
    a: "Velocity is a licensed mortgage broker. We shop wholesale lenders instead of originating from a single bank rate sheet.",
  },
  {
    q: "Where is the office?",
    a: "203 Brookside Lane, Brighton, Michigan 48116. Call (248) 974-8711 or use the contact form to schedule a 30-minute consult.",
  },
  {
    q: "Which states are you licensed in?",
    a: "Michigan and Florida. Confirm current licensing on NMLS Consumer Access, NMLS #2706011.",
  },
]

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <HomeHero />
      <div className="container mx-auto px-4 py-8">
        <LandingPage />
      </div>
    </>
  )
}

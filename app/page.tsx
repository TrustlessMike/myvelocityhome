import { HomeHero } from "@/components/home-hero"
import { LandingPage } from "@/components/landing-page"
import { JsonLd, faqSchema } from "@/components/json-ld"
import { pageMetadata } from "@/lib/seo"
import { homeFaqs } from "@/lib/site"

export const metadata = pageMetadata({
  title: "Velocity Home Loans | Brighton MI Mortgage Broker",
  description:
    "Brighton-based mortgage broker licensed in Michigan and Florida. Shop wholesale rates, get a fast pre-approval, and work with a named loan officer. NMLS #2706011.",
  path: "/",
  keywords:
    "Brighton mortgage broker, Michigan home loans, Florida mortgage, FHA VA conventional jumbo refinance",
  absoluteTitle: true,
})

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />
      <HomeHero />
      <LandingPage />
    </>
  )
}

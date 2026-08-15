import Link from "next/link"
import { ApplyLink } from "@/components/preapproval-button"
import { pageMetadata } from "@/lib/seo"
import { JsonLd, breadcrumbSchema } from "@/components/json-ld"
import { CompanyInfo } from "@/lib/site"

export const metadata = pageMetadata({
  title: "About",
  description:
    "Velocity Home Loans is a Brighton, Michigan mortgage broker licensed in Michigan and Florida. Named loan officers, wholesale lender access, NMLS #2706011.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <h1 className="text-4xl md:text-5xl font-bold mb-6">About Velocity Home Loans</h1>
      <p className="text-xl text-slate-600 mb-8">
        We are a licensed mortgage broker, not a retail bank. The office is in Brighton. The licenses cover Michigan and
        Florida. The people on this site are the people who work your file.
      </p>
      <div className="space-y-5 text-lg text-slate-700 leading-relaxed">
        <p>
          Sam Amine built Velocity after 24 years originating mortgages. The point was to keep dual fiduciary
          responsibility: the client gets the best executable program, and the file still has to be a loan a wholesale
          lender will honor.
        </p>
        <p>
          When you call {CompanyInfo.phone}, you are not routed through a national call center. You reach Sam, Christa,
          or Robert. That is the product.
        </p>
        <p>
          Confirm the company on{" "}
          <a href={CompanyInfo.nmlsUrl} className="text-primary underline" target="_blank" rel="noopener noreferrer">
            NMLS Consumer Access
          </a>
          , NMLS #{CompanyInfo.nmls}. Read{" "}
          <Link href="/team" className="text-primary underline">
            the team
          </Link>
          , compare{" "}
          <Link href="/loans" className="text-primary underline">
            loan options
          </Link>
          , or{" "}
          <Link href="/contact" className="text-primary underline">
            contact the office
          </Link>
          .
        </p>
      </div>
      <div className="mt-10 flex flex-col sm:flex-row gap-3">
        <ApplyLink>Get Pre-Approved</ApplyLink>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5"
        >
          Contact the office
        </Link>
      </div>
    </article>
  )
}

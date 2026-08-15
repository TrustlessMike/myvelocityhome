import Link from "next/link"
import { loanProducts } from "@/lib/site"
import { pageMetadata } from "@/lib/seo"
import { JsonLd, breadcrumbSchema } from "@/components/json-ld"

export const metadata = pageMetadata({
  title: "Loan Options",
  description:
    "Compare conventional, FHA, VA, jumbo, and refinance programs from Velocity Home Loans, a licensed Michigan and Florida mortgage broker.",
  path: "/loans",
})

export default function LoansIndexPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Loan Options", path: "/loans" }])} />
      <div className="max-w-3xl mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Loan options</h1>
        <p className="text-xl text-slate-600">
          Read the program first. Apply second. Each page explains who it is for, what to expect, and when another
          option is cheaper.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {loanProducts.map((loan) => (
          <Link key={loan.slug} href={loan.href} className="velocity-card p-8 hover:border-primary/40 block">
            <h2 className="text-2xl font-bold mb-2">{loan.shortTitle}</h2>
            <p className="text-slate-600 mb-4">{loan.description}</p>
            <span className="text-primary font-medium">Learn more</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

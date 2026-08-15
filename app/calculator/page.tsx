import { MortgageCalculator } from "@/components/mortgage-calculator"
import { pageMetadata } from "@/lib/seo"
import { JsonLd, breadcrumbSchema } from "@/components/json-ld"
import Link from "next/link"

export const metadata = pageMetadata({
  title: "Mortgage Calculator",
  description:
    "Estimate monthly principal, interest, taxes, and insurance. Then apply or call a Brighton loan officer at Velocity Home Loans.",
  path: "/calculator",
})

export default function CalculatorPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Calculator", path: "/calculator" }])} />
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Mortgage calculator</h1>
        <p className="text-xl text-slate-600">
          Estimate a monthly payment, then{" "}
          <Link href="/contact" className="text-primary underline">
            talk to a loan officer
          </Link>{" "}
          before you write an offer. This is an estimate, not a commitment to lend.
        </p>
      </div>
      <MortgageCalculator />
    </div>
  )
}

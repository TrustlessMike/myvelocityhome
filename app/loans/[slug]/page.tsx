import Link from "next/link"
import { notFound } from "next/navigation"
import { ApplyLink } from "@/components/preapproval-button"
import { JsonLd, breadcrumbSchema, faqSchema } from "@/components/json-ld"
import { CompanyInfo, loanProducts } from "@/lib/site"
import { pageMetadata } from "@/lib/seo"

export function generateStaticParams() {
  return loanProducts.map((loan) => ({ slug: loan.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const loan = loanProducts.find((item) => item.slug === slug)
  if (!loan) return {}
  return pageMetadata({
    title: loan.title,
    description: loan.description,
    path: loan.href,
  })
}

export default async function LoanProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const loan = loanProducts.find((item) => item.slug === slug)
  if (!loan) notFound()

  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Loan Options", path: "/loans" },
            { name: loan.shortTitle, path: loan.href },
          ]),
          faqSchema(loan.faqs),
        ]}
      />
      <p className="text-sm uppercase tracking-[0.2em] text-slate-500 mb-3">
        <Link href="/loans" className="hover:text-primary">
          Loan options
        </Link>
      </p>
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{loan.title}</h1>
      <p className="text-xl text-slate-600 mb-8">{loan.intro}</p>
      <ul className="mb-10 space-y-2">
        {loan.features.map((feature) => (
          <li key={feature} className="text-slate-700">
            {feature}
          </li>
        ))}
      </ul>
      <div className="space-y-5 text-lg text-slate-700 leading-relaxed">
        {loan.body.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-12 mb-4">Who it is for</h2>
      <ul className="list-disc pl-5 space-y-2 text-slate-700">
        {loan.whoItsFor.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold mt-12 mb-4">Common questions</h2>
      <div className="space-y-6">
        {loan.faqs.map((faq) => (
          <div key={faq.q}>
            <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
            <p className="text-slate-700">{faq.a}</p>
          </div>
        ))}
      </div>
      <div className="mt-12 flex flex-col sm:flex-row gap-3">
        <ApplyLink>Get Pre-Approved</ApplyLink>
        <a
          href={CompanyInfo.phoneHref}
          className="inline-flex items-center justify-center rounded-md border border-primary px-4 py-2 text-sm font-medium text-primary hover:bg-primary/5"
        >
          Call a loan officer
        </a>
        <Link
          href="/calculator"
          className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-slate-700 hover:text-primary"
        >
          Run the calculator
        </Link>
      </div>
    </article>
  )
}

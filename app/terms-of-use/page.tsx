import { CompanyInfo, fullAddress } from "@/lib/site"
import { pageMetadata } from "@/lib/seo"
import { JsonLd, breadcrumbSchema } from "@/components/json-ld"

export const metadata = pageMetadata({
  title: "Terms of Use",
  description: "Terms for using the Velocity Home Loans website, calculator, and contact forms.",
  path: "/terms-of-use",
})

export default function TermsOfUsePage() {
  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms of Use", path: "/terms-of-use" }])} />
      <h1 className="text-4xl font-bold mb-2">Terms of Use</h1>
      <p className="text-slate-500 mb-10">Last updated August 15, 2026</p>
      <div className="space-y-5 text-slate-700 leading-relaxed">
        <p>
          These terms govern myvelocitymortgage.com, operated by {CompanyInfo.legalName}, {fullAddress()}. By using the
          site you agree to them.
        </p>
        <h2 className="text-2xl font-bold pt-4">Not a commitment to lend</h2>
        <p>
          Calculator results, product pages, and rate discussions are educational. They are not an offer, pre-approval,
          or commitment to extend credit. Any loan is subject to application, underwriting, appraisal, and investor
          guidelines.
        </p>
        <h2 className="text-2xl font-bold pt-4">Licensing</h2>
        <p>
          Velocity is a licensed mortgage broker in Michigan and Florida. Confirm current licenses on NMLS Consumer
          Access, NMLS #{CompanyInfo.nmls}. We are not a bank.
        </p>
        <h2 className="text-2xl font-bold pt-4">Equal housing</h2>
        <p>
          We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity. We
          encourage and support an affirmative advertising and marketing program in which there are no barriers to
          obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin.
        </p>
        <h2 className="text-2xl font-bold pt-4">Site use</h2>
        <p>
          Do not misuse the forms, scrape the site, or submit false application information. Content is owned by
          Velocity unless otherwise noted. Michigan law governs these terms, except where federal mortgage rules
          control.
        </p>
        <h2 className="text-2xl font-bold pt-4">Contact</h2>
        <p>
          {CompanyInfo.email} · {CompanyInfo.phone} · {fullAddress()}
        </p>
      </div>
    </article>
  )
}

import { CompanyInfo, fullAddress } from "@/lib/site"
import { pageMetadata } from "@/lib/seo"
import { JsonLd, breadcrumbSchema } from "@/components/json-ld"

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Velocity Home Loans collects, uses, and shares information submitted through myvelocitymortgage.com.",
  path: "/privacy-policy",
})

export default function PrivacyPolicyPage() {
  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl prose prose-slate">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }])} />
      <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
      <p className="text-slate-500 mb-10">Last updated August 15, 2026</p>
      <div className="space-y-5 text-slate-700 leading-relaxed">
        <p>
          {CompanyInfo.legalName} (“Velocity,” “we”) operates {fullAddress()} and myvelocitymortgage.com. This policy
          describes information we collect when you use the site, calculator, contact form, or apply through our 1003
          application partner.
        </p>
        <h2 className="text-2xl font-bold pt-4">Information we collect</h2>
        <p>
          If you send the contact form, we collect the name, email, phone number, message, and any loan officer you
          selected. That form is processed by Formspree. If you apply online, you leave this website for our 1003
          application software; that file is collected by the application vendor under their privacy notice.
        </p>
        <p>
          The site also collects standard server logs and aggregated analytics through Vercel Analytics. We do not sell
          personal information.
        </p>
        <h2 className="text-2xl font-bold pt-4">How we use it</h2>
        <p>
          We use contact details to return your inquiry, quote a loan program, and complete a mortgage application you
          requested. We keep files as required by mortgage record-retention rules.
        </p>
        <h2 className="text-2xl font-bold pt-4">Sharing</h2>
        <p>
          We share information with wholesale lenders, underwriters, appraisers, title companies, and other parties
          needed to originate a loan you asked us to process. We also share with vendors who host this website, forms,
          and the application portal, under contract.
        </p>
        <h2 className="text-2xl font-bold pt-4">Contact</h2>
        <p>
          Privacy questions: {CompanyInfo.email} or {CompanyInfo.phone}. Mail: {fullAddress()}. NMLS #{CompanyInfo.nmls}.
        </p>
      </div>
    </article>
  )
}

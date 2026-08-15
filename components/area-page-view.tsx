import Link from "next/link"
import { ApplyLink } from "@/components/preapproval-button"
import { JsonLd, breadcrumbSchema } from "@/components/json-ld"
import { CompanyInfo, areaPages, fullAddress, type AreaPage } from "@/lib/site"
import { pageMetadata } from "@/lib/seo"

export function areaMetadata(area: AreaPage) {
  return pageMetadata({
    title: area.title,
    description: area.description,
    path: area.href,
  })
}

export function AreaPageView({ area }: { area: AreaPage }) {
  return (
    <article className="container mx-auto px-4 py-16 max-w-3xl">
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: area.title, path: area.href }])} />
      <h1 className="text-4xl md:text-5xl font-bold mb-6">{area.heading}</h1>
      <p className="text-xl text-slate-600 mb-8">{area.intro}</p>
      <div className="space-y-5 text-lg text-slate-700 leading-relaxed">
        {area.body.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
      <h2 className="text-2xl font-bold mt-12 mb-4">Where this page is aimed</h2>
      <ul className="list-disc pl-5 space-y-2 text-slate-700">
        {area.cities.map((city) => (
          <li key={city}>{city}</li>
        ))}
      </ul>
      <p className="mt-8 text-slate-700">
        Office: {fullAddress()}. Phone:{" "}
        <a href={CompanyInfo.phoneHref} className="text-primary underline">
          {CompanyInfo.phone}
        </a>
        .
      </p>
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

export const areas = Object.fromEntries(areaPages.map((area) => [area.slug, area])) as Record<string, AreaPage>

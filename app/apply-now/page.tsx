import { Suspense } from "react"
import { ApplyNowPage } from "@/components/apply-now-page"
import { pageMetadata } from "@/lib/seo"
import { JsonLd, breadcrumbSchema } from "@/components/json-ld"

export const metadata = pageMetadata({
  title: "Apply Now",
  description:
    "Schedule a Brighton mortgage consult or start your Velocity Home Loans application. Licensed in Michigan and Florida. NMLS #2706011.",
  path: "/apply-now",
})

export default function ApplyNowRoute() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Apply Now", path: "/apply-now" }])} />
      <Suspense fallback={<div className="container mx-auto px-4 py-12">Loading application options…</div>}>
        <ApplyNowPage />
      </Suspense>
    </>
  )
}

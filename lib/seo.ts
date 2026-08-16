import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site"

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  absoluteTitle = false,
}: {
  title: string
  description: string
  path: string
  keywords?: string
  absoluteTitle?: boolean
}): Metadata {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: "Velocity Home Loans",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  }
}

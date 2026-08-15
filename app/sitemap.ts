import { SITE_URL, areaPages, loanProducts, teamMembers } from "@/lib/site"
import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const paths = [
    "/",
    "/about",
    "/team",
    "/contact",
    "/calculator",
    "/apply-now",
    "/loans",
    "/privacy-policy",
    "/terms-of-use",
    ...loanProducts.map((loan) => loan.href),
    ...areaPages.map((area) => area.href),
    ...teamMembers.map((member) => `/team/${member.id}`),
  ]

  return paths.map((path) => ({
    url: path === "/" ? SITE_URL : `${SITE_URL}${path}`,
    lastModified: now,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : path.startsWith("/loans") || path === "/brighton-mi" ? 0.8 : 0.6,
  }))
}

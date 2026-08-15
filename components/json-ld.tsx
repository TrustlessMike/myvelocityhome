import { CompanyInfo, SITE_URL, teamMembers } from "@/lib/site"

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MortgageBroker",
    "@id": `${SITE_URL}/#business`,
    name: CompanyInfo.name,
    legalName: CompanyInfo.legalName,
    url: SITE_URL,
    logo: `${SITE_URL}/velocity-logo.png`,
    image: `${SITE_URL}/velocity-logo.png`,
    telephone: CompanyInfo.phone,
    email: CompanyInfo.email,
    priceRange: "$$",
    sameAs: [CompanyInfo.zillowUrl, CompanyInfo.linkedInUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: CompanyInfo.address,
      addressLocality: CompanyInfo.city,
      addressRegion: CompanyInfo.state,
      postalCode: CompanyInfo.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: CompanyInfo.geo.latitude,
      longitude: CompanyInfo.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:00",
      },
    ],
    areaServed: CompanyInfo.licensedIn.map((name) => ({ "@type": "State", name })),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: CompanyInfo.ratingValue,
      bestRating: "5",
      worstRating: "1",
      ratingCount: String(CompanyInfo.reviewCount),
      reviewCount: String(CompanyInfo.reviewCount),
    },
    employee: teamMembers.map((member) => ({
      "@type": "Person",
      name: member.name,
      jobTitle: member.title,
      telephone: member.phone,
      email: member.email,
      identifier: `NMLS# ${member.nmls}`,
      image: `${SITE_URL}${member.imageSrc}`,
      worksFor: { "@id": `${SITE_URL}/#business` },
      ...(member.reviewsUrl ? { sameAs: [member.reviewsUrl] } : {}),
    })),
  }
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  }
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path === "/" ? SITE_URL : `${SITE_URL}${item.path}`,
    })),
  }
}

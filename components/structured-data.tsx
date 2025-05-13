export function generateMortgageBrokerSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "Velocity Home Loans",
    description:
      "Velocity Home Loans offers competitive mortgage rates, personalized service, and a streamlined application process to help you achieve your homeownership dreams.",
    url: "https://www.myvelocitymortgage.com",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Velocity%20Home%20Loans%20Google%20Logo-vEDhFyrYPWMaPW0Z0IputoBM61v3d5.png",
    sameAs: ["https://www.zillow.com/lender-profile/samine186/"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "203 Brookside Lane",
      addressLocality: "Brighton",
      addressRegion: "MI",
      postalCode: "48116",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 42.4677403,
      longitude: -83.7826492,
    },
    telephone: "(248) 974-8711",
    openingHours: "Mo,Tu,We,Th,Fr 08:00-20:00",
    priceRange: "$$",
    areaServed: {
      "@type": "State",
      name: "Michigan",
    },
  }
}

export function generateReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    itemReviewed: {
      "@type": "FinancialService",
      name: "Velocity Home Loans",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Velocity%20Home%20Loans%20Google%20Logo-vEDhFyrYPWMaPW0Z0IputoBM61v3d5.png",
    },
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "111",
    reviewCount: "111",
  }
}

export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sam Amine",
    jobTitle: "Mortgage Loan Consultant",
    worksFor: {
      "@type": "FinancialService",
      name: "Velocity Home Loans",
    },
    description:
      "Seasoned Mortgage Broker with 24 years of experience and a steadfast commitment to delivering the best possible financing solutions.",
    telephone: "(248) 974-8711",
    email: "sam@myvelocitymortgage.com",
    url: "https://www.zillow.com/lender-profile/samine186/",
    sameAs: ["https://www.zillow.com/lender-profile/samine186/"],
  }
}

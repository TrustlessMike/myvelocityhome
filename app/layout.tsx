import type React from "react"
import type { Metadata } from "next"
import { fraunces, sourceSans } from "@/lib/fonts"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/toaster"
import { Suspense } from "react"
import { SiteShell } from "@/components/site-shell"
import { JsonLd, organizationSchema } from "@/components/json-ld"
import { SITE_URL } from "@/lib/site"

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Velocity Home Loans | Brighton MI Mortgage Broker",
    template: "%s | Velocity Home Loans",
  },
  description:
    "Brighton-based mortgage broker licensed in Michigan and Florida. Competitive wholesale rates, named loan officers, and fast pre-approvals. NMLS #2706011.",
  keywords:
    "mortgage broker Brighton MI, Michigan mortgage, Florida mortgage, FHA loans, VA loans, conventional loans, jumbo loans, refinance",
  authors: [{ name: "Sam Amine", url: "https://www.zillow.com/lender-profile/samine186/" }],
  creator: "Velocity Home Loans",
  publisher: "Velocity Home Loans",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "Velocity Home Loans | Brighton MI Mortgage Broker",
    description:
      "Get pre-approved with a named Brighton loan officer. Licensed in Michigan and Florida. NMLS #2706011.",
    url: SITE_URL,
    siteName: "Velocity Home Loans",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Velocity Home Loans | Brighton MI Mortgage Broker",
    description:
      "Get pre-approved with a named Brighton loan officer. Licensed in Michigan and Florida. NMLS #2706011.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/icon.png", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${sourceSans.variable} ${fraunces.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <JsonLd data={organizationSchema()} />
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <SiteShell>
            <Suspense>{children}</Suspense>
          </SiteShell>
          <Analytics />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
